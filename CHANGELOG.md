# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2024-12-19

### Added
- Initial release of string-case-utils
- Support for multiple string case conversions:
  - `toCamelCase()` - Convert to camelCase
  - `toSnakeCase()` - Convert to snake_case  
  - `toKebabCase()` - Convert to kebab-case
  - `toPascalCase()` - Convert to PascalCase
- Object key conversion methods:
  - `objectToCamelCase()` - Convert object keys to camelCase
  - `objectToSnakeCase()` - Convert object keys to snake_case
  - `objectToKebabCase()` - Convert object keys to kebab-case
  - `objectToPascalCase()` - Convert object keys to PascalCase
- Prefix and suffix support for all conversion methods
- Multi-format builds:
  - ESM (ECMAScript Modules) for modern JavaScript
  - CommonJS for Node.js compatibility
  - UMD (Universal Module Definition) for browsers
- Full TypeScript support with type definitions
- Vue 3 compatibility and integration examples
- Universal environment support:
  - Node.js 14.0.0+
  - Modern browsers
  - Vue 3 applications
- Zero dependencies
- Comprehensive test suite
- Complete documentation in English and Chinese

### Technical Features
- Tree-shaking support for optimal bundle sizes
- Source maps for all builds
- Automated build pipeline with post-processing
- Webpack configuration for UMD builds
- Multiple TypeScript configurations for different targets
- NPM publication ready with proper package configuration

### Documentation
- Comprehensive README with usage examples
- API reference documentation  
- Vue 3 integration guide
- Browser compatibility information
- TypeScript usage examples
- Publishing guide for maintainers

### Build System
- TypeScript 5.0+ with strict configuration
- Webpack 5 for UMD builds with minification
- Automated post-build processing for imports
- Multiple build targets with proper exports configuration
- Quality assurance with linting and type checking
