import { expect } from "chai";
import { Column, LoadFile } from "../index";

@LoadFile("config/test1")
export class INITest1 {
  @Column()
  static NAME: string;

  @Column()
  static MATH_SCORE: number;
}

@LoadFile("config/test2")
export class INITest2 {
  @Column()
  static NAME: string;

  @Column()
  static SCIENCE_SCORE: number;
}

@LoadFile("config/test3.env")
export class INITest3 {
  @Column()
  static NAME: string;

  @Column()
  static MATH_SCORE: number;
}

describe("Environment Value", () => {
  it("01_test1.ini", () => {
    expect(INITest1.NAME).to.be.equal("rhea");
    expect(INITest1.MATH_SCORE).to.be.equal(0);
  });

  it("02_test2.ini", () => {
    expect(INITest2.NAME).to.be.equal("hades");
    expect(INITest2.SCIENCE_SCORE).to.be.equal(95);
  });

  it("03_test3.env", () => {
    expect(INITest3.NAME).to.be.equal("rhea-so");
    expect(INITest3.MATH_SCORE).to.be.equal(10);
  });
});
