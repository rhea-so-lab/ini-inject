import "reflect-metadata";
import * as fs from "fs";
import path from "path";
import ini from "ini";

export const INIStorage = new Map<string, { name: string; type: Function }[]>();

/**
 * 값을 들고 오겠다고 정의하는 데코레이터입니다.
 * ### Example
 * ```typescript
 * ㅤ@LoadFile('local')
 * ㅤclass INISetting {
 * ㅤ	@Column()
 * ㅤ	value1: string
 * ㅤ}
 * ```
 */
export function Column(): PropertyDecorator {
  return (object: any, propertyName: string) => {
    const reflectMetadataType =
      Reflect && Reflect.getMetadata
        ? Reflect.getMetadata("design:type", object, propertyName)
        : undefined;
    let storage = INIStorage.get(object.name);
    if (storage === undefined) {
      storage = [];
      INIStorage.set(object.name, storage);
    }
    storage?.push({ name: propertyName, type: reflectMetadataType });
  };
}

/**
 * ini 파일을 읽어와주는 데코레이터입니다.
 * 들고 오고 싶은 ini 파일의 이름을 적어주세요. 이름만!
 * ### Example
 * ```typescript
 * ㅤ@LoadFile('local')
 * ㅤclass INISetting {}
 * ```
 */
export function LoadFile(filename: string): ClassDecorator {
  if (!filename.includes(".env") && !filename.includes(".ini")) {
    filename += ".ini";
  }

  return (object: any) => {
    const parsedData = ini.parse(
      fs.readFileSync(path.join(process.cwd(), `${filename}`), {
        encoding: "utf-8",
      })
    );
    const columns = INIStorage.get(object.name);
    if (columns) {
      for (const index in parsedData) {
        const column = columns.find((column) => column.name === index);

        // Validation - INI에는 정의되어있는데, Class에는 정의되어있지 않으면 에러 발생
        if (column === undefined) {
          throw new Error(`${index} is not defined in ${object.name}`);
        }

        object[index] = column.type(parsedData[index]);
      }

      // Validation - Class에는 정의되어있는데, INI에는 정의되어있지 않으면 에러 발생
      for (const column of columns) {
        if (object[column.name] === undefined) {
          throw new Error(`${column.name} is not defined in ${filename}`);
        }
      }
    }
  };
}
