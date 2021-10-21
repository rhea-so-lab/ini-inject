# INI Loader

ini 파일을 여러분이 지정한 타입에 맞춰 들고와 변환해주는 모듈입니다.  

## Badges

<!-- Badges -->
[![CircleCI](https://circleci.com/gh/project-moon-community/07_INILoader/tree/main.svg?style=svg)](https://circleci.com/gh/project-moon-community/07_INILoader/tree/main)
[![License](https://img.shields.io/github/license/project-moon-community/07_INILoader)](https://raw.githubusercontent.com//project-moon-community/07_INILoader/main/LICENSE)
[![Issues](https://img.shields.io/github/issues/project-moon-community/07_INILoader)](https://github.com/project-moon-community/07_INILoader/issues)
[![Pull Request](https://img.shields.io/github/issues-pr/project-moon-community/07_INILoader)](https://github.com/project-moon-community/07_INILoader/pulls)
[![Stars](https://img.shields.io/github/stars/project-moon-community/07_INILoader)](https://github.com/project-moon-community/07_INILoader)

## Usage

```sh
npm config set registry https://npm.rhea-so.com/
npm i @rhea-so/ini-loader
```

```typescript
import { Column, LoadFile } from '@rhea-so/ini-loader';

@LoadFile('config/test1')
class INITest1 {
	@Column()
	static NAME: string;

	@Column()
	static MATH_SCORE: number;
}

console.log(INITest1.NAME);
console.log(INITest1.MATH_SCORE);
```

## Configuration & Setup

### Project Cloning

```sh
git clone https://github.com/project-moon-community/07_INILoader
cd 07_INILoader
npm config set registry https://npm.rhea-so.com/
npm i
```

## Build 

```sh
tsc
```

## Test

```sh
npm test
```

### Get Test Coverage

```sh
npm run coverage
```

## Documentation

* [프로젝트 변경 사항](https://github.com/project-moon-community/07_INILoader/blob/main/CHANGELOG.md)
* [프로젝트 발전 방향](https://github.com/project-moon-community/07_INILoader/blob/main/ROADMAP.md)

## Contribute

부탁드립니다. 이 프로젝트는 여러분의 기여를 바라고 있습니다. 기여를 해주세요.  
기여를 하는 법은 크게 어렵지 않습니다!!

* [당장 기여하는 방법 알아보기](https://github.com/project-moon-community/07_INILoader/blob/main/CONTRIBUTING.md)
* [기여 해주신 고마운 분들](https://github.com/project-moon-community/07_INILoader/blob/main/CONTRIBUTORS.md)

## Questions

* GitHub - [open issue](https://github.com/project-moon-community/07_INILoader/issues)
* Email - [jeonghyeon.rhea@gmail.com](mailto:jeonghyeon.rhea@gmail.com?subject=[GitHub]%20Project%20Moon%20Community-Question)

### License

[GPL-3.0 License](https://github.com/project-moon-community/07_INILoader/blob/main/LICENSE)