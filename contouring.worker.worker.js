/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/gl-matrix/esm/common.js":
/*!**********************************************!*\
  !*** ./node_modules/gl-matrix/esm/common.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EPSILON": () => (/* binding */ EPSILON),
/* harmony export */   "ARRAY_TYPE": () => (/* binding */ ARRAY_TYPE),
/* harmony export */   "RANDOM": () => (/* binding */ RANDOM),
/* harmony export */   "setMatrixArrayType": () => (/* binding */ setMatrixArrayType),
/* harmony export */   "toRadian": () => (/* binding */ toRadian),
/* harmony export */   "equals": () => (/* binding */ equals)
/* harmony export */ });
/**
 * Common utilities
 * @module glMatrix
 */
// Configuration Constants
var EPSILON = 0.000001;
var ARRAY_TYPE = typeof Float32Array !== 'undefined' ? Float32Array : Array;
var RANDOM = Math.random;
/**
 * Sets the type of array used when creating new vectors and matrices
 *
 * @param {Float32ArrayConstructor | ArrayConstructor} type Array type, such as Float32Array or Array
 */

function setMatrixArrayType(type) {
  ARRAY_TYPE = type;
}
var degree = Math.PI / 180;
/**
 * Convert Degree To Radian
 *
 * @param {Number} a Angle in Degrees
 */

function toRadian(a) {
  return a * degree;
}
/**
 * Tests whether or not the arguments have approximately the same value, within an absolute
 * or relative tolerance of glMatrix.EPSILON (an absolute tolerance is used for values less
 * than or equal to 1.0, and a relative tolerance is used for larger values)
 *
 * @param {Number} a The first number to test.
 * @param {Number} b The second number to test.
 * @returns {Boolean} True if the numbers are approximately equal, false otherwise.
 */

function equals(a, b) {
  return Math.abs(a - b) <= EPSILON * Math.max(1.0, Math.abs(a), Math.abs(b));
}
if (!Math.hypot) Math.hypot = function () {
  var y = 0,
      i = arguments.length;

  while (i--) {
    y += arguments[i] * arguments[i];
  }

  return Math.sqrt(y);
};

/***/ }),

/***/ "./node_modules/gl-matrix/esm/vec3.js":
/*!********************************************!*\
  !*** ./node_modules/gl-matrix/esm/vec3.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "create": () => (/* binding */ create),
/* harmony export */   "clone": () => (/* binding */ clone),
/* harmony export */   "length": () => (/* binding */ length),
/* harmony export */   "fromValues": () => (/* binding */ fromValues),
/* harmony export */   "copy": () => (/* binding */ copy),
/* harmony export */   "set": () => (/* binding */ set),
/* harmony export */   "add": () => (/* binding */ add),
/* harmony export */   "subtract": () => (/* binding */ subtract),
/* harmony export */   "multiply": () => (/* binding */ multiply),
/* harmony export */   "divide": () => (/* binding */ divide),
/* harmony export */   "ceil": () => (/* binding */ ceil),
/* harmony export */   "floor": () => (/* binding */ floor),
/* harmony export */   "min": () => (/* binding */ min),
/* harmony export */   "max": () => (/* binding */ max),
/* harmony export */   "round": () => (/* binding */ round),
/* harmony export */   "scale": () => (/* binding */ scale),
/* harmony export */   "scaleAndAdd": () => (/* binding */ scaleAndAdd),
/* harmony export */   "distance": () => (/* binding */ distance),
/* harmony export */   "squaredDistance": () => (/* binding */ squaredDistance),
/* harmony export */   "squaredLength": () => (/* binding */ squaredLength),
/* harmony export */   "negate": () => (/* binding */ negate),
/* harmony export */   "inverse": () => (/* binding */ inverse),
/* harmony export */   "normalize": () => (/* binding */ normalize),
/* harmony export */   "dot": () => (/* binding */ dot),
/* harmony export */   "cross": () => (/* binding */ cross),
/* harmony export */   "lerp": () => (/* binding */ lerp),
/* harmony export */   "hermite": () => (/* binding */ hermite),
/* harmony export */   "bezier": () => (/* binding */ bezier),
/* harmony export */   "random": () => (/* binding */ random),
/* harmony export */   "transformMat4": () => (/* binding */ transformMat4),
/* harmony export */   "transformMat3": () => (/* binding */ transformMat3),
/* harmony export */   "transformQuat": () => (/* binding */ transformQuat),
/* harmony export */   "rotateX": () => (/* binding */ rotateX),
/* harmony export */   "rotateY": () => (/* binding */ rotateY),
/* harmony export */   "rotateZ": () => (/* binding */ rotateZ),
/* harmony export */   "angle": () => (/* binding */ angle),
/* harmony export */   "zero": () => (/* binding */ zero),
/* harmony export */   "str": () => (/* binding */ str),
/* harmony export */   "exactEquals": () => (/* binding */ exactEquals),
/* harmony export */   "equals": () => (/* binding */ equals),
/* harmony export */   "sub": () => (/* binding */ sub),
/* harmony export */   "mul": () => (/* binding */ mul),
/* harmony export */   "div": () => (/* binding */ div),
/* harmony export */   "dist": () => (/* binding */ dist),
/* harmony export */   "sqrDist": () => (/* binding */ sqrDist),
/* harmony export */   "len": () => (/* binding */ len),
/* harmony export */   "sqrLen": () => (/* binding */ sqrLen),
/* harmony export */   "forEach": () => (/* binding */ forEach)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");

/**
 * 3 Dimensional Vector
 * @module vec3
 */

/**
 * Creates a new, empty vec3
 *
 * @returns {vec3} a new 3D vector
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(3);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
  }

  return out;
}
/**
 * Creates a new vec3 initialized with values from an existing vector
 *
 * @param {ReadonlyVec3} a vector to clone
 * @returns {vec3} a new 3D vector
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(3);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}
/**
 * Calculates the length of a vec3
 *
 * @param {ReadonlyVec3} a vector to calculate length of
 * @returns {Number} length of a
 */

function length(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return Math.hypot(x, y, z);
}
/**
 * Creates a new vec3 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} a new 3D vector
 */

function fromValues(x, y, z) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(3);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}
/**
 * Copy the values from one vec3 to another
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the source vector
 * @returns {vec3} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}
/**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} out
 */

function set(out, x, y, z) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}
/**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  return out;
}
/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  return out;
}
/**
 * Multiplies two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  return out;
}
/**
 * Divides two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  return out;
}
/**
 * Math.ceil the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to ceil
 * @returns {vec3} out
 */

function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  return out;
}
/**
 * Math.floor the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to floor
 * @returns {vec3} out
 */

function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  return out;
}
/**
 * Returns the minimum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  return out;
}
/**
 * Returns the maximum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  return out;
}
/**
 * Math.round the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to round
 * @returns {vec3} out
 */

function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  return out;
}
/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */

function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  return out;
}
/**
 * Adds two vec3's after scaling the second operand by a scalar value
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec3} out
 */

function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  return out;
}
/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} distance between a and b
 */

function distance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return Math.hypot(x, y, z);
}
/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} squared distance between a and b
 */

function squaredDistance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return x * x + y * y + z * z;
}
/**
 * Calculates the squared length of a vec3
 *
 * @param {ReadonlyVec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */

function squaredLength(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return x * x + y * y + z * z;
}
/**
 * Negates the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to negate
 * @returns {vec3} out
 */

function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  return out;
}
/**
 * Returns the inverse of the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to invert
 * @returns {vec3} out
 */

function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  return out;
}
/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to normalize
 * @returns {vec3} out
 */

function normalize(out, a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var len = x * x + y * y + z * z;

  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
  }

  out[0] = a[0] * len;
  out[1] = a[1] * len;
  out[2] = a[2] * len;
  return out;
}
/**
 * Calculates the dot product of two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} dot product of a and b
 */

function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function cross(out, a, b) {
  var ax = a[0],
      ay = a[1],
      az = a[2];
  var bx = b[0],
      by = b[1],
      bz = b[2];
  out[0] = ay * bz - az * by;
  out[1] = az * bx - ax * bz;
  out[2] = ax * by - ay * bx;
  return out;
}
/**
 * Performs a linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */

function lerp(out, a, b, t) {
  var ax = a[0];
  var ay = a[1];
  var az = a[2];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  return out;
}
/**
 * Performs a hermite interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {ReadonlyVec3} c the third operand
 * @param {ReadonlyVec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */

function hermite(out, a, b, c, d, t) {
  var factorTimes2 = t * t;
  var factor1 = factorTimes2 * (2 * t - 3) + 1;
  var factor2 = factorTimes2 * (t - 2) + t;
  var factor3 = factorTimes2 * (t - 1);
  var factor4 = factorTimes2 * (3 - 2 * t);
  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
  return out;
}
/**
 * Performs a bezier interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {ReadonlyVec3} c the third operand
 * @param {ReadonlyVec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */

function bezier(out, a, b, c, d, t) {
  var inverseFactor = 1 - t;
  var inverseFactorTimesTwo = inverseFactor * inverseFactor;
  var factorTimes2 = t * t;
  var factor1 = inverseFactorTimesTwo * inverseFactor;
  var factor2 = 3 * t * inverseFactorTimesTwo;
  var factor3 = 3 * factorTimes2 * inverseFactor;
  var factor4 = factorTimes2 * t;
  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
  return out;
}
/**
 * Generates a random vector with the given scale
 *
 * @param {vec3} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec3} out
 */

function random(out, scale) {
  scale = scale || 1.0;
  var r = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM() * 2.0 * Math.PI;
  var z = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM() * 2.0 - 1.0;
  var zScale = Math.sqrt(1.0 - z * z) * scale;
  out[0] = Math.cos(r) * zScale;
  out[1] = Math.sin(r) * zScale;
  out[2] = z * scale;
  return out;
}
/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyMat4} m matrix to transform with
 * @returns {vec3} out
 */

function transformMat4(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2];
  var w = m[3] * x + m[7] * y + m[11] * z + m[15];
  w = w || 1.0;
  out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
  out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
  out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
  return out;
}
/**
 * Transforms the vec3 with a mat3.
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyMat3} m the 3x3 matrix to transform with
 * @returns {vec3} out
 */

function transformMat3(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2];
  out[0] = x * m[0] + y * m[3] + z * m[6];
  out[1] = x * m[1] + y * m[4] + z * m[7];
  out[2] = x * m[2] + y * m[5] + z * m[8];
  return out;
}
/**
 * Transforms the vec3 with a quat
 * Can also be used for dual quaternions. (Multiply it with the real part)
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyQuat} q quaternion to transform with
 * @returns {vec3} out
 */

function transformQuat(out, a, q) {
  // benchmarks: https://jsperf.com/quaternion-transform-vec3-implementations-fixed
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3];
  var x = a[0],
      y = a[1],
      z = a[2]; // var qvec = [qx, qy, qz];
  // var uv = vec3.cross([], qvec, a);

  var uvx = qy * z - qz * y,
      uvy = qz * x - qx * z,
      uvz = qx * y - qy * x; // var uuv = vec3.cross([], qvec, uv);

  var uuvx = qy * uvz - qz * uvy,
      uuvy = qz * uvx - qx * uvz,
      uuvz = qx * uvy - qy * uvx; // vec3.scale(uv, uv, 2 * w);

  var w2 = qw * 2;
  uvx *= w2;
  uvy *= w2;
  uvz *= w2; // vec3.scale(uuv, uuv, 2);

  uuvx *= 2;
  uuvy *= 2;
  uuvz *= 2; // return vec3.add(out, a, vec3.add(out, uv, uuv));

  out[0] = x + uvx + uuvx;
  out[1] = y + uvy + uuvy;
  out[2] = z + uvz + uuvz;
  return out;
}
/**
 * Rotate a 3D vector around the x-axis
 * @param {vec3} out The receiving vec3
 * @param {ReadonlyVec3} a The vec3 point to rotate
 * @param {ReadonlyVec3} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec3} out
 */

function rotateX(out, a, b, rad) {
  var p = [],
      r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[0];
  r[1] = p[1] * Math.cos(rad) - p[2] * Math.sin(rad);
  r[2] = p[1] * Math.sin(rad) + p[2] * Math.cos(rad); //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Rotate a 3D vector around the y-axis
 * @param {vec3} out The receiving vec3
 * @param {ReadonlyVec3} a The vec3 point to rotate
 * @param {ReadonlyVec3} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec3} out
 */

function rotateY(out, a, b, rad) {
  var p = [],
      r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[2] * Math.sin(rad) + p[0] * Math.cos(rad);
  r[1] = p[1];
  r[2] = p[2] * Math.cos(rad) - p[0] * Math.sin(rad); //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Rotate a 3D vector around the z-axis
 * @param {vec3} out The receiving vec3
 * @param {ReadonlyVec3} a The vec3 point to rotate
 * @param {ReadonlyVec3} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec3} out
 */

function rotateZ(out, a, b, rad) {
  var p = [],
      r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[0] * Math.cos(rad) - p[1] * Math.sin(rad);
  r[1] = p[0] * Math.sin(rad) + p[1] * Math.cos(rad);
  r[2] = p[2]; //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Get the angle between two 3D vectors
 * @param {ReadonlyVec3} a The first operand
 * @param {ReadonlyVec3} b The second operand
 * @returns {Number} The angle in radians
 */

function angle(a, b) {
  var ax = a[0],
      ay = a[1],
      az = a[2],
      bx = b[0],
      by = b[1],
      bz = b[2],
      mag1 = Math.sqrt(ax * ax + ay * ay + az * az),
      mag2 = Math.sqrt(bx * bx + by * by + bz * bz),
      mag = mag1 * mag2,
      cosine = mag && dot(a, b) / mag;
  return Math.acos(Math.min(Math.max(cosine, -1), 1));
}
/**
 * Set the components of a vec3 to zero
 *
 * @param {vec3} out the receiving vector
 * @returns {vec3} out
 */

function zero(out) {
  out[0] = 0.0;
  out[1] = 0.0;
  out[2] = 0.0;
  return out;
}
/**
 * Returns a string representation of a vector
 *
 * @param {ReadonlyVec3} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function str(a) {
  return "vec3(" + a[0] + ", " + a[1] + ", " + a[2] + ")";
}
/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyVec3} a The first vector.
 * @param {ReadonlyVec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {ReadonlyVec3} a The first vector.
 * @param {ReadonlyVec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2));
}
/**
 * Alias for {@link vec3.subtract}
 * @function
 */

var sub = subtract;
/**
 * Alias for {@link vec3.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link vec3.divide}
 * @function
 */

var div = divide;
/**
 * Alias for {@link vec3.distance}
 * @function
 */

var dist = distance;
/**
 * Alias for {@link vec3.squaredDistance}
 * @function
 */

var sqrDist = squaredDistance;
/**
 * Alias for {@link vec3.length}
 * @function
 */

var len = length;
/**
 * Alias for {@link vec3.squaredLength}
 * @function
 */

var sqrLen = squaredLength;
/**
 * Perform some operation over an array of vec3s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */

var forEach = function () {
  var vec = create();
  return function (a, stride, offset, count, fn, arg) {
    var i, l;

    if (!stride) {
      stride = 3;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      vec[2] = a[i + 2];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
      a[i + 2] = vec[2];
    }

    return a;
  };
}();

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/compute-corners.wgsl":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/compute-corners.wgsl ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("const OctreeSize = 32u;\n\nstruct CornerMaterials {\n  cornerMaterials : array<u32>,\n};\n@binding(1) @group(0) var<storage, read> cornerMaterials: CornerMaterials;\n\nstruct VoxelMaterials {\n  voxelMaterials : array<u32>,\n};\n@binding(2) @group(0) var<storage, read_write> voxelMaterials: VoxelMaterials;\n\nconst CHILD_MIN_OFFSETS = array<vec3<u32>, 8>\n(\n  vec3<u32>(0u, 0u, 0u),\n  vec3<u32>(0u, 0u, 1u),\n  vec3<u32>(0u, 1u, 0u),\n  vec3<u32>(0u, 1u, 1u),\n  vec3<u32>(1u, 0u, 0u),\n  vec3<u32>(1u, 0u, 1u),\n  vec3<u32>(1u, 1u, 0u),\n  vec3<u32>(1u, 1u, 1u)\n);\n\n@compute @workgroup_size(1)\nfn main(@builtin(global_invocation_id) GlobalInvocationID : vec3<u32>) {\n  let index: u32 = GlobalInvocationID.z * 32u * 32u + GlobalInvocationID.y * 32u + GlobalInvocationID.x;\n\n  let nodePos: vec3<u32> = vec3<u32>(GlobalInvocationID.x, GlobalInvocationID.y, GlobalInvocationID.z);\n  var corners: u32 = 0u;\n\n  var j: u32 = 0u;\n  loop {\n    if (j >= 8u) { break; }\n\n    let cornerPos: vec3<u32> = vec3<u32>(GlobalInvocationID.x + CHILD_MIN_OFFSETS[j].x, GlobalInvocationID.y + CHILD_MIN_OFFSETS[j].y, GlobalInvocationID.z + CHILD_MIN_OFFSETS[j].z);\n    let material: u32 = min(1, cornerMaterials.cornerMaterials[cornerPos.z * 33u * 33u + cornerPos.y * 33u + cornerPos.x]);\n    corners = corners | (material << j);\n\n    continuing {\n      j = j + 1u;\n    }\n  }\n  \n  voxelMaterials.voxelMaterials[index] = corners;\n}");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/compute-positions.wgsl":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/compute-positions.wgsl ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("struct VoxelMaterials {\n  voxelMaterials : array<u32>,\n};\n@binding(2) @group(0) var<storage, read> voxelMaterials: VoxelMaterials;\n\nstruct CornerIndex {\n  cornerCount : u32,\n  cornerIndexes : array<u32>,\n};\n@binding(3) @group(0) var<storage, read_write> cornerIndex: CornerIndex;\n\n\n@compute @workgroup_size(1)\nfn main(@builtin(global_invocation_id) GlobalInvocationID : vec3<u32>) {\n\tvar position: u32 = 0u;\n\n\tvar i : u32 = 0u;\n\tloop {\n\t\tif (i >= 32u * 32u * 32u) { break; }\n\t\t\n\t\tif (voxelMaterials.voxelMaterials[i] != 0u && voxelMaterials.voxelMaterials[i] != 255u) {\n\t\t\tcornerIndex.cornerIndexes[position] = i;\n\t\t\tposition = position + 1u;  \n\t\t}\n\t\t\t\n\t\tcontinuing {  \n\t\t\ti = i + 1u;\n\t\t}\n\t}\n\n\tcornerIndex.cornerCount = position;\n}");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/compute-voxels.wgsl":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/compute-voxels.wgsl ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("struct Permutations {\n  Perm : array<i32, 512>,\n};\n\n@binding(0) @group(0)\nvar<storage, read> perm : Permutations;\n\nstruct CornerMaterials {\n  cornerMaterials : array<u32>,\n};\n\n@binding(1) @group(0)\nvar<storage, read_write> cornerMaterials: CornerMaterials;\n\nstruct VoxelMaterials {\n  voxelMaterials : array<u32>,\n};\n\n@binding(2) @group(0)\nvar<storage, read_write> voxelMaterials: VoxelMaterials;\n\nstruct CornerIndex {\n  cornerCount : u32,\n  cornerIndexes : array<u32>\n};\n\n@binding(3) @group(0)\nvar<storage, read_write> cornerIndex: CornerIndex;\n\nstruct GPUVOX\n{\n\tvoxMin: vec3<f32>,\n\tcorners: f32,\n\tvertPoint: vec3<f32>,\n\tavgNormal: vec3<f32>,\n\tnumPoints: f32\n};\nstruct GPUVOXS {\n  voxels : array<GPUVOX>,\n};\n\n@binding(4) @group(0)\nvar<storage, read_write> voxels: GPUVOXS;\n\nstruct UniformBufferObject {\n  chunkPosition : vec3<f32>,\n  stride : f32,\n\twidth: u32\n};\n\n@binding(5) @group(0)\nvar<uniform> uniforms : UniformBufferObject;\n\nconst CHILD_MIN_OFFSETS: array<vec3<u32>, 8> = array<vec3<u32>, 8>\n(\n  vec3<u32>(0u, 0u, 0u),\n  vec3<u32>(0u, 0u, 1u),\n  vec3<u32>(0u, 1u, 0u),\n  vec3<u32>(0u, 1u, 1u),\n  vec3<u32>(1u, 0u, 0u),\n  vec3<u32>(1u, 0u, 1u),\n  vec3<u32>(1u, 1u, 0u),\n  vec3<u32>(1u, 1u, 1u)\n);\n\nconst edgevmap: array<vec2<i32>, 12> = array<vec2<i32>, 12>\n(\n\tvec2<i32>(0,4), vec2<i32>(1,5), vec2<i32>(2,6), vec2<i32>(3,7),\n\tvec2<i32>(0,2), vec2<i32>(1,3), vec2<i32>(4,6), vec2<i32>(5,7),\n\tvec2<i32>(0,1), vec2<i32>(2,3), vec2<i32>(4,5), vec2<i32>(6,7)\n);\n\nfn random(i: vec2<f32>) -> f32 {\n  return fract(sin(dot(i,vec2(12.9898,78.233)))*43758.5453123);\n}\n\nfn Vec3Dot(a: vec3<f32>, b: vec3<f32>) -> f32\n{\n\treturn (a.x * b.x) + (a.y * b.y) + (a.z * b.z);\n}\n\nconst Grad3: array<vec3<f32>, 12> = array<vec3<f32>, 12>(\n\tvec3<f32>(1.0,1.0,0.0), vec3<f32>(-1.0,1.0,0.0), vec3<f32>(1.0,-1.0,0.0), vec3<f32>(-1.0,-1.0,0.0),\n\tvec3<f32>(1.0,0.0,1.0), vec3<f32>(-1.0,0.0,1.0), vec3<f32>(1.0,0.0,-1.0), vec3<f32>(-1.0,0.0,-1.0),\n\tvec3<f32>(0.0,1.0,1.0), vec3<f32>(0.0,-1.0,1.0), vec3<f32>(0.0,1.0,-1.0), vec3<f32>(0.0,-1.0,-1.0)\n);\n\nfn Perlin(x1: f32, y1: f32, z1: f32) -> f32\n{\n\tvar X: i32 = 0;\n\tif (x1 > 0.0) {\n\t\tX = i32(x1);\n\t} else {\n\t\tX = i32(x1) - 1;\n\t}\n\n\tvar Y: i32 = 0;\n\tif (y1 > 0.0) {\n\t\tY = i32(y1);\n\t} else {\n\t\tY = i32(y1) - 1;\n\t}\n\n\tvar Z: i32 = 0;\n\tif (z1 > 0.0) {\n\t\tZ = i32(z1);\n\t} else {\n\t\tZ = i32(z1) - 1;\n\t}\n\t\n\tlet x: f32 = x1 - f32(X);\n\tlet y: f32 = y1 - f32(Y);\n\tlet z: f32 = z1 - f32(Z);\n\t\n\tX = X & 255;\n\tY = Y & 255;\n\tZ = Z & 255;\n\t\n\tlet gi000: i32 = (perm.Perm[X + perm.Perm[Y + perm.Perm[Z] ] ] % 12);\n\tlet gi001: i32 = (perm.Perm[X + perm.Perm[Y + perm.Perm[Z + 1] ] ] % 12);\n\tlet gi010: i32 = (perm.Perm[X + perm.Perm[Y + 1 + perm.Perm[Z] ] ] % 12);\n\tlet gi011: i32 = (perm.Perm[X + perm.Perm[Y + 1 + perm.Perm[Z + 1] ] ] % 12);\n\tlet gi100: i32 = (perm.Perm[X + 1 + perm.Perm[Y + perm.Perm[Z] ] ] % 12);\n\tlet gi101: i32 = (perm.Perm[X + 1 + perm.Perm[Y + perm.Perm[Z + 1] ] ] % 12);\n\tlet gi110: i32 = (perm.Perm[X + 1 + perm.Perm[Y + 1 + perm.Perm[Z] ] ] % 12);\n\tlet gi111: i32 = (perm.Perm[X + 1 + perm.Perm[Y + 1 + perm.Perm[Z + 1] ] ] % 12);\n\n\tlet n000: f32 = dot(Grad3[gi000], vec3<f32>(x, y, z));\n\tlet n100: f32 = dot(Grad3[gi100], vec3<f32>(x - 1.0, y, z));\n\tlet n010: f32 = dot(Grad3[gi010], vec3<f32>(x, y - 1.0, z));\n\tlet n110: f32 = dot(Grad3[gi110], vec3<f32>(x - 1.0, y - 1.0, z));\n\tlet n001: f32 = dot(Grad3[gi001], vec3<f32>(x, y, z - 1.0));\n\tlet n101: f32 = dot(Grad3[gi101], vec3<f32>(x - 1.0, y, z - 1.0));\n\tlet n011: f32 = dot(Grad3[gi011], vec3<f32>(x, y - 1.0, z - 1.0));\n\tlet n111: f32 = dot(Grad3[gi111], vec3<f32>(x - 1.0, y - 1.0, z - 1.0));\n\t\n\tlet u: f32 = f32(x * x * x * (x * (x * 6.0 - 15.0) + 10.0));\n\tlet v: f32 = f32(y * y * y * (y * (y * 6.0 - 15.0) + 10.0));\n\tlet w: f32 = f32(z * z * z * (z * (z * 6.0 - 15.0) + 10.0));\n\tlet nx00: f32 = mix(n000, n100, u);\n\tlet nx01: f32 = mix(n001, n101, u);\n\tlet nx10: f32 = mix(n010, n110, u);\n\tlet nx11: f32 = mix(n011, n111, u);\n\tlet nxy0: f32 = mix(nx00, nx10, v);\n\tlet nxy1: f32 = mix(nx01, nx11, v);\n\tlet nxyz: f32 = mix(nxy0, nxy1, w);\n\t\n\treturn nxyz;\n}\n\nfn FractalNoise(octaves: i32, frequency: f32, lacunarity: f32, persistence: f32, position: vec3<f32>) -> f32\n{\n\tlet SCALE: f32 = 1.0 / 128.0;\n\tvar p: vec3<f32> = position * SCALE;\n\tvar nois: f32 = 0.0;\n\n\tvar amplitude: f32 = 1.0;\n\tp = p * frequency;\n\n\tvar i: i32 = 0;\n\tloop {\n\t\tif (i >= octaves) { break; }\n\n\t\tnois = nois + Perlin(p.x, p.y, p.z) * amplitude;\n\t\tp = p * lacunarity;\n\t\tamplitude = amplitude * persistence;\n\n\t\tcontinuing {\n\t\t\ti = i + 1;\n\t\t}\n\t}\n\t\n\treturn nois;\n}\n\nfn FractalNoise1(frequency: f32, lacunarity: f32, persistence: f32, position: vec3<f32>) -> f32\n{\n\tlet SCALE: f32 = 1.0 / 128.0;\n\tvar p: vec3<f32> = position * SCALE;\n\tvar nois: f32 = 0.0;\n\n\tvar amplitude: f32 = 1.0;\n\tp = p * frequency;\n\t\n\tnois = nois + Perlin(p.x, p.y, p.z) * amplitude;\n\tp = p * lacunarity;\n\tamplitude = amplitude * persistence;\n\t\n\treturn nois;\n}\n\nfn CalculateNoiseValue(pos: vec3<f32>, scale: f32) -> f32\n{\n\treturn FractalNoise(4, 0.5343, 2.2324, 0.68324, pos * scale);\n}\n\nfn CLerp(a: f32, b: f32, t: f32) -> f32\n{\n\treturn (1.0 - t) * a + t * b;\n}\n\n// SVD\n\nconst SVD_NUM_SWEEPS: i32 = 4;\nconst PSUEDO_INVERSE_THRESHOLD: f32 = 0.00000001;\n\nfn svd_mul_matrix_vec(m: mat3x3<f32>, b: vec4<f32>) -> vec4<f32>\n{\n\tvar a: mat3x3<f32> = m;\n\t\n\treturn vec4<f32>(\n\t\tdot(vec4<f32>(a[0][0], a[0][1], a[0][2], 0.0), b),\n\t\tdot(vec4<f32>(a[1][0], a[1][1], a[1][2], 0.0), b),\n\t\tdot(vec4<f32>(a[2][0], a[2][1], a[2][2], 0.0), b),\n\t\t0.0\n\t);\n}\n\nfn givens_coeffs_sym(a_pp: f32, a_pq: f32, a_qq: f32) -> vec2<f32>\n{\n\tif (a_pq == 0.0) {\n\t\treturn vec2<f32>(1.0, 0.0);\n\t}\n\t\n\tlet tau: f32 = (a_qq - a_pp) / (2.0 * a_pq);\n\tlet stt: f32 = sqrt(1.0 + tau * tau);\n\tvar tan: f32;\n\tif ((tau >= 0.0)) {\n\t\ttan = (tau + stt);\n\t} else {\n\t\ttan = (tau - stt);\n\t}\n\ttan = 1.0 / tan;\n\n\tlet c: f32 = inverseSqrt(1.0 + tan * tan);\n\tlet s: f32 = tan * c;\n\n\treturn vec2<f32>(c, s);\n}\n\nfn svd_rotate_xy(x: f32, y: f32, c: f32, s: f32) -> vec2<f32>\n{\n\treturn vec2<f32>(c * x - s * y, s * x + c * y);\n}\n\nfn svd_rotateq_xy(x: f32, y: f32, z: f32, c: f32, s: f32) -> vec2<f32>\n{\n\tlet cc: f32 = c * c;\n\tlet ss: f32 = s * s;\n\tlet mx: f32 = 2.0 * c * s * z;\n\n\treturn vec2<f32>(\n\t\tcc * x - mx + ss * y,\n\t\tss * x + mx + cc * z\n\t);\n}\n\nvar<private> vtav: mat3x3<f32>;\nvar<private> v: mat3x3<f32>;\nvar<private> ATA: array<f32, 6>;\nvar<private> Atb: vec4<f32>;\nvar<private> pointaccum: vec4<f32>;\nvar<private> btb: f32;\n\nfn svd_rotate(a: i32, b: i32)\n{\n\tif (vtav[a][b] == 0.0) { return; }\n\n\n\t\n\tlet coeffs: vec2<f32> = givens_coeffs_sym(vtav[a][a], vtav[a][b], vtav[b][b]);\n\tlet c: f32 = coeffs.x;\n\tlet s: f32 = coeffs.y;\n\t\n\tlet rot1: vec2<f32> = svd_rotateq_xy(vtav[a][a], vtav[b][b], vtav[a][b], c, s);\n\tvtav[a][a] = rot1.x;\n\tvtav[b][b] = rot1.y;\n\t\n\tlet rot2: vec2<f32> = svd_rotate_xy(vtav[0][3-b], vtav[1-a][2], c, s);\n\tvtav[0][3-b] = rot2.x; \n\tvtav[1-a][2] = rot2.y;\n\t\n\tvtav[a][b] = 0.0;\n\t\n\tlet rot3: vec2<f32> = svd_rotate_xy(v[0][a], v[0][b], c, s);\n\tv[0][a] = rot3.x; v[0][b] = rot3.y;\n\t\n\tlet rot4: vec2<f32> = svd_rotate_xy(v[1][a], v[1][b], c, s);\n\tv[1][a] = rot4.x; v[1][b] = rot4.y;\n\t\n\tlet rot5: vec2<f32> = svd_rotate_xy(v[2][a], v[2][b], c, s);\n\tv[2][a] = rot5.x; v[2][b] = rot5.y;\n}\n\nfn svd_solve_sym(b: array<f32, 6>) -> vec4<f32>\n{\n\tvar a: array<f32, 6> = b;\n\t\n\tvtav = mat3x3<f32>( \n\t\tvec3<f32>(a[0], a[1], a[2]), \n\t\tvec3<f32>(0.0, a[3], a[4]), \n\t\tvec3<f32>(0.0, 0.0, a[5])\n\t);\n\n\tvar i: i32;\n\tloop {\n\t\tif (i >= SVD_NUM_SWEEPS) { break; }\n\n\t\tsvd_rotate(0, 1);\n\t\tsvd_rotate(0, 2);\n\t\tsvd_rotate(1, 2);\n\n\t\tcontinuing {\n\t\t\ti = i + 1;\n\t\t}\n\t}\n\n\tvar copy: mat3x3<f32> = vtav;\n\treturn vec4<f32>(copy[0][0], copy[1][1], copy[2][2], 0.0);\n}\n\n\nfn svd_invdet(x: f32, tol: f32) -> f32\n{\n\tif (abs(x) < tol || abs(1.0 / x) < tol) {\n\t\treturn 0.0;\n\t}\n\treturn (1.0 / x);\n}\n\nfn svd_pseudoinverse(sigma: vec4<f32>, c: mat3x3<f32>) -> mat3x3<f32>\n{\n\tlet d0: f32 = svd_invdet(sigma.x, PSUEDO_INVERSE_THRESHOLD);\n\tlet d1: f32 = svd_invdet(sigma.y, PSUEDO_INVERSE_THRESHOLD);\n\tlet d2: f32 = svd_invdet(sigma.z, PSUEDO_INVERSE_THRESHOLD);\n\n\tvar copy: mat3x3<f32> = c;\n\n\treturn mat3x3<f32> (\n\t\tvec3<f32>(\n\t\t\tcopy[0][0] * d0 * copy[0][0] + copy[0][1] * d1 * copy[0][1] + copy[0][2] * d2 * copy[0][2],\n\t\t\tcopy[0][0] * d0 * copy[1][0] + copy[0][1] * d1 * copy[1][1] + copy[0][2] * d2 * copy[1][2],\n\t\t\tcopy[0][0] * d0 * copy[2][0] + copy[0][1] * d1 * copy[2][1] + copy[0][2] * d2 * copy[2][2]\n\t\t),\n\t\tvec3<f32>(\n\t\t\tcopy[1][0] * d0 * copy[0][0] + copy[1][1] * d1 * copy[0][1] + copy[1][2] * d2 * copy[0][2],\n\t\t\tcopy[1][0] * d0 * copy[1][0] + copy[1][1] * d1 * copy[1][1] + copy[1][2] * d2 * copy[1][2],\n\t\t\tcopy[1][0] * d0 * copy[2][0] + copy[1][1] * d1 * copy[2][1] + copy[1][2] * d2 * copy[2][2]\n\t\t),\n\t\tvec3<f32>(\n\t\t\tcopy[2][0] * d0 * copy[0][0] + copy[2][1] * d1 * copy[0][1] + copy[2][2] * d2 * copy[0][2],\n\t\t\tcopy[2][0] * d0 * copy[1][0] + copy[2][1] * d1 * copy[1][1] + copy[2][2] * d2 * copy[1][2],\n\t\t\tcopy[2][0] * d0 * copy[2][0] + copy[2][1] * d1 * copy[2][1] + copy[2][2] * d2 * copy[2][2]\n\t\t),\n\t);\n}\n\nfn svd_solve_ATA_Atb(a: vec4<f32>) -> vec4<f32>\n{\n\tv = mat3x3<f32>(vec3<f32>(1.0, 0.0, 0.0), vec3<f32>(0.0, 1.0, 0.0), vec3<f32>(0.0, 0.0, 1.0));\n\t\n\tlet sigma: vec4<f32> = svd_solve_sym(ATA);\n\t\n\tlet Vinv: mat3x3<f32> = svd_pseudoinverse(sigma, v);\n\treturn svd_mul_matrix_vec(Vinv, a);\n}\n\nfn svd_vmul_sym(v: vec4<f32>) -> vec4<f32>\n{\n\tlet A_row_x: vec4<f32> = vec4<f32>(ATA[0], ATA[1], ATA[2], 0.0);\n\treturn vec4<f32> (\n\t\tdot(A_row_x, v),\n\t\tATA[1] * v.x + ATA[3] * v.y + ATA[4] * v.z,\n\t\tATA[2] * v.x + ATA[4] * v.y + ATA[5] * v.z,\n\t\t0.0\n\t);\n}\n\n\n// // QEF\n\nfn qef_add(n: vec4<f32>, p: vec4<f32>)\n{\n\tATA[0] = ATA[0] + n.x * n.x;\n\tATA[1] = ATA[1] + n.x * n.y;\n\tATA[2] = ATA[2] + n.x * n.z;\n\tATA[3] = ATA[3] + n.y * n.y;\n\tATA[4] = ATA[4] + n.y * n.z;\n\tATA[5] = ATA[5] + n.z * n.z;\n\t\n\tlet b: f32 = dot(p, n);\n\tAtb.x = Atb.x +n.x * b;\n\tAtb.y = Atb.y +n.y * b;\n\tAtb.z = Atb.z +n.z * b;\n\tbtb = btb + b * b;\n\t\n\tpointaccum.x = pointaccum.x +p.x;\n\tpointaccum.y = pointaccum.y +p.y;\n\tpointaccum.z = pointaccum.z +p.z;\n\tpointaccum.w = pointaccum.w +1.0;\n}\n\nfn qef_calc_error(x: vec4<f32>) -> f32\n{\n\tvar tmp: vec4<f32> = svd_vmul_sym(x);\n\ttmp = Atb - tmp;\n\t\n\treturn dot(tmp, tmp);\n}\n\nfn qef_solve() -> vec4<f32>\n{\n\tlet masspoint: vec4<f32> = vec4<f32>(pointaccum.x / pointaccum.w, pointaccum.y / pointaccum.w, pointaccum.z / pointaccum.w, pointaccum.w / pointaccum.w);\n\t\n\tvar A_mp: vec4<f32> = svd_vmul_sym(masspoint);\n\tA_mp = Atb - A_mp;\n\t\n\tlet x: vec4<f32> = svd_solve_ATA_Atb(A_mp);\n\t\n\tlet error: f32 = qef_calc_error(x);\n\tlet r: vec4<f32> = x + masspoint;\n\t\n\treturn vec4<f32>(r.x, r.y, r.z, error);\n}\n\n#import density\n\nfn ApproximateZeroCrossingPosition(p0: vec3<f32>, p1: vec3<f32>) -> vec3<f32>\n{\n\tvar minValue: f32 = 100000.0;\n\tvar t: f32 = 0.0;\n\tvar currentT: f32 = 0.0;\n\tlet steps: f32 = 8.0;\n\tlet increment: f32 = 1.0 / steps;\n\tloop {\n\t\tif (currentT > 1.0) { break; }\n\n\t\tlet p: vec3<f32> = p0 + ((p1 - p0) * currentT);\n\t\tlet density: f32 = abs(getDensity(p));\n\t\tif (density < minValue)\n\t\t{\n\t\t\tminValue = density;\n\t\t\tt = currentT;\n\t\t}\n\n\t\tcontinuing {\n\t\t\tcurrentT = currentT + increment;\n\t\t}\n\t}\n\n\treturn p0 + ((p1 - p0) * t);\n}\n\nfn CalculateSurfaceNormal(p: vec3<f32>) -> vec3<f32>\n{\n\tlet H: f32 = uniforms.stride; // This needs to scale based on something...\n\tlet dx: f32 = getDensity(p + vec3<f32>(H, 0.0, 0.0)) - getDensity(p - vec3<f32>(H, 0.0, 0.0));\n\tlet dy: f32 = getDensity(p + vec3<f32>(0.0, H, 0.0)) - getDensity(p - vec3<f32>(0.0, H, 0.0));\n\tlet dz: f32 = getDensity(p + vec3<f32>(0.0, 0.0, H)) - getDensity(p - vec3<f32>(0.0, 0.0, H));\n\n\treturn normalize(vec3<f32>(dx, dy, dz));\n}\n\n@compute @workgroup_size(128)\nfn main(@builtin(global_invocation_id) GlobalInvocationID : vec3<u32>) {\n\tlet trueIndex: u32 = GlobalInvocationID.x;\n\n\tif (trueIndex < cornerIndex.cornerCount)\n\t{\n\t\tlet ures: u32 = 32u;\n\n\t\tlet nodeSize: u32 = u32(uniforms.stride);\n\n\t\tlet voxelIndex: u32 = cornerIndex.cornerIndexes[trueIndex];\n\t\tlet z: u32 = voxelIndex / (ures * ures);\n\t\tlet y: u32 = (voxelIndex - (z * ures * ures)) / ures;\n\t\tlet x: u32 = voxelIndex - (z * ures * ures) - (y * ures);\n\n\t\tlet corners: u32 = voxelMaterials.voxelMaterials[voxelIndex];\n\n\t\tlet nodePos: vec3<f32> = (vec3<f32>(f32(x), f32(y), f32 (z)) * uniforms.stride) + uniforms.chunkPosition;\n\t\tvoxels.voxels[trueIndex].voxMin = nodePos;\n\t\tlet MAX_CROSSINGS: i32 = 6;\n\t\tvar edgeCount: i32 = 0;\n\n\t\tpointaccum = vec4<f32>(0.0, 0.0, 0.0, 0.0);\n\t\tATA = array<f32, 6>(0.0, 0.0, 0.0, 0.0, 0.0, 0.0);\n\t\tAtb = vec4<f32>(0.0, 0.0, 0.0, 0.0);\n\t\tvar averageNormal: vec3<f32> = vec3<f32>(0.0, 0.0, 0.0);\n\t\tbtb = 0.0;\n\n\t\tvar j: i32 = 0;\n\t\tloop {\n\t\t\tif (!(j < 12 && edgeCount <= MAX_CROSSINGS)) {\n\t\t\t\tbreak;\n\t\t\t}\n\n\t\t\tlet c1: i32 = edgevmap[j].x;\n\t\t\tlet c2: i32 = edgevmap[j].y;\n\n\t\t\tlet m1: u32 = (corners >> u32(c1)) & 1u;\n\t\t\tlet m2: u32 = (corners >> u32(c2)) & 1u;\n\n\t\t\tif (!((m1 == 0u && m2 == 0u) || (m1 == 1u && m2 == 1u)))\n\t\t\t{\n\t\t\t\tlet p1: vec3<f32> = nodePos + vec3<f32>(f32(CHILD_MIN_OFFSETS[c1].x * nodeSize), f32(CHILD_MIN_OFFSETS[c1].y * nodeSize), f32(CHILD_MIN_OFFSETS[c1].z * nodeSize));\n\t\t\t\tlet p2: vec3<f32> = nodePos + vec3<f32>(f32(CHILD_MIN_OFFSETS[c2].x * nodeSize), f32(CHILD_MIN_OFFSETS[c2].y * nodeSize), f32(CHILD_MIN_OFFSETS[c2].z * nodeSize));\n\t\t\t\tlet p: vec3<f32> = ApproximateZeroCrossingPosition(p1, p2);\n\t\t\t\tlet n: vec3<f32> = CalculateSurfaceNormal(p);\n\n\t\t\t\tqef_add(vec4<f32>(n.x, n.y, n.z, 0.0), vec4<f32>(p.x, p.y, p.z, 0.0));\n\n\t\t\t\taverageNormal = averageNormal + n;\n\n\t\t\t\tedgeCount = edgeCount + 1;\n\t\t\t}\n\n\t\t\tcontinuing {\n\t\t\t\tj = j + 1;\n\t\t\t}\n\t\t}\n\n\n\t\taverageNormal = normalize(averageNormal / vec3<f32>(f32(edgeCount), f32(edgeCount), f32(edgeCount)));\n\n\t\tlet com: vec3<f32> = vec3<f32>(pointaccum.x / pointaccum.w, pointaccum.y / pointaccum.w, pointaccum.z / pointaccum.w);\n\n\t\tlet result: vec4<f32> = qef_solve();\n\t\tvar solved_position: vec3<f32> = result.xyz;\n\t\tlet error: f32 = result.w;\n\n\n\t\tlet Min: vec3<f32> = nodePos;\n\t\tlet Max: vec3<f32> = nodePos + vec3<f32>(1.0, 1.0, 1.0);\n\t\tif (solved_position.x < Min.x || solved_position.x > Max.x ||\n\t\t\t\tsolved_position.y < Min.y || solved_position.y > Max.y ||\n\t\t\t\tsolved_position.z < Min.z || solved_position.z > Max.z)\n\t\t{\n\t\t\tsolved_position = com;\n\t\t}\n\n\t\tvoxels.voxels[trueIndex].vertPoint = solved_position;\n\t\tvoxels.voxels[trueIndex].avgNormal = averageNormal;\n\t\tvoxels.voxels[trueIndex].numPoints = f32(edgeCount);\n\t\tvoxels.voxels[trueIndex].corners = f32(voxelMaterials.voxelMaterials[voxelIndex]);\n\t}\n}\n\n@compute @workgroup_size(1)\nfn computeMaterials(@builtin(global_invocation_id) GlobalInvocationID : vec3<u32>) {\n\t\tlet width = uniforms.width;\n    let index: u32 = GlobalInvocationID.z * width * width + GlobalInvocationID.y * width + GlobalInvocationID.x;\n    let cornerPos: vec3<f32> = vec3<f32>(f32(GlobalInvocationID.x) * uniforms.stride, f32(GlobalInvocationID.y) * uniforms.stride, f32(GlobalInvocationID.z) * uniforms.stride);\n\n    let density: f32 = getDensity(cornerPos + uniforms.chunkPosition);\n\n\t\tif (density < 0.0) {\n\t\t\tif (length(cornerPos + uniforms.chunkPosition) < 2000.0) {\n        //cornerMaterials.cornerMaterials[index] = u32(random(vec2(f32(index))) * 255.0) + 1;\n\t\t\t  cornerMaterials.cornerMaterials[index] = 256u;\n\t\t\t} else {\n        cornerMaterials.cornerMaterials[index] = u32(length(cornerPos) / uniforms.stride * 256.0);\n\t\t\t}\n\t\t} else {\n\t\t\tcornerMaterials.cornerMaterials[index] = 0u;\n\t\t}\n}");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/density.wgsl":
/*!****************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/density.wgsl ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("const freq = 0.001;\n\nconst MATERIAL_AIR = 0u;\nconst MATERIAL_ROCK = 1u;\nconst MATERIAL_WOOD = 2u;\nconst MATERIAL_FIRE = 3u;\n\nstruct Density {\n  density: f32,\n  material: u32\n}\n\nstruct Augmentation {\n  position: vec3<f32>,\n  size: f32,\n  attributes: u32\n}\n\n@binding(0) @group(1) var<storage, read> augmentations: array<Augmentation>;\n\nfn subtract(base: Density, sub: f32) -> Density {\n  return Density(max(base.density, sub), base.material);\n}\n\nfn add(base: Density, add: f32, material: u32) -> Density {\n  if (add <= 0) {\n    return Density(add, material);\n  }\n  return base;\n}\n\nfn Box(worldPosition: vec3<f32>, origin: vec3<f32>, halfDimensions: vec3<f32>) -> f32\n{\n\tlet local_pos: vec3<f32> = worldPosition - origin;\n\tlet pos: vec3<f32> = local_pos;\n\n\tlet d: vec3<f32> = vec3<f32>(abs(pos.x), abs(pos.y), abs(pos.z)) - halfDimensions;\n\tlet m: f32 = max(d.x, max(d.y, d.z));\n\treturn clamp(min(m, length(max(d, vec3<f32>(0.0, 0.0, 0.0)))), -100.0, 100.0);\n}\n\nfn Torus(worldPosition: vec3<f32>, origin: vec3<f32>, t: vec3<f32>) -> f32\n{\n\tlet p: vec3<f32> = worldPosition - origin;\n\n  let q: vec2<f32> = vec2<f32>(length(p.xz)-t.x,p.y);\n  return length(q)-t.y;\n}\n\nfn Sphere(worldPosition: vec3<f32>, origin: vec3<f32>, radius: f32) -> f32\n{\n\treturn clamp(length(worldPosition - origin) - radius, -100.0, 100.0);\n}\n\nfn FractalNoise21(octaves: i32, frequency: f32, lacunarity: f32, persistence: f32, position: vec3<f32>) -> f32\n{\n\tlet SCALE: f32 = 1.0 / 128.0;\n\tvar p: vec3<f32> = position * SCALE;\n\tvar nois: f32 = 0.0;\n\n\tvar amplitude: f32 = 1.0;\n\tp = p * frequency;\n\n\tvar i: i32 = 0;\n\tloop {\n\t\tif (i >= octaves) { break; }\n\n\t\tnois = nois + perlinNoise3(p) * amplitude;\n\t\tp = p * lacunarity;\n\t\tamplitude = amplitude * persistence;\n\n\t\tcontinuing {\n\t\t\ti = i + 1;\n\t\t}\n\t}\n\n\treturn nois;\n}\n\nfn FractalNoise2(frequency: f32, lacunarity: f32, persistence: f32, position: vec3<f32>) -> f32\n{\n\tlet SCALE: f32 = 1.0 / 128.0;\n\tvar p: vec3<f32> = position * SCALE;\n\tvar nois: f32 = 0.0;\n\n\tvar amplitude: f32 = 1.0;\n\tp = p * frequency;\n\n\tnois = nois + perlinNoise3(p) * amplitude;\n\tp = p * lacunarity;\n\tamplitude = amplitude * persistence;\n\n\treturn nois;\n}\n\nfn permute41(x: vec4<f32>) -> vec4<f32> { return ((x * 34. + 1.) * x) % vec4<f32>(289.); }\nfn taylorInvSqrt4(r: vec4<f32>) -> vec4<f32> { return 1.79284291400159 - 0.85373472095314 * r; }\nfn fade3(t: vec3<f32>) -> vec3<f32> { return t * t * t * (t * (t * 6. - 15.) + 10.); }\n\nfn perlinNoise3(P: vec3<f32>) -> f32 {\n  var Pi0 : vec3<f32> = floor(P); // Integer part for indexing\n  var Pi1 : vec3<f32> = Pi0 + vec3<f32>(1.); // Integer part + 1\n  Pi0 = Pi0 % vec3<f32>(289.);\n  Pi1 = Pi1 % vec3<f32>(289.);\n  let Pf0 = fract(P); // Fractional part for interpolation\n  let Pf1 = Pf0 - vec3<f32>(1.); // Fractional part - 1.\n  let ix = vec4<f32>(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  let iy = vec4<f32>(Pi0.yy, Pi1.yy);\n  let iz0 = Pi0.zzzz;\n  let iz1 = Pi1.zzzz;\n\n  let ixy = permute41(permute41(ix) + iy);\n  let ixy0 = permute41(ixy + iz0);\n  let ixy1 = permute41(ixy + iz1);\n\n  var gx0: vec4<f32> = ixy0 / 7.;\n  var gy0: vec4<f32> = fract(floor(gx0) / 7.) - 0.5;\n  gx0 = fract(gx0);\n  var gz0: vec4<f32> = vec4<f32>(0.5) - abs(gx0) - abs(gy0);\n  var sz0: vec4<f32> = step(gz0, vec4<f32>(0.));\n  gx0 = gx0 + sz0 * (step(vec4<f32>(0.), gx0) - 0.5);\n  gy0 = gy0 + sz0 * (step(vec4<f32>(0.), gy0) - 0.5);\n\n  var gx1: vec4<f32> = ixy1 / 7.;\n  var gy1: vec4<f32> = fract(floor(gx1) / 7.) - 0.5;\n  gx1 = fract(gx1);\n  var gz1: vec4<f32> = vec4<f32>(0.5) - abs(gx1) - abs(gy1);\n  var sz1: vec4<f32> = step(gz1, vec4<f32>(0.));\n  gx1 = gx1 - sz1 * (step(vec4<f32>(0.), gx1) - 0.5);\n  gy1 = gy1 - sz1 * (step(vec4<f32>(0.), gy1) - 0.5);\n\n  var g000: vec3<f32> = vec3<f32>(gx0.x, gy0.x, gz0.x);\n  var g100: vec3<f32> = vec3<f32>(gx0.y, gy0.y, gz0.y);\n  var g010: vec3<f32> = vec3<f32>(gx0.z, gy0.z, gz0.z);\n  var g110: vec3<f32> = vec3<f32>(gx0.w, gy0.w, gz0.w);\n  var g001: vec3<f32> = vec3<f32>(gx1.x, gy1.x, gz1.x);\n  var g101: vec3<f32> = vec3<f32>(gx1.y, gy1.y, gz1.y);\n  var g011: vec3<f32> = vec3<f32>(gx1.z, gy1.z, gz1.z);\n  var g111: vec3<f32> = vec3<f32>(gx1.w, gy1.w, gz1.w);\n\n  let norm0 = taylorInvSqrt4(\n      vec4<f32>(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 = g000 * norm0.x;\n  g010 = g010 * norm0.y;\n  g100 = g100 * norm0.z;\n  g110 = g110 * norm0.w;\n  let norm1 = taylorInvSqrt4(\n      vec4<f32>(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 = g001 * norm1.x;\n  g011 = g011 * norm1.y;\n  g101 = g101 * norm1.z;\n  g111 = g111 * norm1.w;\n\n  let n000 = dot(g000, Pf0);\n  let n100 = dot(g100, vec3<f32>(Pf1.x, Pf0.yz));\n  let n010 = dot(g010, vec3<f32>(Pf0.x, Pf1.y, Pf0.z));\n  let n110 = dot(g110, vec3<f32>(Pf1.xy, Pf0.z));\n  let n001 = dot(g001, vec3<f32>(Pf0.xy, Pf1.z));\n  let n101 = dot(g101, vec3<f32>(Pf1.x, Pf0.y, Pf1.z));\n  let n011 = dot(g011, vec3<f32>(Pf0.x, Pf1.yz));\n  let n111 = dot(g111, Pf1);\n\n  var fade_xyz: vec3<f32> = fade3(Pf0);\n  let temp = vec4<f32>(f32(fade_xyz.z)); // simplify after chrome bug fix\n  let n_z = mix(vec4<f32>(n000, n100, n010, n110), vec4<f32>(n001, n101, n011, n111), temp);\n  let n_yz = mix(n_z.xy, n_z.zw, vec2<f32>(f32(fade_xyz.y))); // simplify after chrome bug fix\n  let n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\n  return 2.2 * n_xyz;\n}\n\nfn CalculateNoiseValue2(pos: vec3<f32>, scale: f32) -> f32\n{\n\treturn FractalNoise21(4, 0.5343, 2.2324, 0.68324, pos * scale);\n}\n\nfn CLerp2(a: f32, b: f32, t: f32) -> f32\n{\n\treturn (1.0 - t) * a + t * b;\n}\n\nfn calculateDensity(worldPosition: vec3<f32>) -> Density {\n\tvar worldRadius: f32 = 10000.0;\n\tvar world: vec3<f32> = worldPosition - vec3<f32>(worldRadius);\n\tvar worldDist: f32 = clamp(-worldRadius + length(world), -1000.0, 1000.0);\n\n\tlet flatlandNoiseScale: f32 = 3.0;\n\tlet flatlandLerpAmount: f32 = 0.07;\n\tlet flatlandYPercent: f32 = 1.2;\n\n\tlet rockyNoiseScale: f32 = 3.0;\n\tlet rockyLerpAmount: f32 = 0.05;\n\tlet rockyYPercent: f32 = 0.7;\n\n\tlet maxMountainMixLerpAmount: f32 = 0.075;\n\tlet minMountainMixLerpAmount: f32 = 1.0;\n\n\tlet rockyBlend: f32 = 1.0;\n\n//\tlet mountainBlend: f32 = clamp(abs(FractalNoise2(0.5343, 2.2324, 0.68324, world)) * 4.0, 0.0, 1.0);\n//\t//let mountainBlend: f32 = 0.0;\n//\n//\tlet mountain: f32 = CalculateNoiseValue2(world, 0.07);\n//\t//let mountain: f32 = 0.0;\n//\n//\tvar blob: f32 = CalculateNoiseValue2(world, flatlandNoiseScale + ((rockyNoiseScale - flatlandNoiseScale) * rockyBlend));\n//\tblob = CLerp2(blob, (worldDist) * (flatlandYPercent + ((rockyYPercent - flatlandYPercent) * rockyBlend)),\n//\t\t\t\tflatlandLerpAmount + ((rockyLerpAmount - flatlandLerpAmount) * rockyBlend));\n//\t\t\t\t//+ CLerp2(mountain, blob, minMountainMixLerpAmount + ((maxMountainMixLerpAmount - minMountainMixLerpAmount) * mountainBlend));\n\n  var result = Density(1.0, MATERIAL_AIR);\n\n\t//result = add(result, blob, MATERIAL_ROCK);\n\n  result = add(result, Box(worldPosition, vec3<f32>(2000000.0, 150.0, 5000.0), vec3<f32>(5000.0, 1000.0, 5000.0)), MATERIAL_WOOD);\n  result = add(result, Sphere(worldPosition, vec3<f32>(2000000.0, 100.0, 100.0), 5000.0), MATERIAL_ROCK);\n\n  result = add(result, Sphere(worldPosition, vec3<f32>(2000000.0 - 1000000.0, 0.0, 0.0), 1000000.0), MATERIAL_ROCK);\n\n  result = add(result, Sphere(worldPosition, vec3<f32>(0.0, 0.0, 0.0), 200000.0), MATERIAL_FIRE);\n\n  result = subtract(result, -Sphere(worldPosition, vec3<f32>(2000000.0, 0.0, 0.0), 1000.0));\n  result = subtract(result, -Box(worldPosition, vec3<f32>(2000000.0, 0.0, 0.0), vec3<f32>(6000.0, 500.0, 500.0)));\n  result = subtract(result, -Box(worldPosition, vec3<f32>(2000000.0, 0.0, 0.0), vec3<f32>(500.0, 500.0, 5000.0)));\n\n  //result = add(result, Sphere(worldPosition, vec3<f32>(2000000.0, 0.0, 0.0), 1000.0), MATERIAL_FIRE);\n\n\n  let count = arrayLength(&augmentations);\n\n  var i: u32 = 0u;\n  loop {\n    if (i > count) { break; }\n\n    let augmentation = augmentations[i];\n    result = add(result, Sphere(worldPosition, vec3<f32>(augmentation.position.x, augmentation.position.y, augmentation.position.z), 1000.0), MATERIAL_FIRE);\n\n\n    continuing {\n      i = i + 1u;\n    }\n  }\n\n  let augmentation = augmentations[0];\n  return result;\n}\n\nfn getDensity(worldPosition: vec3<f32>) -> f32 {\n\treturn calculateDensity(worldPosition).density;\n}");

/***/ }),

/***/ "./node_modules/seedrandom/index.js":
/*!******************************************!*\
  !*** ./node_modules/seedrandom/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// A library of seedable RNGs implemented in Javascript.
//
// Usage:
//
// var seedrandom = require('seedrandom');
// var random = seedrandom(1); // or any seed.
// var x = random();       // 0 <= x < 1.  Every bit is random.
// var x = random.quick(); // 0 <= x < 1.  32 bits of randomness.

// alea, a 53-bit multiply-with-carry generator by Johannes Baagøe.
// Period: ~2^116
// Reported to pass all BigCrush tests.
var alea = __webpack_require__(/*! ./lib/alea */ "./node_modules/seedrandom/lib/alea.js");

// xor128, a pure xor-shift generator by George Marsaglia.
// Period: 2^128-1.
// Reported to fail: MatrixRank and LinearComp.
var xor128 = __webpack_require__(/*! ./lib/xor128 */ "./node_modules/seedrandom/lib/xor128.js");

// xorwow, George Marsaglia's 160-bit xor-shift combined plus weyl.
// Period: 2^192-2^32
// Reported to fail: CollisionOver, SimpPoker, and LinearComp.
var xorwow = __webpack_require__(/*! ./lib/xorwow */ "./node_modules/seedrandom/lib/xorwow.js");

// xorshift7, by François Panneton and Pierre L'ecuyer, takes
// a different approach: it adds robustness by allowing more shifts
// than Marsaglia's original three.  It is a 7-shift generator
// with 256 bits, that passes BigCrush with no systmatic failures.
// Period 2^256-1.
// No systematic BigCrush failures reported.
var xorshift7 = __webpack_require__(/*! ./lib/xorshift7 */ "./node_modules/seedrandom/lib/xorshift7.js");

// xor4096, by Richard Brent, is a 4096-bit xor-shift with a
// very long period that also adds a Weyl generator. It also passes
// BigCrush with no systematic failures.  Its long period may
// be useful if you have many generators and need to avoid
// collisions.
// Period: 2^4128-2^32.
// No systematic BigCrush failures reported.
var xor4096 = __webpack_require__(/*! ./lib/xor4096 */ "./node_modules/seedrandom/lib/xor4096.js");

// Tyche-i, by Samuel Neves and Filipe Araujo, is a bit-shifting random
// number generator derived from ChaCha, a modern stream cipher.
// https://eden.dei.uc.pt/~sneves/pubs/2011-snfa2.pdf
// Period: ~2^127
// No systematic BigCrush failures reported.
var tychei = __webpack_require__(/*! ./lib/tychei */ "./node_modules/seedrandom/lib/tychei.js");

// The original ARC4-based prng included in this library.
// Period: ~2^1600
var sr = __webpack_require__(/*! ./seedrandom */ "./node_modules/seedrandom/seedrandom.js");

sr.alea = alea;
sr.xor128 = xor128;
sr.xorwow = xorwow;
sr.xorshift7 = xorshift7;
sr.xor4096 = xor4096;
sr.tychei = tychei;

module.exports = sr;


/***/ }),

/***/ "./node_modules/seedrandom/lib/alea.js":
/*!*********************************************!*\
  !*** ./node_modules/seedrandom/lib/alea.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_RESULT__;// A port of an algorithm by Johannes Baagøe <baagoe@baagoe.com>, 2010
// http://baagoe.com/en/RandomMusings/javascript/
// https://github.com/nquinlan/better-random-numbers-for-javascript-mirror
// Original work is under MIT license -

// Copyright (C) 2010 by Johannes Baagøe <baagoe@baagoe.org>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.



(function(global, module, define) {

function Alea(seed) {
  var me = this, mash = Mash();

  me.next = function() {
    var t = 2091639 * me.s0 + me.c * 2.3283064365386963e-10; // 2^-32
    me.s0 = me.s1;
    me.s1 = me.s2;
    return me.s2 = t - (me.c = t | 0);
  };

  // Apply the seeding algorithm from Baagoe.
  me.c = 1;
  me.s0 = mash(' ');
  me.s1 = mash(' ');
  me.s2 = mash(' ');
  me.s0 -= mash(seed);
  if (me.s0 < 0) { me.s0 += 1; }
  me.s1 -= mash(seed);
  if (me.s1 < 0) { me.s1 += 1; }
  me.s2 -= mash(seed);
  if (me.s2 < 0) { me.s2 += 1; }
  mash = null;
}

function copy(f, t) {
  t.c = f.c;
  t.s0 = f.s0;
  t.s1 = f.s1;
  t.s2 = f.s2;
  return t;
}

function impl(seed, opts) {
  var xg = new Alea(seed),
      state = opts && opts.state,
      prng = xg.next;
  prng.int32 = function() { return (xg.next() * 0x100000000) | 0; }
  prng.double = function() {
    return prng() + (prng() * 0x200000 | 0) * 1.1102230246251565e-16; // 2^-53
  };
  prng.quick = prng;
  if (state) {
    if (typeof(state) == 'object') copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

function Mash() {
  var n = 0xefc8249d;

  var mash = function(data) {
    data = String(data);
    for (var i = 0; i < data.length; i++) {
      n += data.charCodeAt(i);
      var h = 0.02519603282416938 * n;
      n = h >>> 0;
      h -= n;
      h *= n;
      n = h >>> 0;
      h -= n;
      n += h * 0x100000000; // 2^32
    }
    return (n >>> 0) * 2.3283064365386963e-10; // 2^-32
  };

  return mash;
}


if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__.amdD && __webpack_require__.amdO) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.alea = impl;
}

})(
  this,
   true && module,    // present in node.js
  __webpack_require__.amdD   // present with an AMD loader
);




/***/ }),

/***/ "./node_modules/seedrandom/lib/tychei.js":
/*!***********************************************!*\
  !*** ./node_modules/seedrandom/lib/tychei.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of the "Tyche-i" prng algorithm by
// Samuel Neves and Filipe Araujo.
// See https://eden.dei.uc.pt/~sneves/pubs/2011-snfa2.pdf

(function(global, module, define) {

function XorGen(seed) {
  var me = this, strseed = '';

  // Set up generator function.
  me.next = function() {
    var b = me.b, c = me.c, d = me.d, a = me.a;
    b = (b << 25) ^ (b >>> 7) ^ c;
    c = (c - d) | 0;
    d = (d << 24) ^ (d >>> 8) ^ a;
    a = (a - b) | 0;
    me.b = b = (b << 20) ^ (b >>> 12) ^ c;
    me.c = c = (c - d) | 0;
    me.d = (d << 16) ^ (c >>> 16) ^ a;
    return me.a = (a - b) | 0;
  };

  /* The following is non-inverted tyche, which has better internal
   * bit diffusion, but which is about 25% slower than tyche-i in JS.
  me.next = function() {
    var a = me.a, b = me.b, c = me.c, d = me.d;
    a = (me.a + me.b | 0) >>> 0;
    d = me.d ^ a; d = d << 16 ^ d >>> 16;
    c = me.c + d | 0;
    b = me.b ^ c; b = b << 12 ^ d >>> 20;
    me.a = a = a + b | 0;
    d = d ^ a; me.d = d = d << 8 ^ d >>> 24;
    me.c = c = c + d | 0;
    b = b ^ c;
    return me.b = (b << 7 ^ b >>> 25);
  }
  */

  me.a = 0;
  me.b = 0;
  me.c = 2654435769 | 0;
  me.d = 1367130551;

  if (seed === Math.floor(seed)) {
    // Integer seed.
    me.a = (seed / 0x100000000) | 0;
    me.b = seed | 0;
  } else {
    // String seed.
    strseed += seed;
  }

  // Mix in string seed, then discard an initial batch of 64 values.
  for (var k = 0; k < strseed.length + 20; k++) {
    me.b ^= strseed.charCodeAt(k) | 0;
    me.next();
  }
}

function copy(f, t) {
  t.a = f.a;
  t.b = f.b;
  t.c = f.c;
  t.d = f.d;
  return t;
};

function impl(seed, opts) {
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (typeof(state) == 'object') copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__.amdD && __webpack_require__.amdO) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.tychei = impl;
}

})(
  this,
   true && module,    // present in node.js
  __webpack_require__.amdD   // present with an AMD loader
);




/***/ }),

/***/ "./node_modules/seedrandom/lib/xor128.js":
/*!***********************************************!*\
  !*** ./node_modules/seedrandom/lib/xor128.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of the "xor128" prng algorithm by
// George Marsaglia.  See http://www.jstatsoft.org/v08/i14/paper

(function(global, module, define) {

function XorGen(seed) {
  var me = this, strseed = '';

  me.x = 0;
  me.y = 0;
  me.z = 0;
  me.w = 0;

  // Set up generator function.
  me.next = function() {
    var t = me.x ^ (me.x << 11);
    me.x = me.y;
    me.y = me.z;
    me.z = me.w;
    return me.w ^= (me.w >>> 19) ^ t ^ (t >>> 8);
  };

  if (seed === (seed | 0)) {
    // Integer seed.
    me.x = seed;
  } else {
    // String seed.
    strseed += seed;
  }

  // Mix in string seed, then discard an initial batch of 64 values.
  for (var k = 0; k < strseed.length + 64; k++) {
    me.x ^= strseed.charCodeAt(k) | 0;
    me.next();
  }
}

function copy(f, t) {
  t.x = f.x;
  t.y = f.y;
  t.z = f.z;
  t.w = f.w;
  return t;
}

function impl(seed, opts) {
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (typeof(state) == 'object') copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__.amdD && __webpack_require__.amdO) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.xor128 = impl;
}

})(
  this,
   true && module,    // present in node.js
  __webpack_require__.amdD   // present with an AMD loader
);




/***/ }),

/***/ "./node_modules/seedrandom/lib/xor4096.js":
/*!************************************************!*\
  !*** ./node_modules/seedrandom/lib/xor4096.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of Richard Brent's Xorgens xor4096 algorithm.
//
// This fast non-cryptographic random number generator is designed for
// use in Monte-Carlo algorithms. It combines a long-period xorshift
// generator with a Weyl generator, and it passes all common batteries
// of stasticial tests for randomness while consuming only a few nanoseconds
// for each prng generated.  For background on the generator, see Brent's
// paper: "Some long-period random number generators using shifts and xors."
// http://arxiv.org/pdf/1004.3115v1.pdf
//
// Usage:
//
// var xor4096 = require('xor4096');
// random = xor4096(1);                        // Seed with int32 or string.
// assert.equal(random(), 0.1520436450538547); // (0, 1) range, 53 bits.
// assert.equal(random.int32(), 1806534897);   // signed int32, 32 bits.
//
// For nonzero numeric keys, this impelementation provides a sequence
// identical to that by Brent's xorgens 3 implementaion in C.  This
// implementation also provides for initalizing the generator with
// string seeds, or for saving and restoring the state of the generator.
//
// On Chrome, this prng benchmarks about 2.1 times slower than
// Javascript's built-in Math.random().

(function(global, module, define) {

function XorGen(seed) {
  var me = this;

  // Set up generator function.
  me.next = function() {
    var w = me.w,
        X = me.X, i = me.i, t, v;
    // Update Weyl generator.
    me.w = w = (w + 0x61c88647) | 0;
    // Update xor generator.
    v = X[(i + 34) & 127];
    t = X[i = ((i + 1) & 127)];
    v ^= v << 13;
    t ^= t << 17;
    v ^= v >>> 15;
    t ^= t >>> 12;
    // Update Xor generator array state.
    v = X[i] = v ^ t;
    me.i = i;
    // Result is the combination.
    return (v + (w ^ (w >>> 16))) | 0;
  };

  function init(me, seed) {
    var t, v, i, j, w, X = [], limit = 128;
    if (seed === (seed | 0)) {
      // Numeric seeds initialize v, which is used to generates X.
      v = seed;
      seed = null;
    } else {
      // String seeds are mixed into v and X one character at a time.
      seed = seed + '\0';
      v = 0;
      limit = Math.max(limit, seed.length);
    }
    // Initialize circular array and weyl value.
    for (i = 0, j = -32; j < limit; ++j) {
      // Put the unicode characters into the array, and shuffle them.
      if (seed) v ^= seed.charCodeAt((j + 32) % seed.length);
      // After 32 shuffles, take v as the starting w value.
      if (j === 0) w = v;
      v ^= v << 10;
      v ^= v >>> 15;
      v ^= v << 4;
      v ^= v >>> 13;
      if (j >= 0) {
        w = (w + 0x61c88647) | 0;     // Weyl.
        t = (X[j & 127] ^= (v + w));  // Combine xor and weyl to init array.
        i = (0 == t) ? i + 1 : 0;     // Count zeroes.
      }
    }
    // We have detected all zeroes; make the key nonzero.
    if (i >= 128) {
      X[(seed && seed.length || 0) & 127] = -1;
    }
    // Run the generator 512 times to further mix the state before using it.
    // Factoring this as a function slows the main generator, so it is just
    // unrolled here.  The weyl generator is not advanced while warming up.
    i = 127;
    for (j = 4 * 128; j > 0; --j) {
      v = X[(i + 34) & 127];
      t = X[i = ((i + 1) & 127)];
      v ^= v << 13;
      t ^= t << 17;
      v ^= v >>> 15;
      t ^= t >>> 12;
      X[i] = v ^ t;
    }
    // Storing state as object members is faster than using closure variables.
    me.w = w;
    me.X = X;
    me.i = i;
  }

  init(me, seed);
}

function copy(f, t) {
  t.i = f.i;
  t.w = f.w;
  t.X = f.X.slice();
  return t;
};

function impl(seed, opts) {
  if (seed == null) seed = +(new Date);
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (state.X) copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__.amdD && __webpack_require__.amdO) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.xor4096 = impl;
}

})(
  this,                                     // window object or global
   true && module,    // present in node.js
  __webpack_require__.amdD   // present with an AMD loader
);


/***/ }),

/***/ "./node_modules/seedrandom/lib/xorshift7.js":
/*!**************************************************!*\
  !*** ./node_modules/seedrandom/lib/xorshift7.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of the "xorshift7" algorithm by
// François Panneton and Pierre L'ecuyer:
// "On the Xorgshift Random Number Generators"
// http://saluc.engr.uconn.edu/refs/crypto/rng/panneton05onthexorshift.pdf

(function(global, module, define) {

function XorGen(seed) {
  var me = this;

  // Set up generator function.
  me.next = function() {
    // Update xor generator.
    var X = me.x, i = me.i, t, v, w;
    t = X[i]; t ^= (t >>> 7); v = t ^ (t << 24);
    t = X[(i + 1) & 7]; v ^= t ^ (t >>> 10);
    t = X[(i + 3) & 7]; v ^= t ^ (t >>> 3);
    t = X[(i + 4) & 7]; v ^= t ^ (t << 7);
    t = X[(i + 7) & 7]; t = t ^ (t << 13); v ^= t ^ (t << 9);
    X[i] = v;
    me.i = (i + 1) & 7;
    return v;
  };

  function init(me, seed) {
    var j, w, X = [];

    if (seed === (seed | 0)) {
      // Seed state array using a 32-bit integer.
      w = X[0] = seed;
    } else {
      // Seed state using a string.
      seed = '' + seed;
      for (j = 0; j < seed.length; ++j) {
        X[j & 7] = (X[j & 7] << 15) ^
            (seed.charCodeAt(j) + X[(j + 1) & 7] << 13);
      }
    }
    // Enforce an array length of 8, not all zeroes.
    while (X.length < 8) X.push(0);
    for (j = 0; j < 8 && X[j] === 0; ++j);
    if (j == 8) w = X[7] = -1; else w = X[j];

    me.x = X;
    me.i = 0;

    // Discard an initial 256 values.
    for (j = 256; j > 0; --j) {
      me.next();
    }
  }

  init(me, seed);
}

function copy(f, t) {
  t.x = f.x.slice();
  t.i = f.i;
  return t;
}

function impl(seed, opts) {
  if (seed == null) seed = +(new Date);
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (state.x) copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__.amdD && __webpack_require__.amdO) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.xorshift7 = impl;
}

})(
  this,
   true && module,    // present in node.js
  __webpack_require__.amdD   // present with an AMD loader
);



/***/ }),

/***/ "./node_modules/seedrandom/lib/xorwow.js":
/*!***********************************************!*\
  !*** ./node_modules/seedrandom/lib/xorwow.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of the "xorwow" prng algorithm by
// George Marsaglia.  See http://www.jstatsoft.org/v08/i14/paper

(function(global, module, define) {

function XorGen(seed) {
  var me = this, strseed = '';

  // Set up generator function.
  me.next = function() {
    var t = (me.x ^ (me.x >>> 2));
    me.x = me.y; me.y = me.z; me.z = me.w; me.w = me.v;
    return (me.d = (me.d + 362437 | 0)) +
       (me.v = (me.v ^ (me.v << 4)) ^ (t ^ (t << 1))) | 0;
  };

  me.x = 0;
  me.y = 0;
  me.z = 0;
  me.w = 0;
  me.v = 0;

  if (seed === (seed | 0)) {
    // Integer seed.
    me.x = seed;
  } else {
    // String seed.
    strseed += seed;
  }

  // Mix in string seed, then discard an initial batch of 64 values.
  for (var k = 0; k < strseed.length + 64; k++) {
    me.x ^= strseed.charCodeAt(k) | 0;
    if (k == strseed.length) {
      me.d = me.x << 10 ^ me.x >>> 4;
    }
    me.next();
  }
}

function copy(f, t) {
  t.x = f.x;
  t.y = f.y;
  t.z = f.z;
  t.w = f.w;
  t.v = f.v;
  t.d = f.d;
  return t;
}

function impl(seed, opts) {
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (typeof(state) == 'object') copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__.amdD && __webpack_require__.amdO) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.xorwow = impl;
}

})(
  this,
   true && module,    // present in node.js
  __webpack_require__.amdD   // present with an AMD loader
);




/***/ }),

/***/ "./node_modules/seedrandom/seedrandom.js":
/*!***********************************************!*\
  !*** ./node_modules/seedrandom/seedrandom.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
Copyright 2019 David Bau.

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/

(function (global, pool, math) {
//
// The following constants are related to IEEE 754 limits.
//

var width = 256,        // each RC4 output is 0 <= x < 256
    chunks = 6,         // at least six RC4 outputs for each double
    digits = 52,        // there are 52 significant digits in a double
    rngname = 'random', // rngname: name for Math.random and Math.seedrandom
    startdenom = math.pow(width, chunks),
    significance = math.pow(2, digits),
    overflow = significance * 2,
    mask = width - 1,
    nodecrypto;         // node.js crypto module, initialized at the bottom.

//
// seedrandom()
// This is the seedrandom function described above.
//
function seedrandom(seed, options, callback) {
  var key = [];
  options = (options == true) ? { entropy: true } : (options || {});

  // Flatten the seed string or build one from local entropy if needed.
  var shortseed = mixkey(flatten(
    options.entropy ? [seed, tostring(pool)] :
    (seed == null) ? autoseed() : seed, 3), key);

  // Use the seed to initialize an ARC4 generator.
  var arc4 = new ARC4(key);

  // This function returns a random double in [0, 1) that contains
  // randomness in every bit of the mantissa of the IEEE 754 value.
  var prng = function() {
    var n = arc4.g(chunks),             // Start with a numerator n < 2 ^ 48
        d = startdenom,                 //   and denominator d = 2 ^ 48.
        x = 0;                          //   and no 'extra last byte'.
    while (n < significance) {          // Fill up all significant digits by
      n = (n + x) * width;              //   shifting numerator and
      d *= width;                       //   denominator and generating a
      x = arc4.g(1);                    //   new least-significant-byte.
    }
    while (n >= overflow) {             // To avoid rounding up, before adding
      n /= 2;                           //   last byte, shift everything
      d /= 2;                           //   right using integer math until
      x >>>= 1;                         //   we have exactly the desired bits.
    }
    return (n + x) / d;                 // Form the number within [0, 1).
  };

  prng.int32 = function() { return arc4.g(4) | 0; }
  prng.quick = function() { return arc4.g(4) / 0x100000000; }
  prng.double = prng;

  // Mix the randomness into accumulated entropy.
  mixkey(tostring(arc4.S), pool);

  // Calling convention: what to return as a function of prng, seed, is_math.
  return (options.pass || callback ||
      function(prng, seed, is_math_call, state) {
        if (state) {
          // Load the arc4 state from the given state if it has an S array.
          if (state.S) { copy(state, arc4); }
          // Only provide the .state method if requested via options.state.
          prng.state = function() { return copy(arc4, {}); }
        }

        // If called as a method of Math (Math.seedrandom()), mutate
        // Math.random because that is how seedrandom.js has worked since v1.0.
        if (is_math_call) { math[rngname] = prng; return seed; }

        // Otherwise, it is a newer calling convention, so return the
        // prng directly.
        else return prng;
      })(
  prng,
  shortseed,
  'global' in options ? options.global : (this == math),
  options.state);
}

//
// ARC4
//
// An ARC4 implementation.  The constructor takes a key in the form of
// an array of at most (width) integers that should be 0 <= x < (width).
//
// The g(count) method returns a pseudorandom integer that concatenates
// the next (count) outputs from ARC4.  Its return value is a number x
// that is in the range 0 <= x < (width ^ count).
//
function ARC4(key) {
  var t, keylen = key.length,
      me = this, i = 0, j = me.i = me.j = 0, s = me.S = [];

  // The empty key [] is treated as [0].
  if (!keylen) { key = [keylen++]; }

  // Set up S using the standard key scheduling algorithm.
  while (i < width) {
    s[i] = i++;
  }
  for (i = 0; i < width; i++) {
    s[i] = s[j = mask & (j + key[i % keylen] + (t = s[i]))];
    s[j] = t;
  }

  // The "g" method returns the next (count) outputs as one number.
  (me.g = function(count) {
    // Using instance members instead of closure state nearly doubles speed.
    var t, r = 0,
        i = me.i, j = me.j, s = me.S;
    while (count--) {
      t = s[i = mask & (i + 1)];
      r = r * width + s[mask & ((s[i] = s[j = mask & (j + t)]) + (s[j] = t))];
    }
    me.i = i; me.j = j;
    return r;
    // For robust unpredictability, the function call below automatically
    // discards an initial batch of values.  This is called RC4-drop[256].
    // See http://google.com/search?q=rsa+fluhrer+response&btnI
  })(width);
}

//
// copy()
// Copies internal state of ARC4 to or from a plain object.
//
function copy(f, t) {
  t.i = f.i;
  t.j = f.j;
  t.S = f.S.slice();
  return t;
};

//
// flatten()
// Converts an object tree to nested arrays of strings.
//
function flatten(obj, depth) {
  var result = [], typ = (typeof obj), prop;
  if (depth && typ == 'object') {
    for (prop in obj) {
      try { result.push(flatten(obj[prop], depth - 1)); } catch (e) {}
    }
  }
  return (result.length ? result : typ == 'string' ? obj : obj + '\0');
}

//
// mixkey()
// Mixes a string seed into a key that is an array of integers, and
// returns a shortened string seed that is equivalent to the result key.
//
function mixkey(seed, key) {
  var stringseed = seed + '', smear, j = 0;
  while (j < stringseed.length) {
    key[mask & j] =
      mask & ((smear ^= key[mask & j] * 19) + stringseed.charCodeAt(j++));
  }
  return tostring(key);
}

//
// autoseed()
// Returns an object for autoseeding, using window.crypto and Node crypto
// module if available.
//
function autoseed() {
  try {
    var out;
    if (nodecrypto && (out = nodecrypto.randomBytes)) {
      // The use of 'out' to remember randomBytes makes tight minified code.
      out = out(width);
    } else {
      out = new Uint8Array(width);
      (global.crypto || global.msCrypto).getRandomValues(out);
    }
    return tostring(out);
  } catch (e) {
    var browser = global.navigator,
        plugins = browser && browser.plugins;
    return [+new Date, global, plugins, global.screen, tostring(pool)];
  }
}

//
// tostring()
// Converts an array of charcodes to a string
//
function tostring(a) {
  return String.fromCharCode.apply(0, a);
}

//
// When seedrandom.js is loaded, we immediately mix a few bits
// from the built-in RNG into the entropy pool.  Because we do
// not want to interfere with deterministic PRNG state later,
// seedrandom will not call math.random on its own again after
// initialization.
//
mixkey(math.random(), pool);

//
// Nodejs and AMD support: export the implementation as a module using
// either convention.
//
if ( true && module.exports) {
  module.exports = seedrandom;
  // When in node.js, try using crypto package for autoseeding.
  try {
    nodecrypto = __webpack_require__(/*! crypto */ "?8465");
  } catch (ex) {}
} else if (true) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return seedrandom; }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {}


// End anonymous scope, and pass initial values.
})(
  // global: `self` in browsers (including strict mode and web workers),
  // otherwise `this` in Node and other environments
  (typeof self !== 'undefined') ? self : this,
  [],     // pool: entropy pool starts empty
  Math    // math: package containing random, pow, and seedrandom
);


/***/ }),

/***/ "./src/contouring.ts":
/*!***************************!*\
  !*** ./src/contouring.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var MATERIAL_AIR = 0;
var cellProcFaceMask = [[0, 4, 0], [1, 5, 0], [2, 6, 0], [3, 7, 0], [0, 2, 1], [4, 6, 1], [1, 3, 1], [5, 7, 1], [0, 1, 2], [2, 3, 2], [4, 5, 2], [6, 7, 2]];
var cellProcEdgeMask = [[0, 1, 2, 3, 0], [4, 5, 6, 7, 0], [0, 4, 1, 5, 1], [2, 6, 3, 7, 1], [0, 2, 4, 6, 2], [1, 3, 5, 7, 2]];
var faceProcFaceMask = [
    [[4, 0, 0], [5, 1, 0], [6, 2, 0], [7, 3, 0]],
    [[2, 0, 1], [6, 4, 1], [3, 1, 1], [7, 5, 1]],
    [[1, 0, 2], [3, 2, 2], [5, 4, 2], [7, 6, 2]]
];
var faceProcEdgeMask = [
    [[1, 4, 0, 5, 1, 1], [1, 6, 2, 7, 3, 1], [0, 4, 6, 0, 2, 2], [0, 5, 7, 1, 3, 2]],
    [[0, 2, 3, 0, 1, 0], [0, 6, 7, 4, 5, 0], [1, 2, 0, 6, 4, 2], [1, 3, 1, 7, 5, 2]],
    [[1, 1, 0, 3, 2, 0], [1, 5, 4, 7, 6, 0], [0, 1, 5, 0, 4, 1], [0, 3, 7, 2, 6, 1]]
];
var edgeProcEdgeMask = [
    [[3, 2, 1, 0, 0], [7, 6, 5, 4, 0]],
    [[5, 1, 4, 0, 1], [7, 3, 6, 2, 1]],
    [[6, 4, 2, 0, 2], [7, 5, 3, 1, 2]],
];
var processEdgeMask = [[3, 2, 1, 0], [7, 5, 6, 4], [11, 10, 9, 8]];
var edgevmap = [
    [0, 4], [1, 5], [2, 6], [3, 7],
    [0, 2], [1, 3], [4, 6], [5, 7],
    [0, 1], [2, 3], [4, 5], [6, 7] // z-axis
];
var ContourProcessEdge = function (node, dir, indices) {
    var minSize = 1000000; // arbitrary big number
    var minIndex = 0;
    var indexes = [-1, -1, -1, -1];
    var flip = false;
    var signChange = [false, false, false, false];
    for (var i = 0; i < 4; i++) {
        var edge = processEdgeMask[dir][i];
        var c1 = edgevmap[edge][0];
        var c2 = edgevmap[edge][1];
        var m1 = (node[i].drawInfo.corners >> c1) & 1;
        var m2 = (node[i].drawInfo.corners >> c2) & 1;
        if (node[i].size < minSize) {
            minSize = node[i].size;
            minIndex = i;
            flip = m1 !== MATERIAL_AIR;
        }
        indexes[i] = node[i].drawInfo.index;
        signChange[i] =
            (m1 === MATERIAL_AIR && m2 !== MATERIAL_AIR) ||
                (m1 !== MATERIAL_AIR && m2 === MATERIAL_AIR);
    }
    if (signChange[minIndex]) {
        if (!flip) {
            indices.push(indexes[0]);
            indices.push(indexes[1]);
            indices.push(indexes[3]);
            indices.push(indexes[0]);
            indices.push(indexes[3]);
            indices.push(indexes[2]);
        }
        else {
            indices.push(indexes[0]);
            indices.push(indexes[3]);
            indices.push(indexes[1]);
            indices.push(indexes[0]);
            indices.push(indexes[2]);
            indices.push(indexes[3]);
        }
    }
};
var ContourEdgeProc = function (node, dir, indices) {
    if (node[0] == null || node[1] == null || node[2] == null || node[3] == null)
        return;
    if (node[0].type !== 'internal' &&
        node[1].type !== 'internal' &&
        node[2].type !== 'internal' &&
        node[3].type !== 'internal') {
        ContourProcessEdge(node, dir, indices);
    }
    else {
        for (var i = 0; i < 2; i++) {
            var edgeNodes = [];
            var c = [
                edgeProcEdgeMask[dir][i][0],
                edgeProcEdgeMask[dir][i][1],
                edgeProcEdgeMask[dir][i][2],
                edgeProcEdgeMask[dir][i][3]
            ];
            for (var j = 0; j < 4; j++) {
                if (node[j].type === 'leaf' || node[j].type === 'pseudo') {
                    edgeNodes[j] = node[j];
                }
                else {
                    edgeNodes[j] = node[j].children[c[j]];
                }
            }
            ContourEdgeProc(edgeNodes, edgeProcEdgeMask[dir][i][4], indices);
        }
    }
};
var ContourFaceProc = function (node, dir, indices) {
    if (node[0] == null || node[1] == null)
        return;
    if (node[0].type === 'internal' ||
        node[1].type === 'internal') {
        for (var i = 0; i < 4; i++) {
            var faceNodes = [];
            var c = [
                faceProcFaceMask[dir][i][0],
                faceProcFaceMask[dir][i][1]
            ];
            for (var j = 0; j < 2; j++) {
                if (node[j].type !== 'internal') {
                    faceNodes[j] = node[j];
                }
                else {
                    faceNodes[j] = node[j].children[c[j]];
                }
            }
            ContourFaceProc(faceNodes, faceProcFaceMask[dir][i][2], indices);
        }
        var orders = [
            [0, 0, 1, 1],
            [0, 1, 0, 1]
        ];
        for (var i = 0; i < 4; i++) {
            var edgeNodes = [];
            var c = [
                faceProcEdgeMask[dir][i][1],
                faceProcEdgeMask[dir][i][2],
                faceProcEdgeMask[dir][i][3],
                faceProcEdgeMask[dir][i][4]
            ];
            var order = [
                orders[faceProcEdgeMask[dir][i][0]][0],
                orders[faceProcEdgeMask[dir][i][0]][1],
                orders[faceProcEdgeMask[dir][i][0]][2],
                orders[faceProcEdgeMask[dir][i][0]][3]
            ];
            for (var j = 0; j < 4; j++) {
                if (node[order[j]].type === 'leaf' ||
                    node[order[j]].type === 'pseudo') {
                    edgeNodes[j] = node[order[j]];
                }
                else {
                    edgeNodes[j] = node[order[j]].children[c[j]];
                }
            }
            ContourEdgeProc(edgeNodes, faceProcEdgeMask[dir][i][5], indices);
        }
    }
};
var ContourCellProc = function (node, indices) {
    if (node == null)
        return;
    if (node.type === 'internal') {
        for (var i = 0; i < 8; i++) {
            ContourCellProc(node.children[i], indices);
        }
        for (var i = 0; i < 12; i++) {
            var faceNodes = [];
            var c = [cellProcFaceMask[i][0], cellProcFaceMask[i][1]];
            faceNodes[0] = node.children[c[0]];
            faceNodes[1] = node.children[c[1]];
            ContourFaceProc(faceNodes, cellProcFaceMask[i][2], indices);
        }
        for (var i = 0; i < 6; i++) {
            var edgeNodes = [];
            var c = [
                cellProcEdgeMask[i][0],
                cellProcEdgeMask[i][1],
                cellProcEdgeMask[i][2],
                cellProcEdgeMask[i][3]
            ];
            for (var j = 0; j < 4; j++) {
                edgeNodes[j] = node.children[c[j]];
            }
            ContourEdgeProc(edgeNodes, cellProcEdgeMask[i][4], indices);
        }
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContourCellProc);


/***/ }),

/***/ "./node_modules/ts-loader/index.js!./src/contouring.worker.ts":
/*!********************************************************************!*\
  !*** ./node_modules/ts-loader/index.js!./src/contouring.worker.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/vec3.js");
/* harmony import */ var _voxel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./voxel */ "./src/voxel.ts");
/* harmony import */ var _world_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./world-generator */ "./src/world-generator.ts");
/* harmony import */ var _countDownLatch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./countDownLatch */ "./src/countDownLatch.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};




var ctx = self;
(function () {
    return __awaiter(this, void 0, void 0, function () {
        var adapter, device, voxel, generators, threadCount, i, gpuQueue, callbacks, queue, lastInfo, generating, generatedPositions;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, navigator.gpu.requestAdapter()];
                case 1:
                    adapter = _a.sent();
                    return [4 /*yield*/, adapter.requestDevice()];
                case 2:
                    device = _a.sent();
                    voxel = new _voxel__WEBPACK_IMPORTED_MODULE_0__.default();
                    return [4 /*yield*/, voxel.init(device)];
                case 3:
                    _a.sent();
                    generators = [];
                    threadCount = 1;
                    i = 0;
                    _a.label = 4;
                case 4:
                    if (!(i < threadCount)) return [3 /*break*/, 7];
                    generators[i] = new _voxel__WEBPACK_IMPORTED_MODULE_0__.default();
                    return [4 /*yield*/, generators[i].init(device)];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6:
                    i++;
                    return [3 /*break*/, 4];
                case 7:
                    console.log('Voxel engine init complete');
                    postMessage({ type: 'init_complete' });
                    gpuQueue = [];
                    callbacks = [];
                    queue = function (item) {
                        callbacks.push(item.callback);
                        gpuQueue.push.apply(gpuQueue, __spreadArray([], __read(item.items), false));
                        //device.queue.submit(item.items);
                    };
                    lastInfo = null;
                    generating = false;
                    generatedPositions = [];
                    onmessage = function (e) {
                        return __awaiter(this, void 0, void 0, function () {
                            var _a, position, detail, x, y, z, s, _b, vertices, normals, indices, stride, size, chunkSize, worldSize, t0, worldGenerator, info, times, _loop_1, i, k;
                            return __generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0:
                                        if (generating) {
                                            return [2 /*return*/];
                                        }
                                        generating = true;
                                        _a = e.data, position = _a.position, detail = _a.detail;
                                        if (!detail) return [3 /*break*/, 2];
                                        x = detail.x, y = detail.y, z = detail.z, s = detail.s;
                                        return [4 /*yield*/, voxel.generate(device, queue, gl_matrix__WEBPACK_IMPORTED_MODULE_3__.fromValues(x - (31 * s * 0.5), y - (31 * s * 0.5), z - (31 * s * 0.5)), s)];
                                    case 1:
                                        _b = _c.sent(), vertices = _b.vertices, normals = _b.normals, indices = _b.indices;
                                        if (vertices.length > 0) {
                                        }
                                        ctx.postMessage(({ type: 'update', i: "".concat(x, ":").concat(y, ":").concat(z), ix: x, iy: y, iz: z, x: 0, y: 0, z: 0, vertices: vertices.buffer, normals: normals.buffer, indices: indices.buffer, stride: s }), [vertices.buffer, normals.buffer, indices.buffer]);
                                        generating = false;
                                        return [2 /*return*/];
                                    case 2:
                                        stride = 32;
                                        size = 128;
                                        chunkSize = 31;
                                        worldSize = Math.ceil(size / stride);
                                        t0 = performance.now();
                                        worldGenerator = new _world_generator__WEBPACK_IMPORTED_MODULE_1__.default(stride);
                                        info = worldGenerator.init((position[0] / chunkSize), (position[1] / chunkSize), (position[2] / chunkSize));
                                        if (lastInfo !== null && info.x === lastInfo.x && info.y === lastInfo.y && info.z === lastInfo.z) {
                                            generating = false;
                                            return [2 /*return*/];
                                        }
                                        console.log("Init world at ".concat(info.x, ":").concat(info.y, ":").concat(info.z, " for stride ").concat(stride));
                                        lastInfo = info;
                                        times = {
                                            32: [],
                                            64: [],
                                            128: [],
                                            256: [],
                                            512: [],
                                            1024: []
                                        };
                                        _c.label = 3;
                                    case 3:
                                        _loop_1 = function (i) {
                                            var r, result, matchingChunk, generator, j, x, y, z, halfChunk, timer, _loop_2;
                                            return __generator(this, function (_d) {
                                                switch (_d.label) {
                                                    case 0:
                                                        r = worldGenerator.next(info);
                                                        result = r[0];
                                                        info = r[1];
                                                        matchingChunk = generatedPositions.filter(function (p) { return _world_generator__WEBPACK_IMPORTED_MODULE_1__.WorldPosition.equal(p, result); });
                                                        if (matchingChunk.length > 0) {
                                                            return [2 /*return*/, "continue"];
                                                        }
                                                        generator = null;
                                                        for (j = 0; j < generators.length; j++) {
                                                            if (!generators[i].running) {
                                                                generator = generators[i];
                                                                generator.running = true;
                                                                break;
                                                            }
                                                        }
                                                        x = result.x, y = result.y, z = result.z;
                                                        halfChunk = result.stride * chunkSize * 0.5;
                                                        timer = performance.now();
                                                        generator.generate(device, queue, gl_matrix__WEBPACK_IMPORTED_MODULE_3__.fromValues(x * chunkSize - halfChunk, y * chunkSize - halfChunk, z * chunkSize - halfChunk), result.stride)
                                                            .then(function (_a) {
                                                            var vertices = _a.vertices, normals = _a.normals, indices = _a.indices, corners = _a.corners;
                                                            //console.log(`Block generated with ${vertices.length} in ${performance.now() - timer}`);
                                                            ctx.postMessage(({
                                                                type: 'update',
                                                                i: "".concat(x, ":").concat(y, ":").concat(z),
                                                                ix: x,
                                                                iy: y,
                                                                iz: z,
                                                                x: 0,
                                                                y: 0,
                                                                z: 0,
                                                                vertices: vertices.buffer,
                                                                normals: normals.buffer,
                                                                indices: indices.buffer,
                                                                stride: result.stride
                                                            }), [vertices.buffer, normals.buffer, indices.buffer]);
                                                            generatedPositions.push(result);
                                                            generator.running = false;
                                                            //times[info.stride].push(performance.now() - timer);
                                                        });
                                                        _loop_2 = function () {
                                                            var promise, countdown, j;
                                                            return __generator(this, function (_e) {
                                                                switch (_e.label) {
                                                                    case 0:
                                                                        promise = device.queue.onSubmittedWorkDone();
                                                                        device.queue.submit(gpuQueue);
                                                                        return [4 /*yield*/, promise];
                                                                    case 1:
                                                                        _e.sent();
                                                                        gpuQueue = [];
                                                                        countdown = new _countDownLatch__WEBPACK_IMPORTED_MODULE_2__.CountDownLatch(callbacks.length);
                                                                        for (j = callbacks.length - 1; j >= 0; j--) {
                                                                            callbacks[j]().then(function () {
                                                                                countdown.countDown();
                                                                            });
                                                                            callbacks.splice(j, 1);
                                                                        }
                                                                        return [4 /*yield*/, countdown.awaitZero()];
                                                                    case 2:
                                                                        _e.sent();
                                                                        return [2 /*return*/];
                                                                }
                                                            });
                                                        };
                                                        _d.label = 1;
                                                    case 1:
                                                        if (!(gpuQueue.length > 0)) return [3 /*break*/, 3];
                                                        return [5 /*yield**/, _loop_2()];
                                                    case 2:
                                                        _d.sent();
                                                        return [3 /*break*/, 1];
                                                    case 3: return [2 /*return*/];
                                                }
                                            });
                                        };
                                        i = 0;
                                        _c.label = 4;
                                    case 4:
                                        if (!(i < threadCount)) return [3 /*break*/, 7];
                                        return [5 /*yield**/, _loop_1(i)];
                                    case 5:
                                        _c.sent();
                                        _c.label = 6;
                                    case 6:
                                        i++;
                                        return [3 /*break*/, 4];
                                    case 7:
                                        if (info.stride <= 2 << 14) return [3 /*break*/, 3];
                                        _c.label = 8;
                                    case 8:
                                        for (k in times) {
                                            console.log("".concat(k, ": ").concat(times[k].reduce(function (partialSum, a) { return partialSum + a; }, 0) / times[k].length));
                                        }
                                        generating = false;
                                        console.log("Generation complete in ".concat(performance.now() - t0, " milliseconds"));
                                        return [2 /*return*/];
                                }
                            });
                        });
                    };
                    return [2 /*return*/];
            }
        });
    });
})();


/***/ }),

/***/ "./src/countDownLatch.ts":
/*!*******************************!*\
  !*** ./src/countDownLatch.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountDownLatch": () => (/* binding */ CountDownLatch)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var CountDownLatch = /** @class */ (function () {
    /**
     * Creates a new instance with a given count
     *
     * @param count The initial count
     */
    function CountDownLatch(count) {
        var _this = this;
        this.count = Math.max(count, 0);
        this.promise = new Promise(function (resolve) {
            _this.countDownFunction = function () {
                if (_this.count > 0) {
                    _this.count = _this.count - 1;
                    if (_this.count <= 0) {
                        resolve();
                    }
                }
                return _this.count;
            };
            //Resolve promise if initial value is less or equal 0
            //Maybe count was calculated from data or something else
            //so this case makes sense under some circumstances
            if (count <= 0) {
                resolve();
            }
        });
    }
    /**
     * Decrement the count by one
     */
    CountDownLatch.prototype.countDown = function () {
        return this.countDownFunction();
    };
    /**
     * Get's the current count value of the latch
     */
    CountDownLatch.prototype.getCount = function () {
        return this.count;
    };
    /**
     * Await until the count reaches zero (0)
     */
    CountDownLatch.prototype.awaitZero = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.promise];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Get's the promise that will be resolve after count reached zero
     */
    CountDownLatch.prototype.getPromise = function () {
        return this.promise;
    };
    return CountDownLatch;
}());



/***/ }),

/***/ "./src/octree.ts":
/*!***********************!*\
  !*** ./src/octree.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/vec3.js");

var CHILD_MIN_OFFSETS = [
    gl_matrix__WEBPACK_IMPORTED_MODULE_0__.fromValues(0, 0, 0),
    gl_matrix__WEBPACK_IMPORTED_MODULE_0__.fromValues(0, 0, 1),
    gl_matrix__WEBPACK_IMPORTED_MODULE_0__.fromValues(0, 1, 0),
    gl_matrix__WEBPACK_IMPORTED_MODULE_0__.fromValues(0, 1, 1),
    gl_matrix__WEBPACK_IMPORTED_MODULE_0__.fromValues(1, 0, 0),
    gl_matrix__WEBPACK_IMPORTED_MODULE_0__.fromValues(1, 0, 1),
    gl_matrix__WEBPACK_IMPORTED_MODULE_0__.fromValues(1, 1, 0),
    gl_matrix__WEBPACK_IMPORTED_MODULE_0__.fromValues(1, 1, 1)
];
var constructParents = function (children, position, parentSize) {
    var parentsHash = {};
    for (var i = 0; i < children.length; i++) {
        var node = children[i];
        var parentPos = gl_matrix__WEBPACK_IMPORTED_MODULE_0__.sub(gl_matrix__WEBPACK_IMPORTED_MODULE_0__.create(), node.min, gl_matrix__WEBPACK_IMPORTED_MODULE_0__.fromValues((node.min[0] - position[0]) % parentSize, (node.min[1] - position[1]) % parentSize, (node.min[2] - position[2]) % parentSize));
        var parent_1 = parentsHash[parentPos];
        if (!parent_1) {
            parent_1 = {
                min: parentPos,
                size: parentSize,
                type: 'internal',
                children: []
            };
            parentsHash[parent_1.min] = parent_1;
        }
        for (var j = 0; j < 8; j++) {
            var childMin = gl_matrix__WEBPACK_IMPORTED_MODULE_0__.add(gl_matrix__WEBPACK_IMPORTED_MODULE_0__.create(), parentPos, gl_matrix__WEBPACK_IMPORTED_MODULE_0__.fromValues(CHILD_MIN_OFFSETS[j][0] * node.size, CHILD_MIN_OFFSETS[j][1] * node.size, CHILD_MIN_OFFSETS[j][2] * node.size));
            if (gl_matrix__WEBPACK_IMPORTED_MODULE_0__.equals(childMin, node.min)) {
                parent_1.children[j] = node;
                break;
            }
        }
    }
    children.length = 0;
    return Object.values(parentsHash);
};
var constructTreeUpwards = function (nodes, rootMin, rootNodeSize) {
    if (nodes.length == 0) {
        return null;
    }
    nodes.sort(function (lhs, rhs) { return lhs.size - rhs.size; });
    // the input nodes may be different sizes if a seam octree is being constructed
    // in that case we need to process the input nodes in stages along with the newly
    // constructed parent nodes until all the nodes have the same size
    while (nodes[0].size != nodes[nodes.length - 1].size) {
        // find the end of this run
        var iter = 0;
        var size = nodes[iter].size;
        do {
            ++iter;
        } while (nodes[iter].size == size);
        // construct the new parent nodes for this run
        var newNodes = [];
        for (var i = 0; i < iter; i++)
            newNodes.push(nodes[i]);
        newNodes = constructParents(newNodes, rootMin, size * 2);
        // set up for the next iteration: the parents produced plus any remaining input nodes
        for (var i = iter; i < nodes.Count; i++)
            newNodes.push(nodes[i]);
        nodes.length = 0;
        for (var i = 0; i < newNodes.length; i++)
            nodes.push(newNodes[i]);
    }
    var parentSize = nodes[0].size * 2;
    while (parentSize <= rootNodeSize) {
        nodes = constructParents(nodes, rootMin, parentSize);
        parentSize *= 2;
    }
    if (nodes.length != 1) {
        console.log(nodes);
        console.error("There can only be one root node!");
        return null;
    }
    return nodes[0];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (constructTreeUpwards);


/***/ }),

/***/ "./src/voxel.ts":
/*!**********************!*\
  !*** ./src/voxel.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/vec3.js");
/* harmony import */ var _raw_loader_compute_corners_wgsl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!raw-loader!./compute-corners.wgsl */ "./node_modules/raw-loader/dist/cjs.js!./src/compute-corners.wgsl");
/* harmony import */ var _raw_loader_compute_positions_wgsl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!raw-loader!./compute-positions.wgsl */ "./node_modules/raw-loader/dist/cjs.js!./src/compute-positions.wgsl");
/* harmony import */ var _raw_loader_compute_voxels_wgsl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !!raw-loader!./compute-voxels.wgsl */ "./node_modules/raw-loader/dist/cjs.js!./src/compute-voxels.wgsl");
/* harmony import */ var _raw_loader_density_wgsl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !!raw-loader!./density.wgsl */ "./node_modules/raw-loader/dist/cjs.js!./src/density.wgsl");
/* harmony import */ var seedrandom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! seedrandom */ "./node_modules/seedrandom/index.js");
/* harmony import */ var seedrandom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(seedrandom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _contouring__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contouring */ "./src/contouring.ts");
/* harmony import */ var _octree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./octree */ "./src/octree.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var generateVertexIndices = function (node, vertices, normals, nodeSize) {
    if (node == null)
        return;
    if (node.size > nodeSize) {
        if (node.type !== 'leaf') {
            for (var i = 0; i < 8; i++) {
                generateVertexIndices(node.children[i], vertices, normals, nodeSize);
            }
        }
    }
    if (node.type !== 'internal') {
        var d = node.drawInfo;
        if (d == null) {
            throw "Error! Could not add vertex!";
        }
        d.index = vertices.length / 3;
        vertices.push(d.position[0], d.position[1], d.position[2]);
        normals.push(d.averageNormal[0], d.averageNormal[1], d.averageNormal[2]);
    }
};
var computeVoxels = function (position, stride, voxelCount, computedVoxelsData) {
    var computedVoxels = [];
    if (voxelCount === 0) {
        return { vertices: [], normals: [], indices: [] };
    }
    for (var i = 0; i < voxelCount * 12; i += 12) {
        if (computedVoxelsData[i + 11] !== 0) {
            var leaf = {
                type: 'leaf',
                size: stride,
                min: gl_matrix__WEBPACK_IMPORTED_MODULE_7__.fromValues(computedVoxelsData[i], computedVoxelsData[i + 1], computedVoxelsData[i + 2]),
                drawInfo: {
                    position: gl_matrix__WEBPACK_IMPORTED_MODULE_7__.fromValues(computedVoxelsData[i + 4], computedVoxelsData[i + 5], computedVoxelsData[i + 6]),
                    averageNormal: gl_matrix__WEBPACK_IMPORTED_MODULE_7__.fromValues(computedVoxelsData[i + 8], computedVoxelsData[i + 9], computedVoxelsData[i + 10]),
                    corners: computedVoxelsData[i + 3]
                }
            };
            computedVoxels.push(leaf);
        }
    }
    var tree = (0,_octree__WEBPACK_IMPORTED_MODULE_6__.default)(computedVoxels, position, 32 * stride);
    var vertices = [];
    var normals = [];
    generateVertexIndices(tree, vertices, normals, 1);
    var indices = [];
    (0,_contouring__WEBPACK_IMPORTED_MODULE_5__.default)(tree, indices);
    return {
        vertices: new Float32Array(vertices),
        normals: new Float32Array(normals),
        indices: new Uint16Array(indices)
    };
};
var Voxel = /** @class */ (function () {
    function Voxel() {
    }
    Voxel.prototype.init = function (device) {
        return __awaiter(this, void 0, void 0, function () {
            var computeVoxelsCode, start, module, _a, _b, uniformBufferSize, permutations, random, i, i, _c, _d, augmentationSize, augmentations;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        computeVoxelsCode = _raw_loader_compute_voxels_wgsl__WEBPACK_IMPORTED_MODULE_2__.default.replace("#import density", _raw_loader_density_wgsl__WEBPACK_IMPORTED_MODULE_3__.default);
                        start = performance.now();
                        console.log('Start loading voxel engine', performance.now() - start);
                        module = device.createShaderModule({
                            code: computeVoxelsCode,
                        });
                        _a = this;
                        return [4 /*yield*/, device.createComputePipelineAsync({
                                layout: 'auto',
                                compute: {
                                    module: module,
                                    entryPoint: 'computeMaterials',
                                },
                            })];
                    case 1:
                        _a.computePipeline = _e.sent();
                        //console.log('10', performance.now() - start);
                        _b = this;
                        return [4 /*yield*/, device.createComputePipelineAsync({
                                layout: 'auto',
                                compute: {
                                    module: device.createShaderModule({
                                        code: _raw_loader_compute_corners_wgsl__WEBPACK_IMPORTED_MODULE_0__.default
                                    }),
                                    entryPoint: 'main',
                                },
                            })];
                    case 2:
                        //console.log('10', performance.now() - start);
                        _b.computeCornersPipeline = _e.sent();
                        uniformBufferSize = 4 * 5;
                        this.uniformBuffer = device.createBuffer({
                            size: uniformBufferSize,
                            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
                        });
                        this.cornerMaterials = device.createBuffer({
                            size: Uint32Array.BYTES_PER_ELEMENT * 33 * 33 * 33,
                            usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC,
                            mappedAtCreation: false,
                        });
                        this.cornerMaterialsRead = device.createBuffer({
                            size: Uint32Array.BYTES_PER_ELEMENT * 33 * 33 * 33,
                            usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ,
                        });
                        this.voxelMaterialsBuffer = device.createBuffer({
                            size: Uint32Array.BYTES_PER_ELEMENT * 32 * 32 * 32,
                            usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC,
                            mappedAtCreation: false,
                        });
                        this.voxelMaterialsBufferRead = device.createBuffer({
                            size: Uint32Array.BYTES_PER_ELEMENT * 32 * 32 * 32,
                            usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ,
                        });
                        this.cornerIndexBuffer = device.createBuffer({
                            size: Uint32Array.BYTES_PER_ELEMENT + Uint32Array.BYTES_PER_ELEMENT * 32 * 32 * 32,
                            usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC,
                            mappedAtCreation: false,
                        });
                        this.gpuReadBuffer = device.createBuffer({
                            size: Uint32Array.BYTES_PER_ELEMENT,
                            usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
                        });
                        permutations = new Int32Array(512);
                        random = new (seedrandom__WEBPACK_IMPORTED_MODULE_4___default())(6452);
                        for (i = 0; i < 256; i++)
                            permutations[i] = (256 * (random()));
                        for (i = 256; i < 512; i++)
                            permutations[i] = permutations[i - 256];
                        this.permutationsBuffer = device.createBuffer({
                            size: permutations.byteLength,
                            usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
                            mappedAtCreation: true,
                        });
                        new Int32Array(this.permutationsBuffer.getMappedRange()).set(permutations);
                        this.permutationsBuffer.unmap();
                        this.voxelsBuffer = device.createBuffer({
                            size: Float32Array.BYTES_PER_ELEMENT * 12 * 32 * 32 * 32,
                            usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC,
                            mappedAtCreation: false,
                        });
                        this.actorsBuffer = device.createBuffer({
                            size: Float32Array.BYTES_PER_ELEMENT * 8,
                            usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC,
                            mappedAtCreation: false,
                        });
                        //console.log('20', performance.now() - start);
                        this.computeBindGroup = device.createBindGroup({
                            layout: this.computePipeline.getBindGroupLayout(0),
                            entries: [
                                {
                                    binding: 1,
                                    resource: {
                                        buffer: this.cornerMaterials
                                    },
                                },
                                {
                                    binding: 5,
                                    resource: {
                                        buffer: this.uniformBuffer
                                    },
                                }
                            ]
                        });
                        //console.log('21', performance.now() - start);
                        this.computeCornersBindGroup = device.createBindGroup({
                            layout: this.computeCornersPipeline.getBindGroupLayout(0),
                            entries: [
                                {
                                    binding: 1,
                                    resource: {
                                        buffer: this.cornerMaterials
                                    },
                                },
                                {
                                    binding: 2,
                                    resource: {
                                        buffer: this.voxelMaterialsBuffer
                                    },
                                }
                            ]
                        });
                        _c = this;
                        return [4 /*yield*/, device.createComputePipelineAsync({
                                layout: 'auto',
                                compute: {
                                    module: device.createShaderModule({
                                        code: _raw_loader_compute_positions_wgsl__WEBPACK_IMPORTED_MODULE_1__.default,
                                    }),
                                    entryPoint: 'main',
                                },
                            })];
                    case 3:
                        _c.computePositionsPipeline = _e.sent();
                        //console.log('30', performance.now() - start);
                        this.computePositionsBindGroup = device.createBindGroup({
                            layout: this.computePositionsPipeline.getBindGroupLayout(0),
                            entries: [
                                {
                                    binding: 2,
                                    resource: {
                                        buffer: this.voxelMaterialsBuffer
                                    },
                                },
                                {
                                    binding: 3,
                                    resource: {
                                        buffer: this.cornerIndexBuffer
                                    },
                                }
                            ]
                        });
                        //console.log('31', performance.now() - start);
                        //console.log('31.5', performance.now() - start);
                        _d = this;
                        return [4 /*yield*/, device.createComputePipelineAsync({
                                layout: 'auto',
                                compute: {
                                    module: module,
                                    entryPoint: 'main',
                                }
                            })];
                    case 4:
                        //console.log('31', performance.now() - start);
                        //console.log('31.5', performance.now() - start);
                        _d.computeVoxelsPipeline = _e.sent();
                        //console.log('32', performance.now() - start);
                        this.computeVoxelsBindGroup = device.createBindGroup({
                            layout: this.computeVoxelsPipeline.getBindGroupLayout(0),
                            entries: [
                                {
                                    binding: 2,
                                    resource: {
                                        buffer: this.voxelMaterialsBuffer
                                    },
                                },
                                {
                                    binding: 3,
                                    resource: {
                                        buffer: this.cornerIndexBuffer
                                    },
                                },
                                {
                                    binding: 4,
                                    resource: {
                                        buffer: this.voxelsBuffer
                                    },
                                },
                                {
                                    binding: 5,
                                    resource: {
                                        buffer: this.uniformBuffer
                                    },
                                }
                            ]
                        });
                        //console.log('40', performance.now() - start);
                        this.voxelReadBuffer = device.createBuffer({
                            size: Float32Array.BYTES_PER_ELEMENT * 12 * 32 * 32 * 32,
                            usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
                        });
                        augmentationSize = 4 * 4 + 4 * 4;
                        this.augmentationBuffer = device.createBuffer({
                            size: augmentationSize,
                            usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
                            mappedAtCreation: true
                        });
                        augmentations = new Float32Array(this.augmentationBuffer.getMappedRange());
                        augmentations[0] = 2200000.0;
                        this.augmentationBuffer.unmap();
                        this.densityBindGroup = device.createBindGroup({
                            layout: this.computePipeline.getBindGroupLayout(1),
                            entries: [
                                {
                                    binding: 0,
                                    resource: {
                                        buffer: this.augmentationBuffer,
                                    },
                                },
                            ],
                        });
                        this.mainDensityBindGroup = device.createBindGroup({
                            layout: this.computeVoxelsPipeline.getBindGroupLayout(1),
                            entries: [
                                {
                                    binding: 0,
                                    resource: {
                                        buffer: this.augmentationBuffer,
                                    },
                                },
                            ],
                        });
                        console.log('Done', performance.now() - start);
                        return [2 /*return*/];
                }
            });
        });
    };
    Voxel.prototype.generate = function (device, queue, position, stride) {
        var _this = this;
        if (!stride)
            stride = 1;
        return new Promise(function (resolve, _) {
            var permutations = new Int32Array(512);
            var random = new (seedrandom__WEBPACK_IMPORTED_MODULE_4___default())('James');
            for (var i = 0; i < 256; i++)
                permutations[i] = (256 * (random()));
            for (var i = 256; i < 512; i++)
                permutations[i] = permutations[i - 256];
            device.queue.writeBuffer(_this.permutationsBuffer, 0, permutations.buffer, permutations.byteOffset, permutations.byteLength);
            var buffer = new ArrayBuffer(4 * 5);
            var uniform = new Float32Array(buffer, 0, 4);
            uniform.set(position, 0);
            uniform[3] = stride;
            new Uint32Array(buffer, 16, 1)[0] = 33;
            device.queue.writeBuffer(_this.uniformBuffer, 0, buffer, 0, buffer.byteLength);
            var computeEncoder = device.createCommandEncoder();
            var octreeSize = 32;
            var computePassEncoder = computeEncoder.beginComputePass();
            computePassEncoder.setPipeline(_this.computePipeline);
            computePassEncoder.setBindGroup(0, _this.computeBindGroup);
            computePassEncoder.setBindGroup(1, _this.densityBindGroup);
            computePassEncoder.dispatchWorkgroups(octreeSize + 1, octreeSize + 1, octreeSize + 1);
            computePassEncoder.end();
            var computeCornersPass = computeEncoder.beginComputePass();
            computeCornersPass.setPipeline(_this.computeCornersPipeline);
            computeCornersPass.setBindGroup(0, _this.computeCornersBindGroup);
            computeCornersPass.dispatchWorkgroups(octreeSize, octreeSize, octreeSize);
            computeCornersPass.end();
            var computePositionsPass = computeEncoder.beginComputePass();
            computePositionsPass.setPipeline(_this.computePositionsPipeline);
            computePositionsPass.setBindGroup(0, _this.computePositionsBindGroup);
            computePositionsPass.dispatchWorkgroups(1);
            computePositionsPass.end();
            var copyEncoder = device.createCommandEncoder();
            copyEncoder.copyBufferToBuffer(_this.cornerIndexBuffer, 0, _this.gpuReadBuffer, 0, Uint32Array.BYTES_PER_ELEMENT);
            copyEncoder.copyBufferToBuffer(_this.cornerMaterials, 0, _this.cornerMaterialsRead, 0, Uint32Array.BYTES_PER_ELEMENT * 33 * 33 * 33);
            copyEncoder.copyBufferToBuffer(_this.voxelMaterialsBuffer, 0, _this.voxelMaterialsBufferRead, 0, Uint32Array.BYTES_PER_ELEMENT * 32 * 32 * 32);
            queue({
                items: [computeEncoder.finish(), copyEncoder.finish()],
                callback: function () { return __awaiter(_this, void 0, void 0, function () {
                    var corners, arrayBuffer, voxelCount, dispatchCount, computeEncoder, computePassEncoder, copyEncoder;
                    var _this = this;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.cornerMaterialsRead.mapAsync(GPUMapMode.READ)];
                            case 1:
                                _a.sent();
                                corners = new Uint32Array(this.cornerMaterialsRead.getMappedRange()).slice();
                                this.cornerMaterialsRead.unmap();
                                return [4 /*yield*/, this.gpuReadBuffer.mapAsync(GPUMapMode.READ)];
                            case 2:
                                _a.sent();
                                arrayBuffer = this.gpuReadBuffer.getMappedRange();
                                voxelCount = new Uint32Array(arrayBuffer)[0];
                                this.gpuReadBuffer.unmap();
                                if (voxelCount === 0) {
                                    resolve({ vertices: new Float32Array(), normals: new Float32Array(), indices: new Uint16Array(), corners: new Uint32Array() });
                                    return [2 /*return*/];
                                }
                                dispatchCount = Math.ceil(voxelCount / 128);
                                computeEncoder = device.createCommandEncoder();
                                computePassEncoder = computeEncoder.beginComputePass();
                                computePassEncoder.setPipeline(this.computeVoxelsPipeline);
                                computePassEncoder.setBindGroup(0, this.computeVoxelsBindGroup);
                                computePassEncoder.setBindGroup(1, this.mainDensityBindGroup);
                                computePassEncoder.dispatchWorkgroups(dispatchCount);
                                computePassEncoder.end();
                                copyEncoder = device.createCommandEncoder();
                                copyEncoder.copyBufferToBuffer(this.voxelsBuffer, 0, this.voxelReadBuffer, 0, Float32Array.BYTES_PER_ELEMENT * voxelCount * 12);
                                queue({
                                    items: [computeEncoder.finish(), copyEncoder.finish()],
                                    callback: function () { return __awaiter(_this, void 0, void 0, function () {
                                        var arrayBuffer, computedVoxelsData, result;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, this.voxelReadBuffer.mapAsync(GPUMapMode.READ)];
                                                case 1:
                                                    _a.sent();
                                                    arrayBuffer = this.voxelReadBuffer.getMappedRange();
                                                    computedVoxelsData = new Float32Array(arrayBuffer);
                                                    result = computeVoxels(position, stride, voxelCount, computedVoxelsData);
                                                    this.voxelReadBuffer.unmap();
                                                    resolve(__assign(__assign({}, result), { corners: corners }));
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); }
                                });
                                return [2 /*return*/];
                        }
                    });
                }); }
            });
        });
    };
    return Voxel;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Voxel);


/***/ }),

/***/ "./src/world-generator.ts":
/*!********************************!*\
  !*** ./src/world-generator.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorldPosition": () => (/* binding */ WorldPosition),
/* harmony export */   "generatePoints": () => (/* binding */ generatePoints),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var WorldPosition = /** @class */ (function () {
    function WorldPosition() {
    }
    WorldPosition.equal = function (a, b) {
        return a.stride == b.stride && a.x == b.x && a.y == b.y && a.z == b.z;
    };
    return WorldPosition;
}());

function fixPoint(i) {
    if (i >= 0)
        return i + 1;
    return i;
}
function generatePoints(radius) {
    var points = [];
    var diameter = radius * 2;
    for (var x = 0; x < diameter; x++)
        for (var y = 0; y < diameter; y++)
            for (var z = 0; z < diameter; z++) {
                if (!(x === 0 || x === diameter - 1 || y === 0 || y === diameter - 1 || z === 0 || z === diameter - 1)) {
                    continue;
                }
                var point = {
                    x: fixPoint(x - radius),
                    y: fixPoint(y - radius),
                    z: fixPoint(z - radius)
                };
                points.push(point);
            }
    return points;
}
var points = [];
for (var i = 0; i <= 6; i++) {
    points[i] = generatePoints(i);
}
var WorldGenerator = /** @class */ (function () {
    function WorldGenerator(minStride) {
        this.minStride = minStride;
    }
    WorldGenerator.prototype.init = function (x, y, z) {
        return {
            x: Math.round(x / this.minStride) * this.minStride,
            y: Math.round(y / this.minStride) * this.minStride,
            z: Math.round(z / this.minStride) * this.minStride,
            stride: this.minStride,
            iteration: 0,
            layer: 1,
            previousOffset: -1 * this.minStride / 2
        };
    };
    WorldGenerator.prototype.layerRadius = function (layer, stride) {
        if (stride === this.minStride) {
            return layer;
        }
        if (stride === this.minStride * 2) {
            return layer + 1;
        }
        return layer + 2;
    };
    WorldGenerator.prototype.radius = function (layer, stride, previousOffset) {
        return Math.sign(layer) * (previousOffset + (Math.abs(layer) * stride));
    };
    WorldGenerator.prototype.layerCount = function (stride) {
        if (stride == this.minStride * 2)
            return 3;
        return 2;
    };
    WorldGenerator.prototype.next = function (info) {
        var offsets = points[this.layerRadius(info.layer, info.stride)];
        var offset = offsets[info.iteration];
        var halfStride = info.stride / 2;
        var iteration = info.iteration + 1;
        var layer = info.layer;
        var stride = info.stride;
        var previousOffset = info.previousOffset;
        if (iteration >= offsets.length) {
            iteration = 0;
            layer++;
            var layerCount = this.layerCount(info.stride);
            if (layer > layerCount) {
                layer = 1;
                stride *= 2;
                previousOffset = this.radius(info.layer, info.stride, info.previousOffset) - info.stride / 2;
            }
        }
        return [
            {
                x: info.stride * offset.x + info.x - Math.sign(offset.x) * halfStride,
                y: info.stride * offset.y + info.y - Math.sign(offset.y) * halfStride,
                z: info.stride * offset.z + info.z - Math.sign(offset.z) * halfStride,
                stride: info.stride
            },
            __assign(__assign({}, info), { iteration: iteration, layer: layer, stride: stride, previousOffset: previousOffset })
        ];
    };
    return WorldGenerator;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WorldGenerator);


/***/ }),

/***/ "?8465":
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd define */
/******/ 	(() => {
/******/ 		__webpack_require__.amdD = function () {
/******/ 			throw new Error('define cannot be used indirect');
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./node_modules/ts-loader/index.js!./src/contouring.worker.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJncHUtY29tcHV0ZS8uL25vZGVfbW9kdWxlcy9nbC1tYXRyaXgvZXNtL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly93ZWJncHUtY29tcHV0ZS8uL25vZGVfbW9kdWxlcy9nbC1tYXRyaXgvZXNtL3ZlYzMuanMiLCJ3ZWJwYWNrOi8vd2ViZ3B1LWNvbXB1dGUvLi9zcmMvY29tcHV0ZS1jb3JuZXJzLndnc2wiLCJ3ZWJwYWNrOi8vd2ViZ3B1LWNvbXB1dGUvLi9zcmMvY29tcHV0ZS1wb3NpdGlvbnMud2dzbCIsIndlYnBhY2s6Ly93ZWJncHUtY29tcHV0ZS8uL3NyYy9jb21wdXRlLXZveGVscy53Z3NsIiwid2VicGFjazovL3dlYmdwdS1jb21wdXRlLy4vc3JjL2RlbnNpdHkud2dzbCIsIndlYnBhY2s6Ly93ZWJncHUtY29tcHV0ZS8uL25vZGVfbW9kdWxlcy9zZWVkcmFuZG9tL2luZGV4LmpzIiwid2VicGFjazovL3dlYmdwdS1jb21wdXRlLy4vbm9kZV9tb2R1bGVzL3NlZWRyYW5kb20vbGliL2FsZWEuanMiLCJ3ZWJwYWNrOi8vd2ViZ3B1LWNvbXB1dGUvLi9ub2RlX21vZHVsZXMvc2VlZHJhbmRvbS9saWIvdHljaGVpLmpzIiwid2VicGFjazovL3dlYmdwdS1jb21wdXRlLy4vbm9kZV9tb2R1bGVzL3NlZWRyYW5kb20vbGliL3hvcjEyOC5qcyIsIndlYnBhY2s6Ly93ZWJncHUtY29tcHV0ZS8uL25vZGVfbW9kdWxlcy9zZWVkcmFuZG9tL2xpYi94b3I0MDk2LmpzIiwid2VicGFjazovL3dlYmdwdS1jb21wdXRlLy4vbm9kZV9tb2R1bGVzL3NlZWRyYW5kb20vbGliL3hvcnNoaWZ0Ny5qcyIsIndlYnBhY2s6Ly93ZWJncHUtY29tcHV0ZS8uL25vZGVfbW9kdWxlcy9zZWVkcmFuZG9tL2xpYi94b3J3b3cuanMiLCJ3ZWJwYWNrOi8vd2ViZ3B1LWNvbXB1dGUvLi9ub2RlX21vZHVsZXMvc2VlZHJhbmRvbS9zZWVkcmFuZG9tLmpzIiwid2VicGFjazovL3dlYmdwdS1jb21wdXRlLy4vc3JjL2NvbnRvdXJpbmcudHMiLCJ3ZWJwYWNrOi8vd2ViZ3B1LWNvbXB1dGUvLi9zcmMvY29udG91cmluZy53b3JrZXIudHMiLCJ3ZWJwYWNrOi8vd2ViZ3B1LWNvbXB1dGUvLi9zcmMvY291bnREb3duTGF0Y2gudHMiLCJ3ZWJwYWNrOi8vd2ViZ3B1LWNvbXB1dGUvLi9zcmMvb2N0cmVlLnRzIiwid2VicGFjazovL3dlYmdwdS1jb21wdXRlLy4vc3JjL3ZveGVsLnRzIiwid2VicGFjazovL3dlYmdwdS1jb21wdXRlLy4vc3JjL3dvcmxkLWdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly93ZWJncHUtY29tcHV0ZS9pZ25vcmVkfGNyeXB0byIsIndlYnBhY2s6Ly93ZWJncHUtY29tcHV0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJncHUtY29tcHV0ZS93ZWJwYWNrL3J1bnRpbWUvYW1kIGRlZmluZSIsIndlYnBhY2s6Ly93ZWJncHUtY29tcHV0ZS93ZWJwYWNrL3J1bnRpbWUvYW1kIG9wdGlvbnMiLCJ3ZWJwYWNrOi8vd2ViZ3B1LWNvbXB1dGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2ViZ3B1LWNvbXB1dGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYmdwdS1jb21wdXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2ViZ3B1LWNvbXB1dGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJncHUtY29tcHV0ZS93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL3dlYmdwdS1jb21wdXRlL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ0E7QUFDQTtBQUNQO0FBQ0E7QUFDQTtBQUNBLFdBQVcsMkNBQTJDO0FBQ3REOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakR3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLEtBQUs7QUFDbEI7O0FBRU87QUFDUCxnQkFBZ0Isa0RBQW1COztBQUVuQyxNQUFNLGtEQUFtQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLGFBQWEsS0FBSztBQUNsQjs7QUFFTztBQUNQLGdCQUFnQixrREFBbUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixhQUFhLE9BQU87QUFDcEI7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCOztBQUVPO0FBQ1AsZ0JBQWdCLGtEQUFtQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsYUFBYTtBQUN4QixhQUFhLEtBQUs7QUFDbEI7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsS0FBSztBQUNsQjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsYUFBYTtBQUN4QixhQUFhLEtBQUs7QUFDbEI7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsYUFBYTtBQUN4QixXQUFXLGFBQWE7QUFDeEIsYUFBYSxLQUFLO0FBQ2xCOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLGFBQWE7QUFDeEIsV0FBVyxhQUFhO0FBQ3hCLGFBQWEsS0FBSztBQUNsQjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsYUFBYTtBQUN4QixhQUFhLEtBQUs7QUFDbEI7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsYUFBYTtBQUN4QixhQUFhLEtBQUs7QUFDbEI7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsYUFBYTtBQUN4QixhQUFhLEtBQUs7QUFDbEI7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsYUFBYTtBQUN4QixXQUFXLGFBQWE7QUFDeEIsYUFBYSxLQUFLO0FBQ2xCOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLGFBQWE7QUFDeEIsV0FBVyxhQUFhO0FBQ3hCLGFBQWEsS0FBSztBQUNsQjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxhQUFhO0FBQ3hCLGFBQWEsS0FBSztBQUNsQjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsT0FBTztBQUNsQixhQUFhLEtBQUs7QUFDbEI7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsYUFBYTtBQUN4QixXQUFXLGFBQWE7QUFDeEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsS0FBSztBQUNsQjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsV0FBVyxhQUFhO0FBQ3hCLGFBQWEsT0FBTztBQUNwQjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsV0FBVyxhQUFhO0FBQ3hCLGFBQWEsT0FBTztBQUNwQjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsYUFBYSxPQUFPO0FBQ3BCOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLGFBQWE7QUFDeEIsYUFBYSxLQUFLO0FBQ2xCOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLGFBQWE7QUFDeEIsYUFBYSxLQUFLO0FBQ2xCOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLGFBQWE7QUFDeEIsYUFBYSxLQUFLO0FBQ2xCOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLGFBQWE7QUFDeEIsYUFBYSxPQUFPO0FBQ3BCOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLGFBQWE7QUFDeEIsV0FBVyxhQUFhO0FBQ3hCLGFBQWEsS0FBSztBQUNsQjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsYUFBYTtBQUN4QixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLGFBQWE7QUFDeEIsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsYUFBYTtBQUN4QixXQUFXLGFBQWE7QUFDeEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsS0FBSztBQUNsQjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsYUFBYTtBQUN4QixXQUFXLGFBQWE7QUFDeEIsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsYUFBYTtBQUN4QixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsT0FBTztBQUNsQixhQUFhLEtBQUs7QUFDbEI7O0FBRU87QUFDUDtBQUNBLFVBQVUsOENBQWU7QUFDekIsVUFBVSw4Q0FBZTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLGFBQWE7QUFDeEIsV0FBVyxhQUFhO0FBQ3hCLGFBQWEsS0FBSztBQUNsQjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsYUFBYTtBQUN4QixXQUFXLGFBQWE7QUFDeEIsYUFBYSxLQUFLO0FBQ2xCOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsYUFBYTtBQUN4QixXQUFXLGFBQWE7QUFDeEIsYUFBYSxLQUFLO0FBQ2xCOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBLDRCQUE0Qjs7QUFFNUI7QUFDQTtBQUNBLGlDQUFpQzs7QUFFakM7QUFDQTtBQUNBO0FBQ0EsWUFBWTs7QUFFWjtBQUNBO0FBQ0EsWUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLGFBQWE7QUFDeEIsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsT0FBTztBQUNsQixhQUFhLEtBQUs7QUFDbEI7O0FBRU87QUFDUDtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBLHFCQUFxQjs7QUFFckI7QUFDQTtBQUNBLHFEQUFxRDs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsYUFBYTtBQUN4QixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCOztBQUVPO0FBQ1A7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQSxxQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQSxxREFBcUQ7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsYUFBYTtBQUN4QixXQUFXLGFBQWE7QUFDeEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsS0FBSztBQUNsQjs7QUFFTztBQUNQO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0EscUJBQXFCOztBQUVyQjtBQUNBO0FBQ0EsY0FBYzs7QUFFZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLGFBQWE7QUFDeEIsYUFBYSxPQUFPO0FBQ3BCOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsYUFBYSxPQUFPO0FBQ3BCOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLGFBQWE7QUFDeEIsYUFBYSxRQUFRO0FBQ3JCOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLGFBQWE7QUFDeEIsYUFBYSxRQUFRO0FBQ3JCOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLCtDQUFnQixxRUFBcUUsK0NBQWdCLHFFQUFxRSwrQ0FBZ0I7QUFDeE47QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVPO0FBQ1A7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFTztBQUNQO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRU87QUFDUDtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVPO0FBQ1A7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFTztBQUNQO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRU87QUFDUDtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsU0FBUztBQUNwQixXQUFXLE9BQU87QUFDbEIsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUEsb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxHOzs7Ozs7Ozs7Ozs7Ozs7QUNseEJELGlFQUFlLHdCQUF3Qiw0QkFBNEIscUNBQXFDLDRFQUE0RSwyQkFBMkIsb0NBQW9DLGdGQUFnRix1UUFBdVEseUdBQXlHLDBHQUEwRywyR0FBMkcsMEJBQTBCLHNCQUFzQixVQUFVLG9CQUFvQixPQUFPLEVBQUUsMExBQTBMLDZIQUE2SCwwQ0FBMEMsb0JBQW9CLG1CQUFtQixPQUFPLEtBQUssdURBQXVELEdBQUcsQ0FBQyxFOzs7Ozs7Ozs7Ozs7Ozs7QUNBOTZDLGlFQUFlLHdCQUF3QixvQ0FBb0MsMEVBQTBFLHdCQUF3Qix5REFBeUQsMEVBQTBFLDJHQUEyRywyQkFBMkIsdUJBQXVCLFVBQVUsaUNBQWlDLE9BQU8sRUFBRSxxR0FBcUcsZ0RBQWdELGlDQUFpQyxTQUFTLDBCQUEwQixxQkFBcUIsT0FBTyxLQUFLLHlDQUF5QyxHQUFHLENBQUMsRTs7Ozs7Ozs7Ozs7Ozs7O0FDQXh5QixpRUFBZSxzQkFBc0IsK0JBQStCLGtFQUFrRSw0QkFBNEIscUNBQXFDLHFGQUFxRiwyQkFBMkIsb0NBQW9DLG1GQUFtRix3QkFBd0Isd0RBQXdELDZFQUE2RSxvQkFBb0IsK0dBQStHLGtCQUFrQiwrQkFBK0Isb0VBQW9FLGdDQUFnQyxpRUFBaUUsdUVBQXVFLDRSQUE0Uiw4UUFBOFEsb0NBQW9DLGlFQUFpRSxHQUFHLG9EQUFvRCxtREFBbUQsR0FBRyxxWEFBcVgsa0RBQWtELG1CQUFtQixtQkFBbUIsa0JBQWtCLEtBQUssT0FBTyxzQkFBc0IsS0FBSyxxQkFBcUIsbUJBQW1CLGtCQUFrQixLQUFLLE9BQU8sc0JBQXNCLEtBQUsscUJBQXFCLG1CQUFtQixrQkFBa0IsS0FBSyxPQUFPLHNCQUFzQixLQUFLLGlDQUFpQyw2QkFBNkIsNkJBQTZCLG9CQUFvQixnQkFBZ0IsZ0JBQWdCLDZFQUE2RSw2RUFBNkUsNkVBQTZFLGlGQUFpRiw2RUFBNkUsaUZBQWlGLGlGQUFpRixxRkFBcUYsNERBQTRELGdFQUFnRSxnRUFBZ0Usc0VBQXNFLGdFQUFnRSxzRUFBc0Usc0VBQXNFLDRFQUE0RSxvRUFBb0UsZ0VBQWdFLGdFQUFnRSx1Q0FBdUMsdUNBQXVDLHVDQUF1Qyx1Q0FBdUMsdUNBQXVDLHVDQUF1Qyx1Q0FBdUMsb0JBQW9CLEdBQUcsbUhBQW1ILGlDQUFpQyx3Q0FBd0Msd0JBQXdCLCtCQUErQixzQkFBc0IscUJBQXFCLFVBQVUseUJBQXlCLE9BQU8sRUFBRSx3REFBd0QseUJBQXlCLDBDQUEwQyxvQkFBb0Isa0JBQWtCLE9BQU8sS0FBSyxvQkFBb0IsR0FBRyxzR0FBc0csaUNBQWlDLHdDQUF3Qyx3QkFBd0IsK0JBQStCLHNCQUFzQix3REFBd0QsdUJBQXVCLHdDQUF3QyxvQkFBb0IsR0FBRyxnRUFBZ0UsaUVBQWlFLEdBQUcsOENBQThDLGlDQUFpQyxHQUFHLDRDQUE0QyxtREFBbUQsdUVBQXVFLDJCQUEyQixnTkFBZ04sR0FBRyx5RUFBeUUsc0JBQXNCLGlDQUFpQyxLQUFLLG9EQUFvRCx5Q0FBeUMsaUJBQWlCLHVCQUF1Qix3QkFBd0IsS0FBSyxPQUFPLHdCQUF3QixLQUFLLG9CQUFvQixnREFBZ0QseUJBQXlCLDZCQUE2QixHQUFHLG9FQUFvRSxtREFBbUQsR0FBRyw2RUFBNkUsd0JBQXdCLHdCQUF3QixrQ0FBa0Msa0ZBQWtGLEdBQUcsbUNBQW1DLDhCQUE4QixrQ0FBa0MsOEJBQThCLHFDQUFxQyx3QkFBd0Isb0NBQW9DLDRCQUE0QixRQUFRLEVBQUUsMEZBQTBGLDBCQUEwQiwwQkFBMEIsdUZBQXVGLHdCQUF3Qix3QkFBd0IsOEVBQThFLDBCQUEwQiwyQkFBMkIseUJBQXlCLG9FQUFvRSxxQkFBcUIsa0JBQWtCLG9FQUFvRSxxQkFBcUIsa0JBQWtCLG9FQUFvRSxxQkFBcUIsa0JBQWtCLEdBQUcsc0RBQXNELDZCQUE2QixzSUFBc0ksaUJBQWlCLFVBQVUsZ0NBQWdDLE9BQU8sRUFBRSx5QkFBeUIsdUJBQXVCLHVCQUF1QixvQkFBb0Isa0JBQWtCLE9BQU8sS0FBSyxtQ0FBbUMsOERBQThELEdBQUcsK0NBQStDLDZDQUE2QyxpQkFBaUIsS0FBSyxxQkFBcUIsR0FBRyw0RUFBNEUsZ0VBQWdFLGdFQUFnRSxnRUFBZ0UsZ0NBQWdDLGcrQkFBZytCLEdBQUcsc0RBQXNELGtHQUFrRyxrREFBa0QsNERBQTRELHVDQUF1QyxHQUFHLGlEQUFpRCxvRUFBb0UsNkpBQTZKLEdBQUcsNERBQTRELGdDQUFnQyxnQ0FBZ0MsZ0NBQWdDLGdDQUFnQyxnQ0FBZ0MsZ0NBQWdDLCtCQUErQiwyQkFBMkIsMkJBQTJCLDJCQUEyQixzQkFBc0IseUNBQXlDLHFDQUFxQyxxQ0FBcUMscUNBQXFDLEdBQUcsNkNBQTZDLHlDQUF5QyxvQkFBb0IsNkJBQTZCLEdBQUcsa0NBQWtDLDZKQUE2SixzREFBc0Qsc0JBQXNCLG1EQUFtRCwyQ0FBMkMscUNBQXFDLCtDQUErQyxHQUFHLHVHQUF1RyxpQ0FBaUMscUJBQXFCLDRCQUE0Qix5QkFBeUIscUNBQXFDLFVBQVUsMkJBQTJCLE9BQU8sRUFBRSx1REFBdUQsNENBQTRDLG9DQUFvQywyQkFBMkIscUJBQXFCLE9BQU8sb0JBQW9CLHdDQUF3QyxPQUFPLEtBQUssa0NBQWtDLEdBQUcsMkRBQTJELGlDQUFpQywrSUFBK0ksa0dBQWtHLGtHQUFrRyw4Q0FBOEMsR0FBRywyR0FBMkcsOENBQThDLG1EQUFtRCwwQkFBMEIsaURBQWlELG1FQUFtRSw4Q0FBOEMsMkRBQTJELCtEQUErRCxxRUFBcUUsaUhBQWlILGdEQUFnRCxpQ0FBaUMsNkJBQTZCLG1EQUFtRCx3REFBd0QsMENBQTBDLDhEQUE4RCxnQkFBZ0IsdUJBQXVCLFlBQVksc0RBQXNELGdCQUFnQixTQUFTLHNDQUFzQyxvQ0FBb0Msa0RBQWtELGdEQUFnRCwyRUFBMkUsNktBQTZLLDZLQUE2SyxxRUFBcUUsdURBQXVELGtGQUFrRiw4Q0FBOEMsc0NBQXNDLFNBQVMsc0JBQXNCLG9CQUFvQixTQUFTLE9BQU8sK0dBQStHLDhIQUE4SCw0Q0FBNEMsa0RBQWtELGdDQUFnQyx1Q0FBdUMsOERBQThELDhNQUE4TSw4QkFBOEIsT0FBTyw2REFBNkQseURBQXlELDBEQUEwRCx3RkFBd0YsS0FBSyxHQUFHLHFIQUFxSCxpQ0FBaUMsa0hBQWtILGtMQUFrTCwwRUFBMEUsNEJBQTRCLGtFQUFrRSwrRkFBK0Ysd0RBQXdELFNBQVMsT0FBTyxvR0FBb0csU0FBUyxPQUFPLE9BQU8sb0RBQW9ELE9BQU8sR0FBRyxDQUFDLEU7Ozs7Ozs7Ozs7Ozs7OztBQ0EzaWdCLGlFQUFlLG9CQUFvQiw0QkFBNEIsMkJBQTJCLDJCQUEyQiwyQkFBMkIsb0JBQW9CLHFDQUFxQyx5QkFBeUIsNERBQTRELGdGQUFnRixxREFBcUQsMERBQTBELEdBQUcsK0RBQStELG1CQUFtQixvQ0FBb0MsS0FBSyxnQkFBZ0IsR0FBRyw0RkFBNEYsc0RBQXNELG1DQUFtQyx3RkFBd0YseUNBQXlDLGtGQUFrRixHQUFHLGlGQUFpRiw4Q0FBOEMseURBQXlELHlCQUF5QixHQUFHLGlGQUFpRix5RUFBeUUsR0FBRyxxSEFBcUgsaUNBQWlDLHdDQUF3Qyx3QkFBd0IsK0JBQStCLHNCQUFzQixxQkFBcUIsVUFBVSx5QkFBeUIsT0FBTyxFQUFFLGtEQUFrRCx5QkFBeUIsMENBQTBDLG9CQUFvQixrQkFBa0IsT0FBTyxLQUFLLGtCQUFrQixHQUFHLHNHQUFzRyxpQ0FBaUMsd0NBQXdDLHdCQUF3QiwrQkFBK0Isc0JBQXNCLGdEQUFnRCx1QkFBdUIsd0NBQXdDLGtCQUFrQixHQUFHLDZDQUE2QywrQ0FBK0MsRUFBRSxnREFBZ0QsZ0RBQWdELEVBQUUsdUNBQXVDLCtDQUErQyxFQUFFLDBDQUEwQyxtQ0FBbUMsMkVBQTJFLG9EQUFvRCxnQ0FBZ0MsdUJBQXVCLHVFQUF1RSwyRUFBMkUsdUNBQXVDLHVCQUF1Qix1QkFBdUIsOENBQThDLG9DQUFvQyxvQ0FBb0MscUNBQXFDLHNEQUFzRCxxQkFBcUIsOERBQThELGtEQUFrRCx1REFBdUQsdURBQXVELHFDQUFxQyxzREFBc0QscUJBQXFCLDhEQUE4RCxrREFBa0QsdURBQXVELHVEQUF1RCwyREFBMkQseURBQXlELHlEQUF5RCx5REFBeUQseURBQXlELHlEQUF5RCx5REFBeUQseURBQXlELHdIQUF3SCwwQkFBMEIsMEJBQTBCLDBCQUEwQiwwQkFBMEIsc0hBQXNILDBCQUEwQiwwQkFBMEIsMEJBQTBCLDBCQUEwQixnQ0FBZ0MsbURBQW1ELHlEQUF5RCxtREFBbUQsbURBQW1ELHlEQUF5RCxtREFBbUQsOEJBQThCLDJDQUEyQywwQ0FBMEMsK0hBQStILCtEQUErRCxpRkFBaUYsdUJBQXVCLEdBQUcsaUVBQWlFLG1FQUFtRSxHQUFHLCtDQUErQyxpQ0FBaUMsR0FBRyw4REFBOEQsbUNBQW1DLGtFQUFrRSw4RUFBOEUsd0NBQXdDLHVDQUF1QyxvQ0FBb0MscUNBQXFDLG9DQUFvQyxpQ0FBaUMsZ0RBQWdELDRDQUE0QyxnQ0FBZ0MsMkdBQTJHLHFDQUFxQyxnRUFBZ0UsZ0NBQWdDLGtJQUFrSSx1TUFBdU0sMklBQTJJLDhDQUE4QyxrREFBa0Qsc0lBQXNJLDJHQUEyRyx3SEFBd0gscUdBQXFHLGdHQUFnRyxvSEFBb0gsb0hBQW9ILDJHQUEyRyxnREFBZ0Qsc0JBQXNCLFVBQVUsc0JBQXNCLE9BQU8sRUFBRSw0Q0FBNEMsK0pBQStKLHNCQUFzQixtQkFBbUIsT0FBTyxLQUFLLDBDQUEwQyxrQkFBa0IsR0FBRyxvREFBb0QsbURBQW1ELEdBQUcsQ0FBQyxFOzs7Ozs7Ozs7O0FDQTEyUTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCLG9CQUFvQjtBQUNwQiwwQkFBMEI7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBLFdBQVcsbUJBQU8sQ0FBQyx5REFBWTs7QUFFL0I7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQkFBTyxDQUFDLDZEQUFjOztBQUVuQztBQUNBO0FBQ0E7QUFDQSxhQUFhLG1CQUFPLENBQUMsNkRBQWM7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixtQkFBTyxDQUFDLG1FQUFpQjs7QUFFekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLG1CQUFPLENBQUMsK0RBQWU7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1CQUFPLENBQUMsNkRBQWM7O0FBRW5DO0FBQ0E7QUFDQSxTQUFTLG1CQUFPLENBQUMsNkRBQWM7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDM0RBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDREQUE0RDtBQUM1RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsWUFBWTtBQUM5QjtBQUNBLGtCQUFrQixZQUFZO0FBQzlCO0FBQ0Esa0JBQWtCLFlBQVk7QUFDOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixzQ0FBc0M7QUFDakU7QUFDQSxxRUFBcUU7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsbUJBQW1CLEVBQUU7QUFDbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQSw4Q0FBOEM7QUFDOUM7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLENBQUMsVUFBVSx3QkFBTSxJQUFJLHdCQUFVO0FBQy9CLEVBQUUsbUNBQU8sWUFBWSxhQUFhLEVBQUU7QUFBQSxrR0FBQztBQUNyQyxDQUFDO0FBQ0Q7QUFDQTs7QUFFQSxDQUFDO0FBQ0Q7QUFDQSxFQUFFLEtBQTJCO0FBQzdCLEVBQUUsd0JBQXVDO0FBQ3pDOzs7Ozs7Ozs7Ozs7OztBQy9HQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQix5QkFBeUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHdDQUF3QztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixtQkFBbUIsRUFBRTtBQUNsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsVUFBVSx3QkFBTSxJQUFJLHdCQUFVO0FBQy9CLEVBQUUsbUNBQU8sWUFBWSxhQUFhLEVBQUU7QUFBQSxrR0FBQztBQUNyQyxDQUFDO0FBQ0Q7QUFDQTs7QUFFQSxDQUFDO0FBQ0Q7QUFDQSxFQUFFLEtBQTJCO0FBQzdCLEVBQUUsd0JBQXVDO0FBQ3pDOzs7Ozs7Ozs7Ozs7OztBQ3BHQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLHlCQUF5QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsd0NBQXdDO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLG1CQUFtQixFQUFFO0FBQ2xEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxVQUFVLHdCQUFNLElBQUksd0JBQVU7QUFDL0IsRUFBRSxtQ0FBTyxZQUFZLGFBQWEsRUFBRTtBQUFBLGtHQUFDO0FBQ3JDLENBQUM7QUFDRDtBQUNBOztBQUVBLENBQUM7QUFDRDtBQUNBLEVBQUUsS0FBMkI7QUFDN0IsRUFBRSx3QkFBdUM7QUFDekM7Ozs7Ozs7Ozs7Ozs7O0FDOUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCLDhDQUE4QztBQUM5Qyw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsV0FBVztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakMsb0NBQW9DO0FBQ3BDLGlDQUFpQztBQUNqQztBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLE9BQU87QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsd0NBQXdDO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLG1CQUFtQixFQUFFO0FBQ2xEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxVQUFVLHdCQUFNLElBQUksd0JBQVU7QUFDL0IsRUFBRSxtQ0FBTyxZQUFZLGFBQWEsRUFBRTtBQUFBLGtHQUFDO0FBQ3JDLENBQUM7QUFDRDtBQUNBOztBQUVBLENBQUM7QUFDRDtBQUNBLEVBQUUsS0FBMkI7QUFDN0IsRUFBRSx3QkFBdUM7QUFDekM7Ozs7Ozs7Ozs7OztBQ2pKQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxnQkFBZ0I7QUFDN0IsdUJBQXVCO0FBQ3ZCLHVCQUF1QjtBQUN2Qix1QkFBdUI7QUFDdkIsdUJBQXVCLG1CQUFtQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHFCQUFxQjtBQUNwQyw4QkFBOEI7O0FBRTlCO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHdDQUF3QztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixtQkFBbUIsRUFBRTtBQUNsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsVUFBVSx3QkFBTSxJQUFJLHdCQUFVO0FBQy9CLEVBQUUsbUNBQU8sWUFBWSxhQUFhLEVBQUU7QUFBQSxrR0FBQztBQUNyQyxDQUFDO0FBQ0Q7QUFDQTs7QUFFQSxDQUFDO0FBQ0Q7QUFDQSxFQUFFLEtBQTJCO0FBQzdCLEVBQUUsd0JBQXVDO0FBQ3pDOzs7Ozs7Ozs7Ozs7O0FDL0ZBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsYUFBYSxhQUFhO0FBQzFDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIseUJBQXlCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsd0NBQXdDO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLG1CQUFtQixFQUFFO0FBQ2xEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxVQUFVLHdCQUFNLElBQUksd0JBQVU7QUFDL0IsRUFBRSxtQ0FBTyxZQUFZLGFBQWEsRUFBRTtBQUFBLGtHQUFDO0FBQ3JDLENBQUM7QUFDRDtBQUNBOztBQUVBLENBQUM7QUFDRDtBQUNBLEVBQUUsS0FBMkI7QUFDN0IsRUFBRSx3QkFBdUM7QUFDekM7Ozs7Ozs7Ozs7Ozs7QUNuRkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlOztBQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxnQkFBZ0IsaUJBQWlCOztBQUVsRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsOEJBQThCO0FBQzlCLDBCQUEwQjtBQUMxQixpQkFBaUI7QUFDakIsb0JBQW9CO0FBQ3BCO0FBQ0EsMkJBQTJCO0FBQzNCLGFBQWE7QUFDYixhQUFhO0FBQ2IsZUFBZTtBQUNmO0FBQ0EsdUJBQXVCO0FBQ3ZCOztBQUVBLDJCQUEyQixzQkFBc0I7QUFDakQsMkJBQTJCLGdDQUFnQztBQUMzRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsbUJBQW1CO0FBQzNDO0FBQ0EsbUNBQW1DLHFCQUFxQixFQUFFO0FBQzFEOztBQUVBO0FBQ0E7QUFDQSwyQkFBMkIsc0JBQXNCLGFBQWE7O0FBRTlEO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLGtCQUFrQjs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFdBQVc7QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyw0Q0FBNEMsRUFBRTtBQUN6RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksS0FBMkI7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLG1CQUFPLENBQUMscUJBQVE7QUFDakMsR0FBRztBQUNILENBQUMsVUFBVSxJQUEyQztBQUN0RCxFQUFFLG1DQUFPLFlBQVksbUJBQW1CLEVBQUU7QUFBQSxrR0FBQztBQUMzQyxDQUFDLE1BQU0sRUFHTjs7O0FBR0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDNVBBLElBQU0sWUFBWSxHQUFHLENBQUMsQ0FBQztBQUV2QixJQUFNLGdCQUFnQixHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM5SixJQUFNLGdCQUFnQixHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUVoSSxJQUFNLGdCQUFnQixHQUFHO0lBQ3ZCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0NBQzdDLENBQUM7QUFFRixJQUFNLGdCQUFnQixHQUFHO0lBQ3ZCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hGLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hGLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0NBQ2pGLENBQUM7QUFFRixJQUFNLGdCQUFnQixHQUFHO0lBQ3ZCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbEMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNsQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVB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VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDeEJBO1dBQ0E7V0FDQSxFOzs7OztXQ0ZBLDhCOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRTs7OztVQ0pBO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImNvbnRvdXJpbmcud29ya2VyLndvcmtlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDb21tb24gdXRpbGl0aWVzXHJcbiAqIEBtb2R1bGUgZ2xNYXRyaXhcclxuICovXG4vLyBDb25maWd1cmF0aW9uIENvbnN0YW50c1xuZXhwb3J0IHZhciBFUFNJTE9OID0gMC4wMDAwMDE7XG5leHBvcnQgdmFyIEFSUkFZX1RZUEUgPSB0eXBlb2YgRmxvYXQzMkFycmF5ICE9PSAndW5kZWZpbmVkJyA/IEZsb2F0MzJBcnJheSA6IEFycmF5O1xuZXhwb3J0IHZhciBSQU5ET00gPSBNYXRoLnJhbmRvbTtcbi8qKlxyXG4gKiBTZXRzIHRoZSB0eXBlIG9mIGFycmF5IHVzZWQgd2hlbiBjcmVhdGluZyBuZXcgdmVjdG9ycyBhbmQgbWF0cmljZXNcclxuICpcclxuICogQHBhcmFtIHtGbG9hdDMyQXJyYXlDb25zdHJ1Y3RvciB8IEFycmF5Q29uc3RydWN0b3J9IHR5cGUgQXJyYXkgdHlwZSwgc3VjaCBhcyBGbG9hdDMyQXJyYXkgb3IgQXJyYXlcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRNYXRyaXhBcnJheVR5cGUodHlwZSkge1xuICBBUlJBWV9UWVBFID0gdHlwZTtcbn1cbnZhciBkZWdyZWUgPSBNYXRoLlBJIC8gMTgwO1xuLyoqXHJcbiAqIENvbnZlcnQgRGVncmVlIFRvIFJhZGlhblxyXG4gKlxyXG4gKiBAcGFyYW0ge051bWJlcn0gYSBBbmdsZSBpbiBEZWdyZWVzXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gdG9SYWRpYW4oYSkge1xuICByZXR1cm4gYSAqIGRlZ3JlZTtcbn1cbi8qKlxyXG4gKiBUZXN0cyB3aGV0aGVyIG9yIG5vdCB0aGUgYXJndW1lbnRzIGhhdmUgYXBwcm94aW1hdGVseSB0aGUgc2FtZSB2YWx1ZSwgd2l0aGluIGFuIGFic29sdXRlXHJcbiAqIG9yIHJlbGF0aXZlIHRvbGVyYW5jZSBvZiBnbE1hdHJpeC5FUFNJTE9OIChhbiBhYnNvbHV0ZSB0b2xlcmFuY2UgaXMgdXNlZCBmb3IgdmFsdWVzIGxlc3NcclxuICogdGhhbiBvciBlcXVhbCB0byAxLjAsIGFuZCBhIHJlbGF0aXZlIHRvbGVyYW5jZSBpcyB1c2VkIGZvciBsYXJnZXIgdmFsdWVzKVxyXG4gKlxyXG4gKiBAcGFyYW0ge051bWJlcn0gYSBUaGUgZmlyc3QgbnVtYmVyIHRvIHRlc3QuXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBiIFRoZSBzZWNvbmQgbnVtYmVyIHRvIHRlc3QuXHJcbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmIHRoZSBudW1iZXJzIGFyZSBhcHByb3hpbWF0ZWx5IGVxdWFsLCBmYWxzZSBvdGhlcndpc2UuXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZXF1YWxzKGEsIGIpIHtcbiAgcmV0dXJuIE1hdGguYWJzKGEgLSBiKSA8PSBFUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhKSwgTWF0aC5hYnMoYikpO1xufVxuaWYgKCFNYXRoLmh5cG90KSBNYXRoLmh5cG90ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgeSA9IDAsXG4gICAgICBpID0gYXJndW1lbnRzLmxlbmd0aDtcblxuICB3aGlsZSAoaS0tKSB7XG4gICAgeSArPSBhcmd1bWVudHNbaV0gKiBhcmd1bWVudHNbaV07XG4gIH1cblxuICByZXR1cm4gTWF0aC5zcXJ0KHkpO1xufTsiLCJpbXBvcnQgKiBhcyBnbE1hdHJpeCBmcm9tIFwiLi9jb21tb24uanNcIjtcbi8qKlxyXG4gKiAzIERpbWVuc2lvbmFsIFZlY3RvclxyXG4gKiBAbW9kdWxlIHZlYzNcclxuICovXG5cbi8qKlxyXG4gKiBDcmVhdGVzIGEgbmV3LCBlbXB0eSB2ZWMzXHJcbiAqXHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBhIG5ldyAzRCB2ZWN0b3JcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gIHZhciBvdXQgPSBuZXcgZ2xNYXRyaXguQVJSQVlfVFlQRSgzKTtcblxuICBpZiAoZ2xNYXRyaXguQVJSQVlfVFlQRSAhPSBGbG9hdDMyQXJyYXkpIHtcbiAgICBvdXRbMF0gPSAwO1xuICAgIG91dFsxXSA9IDA7XG4gICAgb3V0WzJdID0gMDtcbiAgfVxuXG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ3JlYXRlcyBhIG5ldyB2ZWMzIGluaXRpYWxpemVkIHdpdGggdmFsdWVzIGZyb20gYW4gZXhpc3RpbmcgdmVjdG9yXHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHZlY3RvciB0byBjbG9uZVxyXG4gKiBAcmV0dXJucyB7dmVjM30gYSBuZXcgM0QgdmVjdG9yXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY2xvbmUoYSkge1xuICB2YXIgb3V0ID0gbmV3IGdsTWF0cml4LkFSUkFZX1RZUEUoMyk7XG4gIG91dFswXSA9IGFbMF07XG4gIG91dFsxXSA9IGFbMV07XG4gIG91dFsyXSA9IGFbMl07XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ2FsY3VsYXRlcyB0aGUgbGVuZ3RoIG9mIGEgdmVjM1xyXG4gKlxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB2ZWN0b3IgdG8gY2FsY3VsYXRlIGxlbmd0aCBvZlxyXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBsZW5ndGggb2YgYVxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGxlbmd0aChhKSB7XG4gIHZhciB4ID0gYVswXTtcbiAgdmFyIHkgPSBhWzFdO1xuICB2YXIgeiA9IGFbMl07XG4gIHJldHVybiBNYXRoLmh5cG90KHgsIHksIHopO1xufVxuLyoqXHJcbiAqIENyZWF0ZXMgYSBuZXcgdmVjMyBpbml0aWFsaXplZCB3aXRoIHRoZSBnaXZlbiB2YWx1ZXNcclxuICpcclxuICogQHBhcmFtIHtOdW1iZXJ9IHggWCBjb21wb25lbnRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHkgWSBjb21wb25lbnRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHogWiBjb21wb25lbnRcclxuICogQHJldHVybnMge3ZlYzN9IGEgbmV3IDNEIHZlY3RvclxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21WYWx1ZXMoeCwgeSwgeikge1xuICB2YXIgb3V0ID0gbmV3IGdsTWF0cml4LkFSUkFZX1RZUEUoMyk7XG4gIG91dFswXSA9IHg7XG4gIG91dFsxXSA9IHk7XG4gIG91dFsyXSA9IHo7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ29weSB0aGUgdmFsdWVzIGZyb20gb25lIHZlYzMgdG8gYW5vdGhlclxyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB0aGUgc291cmNlIHZlY3RvclxyXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY29weShvdXQsIGEpIHtcbiAgb3V0WzBdID0gYVswXTtcbiAgb3V0WzFdID0gYVsxXTtcbiAgb3V0WzJdID0gYVsyXTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBTZXQgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWMzIHRvIHRoZSBnaXZlbiB2YWx1ZXNcclxuICpcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtOdW1iZXJ9IHggWCBjb21wb25lbnRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHkgWSBjb21wb25lbnRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHogWiBjb21wb25lbnRcclxuICogQHJldHVybnMge3ZlYzN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHNldChvdXQsIHgsIHksIHopIHtcbiAgb3V0WzBdID0geDtcbiAgb3V0WzFdID0geTtcbiAgb3V0WzJdID0gejtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBBZGRzIHR3byB2ZWMzJ3NcclxuICpcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGQob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gKyBiWzBdO1xuICBvdXRbMV0gPSBhWzFdICsgYlsxXTtcbiAgb3V0WzJdID0gYVsyXSArIGJbMl07XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogU3VidHJhY3RzIHZlY3RvciBiIGZyb20gdmVjdG9yIGFcclxuICpcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJ0cmFjdChvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSAtIGJbMF07XG4gIG91dFsxXSA9IGFbMV0gLSBiWzFdO1xuICBvdXRbMl0gPSBhWzJdIC0gYlsyXTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBNdWx0aXBsaWVzIHR3byB2ZWMzJ3NcclxuICpcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseShvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSAqIGJbMF07XG4gIG91dFsxXSA9IGFbMV0gKiBiWzFdO1xuICBvdXRbMl0gPSBhWzJdICogYlsyXTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBEaXZpZGVzIHR3byB2ZWMzJ3NcclxuICpcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBkaXZpZGUob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gLyBiWzBdO1xuICBvdXRbMV0gPSBhWzFdIC8gYlsxXTtcbiAgb3V0WzJdID0gYVsyXSAvIGJbMl07XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogTWF0aC5jZWlsIHRoZSBjb21wb25lbnRzIG9mIGEgdmVjM1xyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB2ZWN0b3IgdG8gY2VpbFxyXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY2VpbChvdXQsIGEpIHtcbiAgb3V0WzBdID0gTWF0aC5jZWlsKGFbMF0pO1xuICBvdXRbMV0gPSBNYXRoLmNlaWwoYVsxXSk7XG4gIG91dFsyXSA9IE1hdGguY2VpbChhWzJdKTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBNYXRoLmZsb29yIHRoZSBjb21wb25lbnRzIG9mIGEgdmVjM1xyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB2ZWN0b3IgdG8gZmxvb3JcclxuICogQHJldHVybnMge3ZlYzN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGZsb29yKG91dCwgYSkge1xuICBvdXRbMF0gPSBNYXRoLmZsb29yKGFbMF0pO1xuICBvdXRbMV0gPSBNYXRoLmZsb29yKGFbMV0pO1xuICBvdXRbMl0gPSBNYXRoLmZsb29yKGFbMl0pO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFJldHVybnMgdGhlIG1pbmltdW0gb2YgdHdvIHZlYzMnc1xyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHJldHVybnMge3ZlYzN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIG1pbihvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gTWF0aC5taW4oYVswXSwgYlswXSk7XG4gIG91dFsxXSA9IE1hdGgubWluKGFbMV0sIGJbMV0pO1xuICBvdXRbMl0gPSBNYXRoLm1pbihhWzJdLCBiWzJdKTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBtYXhpbXVtIG9mIHR3byB2ZWMzJ3NcclxuICpcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBtYXgob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IE1hdGgubWF4KGFbMF0sIGJbMF0pO1xuICBvdXRbMV0gPSBNYXRoLm1heChhWzFdLCBiWzFdKTtcbiAgb3V0WzJdID0gTWF0aC5tYXgoYVsyXSwgYlsyXSk7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogTWF0aC5yb3VuZCB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzNcclxuICpcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdmVjdG9yIHRvIHJvdW5kXHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByb3VuZChvdXQsIGEpIHtcbiAgb3V0WzBdID0gTWF0aC5yb3VuZChhWzBdKTtcbiAgb3V0WzFdID0gTWF0aC5yb3VuZChhWzFdKTtcbiAgb3V0WzJdID0gTWF0aC5yb3VuZChhWzJdKTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBTY2FsZXMgYSB2ZWMzIGJ5IGEgc2NhbGFyIG51bWJlclxyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB0aGUgdmVjdG9yIHRvIHNjYWxlXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBiIGFtb3VudCB0byBzY2FsZSB0aGUgdmVjdG9yIGJ5XHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZShvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSAqIGI7XG4gIG91dFsxXSA9IGFbMV0gKiBiO1xuICBvdXRbMl0gPSBhWzJdICogYjtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBBZGRzIHR3byB2ZWMzJ3MgYWZ0ZXIgc2NhbGluZyB0aGUgc2Vjb25kIG9wZXJhbmQgYnkgYSBzY2FsYXIgdmFsdWVcclxuICpcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsZSB0aGUgYW1vdW50IHRvIHNjYWxlIGIgYnkgYmVmb3JlIGFkZGluZ1xyXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc2NhbGVBbmRBZGQob3V0LCBhLCBiLCBzY2FsZSkge1xuICBvdXRbMF0gPSBhWzBdICsgYlswXSAqIHNjYWxlO1xuICBvdXRbMV0gPSBhWzFdICsgYlsxXSAqIHNjYWxlO1xuICBvdXRbMl0gPSBhWzJdICsgYlsyXSAqIHNjYWxlO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENhbGN1bGF0ZXMgdGhlIGV1Y2xpZGlhbiBkaXN0YW5jZSBiZXR3ZWVuIHR3byB2ZWMzJ3NcclxuICpcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRpc3RhbmNlIGJldHdlZW4gYSBhbmQgYlxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3RhbmNlKGEsIGIpIHtcbiAgdmFyIHggPSBiWzBdIC0gYVswXTtcbiAgdmFyIHkgPSBiWzFdIC0gYVsxXTtcbiAgdmFyIHogPSBiWzJdIC0gYVsyXTtcbiAgcmV0dXJuIE1hdGguaHlwb3QoeCwgeSwgeik7XG59XG4vKipcclxuICogQ2FsY3VsYXRlcyB0aGUgc3F1YXJlZCBldWNsaWRpYW4gZGlzdGFuY2UgYmV0d2VlbiB0d28gdmVjMydzXHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBzcXVhcmVkIGRpc3RhbmNlIGJldHdlZW4gYSBhbmQgYlxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHNxdWFyZWREaXN0YW5jZShhLCBiKSB7XG4gIHZhciB4ID0gYlswXSAtIGFbMF07XG4gIHZhciB5ID0gYlsxXSAtIGFbMV07XG4gIHZhciB6ID0gYlsyXSAtIGFbMl07XG4gIHJldHVybiB4ICogeCArIHkgKiB5ICsgeiAqIHo7XG59XG4vKipcclxuICogQ2FsY3VsYXRlcyB0aGUgc3F1YXJlZCBsZW5ndGggb2YgYSB2ZWMzXHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHZlY3RvciB0byBjYWxjdWxhdGUgc3F1YXJlZCBsZW5ndGggb2ZcclxuICogQHJldHVybnMge051bWJlcn0gc3F1YXJlZCBsZW5ndGggb2YgYVxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHNxdWFyZWRMZW5ndGgoYSkge1xuICB2YXIgeCA9IGFbMF07XG4gIHZhciB5ID0gYVsxXTtcbiAgdmFyIHogPSBhWzJdO1xuICByZXR1cm4geCAqIHggKyB5ICogeSArIHogKiB6O1xufVxuLyoqXHJcbiAqIE5lZ2F0ZXMgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWMzXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHZlY3RvciB0byBuZWdhdGVcclxuICogQHJldHVybnMge3ZlYzN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIG5lZ2F0ZShvdXQsIGEpIHtcbiAgb3V0WzBdID0gLWFbMF07XG4gIG91dFsxXSA9IC1hWzFdO1xuICBvdXRbMl0gPSAtYVsyXTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBpbnZlcnNlIG9mIHRoZSBjb21wb25lbnRzIG9mIGEgdmVjM1xyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB2ZWN0b3IgdG8gaW52ZXJ0XHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnNlKG91dCwgYSkge1xuICBvdXRbMF0gPSAxLjAgLyBhWzBdO1xuICBvdXRbMV0gPSAxLjAgLyBhWzFdO1xuICBvdXRbMl0gPSAxLjAgLyBhWzJdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIE5vcm1hbGl6ZSBhIHZlYzNcclxuICpcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdmVjdG9yIHRvIG5vcm1hbGl6ZVxyXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplKG91dCwgYSkge1xuICB2YXIgeCA9IGFbMF07XG4gIHZhciB5ID0gYVsxXTtcbiAgdmFyIHogPSBhWzJdO1xuICB2YXIgbGVuID0geCAqIHggKyB5ICogeSArIHogKiB6O1xuXG4gIGlmIChsZW4gPiAwKSB7XG4gICAgLy9UT0RPOiBldmFsdWF0ZSB1c2Ugb2YgZ2xtX2ludnNxcnQgaGVyZT9cbiAgICBsZW4gPSAxIC8gTWF0aC5zcXJ0KGxlbik7XG4gIH1cblxuICBvdXRbMF0gPSBhWzBdICogbGVuO1xuICBvdXRbMV0gPSBhWzFdICogbGVuO1xuICBvdXRbMl0gPSBhWzJdICogbGVuO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENhbGN1bGF0ZXMgdGhlIGRvdCBwcm9kdWN0IG9mIHR3byB2ZWMzJ3NcclxuICpcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRvdCBwcm9kdWN0IG9mIGEgYW5kIGJcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBkb3QoYSwgYikge1xuICByZXR1cm4gYVswXSAqIGJbMF0gKyBhWzFdICogYlsxXSArIGFbMl0gKiBiWzJdO1xufVxuLyoqXHJcbiAqIENvbXB1dGVzIHRoZSBjcm9zcyBwcm9kdWN0IG9mIHR3byB2ZWMzJ3NcclxuICpcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjcm9zcyhvdXQsIGEsIGIpIHtcbiAgdmFyIGF4ID0gYVswXSxcbiAgICAgIGF5ID0gYVsxXSxcbiAgICAgIGF6ID0gYVsyXTtcbiAgdmFyIGJ4ID0gYlswXSxcbiAgICAgIGJ5ID0gYlsxXSxcbiAgICAgIGJ6ID0gYlsyXTtcbiAgb3V0WzBdID0gYXkgKiBieiAtIGF6ICogYnk7XG4gIG91dFsxXSA9IGF6ICogYnggLSBheCAqIGJ6O1xuICBvdXRbMl0gPSBheCAqIGJ5IC0gYXkgKiBieDtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBQZXJmb3JtcyBhIGxpbmVhciBpbnRlcnBvbGF0aW9uIGJldHdlZW4gdHdvIHZlYzMnc1xyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHQgaW50ZXJwb2xhdGlvbiBhbW91bnQsIGluIHRoZSByYW5nZSBbMC0xXSwgYmV0d2VlbiB0aGUgdHdvIGlucHV0c1xyXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbGVycChvdXQsIGEsIGIsIHQpIHtcbiAgdmFyIGF4ID0gYVswXTtcbiAgdmFyIGF5ID0gYVsxXTtcbiAgdmFyIGF6ID0gYVsyXTtcbiAgb3V0WzBdID0gYXggKyB0ICogKGJbMF0gLSBheCk7XG4gIG91dFsxXSA9IGF5ICsgdCAqIChiWzFdIC0gYXkpO1xuICBvdXRbMl0gPSBheiArIHQgKiAoYlsyXSAtIGF6KTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBQZXJmb3JtcyBhIGhlcm1pdGUgaW50ZXJwb2xhdGlvbiB3aXRoIHR3byBjb250cm9sIHBvaW50c1xyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGMgdGhlIHRoaXJkIG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGQgdGhlIGZvdXJ0aCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB0IGludGVycG9sYXRpb24gYW1vdW50LCBpbiB0aGUgcmFuZ2UgWzAtMV0sIGJldHdlZW4gdGhlIHR3byBpbnB1dHNcclxuICogQHJldHVybnMge3ZlYzN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGhlcm1pdGUob3V0LCBhLCBiLCBjLCBkLCB0KSB7XG4gIHZhciBmYWN0b3JUaW1lczIgPSB0ICogdDtcbiAgdmFyIGZhY3RvcjEgPSBmYWN0b3JUaW1lczIgKiAoMiAqIHQgLSAzKSArIDE7XG4gIHZhciBmYWN0b3IyID0gZmFjdG9yVGltZXMyICogKHQgLSAyKSArIHQ7XG4gIHZhciBmYWN0b3IzID0gZmFjdG9yVGltZXMyICogKHQgLSAxKTtcbiAgdmFyIGZhY3RvcjQgPSBmYWN0b3JUaW1lczIgKiAoMyAtIDIgKiB0KTtcbiAgb3V0WzBdID0gYVswXSAqIGZhY3RvcjEgKyBiWzBdICogZmFjdG9yMiArIGNbMF0gKiBmYWN0b3IzICsgZFswXSAqIGZhY3RvcjQ7XG4gIG91dFsxXSA9IGFbMV0gKiBmYWN0b3IxICsgYlsxXSAqIGZhY3RvcjIgKyBjWzFdICogZmFjdG9yMyArIGRbMV0gKiBmYWN0b3I0O1xuICBvdXRbMl0gPSBhWzJdICogZmFjdG9yMSArIGJbMl0gKiBmYWN0b3IyICsgY1syXSAqIGZhY3RvcjMgKyBkWzJdICogZmFjdG9yNDtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBQZXJmb3JtcyBhIGJlemllciBpbnRlcnBvbGF0aW9uIHdpdGggdHdvIGNvbnRyb2wgcG9pbnRzXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYyB0aGUgdGhpcmQgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gZCB0aGUgZm91cnRoIG9wZXJhbmRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHQgaW50ZXJwb2xhdGlvbiBhbW91bnQsIGluIHRoZSByYW5nZSBbMC0xXSwgYmV0d2VlbiB0aGUgdHdvIGlucHV0c1xyXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gYmV6aWVyKG91dCwgYSwgYiwgYywgZCwgdCkge1xuICB2YXIgaW52ZXJzZUZhY3RvciA9IDEgLSB0O1xuICB2YXIgaW52ZXJzZUZhY3RvclRpbWVzVHdvID0gaW52ZXJzZUZhY3RvciAqIGludmVyc2VGYWN0b3I7XG4gIHZhciBmYWN0b3JUaW1lczIgPSB0ICogdDtcbiAgdmFyIGZhY3RvcjEgPSBpbnZlcnNlRmFjdG9yVGltZXNUd28gKiBpbnZlcnNlRmFjdG9yO1xuICB2YXIgZmFjdG9yMiA9IDMgKiB0ICogaW52ZXJzZUZhY3RvclRpbWVzVHdvO1xuICB2YXIgZmFjdG9yMyA9IDMgKiBmYWN0b3JUaW1lczIgKiBpbnZlcnNlRmFjdG9yO1xuICB2YXIgZmFjdG9yNCA9IGZhY3RvclRpbWVzMiAqIHQ7XG4gIG91dFswXSA9IGFbMF0gKiBmYWN0b3IxICsgYlswXSAqIGZhY3RvcjIgKyBjWzBdICogZmFjdG9yMyArIGRbMF0gKiBmYWN0b3I0O1xuICBvdXRbMV0gPSBhWzFdICogZmFjdG9yMSArIGJbMV0gKiBmYWN0b3IyICsgY1sxXSAqIGZhY3RvcjMgKyBkWzFdICogZmFjdG9yNDtcbiAgb3V0WzJdID0gYVsyXSAqIGZhY3RvcjEgKyBiWzJdICogZmFjdG9yMiArIGNbMl0gKiBmYWN0b3IzICsgZFsyXSAqIGZhY3RvcjQ7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogR2VuZXJhdGVzIGEgcmFuZG9tIHZlY3RvciB3aXRoIHRoZSBnaXZlbiBzY2FsZVxyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge051bWJlcn0gW3NjYWxlXSBMZW5ndGggb2YgdGhlIHJlc3VsdGluZyB2ZWN0b3IuIElmIG9tbWl0dGVkLCBhIHVuaXQgdmVjdG9yIHdpbGwgYmUgcmV0dXJuZWRcclxuICogQHJldHVybnMge3ZlYzN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbShvdXQsIHNjYWxlKSB7XG4gIHNjYWxlID0gc2NhbGUgfHwgMS4wO1xuICB2YXIgciA9IGdsTWF0cml4LlJBTkRPTSgpICogMi4wICogTWF0aC5QSTtcbiAgdmFyIHogPSBnbE1hdHJpeC5SQU5ET00oKSAqIDIuMCAtIDEuMDtcbiAgdmFyIHpTY2FsZSA9IE1hdGguc3FydCgxLjAgLSB6ICogeikgKiBzY2FsZTtcbiAgb3V0WzBdID0gTWF0aC5jb3MocikgKiB6U2NhbGU7XG4gIG91dFsxXSA9IE1hdGguc2luKHIpICogelNjYWxlO1xuICBvdXRbMl0gPSB6ICogc2NhbGU7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogVHJhbnNmb3JtcyB0aGUgdmVjMyB3aXRoIGEgbWF0NC5cclxuICogNHRoIHZlY3RvciBjb21wb25lbnQgaXMgaW1wbGljaXRseSAnMSdcclxuICpcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdGhlIHZlY3RvciB0byB0cmFuc2Zvcm1cclxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IG0gbWF0cml4IHRvIHRyYW5zZm9ybSB3aXRoXHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1NYXQ0KG91dCwgYSwgbSkge1xuICB2YXIgeCA9IGFbMF0sXG4gICAgICB5ID0gYVsxXSxcbiAgICAgIHogPSBhWzJdO1xuICB2YXIgdyA9IG1bM10gKiB4ICsgbVs3XSAqIHkgKyBtWzExXSAqIHogKyBtWzE1XTtcbiAgdyA9IHcgfHwgMS4wO1xuICBvdXRbMF0gPSAobVswXSAqIHggKyBtWzRdICogeSArIG1bOF0gKiB6ICsgbVsxMl0pIC8gdztcbiAgb3V0WzFdID0gKG1bMV0gKiB4ICsgbVs1XSAqIHkgKyBtWzldICogeiArIG1bMTNdKSAvIHc7XG4gIG91dFsyXSA9IChtWzJdICogeCArIG1bNl0gKiB5ICsgbVsxMF0gKiB6ICsgbVsxNF0pIC8gdztcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBUcmFuc2Zvcm1zIHRoZSB2ZWMzIHdpdGggYSBtYXQzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB0aGUgdmVjdG9yIHRvIHRyYW5zZm9ybVxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0M30gbSB0aGUgM3gzIG1hdHJpeCB0byB0cmFuc2Zvcm0gd2l0aFxyXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtTWF0MyhvdXQsIGEsIG0pIHtcbiAgdmFyIHggPSBhWzBdLFxuICAgICAgeSA9IGFbMV0sXG4gICAgICB6ID0gYVsyXTtcbiAgb3V0WzBdID0geCAqIG1bMF0gKyB5ICogbVszXSArIHogKiBtWzZdO1xuICBvdXRbMV0gPSB4ICogbVsxXSArIHkgKiBtWzRdICsgeiAqIG1bN107XG4gIG91dFsyXSA9IHggKiBtWzJdICsgeSAqIG1bNV0gKyB6ICogbVs4XTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBUcmFuc2Zvcm1zIHRoZSB2ZWMzIHdpdGggYSBxdWF0XHJcbiAqIENhbiBhbHNvIGJlIHVzZWQgZm9yIGR1YWwgcXVhdGVybmlvbnMuIChNdWx0aXBseSBpdCB3aXRoIHRoZSByZWFsIHBhcnQpXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHRoZSB2ZWN0b3IgdG8gdHJhbnNmb3JtXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBxIHF1YXRlcm5pb24gdG8gdHJhbnNmb3JtIHdpdGhcclxuICogQHJldHVybnMge3ZlYzN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybVF1YXQob3V0LCBhLCBxKSB7XG4gIC8vIGJlbmNobWFya3M6IGh0dHBzOi8vanNwZXJmLmNvbS9xdWF0ZXJuaW9uLXRyYW5zZm9ybS12ZWMzLWltcGxlbWVudGF0aW9ucy1maXhlZFxuICB2YXIgcXggPSBxWzBdLFxuICAgICAgcXkgPSBxWzFdLFxuICAgICAgcXogPSBxWzJdLFxuICAgICAgcXcgPSBxWzNdO1xuICB2YXIgeCA9IGFbMF0sXG4gICAgICB5ID0gYVsxXSxcbiAgICAgIHogPSBhWzJdOyAvLyB2YXIgcXZlYyA9IFtxeCwgcXksIHF6XTtcbiAgLy8gdmFyIHV2ID0gdmVjMy5jcm9zcyhbXSwgcXZlYywgYSk7XG5cbiAgdmFyIHV2eCA9IHF5ICogeiAtIHF6ICogeSxcbiAgICAgIHV2eSA9IHF6ICogeCAtIHF4ICogeixcbiAgICAgIHV2eiA9IHF4ICogeSAtIHF5ICogeDsgLy8gdmFyIHV1diA9IHZlYzMuY3Jvc3MoW10sIHF2ZWMsIHV2KTtcblxuICB2YXIgdXV2eCA9IHF5ICogdXZ6IC0gcXogKiB1dnksXG4gICAgICB1dXZ5ID0gcXogKiB1dnggLSBxeCAqIHV2eixcbiAgICAgIHV1dnogPSBxeCAqIHV2eSAtIHF5ICogdXZ4OyAvLyB2ZWMzLnNjYWxlKHV2LCB1diwgMiAqIHcpO1xuXG4gIHZhciB3MiA9IHF3ICogMjtcbiAgdXZ4ICo9IHcyO1xuICB1dnkgKj0gdzI7XG4gIHV2eiAqPSB3MjsgLy8gdmVjMy5zY2FsZSh1dXYsIHV1diwgMik7XG5cbiAgdXV2eCAqPSAyO1xuICB1dXZ5ICo9IDI7XG4gIHV1dnogKj0gMjsgLy8gcmV0dXJuIHZlYzMuYWRkKG91dCwgYSwgdmVjMy5hZGQob3V0LCB1diwgdXV2KSk7XG5cbiAgb3V0WzBdID0geCArIHV2eCArIHV1dng7XG4gIG91dFsxXSA9IHkgKyB1dnkgKyB1dXZ5O1xuICBvdXRbMl0gPSB6ICsgdXZ6ICsgdXV2ejtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBSb3RhdGUgYSAzRCB2ZWN0b3IgYXJvdW5kIHRoZSB4LWF4aXNcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgVGhlIHJlY2VpdmluZyB2ZWMzXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIFRoZSB2ZWMzIHBvaW50IHRvIHJvdGF0ZVxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYiBUaGUgb3JpZ2luIG9mIHRoZSByb3RhdGlvblxyXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIFRoZSBhbmdsZSBvZiByb3RhdGlvbiBpbiByYWRpYW5zXHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVYKG91dCwgYSwgYiwgcmFkKSB7XG4gIHZhciBwID0gW10sXG4gICAgICByID0gW107IC8vVHJhbnNsYXRlIHBvaW50IHRvIHRoZSBvcmlnaW5cblxuICBwWzBdID0gYVswXSAtIGJbMF07XG4gIHBbMV0gPSBhWzFdIC0gYlsxXTtcbiAgcFsyXSA9IGFbMl0gLSBiWzJdOyAvL3BlcmZvcm0gcm90YXRpb25cblxuICByWzBdID0gcFswXTtcbiAgclsxXSA9IHBbMV0gKiBNYXRoLmNvcyhyYWQpIC0gcFsyXSAqIE1hdGguc2luKHJhZCk7XG4gIHJbMl0gPSBwWzFdICogTWF0aC5zaW4ocmFkKSArIHBbMl0gKiBNYXRoLmNvcyhyYWQpOyAvL3RyYW5zbGF0ZSB0byBjb3JyZWN0IHBvc2l0aW9uXG5cbiAgb3V0WzBdID0gclswXSArIGJbMF07XG4gIG91dFsxXSA9IHJbMV0gKyBiWzFdO1xuICBvdXRbMl0gPSByWzJdICsgYlsyXTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBSb3RhdGUgYSAzRCB2ZWN0b3IgYXJvdW5kIHRoZSB5LWF4aXNcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgVGhlIHJlY2VpdmluZyB2ZWMzXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIFRoZSB2ZWMzIHBvaW50IHRvIHJvdGF0ZVxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYiBUaGUgb3JpZ2luIG9mIHRoZSByb3RhdGlvblxyXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIFRoZSBhbmdsZSBvZiByb3RhdGlvbiBpbiByYWRpYW5zXHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVZKG91dCwgYSwgYiwgcmFkKSB7XG4gIHZhciBwID0gW10sXG4gICAgICByID0gW107IC8vVHJhbnNsYXRlIHBvaW50IHRvIHRoZSBvcmlnaW5cblxuICBwWzBdID0gYVswXSAtIGJbMF07XG4gIHBbMV0gPSBhWzFdIC0gYlsxXTtcbiAgcFsyXSA9IGFbMl0gLSBiWzJdOyAvL3BlcmZvcm0gcm90YXRpb25cblxuICByWzBdID0gcFsyXSAqIE1hdGguc2luKHJhZCkgKyBwWzBdICogTWF0aC5jb3MocmFkKTtcbiAgclsxXSA9IHBbMV07XG4gIHJbMl0gPSBwWzJdICogTWF0aC5jb3MocmFkKSAtIHBbMF0gKiBNYXRoLnNpbihyYWQpOyAvL3RyYW5zbGF0ZSB0byBjb3JyZWN0IHBvc2l0aW9uXG5cbiAgb3V0WzBdID0gclswXSArIGJbMF07XG4gIG91dFsxXSA9IHJbMV0gKyBiWzFdO1xuICBvdXRbMl0gPSByWzJdICsgYlsyXTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBSb3RhdGUgYSAzRCB2ZWN0b3IgYXJvdW5kIHRoZSB6LWF4aXNcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgVGhlIHJlY2VpdmluZyB2ZWMzXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIFRoZSB2ZWMzIHBvaW50IHRvIHJvdGF0ZVxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYiBUaGUgb3JpZ2luIG9mIHRoZSByb3RhdGlvblxyXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIFRoZSBhbmdsZSBvZiByb3RhdGlvbiBpbiByYWRpYW5zXHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVaKG91dCwgYSwgYiwgcmFkKSB7XG4gIHZhciBwID0gW10sXG4gICAgICByID0gW107IC8vVHJhbnNsYXRlIHBvaW50IHRvIHRoZSBvcmlnaW5cblxuICBwWzBdID0gYVswXSAtIGJbMF07XG4gIHBbMV0gPSBhWzFdIC0gYlsxXTtcbiAgcFsyXSA9IGFbMl0gLSBiWzJdOyAvL3BlcmZvcm0gcm90YXRpb25cblxuICByWzBdID0gcFswXSAqIE1hdGguY29zKHJhZCkgLSBwWzFdICogTWF0aC5zaW4ocmFkKTtcbiAgclsxXSA9IHBbMF0gKiBNYXRoLnNpbihyYWQpICsgcFsxXSAqIE1hdGguY29zKHJhZCk7XG4gIHJbMl0gPSBwWzJdOyAvL3RyYW5zbGF0ZSB0byBjb3JyZWN0IHBvc2l0aW9uXG5cbiAgb3V0WzBdID0gclswXSArIGJbMF07XG4gIG91dFsxXSA9IHJbMV0gKyBiWzFdO1xuICBvdXRbMl0gPSByWzJdICsgYlsyXTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBHZXQgdGhlIGFuZ2xlIGJldHdlZW4gdHdvIDNEIHZlY3RvcnNcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgVGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGIgVGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IFRoZSBhbmdsZSBpbiByYWRpYW5zXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gYW5nbGUoYSwgYikge1xuICB2YXIgYXggPSBhWzBdLFxuICAgICAgYXkgPSBhWzFdLFxuICAgICAgYXogPSBhWzJdLFxuICAgICAgYnggPSBiWzBdLFxuICAgICAgYnkgPSBiWzFdLFxuICAgICAgYnogPSBiWzJdLFxuICAgICAgbWFnMSA9IE1hdGguc3FydChheCAqIGF4ICsgYXkgKiBheSArIGF6ICogYXopLFxuICAgICAgbWFnMiA9IE1hdGguc3FydChieCAqIGJ4ICsgYnkgKiBieSArIGJ6ICogYnopLFxuICAgICAgbWFnID0gbWFnMSAqIG1hZzIsXG4gICAgICBjb3NpbmUgPSBtYWcgJiYgZG90KGEsIGIpIC8gbWFnO1xuICByZXR1cm4gTWF0aC5hY29zKE1hdGgubWluKE1hdGgubWF4KGNvc2luZSwgLTEpLCAxKSk7XG59XG4vKipcclxuICogU2V0IHRoZSBjb21wb25lbnRzIG9mIGEgdmVjMyB0byB6ZXJvXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiB6ZXJvKG91dCkge1xuICBvdXRbMF0gPSAwLjA7XG4gIG91dFsxXSA9IDAuMDtcbiAgb3V0WzJdID0gMC4wO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSB2ZWN0b3JcclxuICpcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdmVjdG9yIHRvIHJlcHJlc2VudCBhcyBhIHN0cmluZ1xyXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZlY3RvclxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHN0cihhKSB7XG4gIHJldHVybiBcInZlYzMoXCIgKyBhWzBdICsgXCIsIFwiICsgYVsxXSArIFwiLCBcIiArIGFbMl0gKyBcIilcIjtcbn1cbi8qKlxyXG4gKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSB2ZWN0b3JzIGhhdmUgZXhhY3RseSB0aGUgc2FtZSBlbGVtZW50cyBpbiB0aGUgc2FtZSBwb3NpdGlvbiAod2hlbiBjb21wYXJlZCB3aXRoID09PSlcclxuICpcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgVGhlIGZpcnN0IHZlY3Rvci5cclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGIgVGhlIHNlY29uZCB2ZWN0b3IuXHJcbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmIHRoZSB2ZWN0b3JzIGFyZSBlcXVhbCwgZmFsc2Ugb3RoZXJ3aXNlLlxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGV4YWN0RXF1YWxzKGEsIGIpIHtcbiAgcmV0dXJuIGFbMF0gPT09IGJbMF0gJiYgYVsxXSA9PT0gYlsxXSAmJiBhWzJdID09PSBiWzJdO1xufVxuLyoqXHJcbiAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIHZlY3RvcnMgaGF2ZSBhcHByb3hpbWF0ZWx5IHRoZSBzYW1lIGVsZW1lbnRzIGluIHRoZSBzYW1lIHBvc2l0aW9uLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSBUaGUgZmlyc3QgdmVjdG9yLlxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYiBUaGUgc2Vjb25kIHZlY3Rvci5cclxuICogQHJldHVybnMge0Jvb2xlYW59IFRydWUgaWYgdGhlIHZlY3RvcnMgYXJlIGVxdWFsLCBmYWxzZSBvdGhlcndpc2UuXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZXF1YWxzKGEsIGIpIHtcbiAgdmFyIGEwID0gYVswXSxcbiAgICAgIGExID0gYVsxXSxcbiAgICAgIGEyID0gYVsyXTtcbiAgdmFyIGIwID0gYlswXSxcbiAgICAgIGIxID0gYlsxXSxcbiAgICAgIGIyID0gYlsyXTtcbiAgcmV0dXJuIE1hdGguYWJzKGEwIC0gYjApIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGEwKSwgTWF0aC5hYnMoYjApKSAmJiBNYXRoLmFicyhhMSAtIGIxKSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMSksIE1hdGguYWJzKGIxKSkgJiYgTWF0aC5hYnMoYTIgLSBiMikgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTIpLCBNYXRoLmFicyhiMikpO1xufVxuLyoqXHJcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjMy5zdWJ0cmFjdH1cclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgdmFyIHN1YiA9IHN1YnRyYWN0O1xuLyoqXHJcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjMy5tdWx0aXBseX1cclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgdmFyIG11bCA9IG11bHRpcGx5O1xuLyoqXHJcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjMy5kaXZpZGV9XHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBkaXYgPSBkaXZpZGU7XG4vKipcclxuICogQWxpYXMgZm9yIHtAbGluayB2ZWMzLmRpc3RhbmNlfVxyXG4gKiBAZnVuY3Rpb25cclxuICovXG5cbmV4cG9ydCB2YXIgZGlzdCA9IGRpc3RhbmNlO1xuLyoqXHJcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjMy5zcXVhcmVkRGlzdGFuY2V9XHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBzcXJEaXN0ID0gc3F1YXJlZERpc3RhbmNlO1xuLyoqXHJcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjMy5sZW5ndGh9XHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBsZW4gPSBsZW5ndGg7XG4vKipcclxuICogQWxpYXMgZm9yIHtAbGluayB2ZWMzLnNxdWFyZWRMZW5ndGh9XHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBzcXJMZW4gPSBzcXVhcmVkTGVuZ3RoO1xuLyoqXHJcbiAqIFBlcmZvcm0gc29tZSBvcGVyYXRpb24gb3ZlciBhbiBhcnJheSBvZiB2ZWMzcy5cclxuICpcclxuICogQHBhcmFtIHtBcnJheX0gYSB0aGUgYXJyYXkgb2YgdmVjdG9ycyB0byBpdGVyYXRlIG92ZXJcclxuICogQHBhcmFtIHtOdW1iZXJ9IHN0cmlkZSBOdW1iZXIgb2YgZWxlbWVudHMgYmV0d2VlbiB0aGUgc3RhcnQgb2YgZWFjaCB2ZWMzLiBJZiAwIGFzc3VtZXMgdGlnaHRseSBwYWNrZWRcclxuICogQHBhcmFtIHtOdW1iZXJ9IG9mZnNldCBOdW1iZXIgb2YgZWxlbWVudHMgdG8gc2tpcCBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBhcnJheVxyXG4gKiBAcGFyYW0ge051bWJlcn0gY291bnQgTnVtYmVyIG9mIHZlYzNzIHRvIGl0ZXJhdGUgb3Zlci4gSWYgMCBpdGVyYXRlcyBvdmVyIGVudGlyZSBhcnJheVxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBGdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIHZlY3RvciBpbiB0aGUgYXJyYXlcclxuICogQHBhcmFtIHtPYmplY3R9IFthcmddIGFkZGl0aW9uYWwgYXJndW1lbnQgdG8gcGFzcyB0byBmblxyXG4gKiBAcmV0dXJucyB7QXJyYXl9IGFcclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgdmFyIGZvckVhY2ggPSBmdW5jdGlvbiAoKSB7XG4gIHZhciB2ZWMgPSBjcmVhdGUoKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhLCBzdHJpZGUsIG9mZnNldCwgY291bnQsIGZuLCBhcmcpIHtcbiAgICB2YXIgaSwgbDtcblxuICAgIGlmICghc3RyaWRlKSB7XG4gICAgICBzdHJpZGUgPSAzO1xuICAgIH1cblxuICAgIGlmICghb2Zmc2V0KSB7XG4gICAgICBvZmZzZXQgPSAwO1xuICAgIH1cblxuICAgIGlmIChjb3VudCkge1xuICAgICAgbCA9IE1hdGgubWluKGNvdW50ICogc3RyaWRlICsgb2Zmc2V0LCBhLmxlbmd0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGwgPSBhLmxlbmd0aDtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSBvZmZzZXQ7IGkgPCBsOyBpICs9IHN0cmlkZSkge1xuICAgICAgdmVjWzBdID0gYVtpXTtcbiAgICAgIHZlY1sxXSA9IGFbaSArIDFdO1xuICAgICAgdmVjWzJdID0gYVtpICsgMl07XG4gICAgICBmbih2ZWMsIHZlYywgYXJnKTtcbiAgICAgIGFbaV0gPSB2ZWNbMF07XG4gICAgICBhW2kgKyAxXSA9IHZlY1sxXTtcbiAgICAgIGFbaSArIDJdID0gdmVjWzJdO1xuICAgIH1cblxuICAgIHJldHVybiBhO1xuICB9O1xufSgpOyIsImV4cG9ydCBkZWZhdWx0IFwiY29uc3QgT2N0cmVlU2l6ZSA9IDMydTtcXG5cXG5zdHJ1Y3QgQ29ybmVyTWF0ZXJpYWxzIHtcXG4gIGNvcm5lck1hdGVyaWFscyA6IGFycmF5PHUzMj4sXFxufTtcXG5AYmluZGluZygxKSBAZ3JvdXAoMCkgdmFyPHN0b3JhZ2UsIHJlYWQ+IGNvcm5lck1hdGVyaWFsczogQ29ybmVyTWF0ZXJpYWxzO1xcblxcbnN0cnVjdCBWb3hlbE1hdGVyaWFscyB7XFxuICB2b3hlbE1hdGVyaWFscyA6IGFycmF5PHUzMj4sXFxufTtcXG5AYmluZGluZygyKSBAZ3JvdXAoMCkgdmFyPHN0b3JhZ2UsIHJlYWRfd3JpdGU+IHZveGVsTWF0ZXJpYWxzOiBWb3hlbE1hdGVyaWFscztcXG5cXG5jb25zdCBDSElMRF9NSU5fT0ZGU0VUUyA9IGFycmF5PHZlYzM8dTMyPiwgOD5cXG4oXFxuICB2ZWMzPHUzMj4oMHUsIDB1LCAwdSksXFxuICB2ZWMzPHUzMj4oMHUsIDB1LCAxdSksXFxuICB2ZWMzPHUzMj4oMHUsIDF1LCAwdSksXFxuICB2ZWMzPHUzMj4oMHUsIDF1LCAxdSksXFxuICB2ZWMzPHUzMj4oMXUsIDB1LCAwdSksXFxuICB2ZWMzPHUzMj4oMXUsIDB1LCAxdSksXFxuICB2ZWMzPHUzMj4oMXUsIDF1LCAwdSksXFxuICB2ZWMzPHUzMj4oMXUsIDF1LCAxdSlcXG4pO1xcblxcbkBjb21wdXRlIEB3b3JrZ3JvdXBfc2l6ZSgxKVxcbmZuIG1haW4oQGJ1aWx0aW4oZ2xvYmFsX2ludm9jYXRpb25faWQpIEdsb2JhbEludm9jYXRpb25JRCA6IHZlYzM8dTMyPikge1xcbiAgbGV0IGluZGV4OiB1MzIgPSBHbG9iYWxJbnZvY2F0aW9uSUQueiAqIDMydSAqIDMydSArIEdsb2JhbEludm9jYXRpb25JRC55ICogMzJ1ICsgR2xvYmFsSW52b2NhdGlvbklELng7XFxuXFxuICBsZXQgbm9kZVBvczogdmVjMzx1MzI+ID0gdmVjMzx1MzI+KEdsb2JhbEludm9jYXRpb25JRC54LCBHbG9iYWxJbnZvY2F0aW9uSUQueSwgR2xvYmFsSW52b2NhdGlvbklELnopO1xcbiAgdmFyIGNvcm5lcnM6IHUzMiA9IDB1O1xcblxcbiAgdmFyIGo6IHUzMiA9IDB1O1xcbiAgbG9vcCB7XFxuICAgIGlmIChqID49IDh1KSB7IGJyZWFrOyB9XFxuXFxuICAgIGxldCBjb3JuZXJQb3M6IHZlYzM8dTMyPiA9IHZlYzM8dTMyPihHbG9iYWxJbnZvY2F0aW9uSUQueCArIENISUxEX01JTl9PRkZTRVRTW2pdLngsIEdsb2JhbEludm9jYXRpb25JRC55ICsgQ0hJTERfTUlOX09GRlNFVFNbal0ueSwgR2xvYmFsSW52b2NhdGlvbklELnogKyBDSElMRF9NSU5fT0ZGU0VUU1tqXS56KTtcXG4gICAgbGV0IG1hdGVyaWFsOiB1MzIgPSBtaW4oMSwgY29ybmVyTWF0ZXJpYWxzLmNvcm5lck1hdGVyaWFsc1tjb3JuZXJQb3MueiAqIDMzdSAqIDMzdSArIGNvcm5lclBvcy55ICogMzN1ICsgY29ybmVyUG9zLnhdKTtcXG4gICAgY29ybmVycyA9IGNvcm5lcnMgfCAobWF0ZXJpYWwgPDwgaik7XFxuXFxuICAgIGNvbnRpbnVpbmcge1xcbiAgICAgIGogPSBqICsgMXU7XFxuICAgIH1cXG4gIH1cXG4gIFxcbiAgdm94ZWxNYXRlcmlhbHMudm94ZWxNYXRlcmlhbHNbaW5kZXhdID0gY29ybmVycztcXG59XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJzdHJ1Y3QgVm94ZWxNYXRlcmlhbHMge1xcbiAgdm94ZWxNYXRlcmlhbHMgOiBhcnJheTx1MzI+LFxcbn07XFxuQGJpbmRpbmcoMikgQGdyb3VwKDApIHZhcjxzdG9yYWdlLCByZWFkPiB2b3hlbE1hdGVyaWFsczogVm94ZWxNYXRlcmlhbHM7XFxuXFxuc3RydWN0IENvcm5lckluZGV4IHtcXG4gIGNvcm5lckNvdW50IDogdTMyLFxcbiAgY29ybmVySW5kZXhlcyA6IGFycmF5PHUzMj4sXFxufTtcXG5AYmluZGluZygzKSBAZ3JvdXAoMCkgdmFyPHN0b3JhZ2UsIHJlYWRfd3JpdGU+IGNvcm5lckluZGV4OiBDb3JuZXJJbmRleDtcXG5cXG5cXG5AY29tcHV0ZSBAd29ya2dyb3VwX3NpemUoMSlcXG5mbiBtYWluKEBidWlsdGluKGdsb2JhbF9pbnZvY2F0aW9uX2lkKSBHbG9iYWxJbnZvY2F0aW9uSUQgOiB2ZWMzPHUzMj4pIHtcXG5cXHR2YXIgcG9zaXRpb246IHUzMiA9IDB1O1xcblxcblxcdHZhciBpIDogdTMyID0gMHU7XFxuXFx0bG9vcCB7XFxuXFx0XFx0aWYgKGkgPj0gMzJ1ICogMzJ1ICogMzJ1KSB7IGJyZWFrOyB9XFxuXFx0XFx0XFxuXFx0XFx0aWYgKHZveGVsTWF0ZXJpYWxzLnZveGVsTWF0ZXJpYWxzW2ldICE9IDB1ICYmIHZveGVsTWF0ZXJpYWxzLnZveGVsTWF0ZXJpYWxzW2ldICE9IDI1NXUpIHtcXG5cXHRcXHRcXHRjb3JuZXJJbmRleC5jb3JuZXJJbmRleGVzW3Bvc2l0aW9uXSA9IGk7XFxuXFx0XFx0XFx0cG9zaXRpb24gPSBwb3NpdGlvbiArIDF1OyAgXFxuXFx0XFx0fVxcblxcdFxcdFxcdFxcblxcdFxcdGNvbnRpbnVpbmcgeyAgXFxuXFx0XFx0XFx0aSA9IGkgKyAxdTtcXG5cXHRcXHR9XFxuXFx0fVxcblxcblxcdGNvcm5lckluZGV4LmNvcm5lckNvdW50ID0gcG9zaXRpb247XFxufVwiOyIsImV4cG9ydCBkZWZhdWx0IFwic3RydWN0IFBlcm11dGF0aW9ucyB7XFxuICBQZXJtIDogYXJyYXk8aTMyLCA1MTI+LFxcbn07XFxuXFxuQGJpbmRpbmcoMCkgQGdyb3VwKDApXFxudmFyPHN0b3JhZ2UsIHJlYWQ+IHBlcm0gOiBQZXJtdXRhdGlvbnM7XFxuXFxuc3RydWN0IENvcm5lck1hdGVyaWFscyB7XFxuICBjb3JuZXJNYXRlcmlhbHMgOiBhcnJheTx1MzI+LFxcbn07XFxuXFxuQGJpbmRpbmcoMSkgQGdyb3VwKDApXFxudmFyPHN0b3JhZ2UsIHJlYWRfd3JpdGU+IGNvcm5lck1hdGVyaWFsczogQ29ybmVyTWF0ZXJpYWxzO1xcblxcbnN0cnVjdCBWb3hlbE1hdGVyaWFscyB7XFxuICB2b3hlbE1hdGVyaWFscyA6IGFycmF5PHUzMj4sXFxufTtcXG5cXG5AYmluZGluZygyKSBAZ3JvdXAoMClcXG52YXI8c3RvcmFnZSwgcmVhZF93cml0ZT4gdm94ZWxNYXRlcmlhbHM6IFZveGVsTWF0ZXJpYWxzO1xcblxcbnN0cnVjdCBDb3JuZXJJbmRleCB7XFxuICBjb3JuZXJDb3VudCA6IHUzMixcXG4gIGNvcm5lckluZGV4ZXMgOiBhcnJheTx1MzI+XFxufTtcXG5cXG5AYmluZGluZygzKSBAZ3JvdXAoMClcXG52YXI8c3RvcmFnZSwgcmVhZF93cml0ZT4gY29ybmVySW5kZXg6IENvcm5lckluZGV4O1xcblxcbnN0cnVjdCBHUFVWT1hcXG57XFxuXFx0dm94TWluOiB2ZWMzPGYzMj4sXFxuXFx0Y29ybmVyczogZjMyLFxcblxcdHZlcnRQb2ludDogdmVjMzxmMzI+LFxcblxcdGF2Z05vcm1hbDogdmVjMzxmMzI+LFxcblxcdG51bVBvaW50czogZjMyXFxufTtcXG5zdHJ1Y3QgR1BVVk9YUyB7XFxuICB2b3hlbHMgOiBhcnJheTxHUFVWT1g+LFxcbn07XFxuXFxuQGJpbmRpbmcoNCkgQGdyb3VwKDApXFxudmFyPHN0b3JhZ2UsIHJlYWRfd3JpdGU+IHZveGVsczogR1BVVk9YUztcXG5cXG5zdHJ1Y3QgVW5pZm9ybUJ1ZmZlck9iamVjdCB7XFxuICBjaHVua1Bvc2l0aW9uIDogdmVjMzxmMzI+LFxcbiAgc3RyaWRlIDogZjMyLFxcblxcdHdpZHRoOiB1MzJcXG59O1xcblxcbkBiaW5kaW5nKDUpIEBncm91cCgwKVxcbnZhcjx1bmlmb3JtPiB1bmlmb3JtcyA6IFVuaWZvcm1CdWZmZXJPYmplY3Q7XFxuXFxuY29uc3QgQ0hJTERfTUlOX09GRlNFVFM6IGFycmF5PHZlYzM8dTMyPiwgOD4gPSBhcnJheTx2ZWMzPHUzMj4sIDg+XFxuKFxcbiAgdmVjMzx1MzI+KDB1LCAwdSwgMHUpLFxcbiAgdmVjMzx1MzI+KDB1LCAwdSwgMXUpLFxcbiAgdmVjMzx1MzI+KDB1LCAxdSwgMHUpLFxcbiAgdmVjMzx1MzI+KDB1LCAxdSwgMXUpLFxcbiAgdmVjMzx1MzI+KDF1LCAwdSwgMHUpLFxcbiAgdmVjMzx1MzI+KDF1LCAwdSwgMXUpLFxcbiAgdmVjMzx1MzI+KDF1LCAxdSwgMHUpLFxcbiAgdmVjMzx1MzI+KDF1LCAxdSwgMXUpXFxuKTtcXG5cXG5jb25zdCBlZGdldm1hcDogYXJyYXk8dmVjMjxpMzI+LCAxMj4gPSBhcnJheTx2ZWMyPGkzMj4sIDEyPlxcbihcXG5cXHR2ZWMyPGkzMj4oMCw0KSwgdmVjMjxpMzI+KDEsNSksIHZlYzI8aTMyPigyLDYpLCB2ZWMyPGkzMj4oMyw3KSxcXG5cXHR2ZWMyPGkzMj4oMCwyKSwgdmVjMjxpMzI+KDEsMyksIHZlYzI8aTMyPig0LDYpLCB2ZWMyPGkzMj4oNSw3KSxcXG5cXHR2ZWMyPGkzMj4oMCwxKSwgdmVjMjxpMzI+KDIsMyksIHZlYzI8aTMyPig0LDUpLCB2ZWMyPGkzMj4oNiw3KVxcbik7XFxuXFxuZm4gcmFuZG9tKGk6IHZlYzI8ZjMyPikgLT4gZjMyIHtcXG4gIHJldHVybiBmcmFjdChzaW4oZG90KGksdmVjMigxMi45ODk4LDc4LjIzMykpKSo0Mzc1OC41NDUzMTIzKTtcXG59XFxuXFxuZm4gVmVjM0RvdChhOiB2ZWMzPGYzMj4sIGI6IHZlYzM8ZjMyPikgLT4gZjMyXFxue1xcblxcdHJldHVybiAoYS54ICogYi54KSArIChhLnkgKiBiLnkpICsgKGEueiAqIGIueik7XFxufVxcblxcbmNvbnN0IEdyYWQzOiBhcnJheTx2ZWMzPGYzMj4sIDEyPiA9IGFycmF5PHZlYzM8ZjMyPiwgMTI+KFxcblxcdHZlYzM8ZjMyPigxLjAsMS4wLDAuMCksIHZlYzM8ZjMyPigtMS4wLDEuMCwwLjApLCB2ZWMzPGYzMj4oMS4wLC0xLjAsMC4wKSwgdmVjMzxmMzI+KC0xLjAsLTEuMCwwLjApLFxcblxcdHZlYzM8ZjMyPigxLjAsMC4wLDEuMCksIHZlYzM8ZjMyPigtMS4wLDAuMCwxLjApLCB2ZWMzPGYzMj4oMS4wLDAuMCwtMS4wKSwgdmVjMzxmMzI+KC0xLjAsMC4wLC0xLjApLFxcblxcdHZlYzM8ZjMyPigwLjAsMS4wLDEuMCksIHZlYzM8ZjMyPigwLjAsLTEuMCwxLjApLCB2ZWMzPGYzMj4oMC4wLDEuMCwtMS4wKSwgdmVjMzxmMzI+KDAuMCwtMS4wLC0xLjApXFxuKTtcXG5cXG5mbiBQZXJsaW4oeDE6IGYzMiwgeTE6IGYzMiwgejE6IGYzMikgLT4gZjMyXFxue1xcblxcdHZhciBYOiBpMzIgPSAwO1xcblxcdGlmICh4MSA+IDAuMCkge1xcblxcdFxcdFggPSBpMzIoeDEpO1xcblxcdH0gZWxzZSB7XFxuXFx0XFx0WCA9IGkzMih4MSkgLSAxO1xcblxcdH1cXG5cXG5cXHR2YXIgWTogaTMyID0gMDtcXG5cXHRpZiAoeTEgPiAwLjApIHtcXG5cXHRcXHRZID0gaTMyKHkxKTtcXG5cXHR9IGVsc2Uge1xcblxcdFxcdFkgPSBpMzIoeTEpIC0gMTtcXG5cXHR9XFxuXFxuXFx0dmFyIFo6IGkzMiA9IDA7XFxuXFx0aWYgKHoxID4gMC4wKSB7XFxuXFx0XFx0WiA9IGkzMih6MSk7XFxuXFx0fSBlbHNlIHtcXG5cXHRcXHRaID0gaTMyKHoxKSAtIDE7XFxuXFx0fVxcblxcdFxcblxcdGxldCB4OiBmMzIgPSB4MSAtIGYzMihYKTtcXG5cXHRsZXQgeTogZjMyID0geTEgLSBmMzIoWSk7XFxuXFx0bGV0IHo6IGYzMiA9IHoxIC0gZjMyKFopO1xcblxcdFxcblxcdFggPSBYICYgMjU1O1xcblxcdFkgPSBZICYgMjU1O1xcblxcdFogPSBaICYgMjU1O1xcblxcdFxcblxcdGxldCBnaTAwMDogaTMyID0gKHBlcm0uUGVybVtYICsgcGVybS5QZXJtW1kgKyBwZXJtLlBlcm1bWl0gXSBdICUgMTIpO1xcblxcdGxldCBnaTAwMTogaTMyID0gKHBlcm0uUGVybVtYICsgcGVybS5QZXJtW1kgKyBwZXJtLlBlcm1bWiArIDFdIF0gXSAlIDEyKTtcXG5cXHRsZXQgZ2kwMTA6IGkzMiA9IChwZXJtLlBlcm1bWCArIHBlcm0uUGVybVtZICsgMSArIHBlcm0uUGVybVtaXSBdIF0gJSAxMik7XFxuXFx0bGV0IGdpMDExOiBpMzIgPSAocGVybS5QZXJtW1ggKyBwZXJtLlBlcm1bWSArIDEgKyBwZXJtLlBlcm1bWiArIDFdIF0gXSAlIDEyKTtcXG5cXHRsZXQgZ2kxMDA6IGkzMiA9IChwZXJtLlBlcm1bWCArIDEgKyBwZXJtLlBlcm1bWSArIHBlcm0uUGVybVtaXSBdIF0gJSAxMik7XFxuXFx0bGV0IGdpMTAxOiBpMzIgPSAocGVybS5QZXJtW1ggKyAxICsgcGVybS5QZXJtW1kgKyBwZXJtLlBlcm1bWiArIDFdIF0gXSAlIDEyKTtcXG5cXHRsZXQgZ2kxMTA6IGkzMiA9IChwZXJtLlBlcm1bWCArIDEgKyBwZXJtLlBlcm1bWSArIDEgKyBwZXJtLlBlcm1bWl0gXSBdICUgMTIpO1xcblxcdGxldCBnaTExMTogaTMyID0gKHBlcm0uUGVybVtYICsgMSArIHBlcm0uUGVybVtZICsgMSArIHBlcm0uUGVybVtaICsgMV0gXSBdICUgMTIpO1xcblxcblxcdGxldCBuMDAwOiBmMzIgPSBkb3QoR3JhZDNbZ2kwMDBdLCB2ZWMzPGYzMj4oeCwgeSwgeikpO1xcblxcdGxldCBuMTAwOiBmMzIgPSBkb3QoR3JhZDNbZ2kxMDBdLCB2ZWMzPGYzMj4oeCAtIDEuMCwgeSwgeikpO1xcblxcdGxldCBuMDEwOiBmMzIgPSBkb3QoR3JhZDNbZ2kwMTBdLCB2ZWMzPGYzMj4oeCwgeSAtIDEuMCwgeikpO1xcblxcdGxldCBuMTEwOiBmMzIgPSBkb3QoR3JhZDNbZ2kxMTBdLCB2ZWMzPGYzMj4oeCAtIDEuMCwgeSAtIDEuMCwgeikpO1xcblxcdGxldCBuMDAxOiBmMzIgPSBkb3QoR3JhZDNbZ2kwMDFdLCB2ZWMzPGYzMj4oeCwgeSwgeiAtIDEuMCkpO1xcblxcdGxldCBuMTAxOiBmMzIgPSBkb3QoR3JhZDNbZ2kxMDFdLCB2ZWMzPGYzMj4oeCAtIDEuMCwgeSwgeiAtIDEuMCkpO1xcblxcdGxldCBuMDExOiBmMzIgPSBkb3QoR3JhZDNbZ2kwMTFdLCB2ZWMzPGYzMj4oeCwgeSAtIDEuMCwgeiAtIDEuMCkpO1xcblxcdGxldCBuMTExOiBmMzIgPSBkb3QoR3JhZDNbZ2kxMTFdLCB2ZWMzPGYzMj4oeCAtIDEuMCwgeSAtIDEuMCwgeiAtIDEuMCkpO1xcblxcdFxcblxcdGxldCB1OiBmMzIgPSBmMzIoeCAqIHggKiB4ICogKHggKiAoeCAqIDYuMCAtIDE1LjApICsgMTAuMCkpO1xcblxcdGxldCB2OiBmMzIgPSBmMzIoeSAqIHkgKiB5ICogKHkgKiAoeSAqIDYuMCAtIDE1LjApICsgMTAuMCkpO1xcblxcdGxldCB3OiBmMzIgPSBmMzIoeiAqIHogKiB6ICogKHogKiAoeiAqIDYuMCAtIDE1LjApICsgMTAuMCkpO1xcblxcdGxldCBueDAwOiBmMzIgPSBtaXgobjAwMCwgbjEwMCwgdSk7XFxuXFx0bGV0IG54MDE6IGYzMiA9IG1peChuMDAxLCBuMTAxLCB1KTtcXG5cXHRsZXQgbngxMDogZjMyID0gbWl4KG4wMTAsIG4xMTAsIHUpO1xcblxcdGxldCBueDExOiBmMzIgPSBtaXgobjAxMSwgbjExMSwgdSk7XFxuXFx0bGV0IG54eTA6IGYzMiA9IG1peChueDAwLCBueDEwLCB2KTtcXG5cXHRsZXQgbnh5MTogZjMyID0gbWl4KG54MDEsIG54MTEsIHYpO1xcblxcdGxldCBueHl6OiBmMzIgPSBtaXgobnh5MCwgbnh5MSwgdyk7XFxuXFx0XFxuXFx0cmV0dXJuIG54eXo7XFxufVxcblxcbmZuIEZyYWN0YWxOb2lzZShvY3RhdmVzOiBpMzIsIGZyZXF1ZW5jeTogZjMyLCBsYWN1bmFyaXR5OiBmMzIsIHBlcnNpc3RlbmNlOiBmMzIsIHBvc2l0aW9uOiB2ZWMzPGYzMj4pIC0+IGYzMlxcbntcXG5cXHRsZXQgU0NBTEU6IGYzMiA9IDEuMCAvIDEyOC4wO1xcblxcdHZhciBwOiB2ZWMzPGYzMj4gPSBwb3NpdGlvbiAqIFNDQUxFO1xcblxcdHZhciBub2lzOiBmMzIgPSAwLjA7XFxuXFxuXFx0dmFyIGFtcGxpdHVkZTogZjMyID0gMS4wO1xcblxcdHAgPSBwICogZnJlcXVlbmN5O1xcblxcblxcdHZhciBpOiBpMzIgPSAwO1xcblxcdGxvb3Age1xcblxcdFxcdGlmIChpID49IG9jdGF2ZXMpIHsgYnJlYWs7IH1cXG5cXG5cXHRcXHRub2lzID0gbm9pcyArIFBlcmxpbihwLngsIHAueSwgcC56KSAqIGFtcGxpdHVkZTtcXG5cXHRcXHRwID0gcCAqIGxhY3VuYXJpdHk7XFxuXFx0XFx0YW1wbGl0dWRlID0gYW1wbGl0dWRlICogcGVyc2lzdGVuY2U7XFxuXFxuXFx0XFx0Y29udGludWluZyB7XFxuXFx0XFx0XFx0aSA9IGkgKyAxO1xcblxcdFxcdH1cXG5cXHR9XFxuXFx0XFxuXFx0cmV0dXJuIG5vaXM7XFxufVxcblxcbmZuIEZyYWN0YWxOb2lzZTEoZnJlcXVlbmN5OiBmMzIsIGxhY3VuYXJpdHk6IGYzMiwgcGVyc2lzdGVuY2U6IGYzMiwgcG9zaXRpb246IHZlYzM8ZjMyPikgLT4gZjMyXFxue1xcblxcdGxldCBTQ0FMRTogZjMyID0gMS4wIC8gMTI4LjA7XFxuXFx0dmFyIHA6IHZlYzM8ZjMyPiA9IHBvc2l0aW9uICogU0NBTEU7XFxuXFx0dmFyIG5vaXM6IGYzMiA9IDAuMDtcXG5cXG5cXHR2YXIgYW1wbGl0dWRlOiBmMzIgPSAxLjA7XFxuXFx0cCA9IHAgKiBmcmVxdWVuY3k7XFxuXFx0XFxuXFx0bm9pcyA9IG5vaXMgKyBQZXJsaW4ocC54LCBwLnksIHAueikgKiBhbXBsaXR1ZGU7XFxuXFx0cCA9IHAgKiBsYWN1bmFyaXR5O1xcblxcdGFtcGxpdHVkZSA9IGFtcGxpdHVkZSAqIHBlcnNpc3RlbmNlO1xcblxcdFxcblxcdHJldHVybiBub2lzO1xcbn1cXG5cXG5mbiBDYWxjdWxhdGVOb2lzZVZhbHVlKHBvczogdmVjMzxmMzI+LCBzY2FsZTogZjMyKSAtPiBmMzJcXG57XFxuXFx0cmV0dXJuIEZyYWN0YWxOb2lzZSg0LCAwLjUzNDMsIDIuMjMyNCwgMC42ODMyNCwgcG9zICogc2NhbGUpO1xcbn1cXG5cXG5mbiBDTGVycChhOiBmMzIsIGI6IGYzMiwgdDogZjMyKSAtPiBmMzJcXG57XFxuXFx0cmV0dXJuICgxLjAgLSB0KSAqIGEgKyB0ICogYjtcXG59XFxuXFxuLy8gU1ZEXFxuXFxuY29uc3QgU1ZEX05VTV9TV0VFUFM6IGkzMiA9IDQ7XFxuY29uc3QgUFNVRURPX0lOVkVSU0VfVEhSRVNIT0xEOiBmMzIgPSAwLjAwMDAwMDAxO1xcblxcbmZuIHN2ZF9tdWxfbWF0cml4X3ZlYyhtOiBtYXQzeDM8ZjMyPiwgYjogdmVjNDxmMzI+KSAtPiB2ZWM0PGYzMj5cXG57XFxuXFx0dmFyIGE6IG1hdDN4MzxmMzI+ID0gbTtcXG5cXHRcXG5cXHRyZXR1cm4gdmVjNDxmMzI+KFxcblxcdFxcdGRvdCh2ZWM0PGYzMj4oYVswXVswXSwgYVswXVsxXSwgYVswXVsyXSwgMC4wKSwgYiksXFxuXFx0XFx0ZG90KHZlYzQ8ZjMyPihhWzFdWzBdLCBhWzFdWzFdLCBhWzFdWzJdLCAwLjApLCBiKSxcXG5cXHRcXHRkb3QodmVjNDxmMzI+KGFbMl1bMF0sIGFbMl1bMV0sIGFbMl1bMl0sIDAuMCksIGIpLFxcblxcdFxcdDAuMFxcblxcdCk7XFxufVxcblxcbmZuIGdpdmVuc19jb2VmZnNfc3ltKGFfcHA6IGYzMiwgYV9wcTogZjMyLCBhX3FxOiBmMzIpIC0+IHZlYzI8ZjMyPlxcbntcXG5cXHRpZiAoYV9wcSA9PSAwLjApIHtcXG5cXHRcXHRyZXR1cm4gdmVjMjxmMzI+KDEuMCwgMC4wKTtcXG5cXHR9XFxuXFx0XFxuXFx0bGV0IHRhdTogZjMyID0gKGFfcXEgLSBhX3BwKSAvICgyLjAgKiBhX3BxKTtcXG5cXHRsZXQgc3R0OiBmMzIgPSBzcXJ0KDEuMCArIHRhdSAqIHRhdSk7XFxuXFx0dmFyIHRhbjogZjMyO1xcblxcdGlmICgodGF1ID49IDAuMCkpIHtcXG5cXHRcXHR0YW4gPSAodGF1ICsgc3R0KTtcXG5cXHR9IGVsc2Uge1xcblxcdFxcdHRhbiA9ICh0YXUgLSBzdHQpO1xcblxcdH1cXG5cXHR0YW4gPSAxLjAgLyB0YW47XFxuXFxuXFx0bGV0IGM6IGYzMiA9IGludmVyc2VTcXJ0KDEuMCArIHRhbiAqIHRhbik7XFxuXFx0bGV0IHM6IGYzMiA9IHRhbiAqIGM7XFxuXFxuXFx0cmV0dXJuIHZlYzI8ZjMyPihjLCBzKTtcXG59XFxuXFxuZm4gc3ZkX3JvdGF0ZV94eSh4OiBmMzIsIHk6IGYzMiwgYzogZjMyLCBzOiBmMzIpIC0+IHZlYzI8ZjMyPlxcbntcXG5cXHRyZXR1cm4gdmVjMjxmMzI+KGMgKiB4IC0gcyAqIHksIHMgKiB4ICsgYyAqIHkpO1xcbn1cXG5cXG5mbiBzdmRfcm90YXRlcV94eSh4OiBmMzIsIHk6IGYzMiwgejogZjMyLCBjOiBmMzIsIHM6IGYzMikgLT4gdmVjMjxmMzI+XFxue1xcblxcdGxldCBjYzogZjMyID0gYyAqIGM7XFxuXFx0bGV0IHNzOiBmMzIgPSBzICogcztcXG5cXHRsZXQgbXg6IGYzMiA9IDIuMCAqIGMgKiBzICogejtcXG5cXG5cXHRyZXR1cm4gdmVjMjxmMzI+KFxcblxcdFxcdGNjICogeCAtIG14ICsgc3MgKiB5LFxcblxcdFxcdHNzICogeCArIG14ICsgY2MgKiB6XFxuXFx0KTtcXG59XFxuXFxudmFyPHByaXZhdGU+IHZ0YXY6IG1hdDN4MzxmMzI+O1xcbnZhcjxwcml2YXRlPiB2OiBtYXQzeDM8ZjMyPjtcXG52YXI8cHJpdmF0ZT4gQVRBOiBhcnJheTxmMzIsIDY+O1xcbnZhcjxwcml2YXRlPiBBdGI6IHZlYzQ8ZjMyPjtcXG52YXI8cHJpdmF0ZT4gcG9pbnRhY2N1bTogdmVjNDxmMzI+O1xcbnZhcjxwcml2YXRlPiBidGI6IGYzMjtcXG5cXG5mbiBzdmRfcm90YXRlKGE6IGkzMiwgYjogaTMyKVxcbntcXG5cXHRpZiAodnRhdlthXVtiXSA9PSAwLjApIHsgcmV0dXJuOyB9XFxuXFxuXFxuXFx0XFxuXFx0bGV0IGNvZWZmczogdmVjMjxmMzI+ID0gZ2l2ZW5zX2NvZWZmc19zeW0odnRhdlthXVthXSwgdnRhdlthXVtiXSwgdnRhdltiXVtiXSk7XFxuXFx0bGV0IGM6IGYzMiA9IGNvZWZmcy54O1xcblxcdGxldCBzOiBmMzIgPSBjb2VmZnMueTtcXG5cXHRcXG5cXHRsZXQgcm90MTogdmVjMjxmMzI+ID0gc3ZkX3JvdGF0ZXFfeHkodnRhdlthXVthXSwgdnRhdltiXVtiXSwgdnRhdlthXVtiXSwgYywgcyk7XFxuXFx0dnRhdlthXVthXSA9IHJvdDEueDtcXG5cXHR2dGF2W2JdW2JdID0gcm90MS55O1xcblxcdFxcblxcdGxldCByb3QyOiB2ZWMyPGYzMj4gPSBzdmRfcm90YXRlX3h5KHZ0YXZbMF1bMy1iXSwgdnRhdlsxLWFdWzJdLCBjLCBzKTtcXG5cXHR2dGF2WzBdWzMtYl0gPSByb3QyLng7IFxcblxcdHZ0YXZbMS1hXVsyXSA9IHJvdDIueTtcXG5cXHRcXG5cXHR2dGF2W2FdW2JdID0gMC4wO1xcblxcdFxcblxcdGxldCByb3QzOiB2ZWMyPGYzMj4gPSBzdmRfcm90YXRlX3h5KHZbMF1bYV0sIHZbMF1bYl0sIGMsIHMpO1xcblxcdHZbMF1bYV0gPSByb3QzLng7IHZbMF1bYl0gPSByb3QzLnk7XFxuXFx0XFxuXFx0bGV0IHJvdDQ6IHZlYzI8ZjMyPiA9IHN2ZF9yb3RhdGVfeHkodlsxXVthXSwgdlsxXVtiXSwgYywgcyk7XFxuXFx0dlsxXVthXSA9IHJvdDQueDsgdlsxXVtiXSA9IHJvdDQueTtcXG5cXHRcXG5cXHRsZXQgcm90NTogdmVjMjxmMzI+ID0gc3ZkX3JvdGF0ZV94eSh2WzJdW2FdLCB2WzJdW2JdLCBjLCBzKTtcXG5cXHR2WzJdW2FdID0gcm90NS54OyB2WzJdW2JdID0gcm90NS55O1xcbn1cXG5cXG5mbiBzdmRfc29sdmVfc3ltKGI6IGFycmF5PGYzMiwgNj4pIC0+IHZlYzQ8ZjMyPlxcbntcXG5cXHR2YXIgYTogYXJyYXk8ZjMyLCA2PiA9IGI7XFxuXFx0XFxuXFx0dnRhdiA9IG1hdDN4MzxmMzI+KCBcXG5cXHRcXHR2ZWMzPGYzMj4oYVswXSwgYVsxXSwgYVsyXSksIFxcblxcdFxcdHZlYzM8ZjMyPigwLjAsIGFbM10sIGFbNF0pLCBcXG5cXHRcXHR2ZWMzPGYzMj4oMC4wLCAwLjAsIGFbNV0pXFxuXFx0KTtcXG5cXG5cXHR2YXIgaTogaTMyO1xcblxcdGxvb3Age1xcblxcdFxcdGlmIChpID49IFNWRF9OVU1fU1dFRVBTKSB7IGJyZWFrOyB9XFxuXFxuXFx0XFx0c3ZkX3JvdGF0ZSgwLCAxKTtcXG5cXHRcXHRzdmRfcm90YXRlKDAsIDIpO1xcblxcdFxcdHN2ZF9yb3RhdGUoMSwgMik7XFxuXFxuXFx0XFx0Y29udGludWluZyB7XFxuXFx0XFx0XFx0aSA9IGkgKyAxO1xcblxcdFxcdH1cXG5cXHR9XFxuXFxuXFx0dmFyIGNvcHk6IG1hdDN4MzxmMzI+ID0gdnRhdjtcXG5cXHRyZXR1cm4gdmVjNDxmMzI+KGNvcHlbMF1bMF0sIGNvcHlbMV1bMV0sIGNvcHlbMl1bMl0sIDAuMCk7XFxufVxcblxcblxcbmZuIHN2ZF9pbnZkZXQoeDogZjMyLCB0b2w6IGYzMikgLT4gZjMyXFxue1xcblxcdGlmIChhYnMoeCkgPCB0b2wgfHwgYWJzKDEuMCAvIHgpIDwgdG9sKSB7XFxuXFx0XFx0cmV0dXJuIDAuMDtcXG5cXHR9XFxuXFx0cmV0dXJuICgxLjAgLyB4KTtcXG59XFxuXFxuZm4gc3ZkX3BzZXVkb2ludmVyc2Uoc2lnbWE6IHZlYzQ8ZjMyPiwgYzogbWF0M3gzPGYzMj4pIC0+IG1hdDN4MzxmMzI+XFxue1xcblxcdGxldCBkMDogZjMyID0gc3ZkX2ludmRldChzaWdtYS54LCBQU1VFRE9fSU5WRVJTRV9USFJFU0hPTEQpO1xcblxcdGxldCBkMTogZjMyID0gc3ZkX2ludmRldChzaWdtYS55LCBQU1VFRE9fSU5WRVJTRV9USFJFU0hPTEQpO1xcblxcdGxldCBkMjogZjMyID0gc3ZkX2ludmRldChzaWdtYS56LCBQU1VFRE9fSU5WRVJTRV9USFJFU0hPTEQpO1xcblxcblxcdHZhciBjb3B5OiBtYXQzeDM8ZjMyPiA9IGM7XFxuXFxuXFx0cmV0dXJuIG1hdDN4MzxmMzI+IChcXG5cXHRcXHR2ZWMzPGYzMj4oXFxuXFx0XFx0XFx0Y29weVswXVswXSAqIGQwICogY29weVswXVswXSArIGNvcHlbMF1bMV0gKiBkMSAqIGNvcHlbMF1bMV0gKyBjb3B5WzBdWzJdICogZDIgKiBjb3B5WzBdWzJdLFxcblxcdFxcdFxcdGNvcHlbMF1bMF0gKiBkMCAqIGNvcHlbMV1bMF0gKyBjb3B5WzBdWzFdICogZDEgKiBjb3B5WzFdWzFdICsgY29weVswXVsyXSAqIGQyICogY29weVsxXVsyXSxcXG5cXHRcXHRcXHRjb3B5WzBdWzBdICogZDAgKiBjb3B5WzJdWzBdICsgY29weVswXVsxXSAqIGQxICogY29weVsyXVsxXSArIGNvcHlbMF1bMl0gKiBkMiAqIGNvcHlbMl1bMl1cXG5cXHRcXHQpLFxcblxcdFxcdHZlYzM8ZjMyPihcXG5cXHRcXHRcXHRjb3B5WzFdWzBdICogZDAgKiBjb3B5WzBdWzBdICsgY29weVsxXVsxXSAqIGQxICogY29weVswXVsxXSArIGNvcHlbMV1bMl0gKiBkMiAqIGNvcHlbMF1bMl0sXFxuXFx0XFx0XFx0Y29weVsxXVswXSAqIGQwICogY29weVsxXVswXSArIGNvcHlbMV1bMV0gKiBkMSAqIGNvcHlbMV1bMV0gKyBjb3B5WzFdWzJdICogZDIgKiBjb3B5WzFdWzJdLFxcblxcdFxcdFxcdGNvcHlbMV1bMF0gKiBkMCAqIGNvcHlbMl1bMF0gKyBjb3B5WzFdWzFdICogZDEgKiBjb3B5WzJdWzFdICsgY29weVsxXVsyXSAqIGQyICogY29weVsyXVsyXVxcblxcdFxcdCksXFxuXFx0XFx0dmVjMzxmMzI+KFxcblxcdFxcdFxcdGNvcHlbMl1bMF0gKiBkMCAqIGNvcHlbMF1bMF0gKyBjb3B5WzJdWzFdICogZDEgKiBjb3B5WzBdWzFdICsgY29weVsyXVsyXSAqIGQyICogY29weVswXVsyXSxcXG5cXHRcXHRcXHRjb3B5WzJdWzBdICogZDAgKiBjb3B5WzFdWzBdICsgY29weVsyXVsxXSAqIGQxICogY29weVsxXVsxXSArIGNvcHlbMl1bMl0gKiBkMiAqIGNvcHlbMV1bMl0sXFxuXFx0XFx0XFx0Y29weVsyXVswXSAqIGQwICogY29weVsyXVswXSArIGNvcHlbMl1bMV0gKiBkMSAqIGNvcHlbMl1bMV0gKyBjb3B5WzJdWzJdICogZDIgKiBjb3B5WzJdWzJdXFxuXFx0XFx0KSxcXG5cXHQpO1xcbn1cXG5cXG5mbiBzdmRfc29sdmVfQVRBX0F0YihhOiB2ZWM0PGYzMj4pIC0+IHZlYzQ8ZjMyPlxcbntcXG5cXHR2ID0gbWF0M3gzPGYzMj4odmVjMzxmMzI+KDEuMCwgMC4wLCAwLjApLCB2ZWMzPGYzMj4oMC4wLCAxLjAsIDAuMCksIHZlYzM8ZjMyPigwLjAsIDAuMCwgMS4wKSk7XFxuXFx0XFxuXFx0bGV0IHNpZ21hOiB2ZWM0PGYzMj4gPSBzdmRfc29sdmVfc3ltKEFUQSk7XFxuXFx0XFxuXFx0bGV0IFZpbnY6IG1hdDN4MzxmMzI+ID0gc3ZkX3BzZXVkb2ludmVyc2Uoc2lnbWEsIHYpO1xcblxcdHJldHVybiBzdmRfbXVsX21hdHJpeF92ZWMoVmludiwgYSk7XFxufVxcblxcbmZuIHN2ZF92bXVsX3N5bSh2OiB2ZWM0PGYzMj4pIC0+IHZlYzQ8ZjMyPlxcbntcXG5cXHRsZXQgQV9yb3dfeDogdmVjNDxmMzI+ID0gdmVjNDxmMzI+KEFUQVswXSwgQVRBWzFdLCBBVEFbMl0sIDAuMCk7XFxuXFx0cmV0dXJuIHZlYzQ8ZjMyPiAoXFxuXFx0XFx0ZG90KEFfcm93X3gsIHYpLFxcblxcdFxcdEFUQVsxXSAqIHYueCArIEFUQVszXSAqIHYueSArIEFUQVs0XSAqIHYueixcXG5cXHRcXHRBVEFbMl0gKiB2LnggKyBBVEFbNF0gKiB2LnkgKyBBVEFbNV0gKiB2LnosXFxuXFx0XFx0MC4wXFxuXFx0KTtcXG59XFxuXFxuXFxuLy8gLy8gUUVGXFxuXFxuZm4gcWVmX2FkZChuOiB2ZWM0PGYzMj4sIHA6IHZlYzQ8ZjMyPilcXG57XFxuXFx0QVRBWzBdID0gQVRBWzBdICsgbi54ICogbi54O1xcblxcdEFUQVsxXSA9IEFUQVsxXSArIG4ueCAqIG4ueTtcXG5cXHRBVEFbMl0gPSBBVEFbMl0gKyBuLnggKiBuLno7XFxuXFx0QVRBWzNdID0gQVRBWzNdICsgbi55ICogbi55O1xcblxcdEFUQVs0XSA9IEFUQVs0XSArIG4ueSAqIG4uejtcXG5cXHRBVEFbNV0gPSBBVEFbNV0gKyBuLnogKiBuLno7XFxuXFx0XFxuXFx0bGV0IGI6IGYzMiA9IGRvdChwLCBuKTtcXG5cXHRBdGIueCA9IEF0Yi54ICtuLnggKiBiO1xcblxcdEF0Yi55ID0gQXRiLnkgK24ueSAqIGI7XFxuXFx0QXRiLnogPSBBdGIueiArbi56ICogYjtcXG5cXHRidGIgPSBidGIgKyBiICogYjtcXG5cXHRcXG5cXHRwb2ludGFjY3VtLnggPSBwb2ludGFjY3VtLnggK3AueDtcXG5cXHRwb2ludGFjY3VtLnkgPSBwb2ludGFjY3VtLnkgK3AueTtcXG5cXHRwb2ludGFjY3VtLnogPSBwb2ludGFjY3VtLnogK3AuejtcXG5cXHRwb2ludGFjY3VtLncgPSBwb2ludGFjY3VtLncgKzEuMDtcXG59XFxuXFxuZm4gcWVmX2NhbGNfZXJyb3IoeDogdmVjNDxmMzI+KSAtPiBmMzJcXG57XFxuXFx0dmFyIHRtcDogdmVjNDxmMzI+ID0gc3ZkX3ZtdWxfc3ltKHgpO1xcblxcdHRtcCA9IEF0YiAtIHRtcDtcXG5cXHRcXG5cXHRyZXR1cm4gZG90KHRtcCwgdG1wKTtcXG59XFxuXFxuZm4gcWVmX3NvbHZlKCkgLT4gdmVjNDxmMzI+XFxue1xcblxcdGxldCBtYXNzcG9pbnQ6IHZlYzQ8ZjMyPiA9IHZlYzQ8ZjMyPihwb2ludGFjY3VtLnggLyBwb2ludGFjY3VtLncsIHBvaW50YWNjdW0ueSAvIHBvaW50YWNjdW0udywgcG9pbnRhY2N1bS56IC8gcG9pbnRhY2N1bS53LCBwb2ludGFjY3VtLncgLyBwb2ludGFjY3VtLncpO1xcblxcdFxcblxcdHZhciBBX21wOiB2ZWM0PGYzMj4gPSBzdmRfdm11bF9zeW0obWFzc3BvaW50KTtcXG5cXHRBX21wID0gQXRiIC0gQV9tcDtcXG5cXHRcXG5cXHRsZXQgeDogdmVjNDxmMzI+ID0gc3ZkX3NvbHZlX0FUQV9BdGIoQV9tcCk7XFxuXFx0XFxuXFx0bGV0IGVycm9yOiBmMzIgPSBxZWZfY2FsY19lcnJvcih4KTtcXG5cXHRsZXQgcjogdmVjNDxmMzI+ID0geCArIG1hc3Nwb2ludDtcXG5cXHRcXG5cXHRyZXR1cm4gdmVjNDxmMzI+KHIueCwgci55LCByLnosIGVycm9yKTtcXG59XFxuXFxuI2ltcG9ydCBkZW5zaXR5XFxuXFxuZm4gQXBwcm94aW1hdGVaZXJvQ3Jvc3NpbmdQb3NpdGlvbihwMDogdmVjMzxmMzI+LCBwMTogdmVjMzxmMzI+KSAtPiB2ZWMzPGYzMj5cXG57XFxuXFx0dmFyIG1pblZhbHVlOiBmMzIgPSAxMDAwMDAuMDtcXG5cXHR2YXIgdDogZjMyID0gMC4wO1xcblxcdHZhciBjdXJyZW50VDogZjMyID0gMC4wO1xcblxcdGxldCBzdGVwczogZjMyID0gOC4wO1xcblxcdGxldCBpbmNyZW1lbnQ6IGYzMiA9IDEuMCAvIHN0ZXBzO1xcblxcdGxvb3Age1xcblxcdFxcdGlmIChjdXJyZW50VCA+IDEuMCkgeyBicmVhazsgfVxcblxcblxcdFxcdGxldCBwOiB2ZWMzPGYzMj4gPSBwMCArICgocDEgLSBwMCkgKiBjdXJyZW50VCk7XFxuXFx0XFx0bGV0IGRlbnNpdHk6IGYzMiA9IGFicyhnZXREZW5zaXR5KHApKTtcXG5cXHRcXHRpZiAoZGVuc2l0eSA8IG1pblZhbHVlKVxcblxcdFxcdHtcXG5cXHRcXHRcXHRtaW5WYWx1ZSA9IGRlbnNpdHk7XFxuXFx0XFx0XFx0dCA9IGN1cnJlbnRUO1xcblxcdFxcdH1cXG5cXG5cXHRcXHRjb250aW51aW5nIHtcXG5cXHRcXHRcXHRjdXJyZW50VCA9IGN1cnJlbnRUICsgaW5jcmVtZW50O1xcblxcdFxcdH1cXG5cXHR9XFxuXFxuXFx0cmV0dXJuIHAwICsgKChwMSAtIHAwKSAqIHQpO1xcbn1cXG5cXG5mbiBDYWxjdWxhdGVTdXJmYWNlTm9ybWFsKHA6IHZlYzM8ZjMyPikgLT4gdmVjMzxmMzI+XFxue1xcblxcdGxldCBIOiBmMzIgPSB1bmlmb3Jtcy5zdHJpZGU7IC8vIFRoaXMgbmVlZHMgdG8gc2NhbGUgYmFzZWQgb24gc29tZXRoaW5nLi4uXFxuXFx0bGV0IGR4OiBmMzIgPSBnZXREZW5zaXR5KHAgKyB2ZWMzPGYzMj4oSCwgMC4wLCAwLjApKSAtIGdldERlbnNpdHkocCAtIHZlYzM8ZjMyPihILCAwLjAsIDAuMCkpO1xcblxcdGxldCBkeTogZjMyID0gZ2V0RGVuc2l0eShwICsgdmVjMzxmMzI+KDAuMCwgSCwgMC4wKSkgLSBnZXREZW5zaXR5KHAgLSB2ZWMzPGYzMj4oMC4wLCBILCAwLjApKTtcXG5cXHRsZXQgZHo6IGYzMiA9IGdldERlbnNpdHkocCArIHZlYzM8ZjMyPigwLjAsIDAuMCwgSCkpIC0gZ2V0RGVuc2l0eShwIC0gdmVjMzxmMzI+KDAuMCwgMC4wLCBIKSk7XFxuXFxuXFx0cmV0dXJuIG5vcm1hbGl6ZSh2ZWMzPGYzMj4oZHgsIGR5LCBkeikpO1xcbn1cXG5cXG5AY29tcHV0ZSBAd29ya2dyb3VwX3NpemUoMTI4KVxcbmZuIG1haW4oQGJ1aWx0aW4oZ2xvYmFsX2ludm9jYXRpb25faWQpIEdsb2JhbEludm9jYXRpb25JRCA6IHZlYzM8dTMyPikge1xcblxcdGxldCB0cnVlSW5kZXg6IHUzMiA9IEdsb2JhbEludm9jYXRpb25JRC54O1xcblxcblxcdGlmICh0cnVlSW5kZXggPCBjb3JuZXJJbmRleC5jb3JuZXJDb3VudClcXG5cXHR7XFxuXFx0XFx0bGV0IHVyZXM6IHUzMiA9IDMydTtcXG5cXG5cXHRcXHRsZXQgbm9kZVNpemU6IHUzMiA9IHUzMih1bmlmb3Jtcy5zdHJpZGUpO1xcblxcblxcdFxcdGxldCB2b3hlbEluZGV4OiB1MzIgPSBjb3JuZXJJbmRleC5jb3JuZXJJbmRleGVzW3RydWVJbmRleF07XFxuXFx0XFx0bGV0IHo6IHUzMiA9IHZveGVsSW5kZXggLyAodXJlcyAqIHVyZXMpO1xcblxcdFxcdGxldCB5OiB1MzIgPSAodm94ZWxJbmRleCAtICh6ICogdXJlcyAqIHVyZXMpKSAvIHVyZXM7XFxuXFx0XFx0bGV0IHg6IHUzMiA9IHZveGVsSW5kZXggLSAoeiAqIHVyZXMgKiB1cmVzKSAtICh5ICogdXJlcyk7XFxuXFxuXFx0XFx0bGV0IGNvcm5lcnM6IHUzMiA9IHZveGVsTWF0ZXJpYWxzLnZveGVsTWF0ZXJpYWxzW3ZveGVsSW5kZXhdO1xcblxcblxcdFxcdGxldCBub2RlUG9zOiB2ZWMzPGYzMj4gPSAodmVjMzxmMzI+KGYzMih4KSwgZjMyKHkpLCBmMzIgKHopKSAqIHVuaWZvcm1zLnN0cmlkZSkgKyB1bmlmb3Jtcy5jaHVua1Bvc2l0aW9uO1xcblxcdFxcdHZveGVscy52b3hlbHNbdHJ1ZUluZGV4XS52b3hNaW4gPSBub2RlUG9zO1xcblxcdFxcdGxldCBNQVhfQ1JPU1NJTkdTOiBpMzIgPSA2O1xcblxcdFxcdHZhciBlZGdlQ291bnQ6IGkzMiA9IDA7XFxuXFxuXFx0XFx0cG9pbnRhY2N1bSA9IHZlYzQ8ZjMyPigwLjAsIDAuMCwgMC4wLCAwLjApO1xcblxcdFxcdEFUQSA9IGFycmF5PGYzMiwgNj4oMC4wLCAwLjAsIDAuMCwgMC4wLCAwLjAsIDAuMCk7XFxuXFx0XFx0QXRiID0gdmVjNDxmMzI+KDAuMCwgMC4wLCAwLjAsIDAuMCk7XFxuXFx0XFx0dmFyIGF2ZXJhZ2VOb3JtYWw6IHZlYzM8ZjMyPiA9IHZlYzM8ZjMyPigwLjAsIDAuMCwgMC4wKTtcXG5cXHRcXHRidGIgPSAwLjA7XFxuXFxuXFx0XFx0dmFyIGo6IGkzMiA9IDA7XFxuXFx0XFx0bG9vcCB7XFxuXFx0XFx0XFx0aWYgKCEoaiA8IDEyICYmIGVkZ2VDb3VudCA8PSBNQVhfQ1JPU1NJTkdTKSkge1xcblxcdFxcdFxcdFxcdGJyZWFrO1xcblxcdFxcdFxcdH1cXG5cXG5cXHRcXHRcXHRsZXQgYzE6IGkzMiA9IGVkZ2V2bWFwW2pdLng7XFxuXFx0XFx0XFx0bGV0IGMyOiBpMzIgPSBlZGdldm1hcFtqXS55O1xcblxcblxcdFxcdFxcdGxldCBtMTogdTMyID0gKGNvcm5lcnMgPj4gdTMyKGMxKSkgJiAxdTtcXG5cXHRcXHRcXHRsZXQgbTI6IHUzMiA9IChjb3JuZXJzID4+IHUzMihjMikpICYgMXU7XFxuXFxuXFx0XFx0XFx0aWYgKCEoKG0xID09IDB1ICYmIG0yID09IDB1KSB8fCAobTEgPT0gMXUgJiYgbTIgPT0gMXUpKSlcXG5cXHRcXHRcXHR7XFxuXFx0XFx0XFx0XFx0bGV0IHAxOiB2ZWMzPGYzMj4gPSBub2RlUG9zICsgdmVjMzxmMzI+KGYzMihDSElMRF9NSU5fT0ZGU0VUU1tjMV0ueCAqIG5vZGVTaXplKSwgZjMyKENISUxEX01JTl9PRkZTRVRTW2MxXS55ICogbm9kZVNpemUpLCBmMzIoQ0hJTERfTUlOX09GRlNFVFNbYzFdLnogKiBub2RlU2l6ZSkpO1xcblxcdFxcdFxcdFxcdGxldCBwMjogdmVjMzxmMzI+ID0gbm9kZVBvcyArIHZlYzM8ZjMyPihmMzIoQ0hJTERfTUlOX09GRlNFVFNbYzJdLnggKiBub2RlU2l6ZSksIGYzMihDSElMRF9NSU5fT0ZGU0VUU1tjMl0ueSAqIG5vZGVTaXplKSwgZjMyKENISUxEX01JTl9PRkZTRVRTW2MyXS56ICogbm9kZVNpemUpKTtcXG5cXHRcXHRcXHRcXHRsZXQgcDogdmVjMzxmMzI+ID0gQXBwcm94aW1hdGVaZXJvQ3Jvc3NpbmdQb3NpdGlvbihwMSwgcDIpO1xcblxcdFxcdFxcdFxcdGxldCBuOiB2ZWMzPGYzMj4gPSBDYWxjdWxhdGVTdXJmYWNlTm9ybWFsKHApO1xcblxcblxcdFxcdFxcdFxcdHFlZl9hZGQodmVjNDxmMzI+KG4ueCwgbi55LCBuLnosIDAuMCksIHZlYzQ8ZjMyPihwLngsIHAueSwgcC56LCAwLjApKTtcXG5cXG5cXHRcXHRcXHRcXHRhdmVyYWdlTm9ybWFsID0gYXZlcmFnZU5vcm1hbCArIG47XFxuXFxuXFx0XFx0XFx0XFx0ZWRnZUNvdW50ID0gZWRnZUNvdW50ICsgMTtcXG5cXHRcXHRcXHR9XFxuXFxuXFx0XFx0XFx0Y29udGludWluZyB7XFxuXFx0XFx0XFx0XFx0aiA9IGogKyAxO1xcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFxuXFxuXFx0XFx0YXZlcmFnZU5vcm1hbCA9IG5vcm1hbGl6ZShhdmVyYWdlTm9ybWFsIC8gdmVjMzxmMzI+KGYzMihlZGdlQ291bnQpLCBmMzIoZWRnZUNvdW50KSwgZjMyKGVkZ2VDb3VudCkpKTtcXG5cXG5cXHRcXHRsZXQgY29tOiB2ZWMzPGYzMj4gPSB2ZWMzPGYzMj4ocG9pbnRhY2N1bS54IC8gcG9pbnRhY2N1bS53LCBwb2ludGFjY3VtLnkgLyBwb2ludGFjY3VtLncsIHBvaW50YWNjdW0ueiAvIHBvaW50YWNjdW0udyk7XFxuXFxuXFx0XFx0bGV0IHJlc3VsdDogdmVjNDxmMzI+ID0gcWVmX3NvbHZlKCk7XFxuXFx0XFx0dmFyIHNvbHZlZF9wb3NpdGlvbjogdmVjMzxmMzI+ID0gcmVzdWx0Lnh5ejtcXG5cXHRcXHRsZXQgZXJyb3I6IGYzMiA9IHJlc3VsdC53O1xcblxcblxcblxcdFxcdGxldCBNaW46IHZlYzM8ZjMyPiA9IG5vZGVQb3M7XFxuXFx0XFx0bGV0IE1heDogdmVjMzxmMzI+ID0gbm9kZVBvcyArIHZlYzM8ZjMyPigxLjAsIDEuMCwgMS4wKTtcXG5cXHRcXHRpZiAoc29sdmVkX3Bvc2l0aW9uLnggPCBNaW4ueCB8fCBzb2x2ZWRfcG9zaXRpb24ueCA+IE1heC54IHx8XFxuXFx0XFx0XFx0XFx0c29sdmVkX3Bvc2l0aW9uLnkgPCBNaW4ueSB8fCBzb2x2ZWRfcG9zaXRpb24ueSA+IE1heC55IHx8XFxuXFx0XFx0XFx0XFx0c29sdmVkX3Bvc2l0aW9uLnogPCBNaW4ueiB8fCBzb2x2ZWRfcG9zaXRpb24ueiA+IE1heC56KVxcblxcdFxcdHtcXG5cXHRcXHRcXHRzb2x2ZWRfcG9zaXRpb24gPSBjb207XFxuXFx0XFx0fVxcblxcblxcdFxcdHZveGVscy52b3hlbHNbdHJ1ZUluZGV4XS52ZXJ0UG9pbnQgPSBzb2x2ZWRfcG9zaXRpb247XFxuXFx0XFx0dm94ZWxzLnZveGVsc1t0cnVlSW5kZXhdLmF2Z05vcm1hbCA9IGF2ZXJhZ2VOb3JtYWw7XFxuXFx0XFx0dm94ZWxzLnZveGVsc1t0cnVlSW5kZXhdLm51bVBvaW50cyA9IGYzMihlZGdlQ291bnQpO1xcblxcdFxcdHZveGVscy52b3hlbHNbdHJ1ZUluZGV4XS5jb3JuZXJzID0gZjMyKHZveGVsTWF0ZXJpYWxzLnZveGVsTWF0ZXJpYWxzW3ZveGVsSW5kZXhdKTtcXG5cXHR9XFxufVxcblxcbkBjb21wdXRlIEB3b3JrZ3JvdXBfc2l6ZSgxKVxcbmZuIGNvbXB1dGVNYXRlcmlhbHMoQGJ1aWx0aW4oZ2xvYmFsX2ludm9jYXRpb25faWQpIEdsb2JhbEludm9jYXRpb25JRCA6IHZlYzM8dTMyPikge1xcblxcdFxcdGxldCB3aWR0aCA9IHVuaWZvcm1zLndpZHRoO1xcbiAgICBsZXQgaW5kZXg6IHUzMiA9IEdsb2JhbEludm9jYXRpb25JRC56ICogd2lkdGggKiB3aWR0aCArIEdsb2JhbEludm9jYXRpb25JRC55ICogd2lkdGggKyBHbG9iYWxJbnZvY2F0aW9uSUQueDtcXG4gICAgbGV0IGNvcm5lclBvczogdmVjMzxmMzI+ID0gdmVjMzxmMzI+KGYzMihHbG9iYWxJbnZvY2F0aW9uSUQueCkgKiB1bmlmb3Jtcy5zdHJpZGUsIGYzMihHbG9iYWxJbnZvY2F0aW9uSUQueSkgKiB1bmlmb3Jtcy5zdHJpZGUsIGYzMihHbG9iYWxJbnZvY2F0aW9uSUQueikgKiB1bmlmb3Jtcy5zdHJpZGUpO1xcblxcbiAgICBsZXQgZGVuc2l0eTogZjMyID0gZ2V0RGVuc2l0eShjb3JuZXJQb3MgKyB1bmlmb3Jtcy5jaHVua1Bvc2l0aW9uKTtcXG5cXG5cXHRcXHRpZiAoZGVuc2l0eSA8IDAuMCkge1xcblxcdFxcdFxcdGlmIChsZW5ndGgoY29ybmVyUG9zICsgdW5pZm9ybXMuY2h1bmtQb3NpdGlvbikgPCAyMDAwLjApIHtcXG4gICAgICAgIC8vY29ybmVyTWF0ZXJpYWxzLmNvcm5lck1hdGVyaWFsc1tpbmRleF0gPSB1MzIocmFuZG9tKHZlYzIoZjMyKGluZGV4KSkpICogMjU1LjApICsgMTtcXG5cXHRcXHRcXHQgIGNvcm5lck1hdGVyaWFscy5jb3JuZXJNYXRlcmlhbHNbaW5kZXhdID0gMjU2dTtcXG5cXHRcXHRcXHR9IGVsc2Uge1xcbiAgICAgICAgY29ybmVyTWF0ZXJpYWxzLmNvcm5lck1hdGVyaWFsc1tpbmRleF0gPSB1MzIobGVuZ3RoKGNvcm5lclBvcykgLyB1bmlmb3Jtcy5zdHJpZGUgKiAyNTYuMCk7XFxuXFx0XFx0XFx0fVxcblxcdFxcdH0gZWxzZSB7XFxuXFx0XFx0XFx0Y29ybmVyTWF0ZXJpYWxzLmNvcm5lck1hdGVyaWFsc1tpbmRleF0gPSAwdTtcXG5cXHRcXHR9XFxufVwiOyIsImV4cG9ydCBkZWZhdWx0IFwiY29uc3QgZnJlcSA9IDAuMDAxO1xcblxcbmNvbnN0IE1BVEVSSUFMX0FJUiA9IDB1O1xcbmNvbnN0IE1BVEVSSUFMX1JPQ0sgPSAxdTtcXG5jb25zdCBNQVRFUklBTF9XT09EID0gMnU7XFxuY29uc3QgTUFURVJJQUxfRklSRSA9IDN1O1xcblxcbnN0cnVjdCBEZW5zaXR5IHtcXG4gIGRlbnNpdHk6IGYzMixcXG4gIG1hdGVyaWFsOiB1MzJcXG59XFxuXFxuc3RydWN0IEF1Z21lbnRhdGlvbiB7XFxuICBwb3NpdGlvbjogdmVjMzxmMzI+LFxcbiAgc2l6ZTogZjMyLFxcbiAgYXR0cmlidXRlczogdTMyXFxufVxcblxcbkBiaW5kaW5nKDApIEBncm91cCgxKSB2YXI8c3RvcmFnZSwgcmVhZD4gYXVnbWVudGF0aW9uczogYXJyYXk8QXVnbWVudGF0aW9uPjtcXG5cXG5mbiBzdWJ0cmFjdChiYXNlOiBEZW5zaXR5LCBzdWI6IGYzMikgLT4gRGVuc2l0eSB7XFxuICByZXR1cm4gRGVuc2l0eShtYXgoYmFzZS5kZW5zaXR5LCBzdWIpLCBiYXNlLm1hdGVyaWFsKTtcXG59XFxuXFxuZm4gYWRkKGJhc2U6IERlbnNpdHksIGFkZDogZjMyLCBtYXRlcmlhbDogdTMyKSAtPiBEZW5zaXR5IHtcXG4gIGlmIChhZGQgPD0gMCkge1xcbiAgICByZXR1cm4gRGVuc2l0eShhZGQsIG1hdGVyaWFsKTtcXG4gIH1cXG4gIHJldHVybiBiYXNlO1xcbn1cXG5cXG5mbiBCb3god29ybGRQb3NpdGlvbjogdmVjMzxmMzI+LCBvcmlnaW46IHZlYzM8ZjMyPiwgaGFsZkRpbWVuc2lvbnM6IHZlYzM8ZjMyPikgLT4gZjMyXFxue1xcblxcdGxldCBsb2NhbF9wb3M6IHZlYzM8ZjMyPiA9IHdvcmxkUG9zaXRpb24gLSBvcmlnaW47XFxuXFx0bGV0IHBvczogdmVjMzxmMzI+ID0gbG9jYWxfcG9zO1xcblxcblxcdGxldCBkOiB2ZWMzPGYzMj4gPSB2ZWMzPGYzMj4oYWJzKHBvcy54KSwgYWJzKHBvcy55KSwgYWJzKHBvcy56KSkgLSBoYWxmRGltZW5zaW9ucztcXG5cXHRsZXQgbTogZjMyID0gbWF4KGQueCwgbWF4KGQueSwgZC56KSk7XFxuXFx0cmV0dXJuIGNsYW1wKG1pbihtLCBsZW5ndGgobWF4KGQsIHZlYzM8ZjMyPigwLjAsIDAuMCwgMC4wKSkpKSwgLTEwMC4wLCAxMDAuMCk7XFxufVxcblxcbmZuIFRvcnVzKHdvcmxkUG9zaXRpb246IHZlYzM8ZjMyPiwgb3JpZ2luOiB2ZWMzPGYzMj4sIHQ6IHZlYzM8ZjMyPikgLT4gZjMyXFxue1xcblxcdGxldCBwOiB2ZWMzPGYzMj4gPSB3b3JsZFBvc2l0aW9uIC0gb3JpZ2luO1xcblxcbiAgbGV0IHE6IHZlYzI8ZjMyPiA9IHZlYzI8ZjMyPihsZW5ndGgocC54eiktdC54LHAueSk7XFxuICByZXR1cm4gbGVuZ3RoKHEpLXQueTtcXG59XFxuXFxuZm4gU3BoZXJlKHdvcmxkUG9zaXRpb246IHZlYzM8ZjMyPiwgb3JpZ2luOiB2ZWMzPGYzMj4sIHJhZGl1czogZjMyKSAtPiBmMzJcXG57XFxuXFx0cmV0dXJuIGNsYW1wKGxlbmd0aCh3b3JsZFBvc2l0aW9uIC0gb3JpZ2luKSAtIHJhZGl1cywgLTEwMC4wLCAxMDAuMCk7XFxufVxcblxcbmZuIEZyYWN0YWxOb2lzZTIxKG9jdGF2ZXM6IGkzMiwgZnJlcXVlbmN5OiBmMzIsIGxhY3VuYXJpdHk6IGYzMiwgcGVyc2lzdGVuY2U6IGYzMiwgcG9zaXRpb246IHZlYzM8ZjMyPikgLT4gZjMyXFxue1xcblxcdGxldCBTQ0FMRTogZjMyID0gMS4wIC8gMTI4LjA7XFxuXFx0dmFyIHA6IHZlYzM8ZjMyPiA9IHBvc2l0aW9uICogU0NBTEU7XFxuXFx0dmFyIG5vaXM6IGYzMiA9IDAuMDtcXG5cXG5cXHR2YXIgYW1wbGl0dWRlOiBmMzIgPSAxLjA7XFxuXFx0cCA9IHAgKiBmcmVxdWVuY3k7XFxuXFxuXFx0dmFyIGk6IGkzMiA9IDA7XFxuXFx0bG9vcCB7XFxuXFx0XFx0aWYgKGkgPj0gb2N0YXZlcykgeyBicmVhazsgfVxcblxcblxcdFxcdG5vaXMgPSBub2lzICsgcGVybGluTm9pc2UzKHApICogYW1wbGl0dWRlO1xcblxcdFxcdHAgPSBwICogbGFjdW5hcml0eTtcXG5cXHRcXHRhbXBsaXR1ZGUgPSBhbXBsaXR1ZGUgKiBwZXJzaXN0ZW5jZTtcXG5cXG5cXHRcXHRjb250aW51aW5nIHtcXG5cXHRcXHRcXHRpID0gaSArIDE7XFxuXFx0XFx0fVxcblxcdH1cXG5cXG5cXHRyZXR1cm4gbm9pcztcXG59XFxuXFxuZm4gRnJhY3RhbE5vaXNlMihmcmVxdWVuY3k6IGYzMiwgbGFjdW5hcml0eTogZjMyLCBwZXJzaXN0ZW5jZTogZjMyLCBwb3NpdGlvbjogdmVjMzxmMzI+KSAtPiBmMzJcXG57XFxuXFx0bGV0IFNDQUxFOiBmMzIgPSAxLjAgLyAxMjguMDtcXG5cXHR2YXIgcDogdmVjMzxmMzI+ID0gcG9zaXRpb24gKiBTQ0FMRTtcXG5cXHR2YXIgbm9pczogZjMyID0gMC4wO1xcblxcblxcdHZhciBhbXBsaXR1ZGU6IGYzMiA9IDEuMDtcXG5cXHRwID0gcCAqIGZyZXF1ZW5jeTtcXG5cXG5cXHRub2lzID0gbm9pcyArIHBlcmxpbk5vaXNlMyhwKSAqIGFtcGxpdHVkZTtcXG5cXHRwID0gcCAqIGxhY3VuYXJpdHk7XFxuXFx0YW1wbGl0dWRlID0gYW1wbGl0dWRlICogcGVyc2lzdGVuY2U7XFxuXFxuXFx0cmV0dXJuIG5vaXM7XFxufVxcblxcbmZuIHBlcm11dGU0MSh4OiB2ZWM0PGYzMj4pIC0+IHZlYzQ8ZjMyPiB7IHJldHVybiAoKHggKiAzNC4gKyAxLikgKiB4KSAlIHZlYzQ8ZjMyPigyODkuKTsgfVxcbmZuIHRheWxvckludlNxcnQ0KHI6IHZlYzQ8ZjMyPikgLT4gdmVjNDxmMzI+IHsgcmV0dXJuIDEuNzkyODQyOTE0MDAxNTkgLSAwLjg1MzczNDcyMDk1MzE0ICogcjsgfVxcbmZuIGZhZGUzKHQ6IHZlYzM8ZjMyPikgLT4gdmVjMzxmMzI+IHsgcmV0dXJuIHQgKiB0ICogdCAqICh0ICogKHQgKiA2LiAtIDE1LikgKyAxMC4pOyB9XFxuXFxuZm4gcGVybGluTm9pc2UzKFA6IHZlYzM8ZjMyPikgLT4gZjMyIHtcXG4gIHZhciBQaTAgOiB2ZWMzPGYzMj4gPSBmbG9vcihQKTsgLy8gSW50ZWdlciBwYXJ0IGZvciBpbmRleGluZ1xcbiAgdmFyIFBpMSA6IHZlYzM8ZjMyPiA9IFBpMCArIHZlYzM8ZjMyPigxLik7IC8vIEludGVnZXIgcGFydCArIDFcXG4gIFBpMCA9IFBpMCAlIHZlYzM8ZjMyPigyODkuKTtcXG4gIFBpMSA9IFBpMSAlIHZlYzM8ZjMyPigyODkuKTtcXG4gIGxldCBQZjAgPSBmcmFjdChQKTsgLy8gRnJhY3Rpb25hbCBwYXJ0IGZvciBpbnRlcnBvbGF0aW9uXFxuICBsZXQgUGYxID0gUGYwIC0gdmVjMzxmMzI+KDEuKTsgLy8gRnJhY3Rpb25hbCBwYXJ0IC0gMS5cXG4gIGxldCBpeCA9IHZlYzQ8ZjMyPihQaTAueCwgUGkxLngsIFBpMC54LCBQaTEueCk7XFxuICBsZXQgaXkgPSB2ZWM0PGYzMj4oUGkwLnl5LCBQaTEueXkpO1xcbiAgbGV0IGl6MCA9IFBpMC56enp6O1xcbiAgbGV0IGl6MSA9IFBpMS56enp6O1xcblxcbiAgbGV0IGl4eSA9IHBlcm11dGU0MShwZXJtdXRlNDEoaXgpICsgaXkpO1xcbiAgbGV0IGl4eTAgPSBwZXJtdXRlNDEoaXh5ICsgaXowKTtcXG4gIGxldCBpeHkxID0gcGVybXV0ZTQxKGl4eSArIGl6MSk7XFxuXFxuICB2YXIgZ3gwOiB2ZWM0PGYzMj4gPSBpeHkwIC8gNy47XFxuICB2YXIgZ3kwOiB2ZWM0PGYzMj4gPSBmcmFjdChmbG9vcihneDApIC8gNy4pIC0gMC41O1xcbiAgZ3gwID0gZnJhY3QoZ3gwKTtcXG4gIHZhciBnejA6IHZlYzQ8ZjMyPiA9IHZlYzQ8ZjMyPigwLjUpIC0gYWJzKGd4MCkgLSBhYnMoZ3kwKTtcXG4gIHZhciBzejA6IHZlYzQ8ZjMyPiA9IHN0ZXAoZ3owLCB2ZWM0PGYzMj4oMC4pKTtcXG4gIGd4MCA9IGd4MCArIHN6MCAqIChzdGVwKHZlYzQ8ZjMyPigwLiksIGd4MCkgLSAwLjUpO1xcbiAgZ3kwID0gZ3kwICsgc3owICogKHN0ZXAodmVjNDxmMzI+KDAuKSwgZ3kwKSAtIDAuNSk7XFxuXFxuICB2YXIgZ3gxOiB2ZWM0PGYzMj4gPSBpeHkxIC8gNy47XFxuICB2YXIgZ3kxOiB2ZWM0PGYzMj4gPSBmcmFjdChmbG9vcihneDEpIC8gNy4pIC0gMC41O1xcbiAgZ3gxID0gZnJhY3QoZ3gxKTtcXG4gIHZhciBnejE6IHZlYzQ8ZjMyPiA9IHZlYzQ8ZjMyPigwLjUpIC0gYWJzKGd4MSkgLSBhYnMoZ3kxKTtcXG4gIHZhciBzejE6IHZlYzQ8ZjMyPiA9IHN0ZXAoZ3oxLCB2ZWM0PGYzMj4oMC4pKTtcXG4gIGd4MSA9IGd4MSAtIHN6MSAqIChzdGVwKHZlYzQ8ZjMyPigwLiksIGd4MSkgLSAwLjUpO1xcbiAgZ3kxID0gZ3kxIC0gc3oxICogKHN0ZXAodmVjNDxmMzI+KDAuKSwgZ3kxKSAtIDAuNSk7XFxuXFxuICB2YXIgZzAwMDogdmVjMzxmMzI+ID0gdmVjMzxmMzI+KGd4MC54LCBneTAueCwgZ3owLngpO1xcbiAgdmFyIGcxMDA6IHZlYzM8ZjMyPiA9IHZlYzM8ZjMyPihneDAueSwgZ3kwLnksIGd6MC55KTtcXG4gIHZhciBnMDEwOiB2ZWMzPGYzMj4gPSB2ZWMzPGYzMj4oZ3gwLnosIGd5MC56LCBnejAueik7XFxuICB2YXIgZzExMDogdmVjMzxmMzI+ID0gdmVjMzxmMzI+KGd4MC53LCBneTAudywgZ3owLncpO1xcbiAgdmFyIGcwMDE6IHZlYzM8ZjMyPiA9IHZlYzM8ZjMyPihneDEueCwgZ3kxLngsIGd6MS54KTtcXG4gIHZhciBnMTAxOiB2ZWMzPGYzMj4gPSB2ZWMzPGYzMj4oZ3gxLnksIGd5MS55LCBnejEueSk7XFxuICB2YXIgZzAxMTogdmVjMzxmMzI+ID0gdmVjMzxmMzI+KGd4MS56LCBneTEueiwgZ3oxLnopO1xcbiAgdmFyIGcxMTE6IHZlYzM8ZjMyPiA9IHZlYzM8ZjMyPihneDEudywgZ3kxLncsIGd6MS53KTtcXG5cXG4gIGxldCBub3JtMCA9IHRheWxvckludlNxcnQ0KFxcbiAgICAgIHZlYzQ8ZjMyPihkb3QoZzAwMCwgZzAwMCksIGRvdChnMDEwLCBnMDEwKSwgZG90KGcxMDAsIGcxMDApLCBkb3QoZzExMCwgZzExMCkpKTtcXG4gIGcwMDAgPSBnMDAwICogbm9ybTAueDtcXG4gIGcwMTAgPSBnMDEwICogbm9ybTAueTtcXG4gIGcxMDAgPSBnMTAwICogbm9ybTAuejtcXG4gIGcxMTAgPSBnMTEwICogbm9ybTAudztcXG4gIGxldCBub3JtMSA9IHRheWxvckludlNxcnQ0KFxcbiAgICAgIHZlYzQ8ZjMyPihkb3QoZzAwMSwgZzAwMSksIGRvdChnMDExLCBnMDExKSwgZG90KGcxMDEsIGcxMDEpLCBkb3QoZzExMSwgZzExMSkpKTtcXG4gIGcwMDEgPSBnMDAxICogbm9ybTEueDtcXG4gIGcwMTEgPSBnMDExICogbm9ybTEueTtcXG4gIGcxMDEgPSBnMTAxICogbm9ybTEuejtcXG4gIGcxMTEgPSBnMTExICogbm9ybTEudztcXG5cXG4gIGxldCBuMDAwID0gZG90KGcwMDAsIFBmMCk7XFxuICBsZXQgbjEwMCA9IGRvdChnMTAwLCB2ZWMzPGYzMj4oUGYxLngsIFBmMC55eikpO1xcbiAgbGV0IG4wMTAgPSBkb3QoZzAxMCwgdmVjMzxmMzI+KFBmMC54LCBQZjEueSwgUGYwLnopKTtcXG4gIGxldCBuMTEwID0gZG90KGcxMTAsIHZlYzM8ZjMyPihQZjEueHksIFBmMC56KSk7XFxuICBsZXQgbjAwMSA9IGRvdChnMDAxLCB2ZWMzPGYzMj4oUGYwLnh5LCBQZjEueikpO1xcbiAgbGV0IG4xMDEgPSBkb3QoZzEwMSwgdmVjMzxmMzI+KFBmMS54LCBQZjAueSwgUGYxLnopKTtcXG4gIGxldCBuMDExID0gZG90KGcwMTEsIHZlYzM8ZjMyPihQZjAueCwgUGYxLnl6KSk7XFxuICBsZXQgbjExMSA9IGRvdChnMTExLCBQZjEpO1xcblxcbiAgdmFyIGZhZGVfeHl6OiB2ZWMzPGYzMj4gPSBmYWRlMyhQZjApO1xcbiAgbGV0IHRlbXAgPSB2ZWM0PGYzMj4oZjMyKGZhZGVfeHl6LnopKTsgLy8gc2ltcGxpZnkgYWZ0ZXIgY2hyb21lIGJ1ZyBmaXhcXG4gIGxldCBuX3ogPSBtaXgodmVjNDxmMzI+KG4wMDAsIG4xMDAsIG4wMTAsIG4xMTApLCB2ZWM0PGYzMj4objAwMSwgbjEwMSwgbjAxMSwgbjExMSksIHRlbXApO1xcbiAgbGV0IG5feXogPSBtaXgobl96Lnh5LCBuX3ouencsIHZlYzI8ZjMyPihmMzIoZmFkZV94eXoueSkpKTsgLy8gc2ltcGxpZnkgYWZ0ZXIgY2hyb21lIGJ1ZyBmaXhcXG4gIGxldCBuX3h5eiA9IG1peChuX3l6LngsIG5feXoueSwgZmFkZV94eXoueCk7XFxuICByZXR1cm4gMi4yICogbl94eXo7XFxufVxcblxcbmZuIENhbGN1bGF0ZU5vaXNlVmFsdWUyKHBvczogdmVjMzxmMzI+LCBzY2FsZTogZjMyKSAtPiBmMzJcXG57XFxuXFx0cmV0dXJuIEZyYWN0YWxOb2lzZTIxKDQsIDAuNTM0MywgMi4yMzI0LCAwLjY4MzI0LCBwb3MgKiBzY2FsZSk7XFxufVxcblxcbmZuIENMZXJwMihhOiBmMzIsIGI6IGYzMiwgdDogZjMyKSAtPiBmMzJcXG57XFxuXFx0cmV0dXJuICgxLjAgLSB0KSAqIGEgKyB0ICogYjtcXG59XFxuXFxuZm4gY2FsY3VsYXRlRGVuc2l0eSh3b3JsZFBvc2l0aW9uOiB2ZWMzPGYzMj4pIC0+IERlbnNpdHkge1xcblxcdHZhciB3b3JsZFJhZGl1czogZjMyID0gMTAwMDAuMDtcXG5cXHR2YXIgd29ybGQ6IHZlYzM8ZjMyPiA9IHdvcmxkUG9zaXRpb24gLSB2ZWMzPGYzMj4od29ybGRSYWRpdXMpO1xcblxcdHZhciB3b3JsZERpc3Q6IGYzMiA9IGNsYW1wKC13b3JsZFJhZGl1cyArIGxlbmd0aCh3b3JsZCksIC0xMDAwLjAsIDEwMDAuMCk7XFxuXFxuXFx0bGV0IGZsYXRsYW5kTm9pc2VTY2FsZTogZjMyID0gMy4wO1xcblxcdGxldCBmbGF0bGFuZExlcnBBbW91bnQ6IGYzMiA9IDAuMDc7XFxuXFx0bGV0IGZsYXRsYW5kWVBlcmNlbnQ6IGYzMiA9IDEuMjtcXG5cXG5cXHRsZXQgcm9ja3lOb2lzZVNjYWxlOiBmMzIgPSAzLjA7XFxuXFx0bGV0IHJvY2t5TGVycEFtb3VudDogZjMyID0gMC4wNTtcXG5cXHRsZXQgcm9ja3lZUGVyY2VudDogZjMyID0gMC43O1xcblxcblxcdGxldCBtYXhNb3VudGFpbk1peExlcnBBbW91bnQ6IGYzMiA9IDAuMDc1O1xcblxcdGxldCBtaW5Nb3VudGFpbk1peExlcnBBbW91bnQ6IGYzMiA9IDEuMDtcXG5cXG5cXHRsZXQgcm9ja3lCbGVuZDogZjMyID0gMS4wO1xcblxcbi8vXFx0bGV0IG1vdW50YWluQmxlbmQ6IGYzMiA9IGNsYW1wKGFicyhGcmFjdGFsTm9pc2UyKDAuNTM0MywgMi4yMzI0LCAwLjY4MzI0LCB3b3JsZCkpICogNC4wLCAwLjAsIDEuMCk7XFxuLy9cXHQvL2xldCBtb3VudGFpbkJsZW5kOiBmMzIgPSAwLjA7XFxuLy9cXG4vL1xcdGxldCBtb3VudGFpbjogZjMyID0gQ2FsY3VsYXRlTm9pc2VWYWx1ZTIod29ybGQsIDAuMDcpO1xcbi8vXFx0Ly9sZXQgbW91bnRhaW46IGYzMiA9IDAuMDtcXG4vL1xcbi8vXFx0dmFyIGJsb2I6IGYzMiA9IENhbGN1bGF0ZU5vaXNlVmFsdWUyKHdvcmxkLCBmbGF0bGFuZE5vaXNlU2NhbGUgKyAoKHJvY2t5Tm9pc2VTY2FsZSAtIGZsYXRsYW5kTm9pc2VTY2FsZSkgKiByb2NreUJsZW5kKSk7XFxuLy9cXHRibG9iID0gQ0xlcnAyKGJsb2IsICh3b3JsZERpc3QpICogKGZsYXRsYW5kWVBlcmNlbnQgKyAoKHJvY2t5WVBlcmNlbnQgLSBmbGF0bGFuZFlQZXJjZW50KSAqIHJvY2t5QmxlbmQpKSxcXG4vL1xcdFxcdFxcdFxcdGZsYXRsYW5kTGVycEFtb3VudCArICgocm9ja3lMZXJwQW1vdW50IC0gZmxhdGxhbmRMZXJwQW1vdW50KSAqIHJvY2t5QmxlbmQpKTtcXG4vL1xcdFxcdFxcdFxcdC8vKyBDTGVycDIobW91bnRhaW4sIGJsb2IsIG1pbk1vdW50YWluTWl4TGVycEFtb3VudCArICgobWF4TW91bnRhaW5NaXhMZXJwQW1vdW50IC0gbWluTW91bnRhaW5NaXhMZXJwQW1vdW50KSAqIG1vdW50YWluQmxlbmQpKTtcXG5cXG4gIHZhciByZXN1bHQgPSBEZW5zaXR5KDEuMCwgTUFURVJJQUxfQUlSKTtcXG5cXG5cXHQvL3Jlc3VsdCA9IGFkZChyZXN1bHQsIGJsb2IsIE1BVEVSSUFMX1JPQ0spO1xcblxcbiAgcmVzdWx0ID0gYWRkKHJlc3VsdCwgQm94KHdvcmxkUG9zaXRpb24sIHZlYzM8ZjMyPigyMDAwMDAwLjAsIDE1MC4wLCA1MDAwLjApLCB2ZWMzPGYzMj4oNTAwMC4wLCAxMDAwLjAsIDUwMDAuMCkpLCBNQVRFUklBTF9XT09EKTtcXG4gIHJlc3VsdCA9IGFkZChyZXN1bHQsIFNwaGVyZSh3b3JsZFBvc2l0aW9uLCB2ZWMzPGYzMj4oMjAwMDAwMC4wLCAxMDAuMCwgMTAwLjApLCA1MDAwLjApLCBNQVRFUklBTF9ST0NLKTtcXG5cXG4gIHJlc3VsdCA9IGFkZChyZXN1bHQsIFNwaGVyZSh3b3JsZFBvc2l0aW9uLCB2ZWMzPGYzMj4oMjAwMDAwMC4wIC0gMTAwMDAwMC4wLCAwLjAsIDAuMCksIDEwMDAwMDAuMCksIE1BVEVSSUFMX1JPQ0spO1xcblxcbiAgcmVzdWx0ID0gYWRkKHJlc3VsdCwgU3BoZXJlKHdvcmxkUG9zaXRpb24sIHZlYzM8ZjMyPigwLjAsIDAuMCwgMC4wKSwgMjAwMDAwLjApLCBNQVRFUklBTF9GSVJFKTtcXG5cXG4gIHJlc3VsdCA9IHN1YnRyYWN0KHJlc3VsdCwgLVNwaGVyZSh3b3JsZFBvc2l0aW9uLCB2ZWMzPGYzMj4oMjAwMDAwMC4wLCAwLjAsIDAuMCksIDEwMDAuMCkpO1xcbiAgcmVzdWx0ID0gc3VidHJhY3QocmVzdWx0LCAtQm94KHdvcmxkUG9zaXRpb24sIHZlYzM8ZjMyPigyMDAwMDAwLjAsIDAuMCwgMC4wKSwgdmVjMzxmMzI+KDYwMDAuMCwgNTAwLjAsIDUwMC4wKSkpO1xcbiAgcmVzdWx0ID0gc3VidHJhY3QocmVzdWx0LCAtQm94KHdvcmxkUG9zaXRpb24sIHZlYzM8ZjMyPigyMDAwMDAwLjAsIDAuMCwgMC4wKSwgdmVjMzxmMzI+KDUwMC4wLCA1MDAuMCwgNTAwMC4wKSkpO1xcblxcbiAgLy9yZXN1bHQgPSBhZGQocmVzdWx0LCBTcGhlcmUod29ybGRQb3NpdGlvbiwgdmVjMzxmMzI+KDIwMDAwMDAuMCwgMC4wLCAwLjApLCAxMDAwLjApLCBNQVRFUklBTF9GSVJFKTtcXG5cXG5cXG4gIGxldCBjb3VudCA9IGFycmF5TGVuZ3RoKCZhdWdtZW50YXRpb25zKTtcXG5cXG4gIHZhciBpOiB1MzIgPSAwdTtcXG4gIGxvb3Age1xcbiAgICBpZiAoaSA+IGNvdW50KSB7IGJyZWFrOyB9XFxuXFxuICAgIGxldCBhdWdtZW50YXRpb24gPSBhdWdtZW50YXRpb25zW2ldO1xcbiAgICByZXN1bHQgPSBhZGQocmVzdWx0LCBTcGhlcmUod29ybGRQb3NpdGlvbiwgdmVjMzxmMzI+KGF1Z21lbnRhdGlvbi5wb3NpdGlvbi54LCBhdWdtZW50YXRpb24ucG9zaXRpb24ueSwgYXVnbWVudGF0aW9uLnBvc2l0aW9uLnopLCAxMDAwLjApLCBNQVRFUklBTF9GSVJFKTtcXG5cXG5cXG4gICAgY29udGludWluZyB7XFxuICAgICAgaSA9IGkgKyAxdTtcXG4gICAgfVxcbiAgfVxcblxcbiAgbGV0IGF1Z21lbnRhdGlvbiA9IGF1Z21lbnRhdGlvbnNbMF07XFxuICByZXR1cm4gcmVzdWx0O1xcbn1cXG5cXG5mbiBnZXREZW5zaXR5KHdvcmxkUG9zaXRpb246IHZlYzM8ZjMyPikgLT4gZjMyIHtcXG5cXHRyZXR1cm4gY2FsY3VsYXRlRGVuc2l0eSh3b3JsZFBvc2l0aW9uKS5kZW5zaXR5O1xcbn1cIjsiLCIvLyBBIGxpYnJhcnkgb2Ygc2VlZGFibGUgUk5HcyBpbXBsZW1lbnRlZCBpbiBKYXZhc2NyaXB0LlxuLy9cbi8vIFVzYWdlOlxuLy9cbi8vIHZhciBzZWVkcmFuZG9tID0gcmVxdWlyZSgnc2VlZHJhbmRvbScpO1xuLy8gdmFyIHJhbmRvbSA9IHNlZWRyYW5kb20oMSk7IC8vIG9yIGFueSBzZWVkLlxuLy8gdmFyIHggPSByYW5kb20oKTsgICAgICAgLy8gMCA8PSB4IDwgMS4gIEV2ZXJ5IGJpdCBpcyByYW5kb20uXG4vLyB2YXIgeCA9IHJhbmRvbS5xdWljaygpOyAvLyAwIDw9IHggPCAxLiAgMzIgYml0cyBvZiByYW5kb21uZXNzLlxuXG4vLyBhbGVhLCBhIDUzLWJpdCBtdWx0aXBseS13aXRoLWNhcnJ5IGdlbmVyYXRvciBieSBKb2hhbm5lcyBCYWFnw7hlLlxuLy8gUGVyaW9kOiB+Ml4xMTZcbi8vIFJlcG9ydGVkIHRvIHBhc3MgYWxsIEJpZ0NydXNoIHRlc3RzLlxudmFyIGFsZWEgPSByZXF1aXJlKCcuL2xpYi9hbGVhJyk7XG5cbi8vIHhvcjEyOCwgYSBwdXJlIHhvci1zaGlmdCBnZW5lcmF0b3IgYnkgR2VvcmdlIE1hcnNhZ2xpYS5cbi8vIFBlcmlvZDogMl4xMjgtMS5cbi8vIFJlcG9ydGVkIHRvIGZhaWw6IE1hdHJpeFJhbmsgYW5kIExpbmVhckNvbXAuXG52YXIgeG9yMTI4ID0gcmVxdWlyZSgnLi9saWIveG9yMTI4Jyk7XG5cbi8vIHhvcndvdywgR2VvcmdlIE1hcnNhZ2xpYSdzIDE2MC1iaXQgeG9yLXNoaWZ0IGNvbWJpbmVkIHBsdXMgd2V5bC5cbi8vIFBlcmlvZDogMl4xOTItMl4zMlxuLy8gUmVwb3J0ZWQgdG8gZmFpbDogQ29sbGlzaW9uT3ZlciwgU2ltcFBva2VyLCBhbmQgTGluZWFyQ29tcC5cbnZhciB4b3J3b3cgPSByZXF1aXJlKCcuL2xpYi94b3J3b3cnKTtcblxuLy8geG9yc2hpZnQ3LCBieSBGcmFuw6dvaXMgUGFubmV0b24gYW5kIFBpZXJyZSBMJ2VjdXllciwgdGFrZXNcbi8vIGEgZGlmZmVyZW50IGFwcHJvYWNoOiBpdCBhZGRzIHJvYnVzdG5lc3MgYnkgYWxsb3dpbmcgbW9yZSBzaGlmdHNcbi8vIHRoYW4gTWFyc2FnbGlhJ3Mgb3JpZ2luYWwgdGhyZWUuICBJdCBpcyBhIDctc2hpZnQgZ2VuZXJhdG9yXG4vLyB3aXRoIDI1NiBiaXRzLCB0aGF0IHBhc3NlcyBCaWdDcnVzaCB3aXRoIG5vIHN5c3RtYXRpYyBmYWlsdXJlcy5cbi8vIFBlcmlvZCAyXjI1Ni0xLlxuLy8gTm8gc3lzdGVtYXRpYyBCaWdDcnVzaCBmYWlsdXJlcyByZXBvcnRlZC5cbnZhciB4b3JzaGlmdDcgPSByZXF1aXJlKCcuL2xpYi94b3JzaGlmdDcnKTtcblxuLy8geG9yNDA5NiwgYnkgUmljaGFyZCBCcmVudCwgaXMgYSA0MDk2LWJpdCB4b3Itc2hpZnQgd2l0aCBhXG4vLyB2ZXJ5IGxvbmcgcGVyaW9kIHRoYXQgYWxzbyBhZGRzIGEgV2V5bCBnZW5lcmF0b3IuIEl0IGFsc28gcGFzc2VzXG4vLyBCaWdDcnVzaCB3aXRoIG5vIHN5c3RlbWF0aWMgZmFpbHVyZXMuICBJdHMgbG9uZyBwZXJpb2QgbWF5XG4vLyBiZSB1c2VmdWwgaWYgeW91IGhhdmUgbWFueSBnZW5lcmF0b3JzIGFuZCBuZWVkIHRvIGF2b2lkXG4vLyBjb2xsaXNpb25zLlxuLy8gUGVyaW9kOiAyXjQxMjgtMl4zMi5cbi8vIE5vIHN5c3RlbWF0aWMgQmlnQ3J1c2ggZmFpbHVyZXMgcmVwb3J0ZWQuXG52YXIgeG9yNDA5NiA9IHJlcXVpcmUoJy4vbGliL3hvcjQwOTYnKTtcblxuLy8gVHljaGUtaSwgYnkgU2FtdWVsIE5ldmVzIGFuZCBGaWxpcGUgQXJhdWpvLCBpcyBhIGJpdC1zaGlmdGluZyByYW5kb21cbi8vIG51bWJlciBnZW5lcmF0b3IgZGVyaXZlZCBmcm9tIENoYUNoYSwgYSBtb2Rlcm4gc3RyZWFtIGNpcGhlci5cbi8vIGh0dHBzOi8vZWRlbi5kZWkudWMucHQvfnNuZXZlcy9wdWJzLzIwMTEtc25mYTIucGRmXG4vLyBQZXJpb2Q6IH4yXjEyN1xuLy8gTm8gc3lzdGVtYXRpYyBCaWdDcnVzaCBmYWlsdXJlcyByZXBvcnRlZC5cbnZhciB0eWNoZWkgPSByZXF1aXJlKCcuL2xpYi90eWNoZWknKTtcblxuLy8gVGhlIG9yaWdpbmFsIEFSQzQtYmFzZWQgcHJuZyBpbmNsdWRlZCBpbiB0aGlzIGxpYnJhcnkuXG4vLyBQZXJpb2Q6IH4yXjE2MDBcbnZhciBzciA9IHJlcXVpcmUoJy4vc2VlZHJhbmRvbScpO1xuXG5zci5hbGVhID0gYWxlYTtcbnNyLnhvcjEyOCA9IHhvcjEyODtcbnNyLnhvcndvdyA9IHhvcndvdztcbnNyLnhvcnNoaWZ0NyA9IHhvcnNoaWZ0NztcbnNyLnhvcjQwOTYgPSB4b3I0MDk2O1xuc3IudHljaGVpID0gdHljaGVpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNyO1xuIiwiLy8gQSBwb3J0IG9mIGFuIGFsZ29yaXRobSBieSBKb2hhbm5lcyBCYWFnw7hlIDxiYWFnb2VAYmFhZ29lLmNvbT4sIDIwMTBcbi8vIGh0dHA6Ly9iYWFnb2UuY29tL2VuL1JhbmRvbU11c2luZ3MvamF2YXNjcmlwdC9cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ucXVpbmxhbi9iZXR0ZXItcmFuZG9tLW51bWJlcnMtZm9yLWphdmFzY3JpcHQtbWlycm9yXG4vLyBPcmlnaW5hbCB3b3JrIGlzIHVuZGVyIE1JVCBsaWNlbnNlIC1cblxuLy8gQ29weXJpZ2h0IChDKSAyMDEwIGJ5IEpvaGFubmVzIEJhYWfDuGUgPGJhYWdvZUBiYWFnb2Uub3JnPlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cblxuXG4oZnVuY3Rpb24oZ2xvYmFsLCBtb2R1bGUsIGRlZmluZSkge1xuXG5mdW5jdGlvbiBBbGVhKHNlZWQpIHtcbiAgdmFyIG1lID0gdGhpcywgbWFzaCA9IE1hc2goKTtcblxuICBtZS5uZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHQgPSAyMDkxNjM5ICogbWUuczAgKyBtZS5jICogMi4zMjgzMDY0MzY1Mzg2OTYzZS0xMDsgLy8gMl4tMzJcbiAgICBtZS5zMCA9IG1lLnMxO1xuICAgIG1lLnMxID0gbWUuczI7XG4gICAgcmV0dXJuIG1lLnMyID0gdCAtIChtZS5jID0gdCB8IDApO1xuICB9O1xuXG4gIC8vIEFwcGx5IHRoZSBzZWVkaW5nIGFsZ29yaXRobSBmcm9tIEJhYWdvZS5cbiAgbWUuYyA9IDE7XG4gIG1lLnMwID0gbWFzaCgnICcpO1xuICBtZS5zMSA9IG1hc2goJyAnKTtcbiAgbWUuczIgPSBtYXNoKCcgJyk7XG4gIG1lLnMwIC09IG1hc2goc2VlZCk7XG4gIGlmIChtZS5zMCA8IDApIHsgbWUuczAgKz0gMTsgfVxuICBtZS5zMSAtPSBtYXNoKHNlZWQpO1xuICBpZiAobWUuczEgPCAwKSB7IG1lLnMxICs9IDE7IH1cbiAgbWUuczIgLT0gbWFzaChzZWVkKTtcbiAgaWYgKG1lLnMyIDwgMCkgeyBtZS5zMiArPSAxOyB9XG4gIG1hc2ggPSBudWxsO1xufVxuXG5mdW5jdGlvbiBjb3B5KGYsIHQpIHtcbiAgdC5jID0gZi5jO1xuICB0LnMwID0gZi5zMDtcbiAgdC5zMSA9IGYuczE7XG4gIHQuczIgPSBmLnMyO1xuICByZXR1cm4gdDtcbn1cblxuZnVuY3Rpb24gaW1wbChzZWVkLCBvcHRzKSB7XG4gIHZhciB4ZyA9IG5ldyBBbGVhKHNlZWQpLFxuICAgICAgc3RhdGUgPSBvcHRzICYmIG9wdHMuc3RhdGUsXG4gICAgICBwcm5nID0geGcubmV4dDtcbiAgcHJuZy5pbnQzMiA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gKHhnLm5leHQoKSAqIDB4MTAwMDAwMDAwKSB8IDA7IH1cbiAgcHJuZy5kb3VibGUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gcHJuZygpICsgKHBybmcoKSAqIDB4MjAwMDAwIHwgMCkgKiAxLjExMDIyMzAyNDYyNTE1NjVlLTE2OyAvLyAyXi01M1xuICB9O1xuICBwcm5nLnF1aWNrID0gcHJuZztcbiAgaWYgKHN0YXRlKSB7XG4gICAgaWYgKHR5cGVvZihzdGF0ZSkgPT0gJ29iamVjdCcpIGNvcHkoc3RhdGUsIHhnKTtcbiAgICBwcm5nLnN0YXRlID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb3B5KHhnLCB7fSk7IH1cbiAgfVxuICByZXR1cm4gcHJuZztcbn1cblxuZnVuY3Rpb24gTWFzaCgpIHtcbiAgdmFyIG4gPSAweGVmYzgyNDlkO1xuXG4gIHZhciBtYXNoID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIGRhdGEgPSBTdHJpbmcoZGF0YSk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBuICs9IGRhdGEuY2hhckNvZGVBdChpKTtcbiAgICAgIHZhciBoID0gMC4wMjUxOTYwMzI4MjQxNjkzOCAqIG47XG4gICAgICBuID0gaCA+Pj4gMDtcbiAgICAgIGggLT0gbjtcbiAgICAgIGggKj0gbjtcbiAgICAgIG4gPSBoID4+PiAwO1xuICAgICAgaCAtPSBuO1xuICAgICAgbiArPSBoICogMHgxMDAwMDAwMDA7IC8vIDJeMzJcbiAgICB9XG4gICAgcmV0dXJuIChuID4+PiAwKSAqIDIuMzI4MzA2NDM2NTM4Njk2M2UtMTA7IC8vIDJeLTMyXG4gIH07XG5cbiAgcmV0dXJuIG1hc2g7XG59XG5cblxuaWYgKG1vZHVsZSAmJiBtb2R1bGUuZXhwb3J0cykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGltcGw7XG59IGVsc2UgaWYgKGRlZmluZSAmJiBkZWZpbmUuYW1kKSB7XG4gIGRlZmluZShmdW5jdGlvbigpIHsgcmV0dXJuIGltcGw7IH0pO1xufSBlbHNlIHtcbiAgdGhpcy5hbGVhID0gaW1wbDtcbn1cblxufSkoXG4gIHRoaXMsXG4gICh0eXBlb2YgbW9kdWxlKSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUsICAgIC8vIHByZXNlbnQgaW4gbm9kZS5qc1xuICAodHlwZW9mIGRlZmluZSkgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUgICAvLyBwcmVzZW50IHdpdGggYW4gQU1EIGxvYWRlclxuKTtcblxuXG4iLCIvLyBBIEphdmFzY3JpcHQgaW1wbGVtZW50YWlvbiBvZiB0aGUgXCJUeWNoZS1pXCIgcHJuZyBhbGdvcml0aG0gYnlcbi8vIFNhbXVlbCBOZXZlcyBhbmQgRmlsaXBlIEFyYXVqby5cbi8vIFNlZSBodHRwczovL2VkZW4uZGVpLnVjLnB0L35zbmV2ZXMvcHVicy8yMDExLXNuZmEyLnBkZlxuXG4oZnVuY3Rpb24oZ2xvYmFsLCBtb2R1bGUsIGRlZmluZSkge1xuXG5mdW5jdGlvbiBYb3JHZW4oc2VlZCkge1xuICB2YXIgbWUgPSB0aGlzLCBzdHJzZWVkID0gJyc7XG5cbiAgLy8gU2V0IHVwIGdlbmVyYXRvciBmdW5jdGlvbi5cbiAgbWUubmV4dCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBiID0gbWUuYiwgYyA9IG1lLmMsIGQgPSBtZS5kLCBhID0gbWUuYTtcbiAgICBiID0gKGIgPDwgMjUpIF4gKGIgPj4+IDcpIF4gYztcbiAgICBjID0gKGMgLSBkKSB8IDA7XG4gICAgZCA9IChkIDw8IDI0KSBeIChkID4+PiA4KSBeIGE7XG4gICAgYSA9IChhIC0gYikgfCAwO1xuICAgIG1lLmIgPSBiID0gKGIgPDwgMjApIF4gKGIgPj4+IDEyKSBeIGM7XG4gICAgbWUuYyA9IGMgPSAoYyAtIGQpIHwgMDtcbiAgICBtZS5kID0gKGQgPDwgMTYpIF4gKGMgPj4+IDE2KSBeIGE7XG4gICAgcmV0dXJuIG1lLmEgPSAoYSAtIGIpIHwgMDtcbiAgfTtcblxuICAvKiBUaGUgZm9sbG93aW5nIGlzIG5vbi1pbnZlcnRlZCB0eWNoZSwgd2hpY2ggaGFzIGJldHRlciBpbnRlcm5hbFxuICAgKiBiaXQgZGlmZnVzaW9uLCBidXQgd2hpY2ggaXMgYWJvdXQgMjUlIHNsb3dlciB0aGFuIHR5Y2hlLWkgaW4gSlMuXG4gIG1lLm5leHQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYSA9IG1lLmEsIGIgPSBtZS5iLCBjID0gbWUuYywgZCA9IG1lLmQ7XG4gICAgYSA9IChtZS5hICsgbWUuYiB8IDApID4+PiAwO1xuICAgIGQgPSBtZS5kIF4gYTsgZCA9IGQgPDwgMTYgXiBkID4+PiAxNjtcbiAgICBjID0gbWUuYyArIGQgfCAwO1xuICAgIGIgPSBtZS5iIF4gYzsgYiA9IGIgPDwgMTIgXiBkID4+PiAyMDtcbiAgICBtZS5hID0gYSA9IGEgKyBiIHwgMDtcbiAgICBkID0gZCBeIGE7IG1lLmQgPSBkID0gZCA8PCA4IF4gZCA+Pj4gMjQ7XG4gICAgbWUuYyA9IGMgPSBjICsgZCB8IDA7XG4gICAgYiA9IGIgXiBjO1xuICAgIHJldHVybiBtZS5iID0gKGIgPDwgNyBeIGIgPj4+IDI1KTtcbiAgfVxuICAqL1xuXG4gIG1lLmEgPSAwO1xuICBtZS5iID0gMDtcbiAgbWUuYyA9IDI2NTQ0MzU3NjkgfCAwO1xuICBtZS5kID0gMTM2NzEzMDU1MTtcblxuICBpZiAoc2VlZCA9PT0gTWF0aC5mbG9vcihzZWVkKSkge1xuICAgIC8vIEludGVnZXIgc2VlZC5cbiAgICBtZS5hID0gKHNlZWQgLyAweDEwMDAwMDAwMCkgfCAwO1xuICAgIG1lLmIgPSBzZWVkIHwgMDtcbiAgfSBlbHNlIHtcbiAgICAvLyBTdHJpbmcgc2VlZC5cbiAgICBzdHJzZWVkICs9IHNlZWQ7XG4gIH1cblxuICAvLyBNaXggaW4gc3RyaW5nIHNlZWQsIHRoZW4gZGlzY2FyZCBhbiBpbml0aWFsIGJhdGNoIG9mIDY0IHZhbHVlcy5cbiAgZm9yICh2YXIgayA9IDA7IGsgPCBzdHJzZWVkLmxlbmd0aCArIDIwOyBrKyspIHtcbiAgICBtZS5iIF49IHN0cnNlZWQuY2hhckNvZGVBdChrKSB8IDA7XG4gICAgbWUubmV4dCgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvcHkoZiwgdCkge1xuICB0LmEgPSBmLmE7XG4gIHQuYiA9IGYuYjtcbiAgdC5jID0gZi5jO1xuICB0LmQgPSBmLmQ7XG4gIHJldHVybiB0O1xufTtcblxuZnVuY3Rpb24gaW1wbChzZWVkLCBvcHRzKSB7XG4gIHZhciB4ZyA9IG5ldyBYb3JHZW4oc2VlZCksXG4gICAgICBzdGF0ZSA9IG9wdHMgJiYgb3B0cy5zdGF0ZSxcbiAgICAgIHBybmcgPSBmdW5jdGlvbigpIHsgcmV0dXJuICh4Zy5uZXh0KCkgPj4+IDApIC8gMHgxMDAwMDAwMDA7IH07XG4gIHBybmcuZG91YmxlID0gZnVuY3Rpb24oKSB7XG4gICAgZG8ge1xuICAgICAgdmFyIHRvcCA9IHhnLm5leHQoKSA+Pj4gMTEsXG4gICAgICAgICAgYm90ID0gKHhnLm5leHQoKSA+Pj4gMCkgLyAweDEwMDAwMDAwMCxcbiAgICAgICAgICByZXN1bHQgPSAodG9wICsgYm90KSAvICgxIDw8IDIxKTtcbiAgICB9IHdoaWxlIChyZXN1bHQgPT09IDApO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIHBybmcuaW50MzIgPSB4Zy5uZXh0O1xuICBwcm5nLnF1aWNrID0gcHJuZztcbiAgaWYgKHN0YXRlKSB7XG4gICAgaWYgKHR5cGVvZihzdGF0ZSkgPT0gJ29iamVjdCcpIGNvcHkoc3RhdGUsIHhnKTtcbiAgICBwcm5nLnN0YXRlID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb3B5KHhnLCB7fSk7IH1cbiAgfVxuICByZXR1cm4gcHJuZztcbn1cblxuaWYgKG1vZHVsZSAmJiBtb2R1bGUuZXhwb3J0cykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGltcGw7XG59IGVsc2UgaWYgKGRlZmluZSAmJiBkZWZpbmUuYW1kKSB7XG4gIGRlZmluZShmdW5jdGlvbigpIHsgcmV0dXJuIGltcGw7IH0pO1xufSBlbHNlIHtcbiAgdGhpcy50eWNoZWkgPSBpbXBsO1xufVxuXG59KShcbiAgdGhpcyxcbiAgKHR5cGVvZiBtb2R1bGUpID09ICdvYmplY3QnICYmIG1vZHVsZSwgICAgLy8gcHJlc2VudCBpbiBub2RlLmpzXG4gICh0eXBlb2YgZGVmaW5lKSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZSAgIC8vIHByZXNlbnQgd2l0aCBhbiBBTUQgbG9hZGVyXG4pO1xuXG5cbiIsIi8vIEEgSmF2YXNjcmlwdCBpbXBsZW1lbnRhaW9uIG9mIHRoZSBcInhvcjEyOFwiIHBybmcgYWxnb3JpdGhtIGJ5XG4vLyBHZW9yZ2UgTWFyc2FnbGlhLiAgU2VlIGh0dHA6Ly93d3cuanN0YXRzb2Z0Lm9yZy92MDgvaTE0L3BhcGVyXG5cbihmdW5jdGlvbihnbG9iYWwsIG1vZHVsZSwgZGVmaW5lKSB7XG5cbmZ1bmN0aW9uIFhvckdlbihzZWVkKSB7XG4gIHZhciBtZSA9IHRoaXMsIHN0cnNlZWQgPSAnJztcblxuICBtZS54ID0gMDtcbiAgbWUueSA9IDA7XG4gIG1lLnogPSAwO1xuICBtZS53ID0gMDtcblxuICAvLyBTZXQgdXAgZ2VuZXJhdG9yIGZ1bmN0aW9uLlxuICBtZS5uZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHQgPSBtZS54IF4gKG1lLnggPDwgMTEpO1xuICAgIG1lLnggPSBtZS55O1xuICAgIG1lLnkgPSBtZS56O1xuICAgIG1lLnogPSBtZS53O1xuICAgIHJldHVybiBtZS53IF49IChtZS53ID4+PiAxOSkgXiB0IF4gKHQgPj4+IDgpO1xuICB9O1xuXG4gIGlmIChzZWVkID09PSAoc2VlZCB8IDApKSB7XG4gICAgLy8gSW50ZWdlciBzZWVkLlxuICAgIG1lLnggPSBzZWVkO1xuICB9IGVsc2Uge1xuICAgIC8vIFN0cmluZyBzZWVkLlxuICAgIHN0cnNlZWQgKz0gc2VlZDtcbiAgfVxuXG4gIC8vIE1peCBpbiBzdHJpbmcgc2VlZCwgdGhlbiBkaXNjYXJkIGFuIGluaXRpYWwgYmF0Y2ggb2YgNjQgdmFsdWVzLlxuICBmb3IgKHZhciBrID0gMDsgayA8IHN0cnNlZWQubGVuZ3RoICsgNjQ7IGsrKykge1xuICAgIG1lLnggXj0gc3Ryc2VlZC5jaGFyQ29kZUF0KGspIHwgMDtcbiAgICBtZS5uZXh0KCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY29weShmLCB0KSB7XG4gIHQueCA9IGYueDtcbiAgdC55ID0gZi55O1xuICB0LnogPSBmLno7XG4gIHQudyA9IGYudztcbiAgcmV0dXJuIHQ7XG59XG5cbmZ1bmN0aW9uIGltcGwoc2VlZCwgb3B0cykge1xuICB2YXIgeGcgPSBuZXcgWG9yR2VuKHNlZWQpLFxuICAgICAgc3RhdGUgPSBvcHRzICYmIG9wdHMuc3RhdGUsXG4gICAgICBwcm5nID0gZnVuY3Rpb24oKSB7IHJldHVybiAoeGcubmV4dCgpID4+PiAwKSAvIDB4MTAwMDAwMDAwOyB9O1xuICBwcm5nLmRvdWJsZSA9IGZ1bmN0aW9uKCkge1xuICAgIGRvIHtcbiAgICAgIHZhciB0b3AgPSB4Zy5uZXh0KCkgPj4+IDExLFxuICAgICAgICAgIGJvdCA9ICh4Zy5uZXh0KCkgPj4+IDApIC8gMHgxMDAwMDAwMDAsXG4gICAgICAgICAgcmVzdWx0ID0gKHRvcCArIGJvdCkgLyAoMSA8PCAyMSk7XG4gICAgfSB3aGlsZSAocmVzdWx0ID09PSAwKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICBwcm5nLmludDMyID0geGcubmV4dDtcbiAgcHJuZy5xdWljayA9IHBybmc7XG4gIGlmIChzdGF0ZSkge1xuICAgIGlmICh0eXBlb2Yoc3RhdGUpID09ICdvYmplY3QnKSBjb3B5KHN0YXRlLCB4Zyk7XG4gICAgcHJuZy5zdGF0ZSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29weSh4Zywge30pOyB9XG4gIH1cbiAgcmV0dXJuIHBybmc7XG59XG5cbmlmIChtb2R1bGUgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBpbXBsO1xufSBlbHNlIGlmIChkZWZpbmUgJiYgZGVmaW5lLmFtZCkge1xuICBkZWZpbmUoZnVuY3Rpb24oKSB7IHJldHVybiBpbXBsOyB9KTtcbn0gZWxzZSB7XG4gIHRoaXMueG9yMTI4ID0gaW1wbDtcbn1cblxufSkoXG4gIHRoaXMsXG4gICh0eXBlb2YgbW9kdWxlKSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUsICAgIC8vIHByZXNlbnQgaW4gbm9kZS5qc1xuICAodHlwZW9mIGRlZmluZSkgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUgICAvLyBwcmVzZW50IHdpdGggYW4gQU1EIGxvYWRlclxuKTtcblxuXG4iLCIvLyBBIEphdmFzY3JpcHQgaW1wbGVtZW50YWlvbiBvZiBSaWNoYXJkIEJyZW50J3MgWG9yZ2VucyB4b3I0MDk2IGFsZ29yaXRobS5cbi8vXG4vLyBUaGlzIGZhc3Qgbm9uLWNyeXB0b2dyYXBoaWMgcmFuZG9tIG51bWJlciBnZW5lcmF0b3IgaXMgZGVzaWduZWQgZm9yXG4vLyB1c2UgaW4gTW9udGUtQ2FybG8gYWxnb3JpdGhtcy4gSXQgY29tYmluZXMgYSBsb25nLXBlcmlvZCB4b3JzaGlmdFxuLy8gZ2VuZXJhdG9yIHdpdGggYSBXZXlsIGdlbmVyYXRvciwgYW5kIGl0IHBhc3NlcyBhbGwgY29tbW9uIGJhdHRlcmllc1xuLy8gb2Ygc3Rhc3RpY2lhbCB0ZXN0cyBmb3IgcmFuZG9tbmVzcyB3aGlsZSBjb25zdW1pbmcgb25seSBhIGZldyBuYW5vc2Vjb25kc1xuLy8gZm9yIGVhY2ggcHJuZyBnZW5lcmF0ZWQuICBGb3IgYmFja2dyb3VuZCBvbiB0aGUgZ2VuZXJhdG9yLCBzZWUgQnJlbnQnc1xuLy8gcGFwZXI6IFwiU29tZSBsb25nLXBlcmlvZCByYW5kb20gbnVtYmVyIGdlbmVyYXRvcnMgdXNpbmcgc2hpZnRzIGFuZCB4b3JzLlwiXG4vLyBodHRwOi8vYXJ4aXYub3JnL3BkZi8xMDA0LjMxMTV2MS5wZGZcbi8vXG4vLyBVc2FnZTpcbi8vXG4vLyB2YXIgeG9yNDA5NiA9IHJlcXVpcmUoJ3hvcjQwOTYnKTtcbi8vIHJhbmRvbSA9IHhvcjQwOTYoMSk7ICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2VlZCB3aXRoIGludDMyIG9yIHN0cmluZy5cbi8vIGFzc2VydC5lcXVhbChyYW5kb20oKSwgMC4xNTIwNDM2NDUwNTM4NTQ3KTsgLy8gKDAsIDEpIHJhbmdlLCA1MyBiaXRzLlxuLy8gYXNzZXJ0LmVxdWFsKHJhbmRvbS5pbnQzMigpLCAxODA2NTM0ODk3KTsgICAvLyBzaWduZWQgaW50MzIsIDMyIGJpdHMuXG4vL1xuLy8gRm9yIG5vbnplcm8gbnVtZXJpYyBrZXlzLCB0aGlzIGltcGVsZW1lbnRhdGlvbiBwcm92aWRlcyBhIHNlcXVlbmNlXG4vLyBpZGVudGljYWwgdG8gdGhhdCBieSBCcmVudCdzIHhvcmdlbnMgMyBpbXBsZW1lbnRhaW9uIGluIEMuICBUaGlzXG4vLyBpbXBsZW1lbnRhdGlvbiBhbHNvIHByb3ZpZGVzIGZvciBpbml0YWxpemluZyB0aGUgZ2VuZXJhdG9yIHdpdGhcbi8vIHN0cmluZyBzZWVkcywgb3IgZm9yIHNhdmluZyBhbmQgcmVzdG9yaW5nIHRoZSBzdGF0ZSBvZiB0aGUgZ2VuZXJhdG9yLlxuLy9cbi8vIE9uIENocm9tZSwgdGhpcyBwcm5nIGJlbmNobWFya3MgYWJvdXQgMi4xIHRpbWVzIHNsb3dlciB0aGFuXG4vLyBKYXZhc2NyaXB0J3MgYnVpbHQtaW4gTWF0aC5yYW5kb20oKS5cblxuKGZ1bmN0aW9uKGdsb2JhbCwgbW9kdWxlLCBkZWZpbmUpIHtcblxuZnVuY3Rpb24gWG9yR2VuKHNlZWQpIHtcbiAgdmFyIG1lID0gdGhpcztcblxuICAvLyBTZXQgdXAgZ2VuZXJhdG9yIGZ1bmN0aW9uLlxuICBtZS5uZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHcgPSBtZS53LFxuICAgICAgICBYID0gbWUuWCwgaSA9IG1lLmksIHQsIHY7XG4gICAgLy8gVXBkYXRlIFdleWwgZ2VuZXJhdG9yLlxuICAgIG1lLncgPSB3ID0gKHcgKyAweDYxYzg4NjQ3KSB8IDA7XG4gICAgLy8gVXBkYXRlIHhvciBnZW5lcmF0b3IuXG4gICAgdiA9IFhbKGkgKyAzNCkgJiAxMjddO1xuICAgIHQgPSBYW2kgPSAoKGkgKyAxKSAmIDEyNyldO1xuICAgIHYgXj0gdiA8PCAxMztcbiAgICB0IF49IHQgPDwgMTc7XG4gICAgdiBePSB2ID4+PiAxNTtcbiAgICB0IF49IHQgPj4+IDEyO1xuICAgIC8vIFVwZGF0ZSBYb3IgZ2VuZXJhdG9yIGFycmF5IHN0YXRlLlxuICAgIHYgPSBYW2ldID0gdiBeIHQ7XG4gICAgbWUuaSA9IGk7XG4gICAgLy8gUmVzdWx0IGlzIHRoZSBjb21iaW5hdGlvbi5cbiAgICByZXR1cm4gKHYgKyAodyBeICh3ID4+PiAxNikpKSB8IDA7XG4gIH07XG5cbiAgZnVuY3Rpb24gaW5pdChtZSwgc2VlZCkge1xuICAgIHZhciB0LCB2LCBpLCBqLCB3LCBYID0gW10sIGxpbWl0ID0gMTI4O1xuICAgIGlmIChzZWVkID09PSAoc2VlZCB8IDApKSB7XG4gICAgICAvLyBOdW1lcmljIHNlZWRzIGluaXRpYWxpemUgdiwgd2hpY2ggaXMgdXNlZCB0byBnZW5lcmF0ZXMgWC5cbiAgICAgIHYgPSBzZWVkO1xuICAgICAgc2VlZCA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFN0cmluZyBzZWVkcyBhcmUgbWl4ZWQgaW50byB2IGFuZCBYIG9uZSBjaGFyYWN0ZXIgYXQgYSB0aW1lLlxuICAgICAgc2VlZCA9IHNlZWQgKyAnXFwwJztcbiAgICAgIHYgPSAwO1xuICAgICAgbGltaXQgPSBNYXRoLm1heChsaW1pdCwgc2VlZC5sZW5ndGgpO1xuICAgIH1cbiAgICAvLyBJbml0aWFsaXplIGNpcmN1bGFyIGFycmF5IGFuZCB3ZXlsIHZhbHVlLlxuICAgIGZvciAoaSA9IDAsIGogPSAtMzI7IGogPCBsaW1pdDsgKytqKSB7XG4gICAgICAvLyBQdXQgdGhlIHVuaWNvZGUgY2hhcmFjdGVycyBpbnRvIHRoZSBhcnJheSwgYW5kIHNodWZmbGUgdGhlbS5cbiAgICAgIGlmIChzZWVkKSB2IF49IHNlZWQuY2hhckNvZGVBdCgoaiArIDMyKSAlIHNlZWQubGVuZ3RoKTtcbiAgICAgIC8vIEFmdGVyIDMyIHNodWZmbGVzLCB0YWtlIHYgYXMgdGhlIHN0YXJ0aW5nIHcgdmFsdWUuXG4gICAgICBpZiAoaiA9PT0gMCkgdyA9IHY7XG4gICAgICB2IF49IHYgPDwgMTA7XG4gICAgICB2IF49IHYgPj4+IDE1O1xuICAgICAgdiBePSB2IDw8IDQ7XG4gICAgICB2IF49IHYgPj4+IDEzO1xuICAgICAgaWYgKGogPj0gMCkge1xuICAgICAgICB3ID0gKHcgKyAweDYxYzg4NjQ3KSB8IDA7ICAgICAvLyBXZXlsLlxuICAgICAgICB0ID0gKFhbaiAmIDEyN10gXj0gKHYgKyB3KSk7ICAvLyBDb21iaW5lIHhvciBhbmQgd2V5bCB0byBpbml0IGFycmF5LlxuICAgICAgICBpID0gKDAgPT0gdCkgPyBpICsgMSA6IDA7ICAgICAvLyBDb3VudCB6ZXJvZXMuXG4gICAgICB9XG4gICAgfVxuICAgIC8vIFdlIGhhdmUgZGV0ZWN0ZWQgYWxsIHplcm9lczsgbWFrZSB0aGUga2V5IG5vbnplcm8uXG4gICAgaWYgKGkgPj0gMTI4KSB7XG4gICAgICBYWyhzZWVkICYmIHNlZWQubGVuZ3RoIHx8IDApICYgMTI3XSA9IC0xO1xuICAgIH1cbiAgICAvLyBSdW4gdGhlIGdlbmVyYXRvciA1MTIgdGltZXMgdG8gZnVydGhlciBtaXggdGhlIHN0YXRlIGJlZm9yZSB1c2luZyBpdC5cbiAgICAvLyBGYWN0b3JpbmcgdGhpcyBhcyBhIGZ1bmN0aW9uIHNsb3dzIHRoZSBtYWluIGdlbmVyYXRvciwgc28gaXQgaXMganVzdFxuICAgIC8vIHVucm9sbGVkIGhlcmUuICBUaGUgd2V5bCBnZW5lcmF0b3IgaXMgbm90IGFkdmFuY2VkIHdoaWxlIHdhcm1pbmcgdXAuXG4gICAgaSA9IDEyNztcbiAgICBmb3IgKGogPSA0ICogMTI4OyBqID4gMDsgLS1qKSB7XG4gICAgICB2ID0gWFsoaSArIDM0KSAmIDEyN107XG4gICAgICB0ID0gWFtpID0gKChpICsgMSkgJiAxMjcpXTtcbiAgICAgIHYgXj0gdiA8PCAxMztcbiAgICAgIHQgXj0gdCA8PCAxNztcbiAgICAgIHYgXj0gdiA+Pj4gMTU7XG4gICAgICB0IF49IHQgPj4+IDEyO1xuICAgICAgWFtpXSA9IHYgXiB0O1xuICAgIH1cbiAgICAvLyBTdG9yaW5nIHN0YXRlIGFzIG9iamVjdCBtZW1iZXJzIGlzIGZhc3RlciB0aGFuIHVzaW5nIGNsb3N1cmUgdmFyaWFibGVzLlxuICAgIG1lLncgPSB3O1xuICAgIG1lLlggPSBYO1xuICAgIG1lLmkgPSBpO1xuICB9XG5cbiAgaW5pdChtZSwgc2VlZCk7XG59XG5cbmZ1bmN0aW9uIGNvcHkoZiwgdCkge1xuICB0LmkgPSBmLmk7XG4gIHQudyA9IGYudztcbiAgdC5YID0gZi5YLnNsaWNlKCk7XG4gIHJldHVybiB0O1xufTtcblxuZnVuY3Rpb24gaW1wbChzZWVkLCBvcHRzKSB7XG4gIGlmIChzZWVkID09IG51bGwpIHNlZWQgPSArKG5ldyBEYXRlKTtcbiAgdmFyIHhnID0gbmV3IFhvckdlbihzZWVkKSxcbiAgICAgIHN0YXRlID0gb3B0cyAmJiBvcHRzLnN0YXRlLFxuICAgICAgcHJuZyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gKHhnLm5leHQoKSA+Pj4gMCkgLyAweDEwMDAwMDAwMDsgfTtcbiAgcHJuZy5kb3VibGUgPSBmdW5jdGlvbigpIHtcbiAgICBkbyB7XG4gICAgICB2YXIgdG9wID0geGcubmV4dCgpID4+PiAxMSxcbiAgICAgICAgICBib3QgPSAoeGcubmV4dCgpID4+PiAwKSAvIDB4MTAwMDAwMDAwLFxuICAgICAgICAgIHJlc3VsdCA9ICh0b3AgKyBib3QpIC8gKDEgPDwgMjEpO1xuICAgIH0gd2hpbGUgKHJlc3VsdCA9PT0gMCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgcHJuZy5pbnQzMiA9IHhnLm5leHQ7XG4gIHBybmcucXVpY2sgPSBwcm5nO1xuICBpZiAoc3RhdGUpIHtcbiAgICBpZiAoc3RhdGUuWCkgY29weShzdGF0ZSwgeGcpO1xuICAgIHBybmcuc3RhdGUgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvcHkoeGcsIHt9KTsgfVxuICB9XG4gIHJldHVybiBwcm5nO1xufVxuXG5pZiAobW9kdWxlICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gaW1wbDtcbn0gZWxzZSBpZiAoZGVmaW5lICYmIGRlZmluZS5hbWQpIHtcbiAgZGVmaW5lKGZ1bmN0aW9uKCkgeyByZXR1cm4gaW1wbDsgfSk7XG59IGVsc2Uge1xuICB0aGlzLnhvcjQwOTYgPSBpbXBsO1xufVxuXG59KShcbiAgdGhpcywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2luZG93IG9iamVjdCBvciBnbG9iYWxcbiAgKHR5cGVvZiBtb2R1bGUpID09ICdvYmplY3QnICYmIG1vZHVsZSwgICAgLy8gcHJlc2VudCBpbiBub2RlLmpzXG4gICh0eXBlb2YgZGVmaW5lKSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZSAgIC8vIHByZXNlbnQgd2l0aCBhbiBBTUQgbG9hZGVyXG4pO1xuIiwiLy8gQSBKYXZhc2NyaXB0IGltcGxlbWVudGFpb24gb2YgdGhlIFwieG9yc2hpZnQ3XCIgYWxnb3JpdGhtIGJ5XG4vLyBGcmFuw6dvaXMgUGFubmV0b24gYW5kIFBpZXJyZSBMJ2VjdXllcjpcbi8vIFwiT24gdGhlIFhvcmdzaGlmdCBSYW5kb20gTnVtYmVyIEdlbmVyYXRvcnNcIlxuLy8gaHR0cDovL3NhbHVjLmVuZ3IudWNvbm4uZWR1L3JlZnMvY3J5cHRvL3JuZy9wYW5uZXRvbjA1b250aGV4b3JzaGlmdC5wZGZcblxuKGZ1bmN0aW9uKGdsb2JhbCwgbW9kdWxlLCBkZWZpbmUpIHtcblxuZnVuY3Rpb24gWG9yR2VuKHNlZWQpIHtcbiAgdmFyIG1lID0gdGhpcztcblxuICAvLyBTZXQgdXAgZ2VuZXJhdG9yIGZ1bmN0aW9uLlxuICBtZS5uZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gVXBkYXRlIHhvciBnZW5lcmF0b3IuXG4gICAgdmFyIFggPSBtZS54LCBpID0gbWUuaSwgdCwgdiwgdztcbiAgICB0ID0gWFtpXTsgdCBePSAodCA+Pj4gNyk7IHYgPSB0IF4gKHQgPDwgMjQpO1xuICAgIHQgPSBYWyhpICsgMSkgJiA3XTsgdiBePSB0IF4gKHQgPj4+IDEwKTtcbiAgICB0ID0gWFsoaSArIDMpICYgN107IHYgXj0gdCBeICh0ID4+PiAzKTtcbiAgICB0ID0gWFsoaSArIDQpICYgN107IHYgXj0gdCBeICh0IDw8IDcpO1xuICAgIHQgPSBYWyhpICsgNykgJiA3XTsgdCA9IHQgXiAodCA8PCAxMyk7IHYgXj0gdCBeICh0IDw8IDkpO1xuICAgIFhbaV0gPSB2O1xuICAgIG1lLmkgPSAoaSArIDEpICYgNztcbiAgICByZXR1cm4gdjtcbiAgfTtcblxuICBmdW5jdGlvbiBpbml0KG1lLCBzZWVkKSB7XG4gICAgdmFyIGosIHcsIFggPSBbXTtcblxuICAgIGlmIChzZWVkID09PSAoc2VlZCB8IDApKSB7XG4gICAgICAvLyBTZWVkIHN0YXRlIGFycmF5IHVzaW5nIGEgMzItYml0IGludGVnZXIuXG4gICAgICB3ID0gWFswXSA9IHNlZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFNlZWQgc3RhdGUgdXNpbmcgYSBzdHJpbmcuXG4gICAgICBzZWVkID0gJycgKyBzZWVkO1xuICAgICAgZm9yIChqID0gMDsgaiA8IHNlZWQubGVuZ3RoOyArK2opIHtcbiAgICAgICAgWFtqICYgN10gPSAoWFtqICYgN10gPDwgMTUpIF5cbiAgICAgICAgICAgIChzZWVkLmNoYXJDb2RlQXQoaikgKyBYWyhqICsgMSkgJiA3XSA8PCAxMyk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIEVuZm9yY2UgYW4gYXJyYXkgbGVuZ3RoIG9mIDgsIG5vdCBhbGwgemVyb2VzLlxuICAgIHdoaWxlIChYLmxlbmd0aCA8IDgpIFgucHVzaCgwKTtcbiAgICBmb3IgKGogPSAwOyBqIDwgOCAmJiBYW2pdID09PSAwOyArK2opO1xuICAgIGlmIChqID09IDgpIHcgPSBYWzddID0gLTE7IGVsc2UgdyA9IFhbal07XG5cbiAgICBtZS54ID0gWDtcbiAgICBtZS5pID0gMDtcblxuICAgIC8vIERpc2NhcmQgYW4gaW5pdGlhbCAyNTYgdmFsdWVzLlxuICAgIGZvciAoaiA9IDI1NjsgaiA+IDA7IC0taikge1xuICAgICAgbWUubmV4dCgpO1xuICAgIH1cbiAgfVxuXG4gIGluaXQobWUsIHNlZWQpO1xufVxuXG5mdW5jdGlvbiBjb3B5KGYsIHQpIHtcbiAgdC54ID0gZi54LnNsaWNlKCk7XG4gIHQuaSA9IGYuaTtcbiAgcmV0dXJuIHQ7XG59XG5cbmZ1bmN0aW9uIGltcGwoc2VlZCwgb3B0cykge1xuICBpZiAoc2VlZCA9PSBudWxsKSBzZWVkID0gKyhuZXcgRGF0ZSk7XG4gIHZhciB4ZyA9IG5ldyBYb3JHZW4oc2VlZCksXG4gICAgICBzdGF0ZSA9IG9wdHMgJiYgb3B0cy5zdGF0ZSxcbiAgICAgIHBybmcgPSBmdW5jdGlvbigpIHsgcmV0dXJuICh4Zy5uZXh0KCkgPj4+IDApIC8gMHgxMDAwMDAwMDA7IH07XG4gIHBybmcuZG91YmxlID0gZnVuY3Rpb24oKSB7XG4gICAgZG8ge1xuICAgICAgdmFyIHRvcCA9IHhnLm5leHQoKSA+Pj4gMTEsXG4gICAgICAgICAgYm90ID0gKHhnLm5leHQoKSA+Pj4gMCkgLyAweDEwMDAwMDAwMCxcbiAgICAgICAgICByZXN1bHQgPSAodG9wICsgYm90KSAvICgxIDw8IDIxKTtcbiAgICB9IHdoaWxlIChyZXN1bHQgPT09IDApO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIHBybmcuaW50MzIgPSB4Zy5uZXh0O1xuICBwcm5nLnF1aWNrID0gcHJuZztcbiAgaWYgKHN0YXRlKSB7XG4gICAgaWYgKHN0YXRlLngpIGNvcHkoc3RhdGUsIHhnKTtcbiAgICBwcm5nLnN0YXRlID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb3B5KHhnLCB7fSk7IH1cbiAgfVxuICByZXR1cm4gcHJuZztcbn1cblxuaWYgKG1vZHVsZSAmJiBtb2R1bGUuZXhwb3J0cykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGltcGw7XG59IGVsc2UgaWYgKGRlZmluZSAmJiBkZWZpbmUuYW1kKSB7XG4gIGRlZmluZShmdW5jdGlvbigpIHsgcmV0dXJuIGltcGw7IH0pO1xufSBlbHNlIHtcbiAgdGhpcy54b3JzaGlmdDcgPSBpbXBsO1xufVxuXG59KShcbiAgdGhpcyxcbiAgKHR5cGVvZiBtb2R1bGUpID09ICdvYmplY3QnICYmIG1vZHVsZSwgICAgLy8gcHJlc2VudCBpbiBub2RlLmpzXG4gICh0eXBlb2YgZGVmaW5lKSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZSAgIC8vIHByZXNlbnQgd2l0aCBhbiBBTUQgbG9hZGVyXG4pO1xuXG4iLCIvLyBBIEphdmFzY3JpcHQgaW1wbGVtZW50YWlvbiBvZiB0aGUgXCJ4b3J3b3dcIiBwcm5nIGFsZ29yaXRobSBieVxuLy8gR2VvcmdlIE1hcnNhZ2xpYS4gIFNlZSBodHRwOi8vd3d3LmpzdGF0c29mdC5vcmcvdjA4L2kxNC9wYXBlclxuXG4oZnVuY3Rpb24oZ2xvYmFsLCBtb2R1bGUsIGRlZmluZSkge1xuXG5mdW5jdGlvbiBYb3JHZW4oc2VlZCkge1xuICB2YXIgbWUgPSB0aGlzLCBzdHJzZWVkID0gJyc7XG5cbiAgLy8gU2V0IHVwIGdlbmVyYXRvciBmdW5jdGlvbi5cbiAgbWUubmV4dCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB0ID0gKG1lLnggXiAobWUueCA+Pj4gMikpO1xuICAgIG1lLnggPSBtZS55OyBtZS55ID0gbWUuejsgbWUueiA9IG1lLnc7IG1lLncgPSBtZS52O1xuICAgIHJldHVybiAobWUuZCA9IChtZS5kICsgMzYyNDM3IHwgMCkpICtcbiAgICAgICAobWUudiA9IChtZS52IF4gKG1lLnYgPDwgNCkpIF4gKHQgXiAodCA8PCAxKSkpIHwgMDtcbiAgfTtcblxuICBtZS54ID0gMDtcbiAgbWUueSA9IDA7XG4gIG1lLnogPSAwO1xuICBtZS53ID0gMDtcbiAgbWUudiA9IDA7XG5cbiAgaWYgKHNlZWQgPT09IChzZWVkIHwgMCkpIHtcbiAgICAvLyBJbnRlZ2VyIHNlZWQuXG4gICAgbWUueCA9IHNlZWQ7XG4gIH0gZWxzZSB7XG4gICAgLy8gU3RyaW5nIHNlZWQuXG4gICAgc3Ryc2VlZCArPSBzZWVkO1xuICB9XG5cbiAgLy8gTWl4IGluIHN0cmluZyBzZWVkLCB0aGVuIGRpc2NhcmQgYW4gaW5pdGlhbCBiYXRjaCBvZiA2NCB2YWx1ZXMuXG4gIGZvciAodmFyIGsgPSAwOyBrIDwgc3Ryc2VlZC5sZW5ndGggKyA2NDsgaysrKSB7XG4gICAgbWUueCBePSBzdHJzZWVkLmNoYXJDb2RlQXQoaykgfCAwO1xuICAgIGlmIChrID09IHN0cnNlZWQubGVuZ3RoKSB7XG4gICAgICBtZS5kID0gbWUueCA8PCAxMCBeIG1lLnggPj4+IDQ7XG4gICAgfVxuICAgIG1lLm5leHQoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb3B5KGYsIHQpIHtcbiAgdC54ID0gZi54O1xuICB0LnkgPSBmLnk7XG4gIHQueiA9IGYuejtcbiAgdC53ID0gZi53O1xuICB0LnYgPSBmLnY7XG4gIHQuZCA9IGYuZDtcbiAgcmV0dXJuIHQ7XG59XG5cbmZ1bmN0aW9uIGltcGwoc2VlZCwgb3B0cykge1xuICB2YXIgeGcgPSBuZXcgWG9yR2VuKHNlZWQpLFxuICAgICAgc3RhdGUgPSBvcHRzICYmIG9wdHMuc3RhdGUsXG4gICAgICBwcm5nID0gZnVuY3Rpb24oKSB7IHJldHVybiAoeGcubmV4dCgpID4+PiAwKSAvIDB4MTAwMDAwMDAwOyB9O1xuICBwcm5nLmRvdWJsZSA9IGZ1bmN0aW9uKCkge1xuICAgIGRvIHtcbiAgICAgIHZhciB0b3AgPSB4Zy5uZXh0KCkgPj4+IDExLFxuICAgICAgICAgIGJvdCA9ICh4Zy5uZXh0KCkgPj4+IDApIC8gMHgxMDAwMDAwMDAsXG4gICAgICAgICAgcmVzdWx0ID0gKHRvcCArIGJvdCkgLyAoMSA8PCAyMSk7XG4gICAgfSB3aGlsZSAocmVzdWx0ID09PSAwKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICBwcm5nLmludDMyID0geGcubmV4dDtcbiAgcHJuZy5xdWljayA9IHBybmc7XG4gIGlmIChzdGF0ZSkge1xuICAgIGlmICh0eXBlb2Yoc3RhdGUpID09ICdvYmplY3QnKSBjb3B5KHN0YXRlLCB4Zyk7XG4gICAgcHJuZy5zdGF0ZSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29weSh4Zywge30pOyB9XG4gIH1cbiAgcmV0dXJuIHBybmc7XG59XG5cbmlmIChtb2R1bGUgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBpbXBsO1xufSBlbHNlIGlmIChkZWZpbmUgJiYgZGVmaW5lLmFtZCkge1xuICBkZWZpbmUoZnVuY3Rpb24oKSB7IHJldHVybiBpbXBsOyB9KTtcbn0gZWxzZSB7XG4gIHRoaXMueG9yd293ID0gaW1wbDtcbn1cblxufSkoXG4gIHRoaXMsXG4gICh0eXBlb2YgbW9kdWxlKSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUsICAgIC8vIHByZXNlbnQgaW4gbm9kZS5qc1xuICAodHlwZW9mIGRlZmluZSkgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUgICAvLyBwcmVzZW50IHdpdGggYW4gQU1EIGxvYWRlclxuKTtcblxuXG4iLCIvKlxuQ29weXJpZ2h0IDIwMTkgRGF2aWQgQmF1LlxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmdcbmEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG53aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG5kaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG9cbnBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0b1xudGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZVxuaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG5FWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbk1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC5cbklOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZXG5DTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULFxuVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEVcblNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4qL1xuXG4oZnVuY3Rpb24gKGdsb2JhbCwgcG9vbCwgbWF0aCkge1xuLy9cbi8vIFRoZSBmb2xsb3dpbmcgY29uc3RhbnRzIGFyZSByZWxhdGVkIHRvIElFRUUgNzU0IGxpbWl0cy5cbi8vXG5cbnZhciB3aWR0aCA9IDI1NiwgICAgICAgIC8vIGVhY2ggUkM0IG91dHB1dCBpcyAwIDw9IHggPCAyNTZcbiAgICBjaHVua3MgPSA2LCAgICAgICAgIC8vIGF0IGxlYXN0IHNpeCBSQzQgb3V0cHV0cyBmb3IgZWFjaCBkb3VibGVcbiAgICBkaWdpdHMgPSA1MiwgICAgICAgIC8vIHRoZXJlIGFyZSA1MiBzaWduaWZpY2FudCBkaWdpdHMgaW4gYSBkb3VibGVcbiAgICBybmduYW1lID0gJ3JhbmRvbScsIC8vIHJuZ25hbWU6IG5hbWUgZm9yIE1hdGgucmFuZG9tIGFuZCBNYXRoLnNlZWRyYW5kb21cbiAgICBzdGFydGRlbm9tID0gbWF0aC5wb3cod2lkdGgsIGNodW5rcyksXG4gICAgc2lnbmlmaWNhbmNlID0gbWF0aC5wb3coMiwgZGlnaXRzKSxcbiAgICBvdmVyZmxvdyA9IHNpZ25pZmljYW5jZSAqIDIsXG4gICAgbWFzayA9IHdpZHRoIC0gMSxcbiAgICBub2RlY3J5cHRvOyAgICAgICAgIC8vIG5vZGUuanMgY3J5cHRvIG1vZHVsZSwgaW5pdGlhbGl6ZWQgYXQgdGhlIGJvdHRvbS5cblxuLy9cbi8vIHNlZWRyYW5kb20oKVxuLy8gVGhpcyBpcyB0aGUgc2VlZHJhbmRvbSBmdW5jdGlvbiBkZXNjcmliZWQgYWJvdmUuXG4vL1xuZnVuY3Rpb24gc2VlZHJhbmRvbShzZWVkLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICB2YXIga2V5ID0gW107XG4gIG9wdGlvbnMgPSAob3B0aW9ucyA9PSB0cnVlKSA/IHsgZW50cm9weTogdHJ1ZSB9IDogKG9wdGlvbnMgfHwge30pO1xuXG4gIC8vIEZsYXR0ZW4gdGhlIHNlZWQgc3RyaW5nIG9yIGJ1aWxkIG9uZSBmcm9tIGxvY2FsIGVudHJvcHkgaWYgbmVlZGVkLlxuICB2YXIgc2hvcnRzZWVkID0gbWl4a2V5KGZsYXR0ZW4oXG4gICAgb3B0aW9ucy5lbnRyb3B5ID8gW3NlZWQsIHRvc3RyaW5nKHBvb2wpXSA6XG4gICAgKHNlZWQgPT0gbnVsbCkgPyBhdXRvc2VlZCgpIDogc2VlZCwgMyksIGtleSk7XG5cbiAgLy8gVXNlIHRoZSBzZWVkIHRvIGluaXRpYWxpemUgYW4gQVJDNCBnZW5lcmF0b3IuXG4gIHZhciBhcmM0ID0gbmV3IEFSQzQoa2V5KTtcblxuICAvLyBUaGlzIGZ1bmN0aW9uIHJldHVybnMgYSByYW5kb20gZG91YmxlIGluIFswLCAxKSB0aGF0IGNvbnRhaW5zXG4gIC8vIHJhbmRvbW5lc3MgaW4gZXZlcnkgYml0IG9mIHRoZSBtYW50aXNzYSBvZiB0aGUgSUVFRSA3NTQgdmFsdWUuXG4gIHZhciBwcm5nID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIG4gPSBhcmM0LmcoY2h1bmtzKSwgICAgICAgICAgICAgLy8gU3RhcnQgd2l0aCBhIG51bWVyYXRvciBuIDwgMiBeIDQ4XG4gICAgICAgIGQgPSBzdGFydGRlbm9tLCAgICAgICAgICAgICAgICAgLy8gICBhbmQgZGVub21pbmF0b3IgZCA9IDIgXiA0OC5cbiAgICAgICAgeCA9IDA7ICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIGFuZCBubyAnZXh0cmEgbGFzdCBieXRlJy5cbiAgICB3aGlsZSAobiA8IHNpZ25pZmljYW5jZSkgeyAgICAgICAgICAvLyBGaWxsIHVwIGFsbCBzaWduaWZpY2FudCBkaWdpdHMgYnlcbiAgICAgIG4gPSAobiArIHgpICogd2lkdGg7ICAgICAgICAgICAgICAvLyAgIHNoaWZ0aW5nIG51bWVyYXRvciBhbmRcbiAgICAgIGQgKj0gd2lkdGg7ICAgICAgICAgICAgICAgICAgICAgICAvLyAgIGRlbm9taW5hdG9yIGFuZCBnZW5lcmF0aW5nIGFcbiAgICAgIHggPSBhcmM0LmcoMSk7ICAgICAgICAgICAgICAgICAgICAvLyAgIG5ldyBsZWFzdC1zaWduaWZpY2FudC1ieXRlLlxuICAgIH1cbiAgICB3aGlsZSAobiA+PSBvdmVyZmxvdykgeyAgICAgICAgICAgICAvLyBUbyBhdm9pZCByb3VuZGluZyB1cCwgYmVmb3JlIGFkZGluZ1xuICAgICAgbiAvPSAyOyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgbGFzdCBieXRlLCBzaGlmdCBldmVyeXRoaW5nXG4gICAgICBkIC89IDI7ICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICByaWdodCB1c2luZyBpbnRlZ2VyIG1hdGggdW50aWxcbiAgICAgIHggPj4+PSAxOyAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIHdlIGhhdmUgZXhhY3RseSB0aGUgZGVzaXJlZCBiaXRzLlxuICAgIH1cbiAgICByZXR1cm4gKG4gKyB4KSAvIGQ7ICAgICAgICAgICAgICAgICAvLyBGb3JtIHRoZSBudW1iZXIgd2l0aGluIFswLCAxKS5cbiAgfTtcblxuICBwcm5nLmludDMyID0gZnVuY3Rpb24oKSB7IHJldHVybiBhcmM0LmcoNCkgfCAwOyB9XG4gIHBybmcucXVpY2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGFyYzQuZyg0KSAvIDB4MTAwMDAwMDAwOyB9XG4gIHBybmcuZG91YmxlID0gcHJuZztcblxuICAvLyBNaXggdGhlIHJhbmRvbW5lc3MgaW50byBhY2N1bXVsYXRlZCBlbnRyb3B5LlxuICBtaXhrZXkodG9zdHJpbmcoYXJjNC5TKSwgcG9vbCk7XG5cbiAgLy8gQ2FsbGluZyBjb252ZW50aW9uOiB3aGF0IHRvIHJldHVybiBhcyBhIGZ1bmN0aW9uIG9mIHBybmcsIHNlZWQsIGlzX21hdGguXG4gIHJldHVybiAob3B0aW9ucy5wYXNzIHx8IGNhbGxiYWNrIHx8XG4gICAgICBmdW5jdGlvbihwcm5nLCBzZWVkLCBpc19tYXRoX2NhbGwsIHN0YXRlKSB7XG4gICAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICAgIC8vIExvYWQgdGhlIGFyYzQgc3RhdGUgZnJvbSB0aGUgZ2l2ZW4gc3RhdGUgaWYgaXQgaGFzIGFuIFMgYXJyYXkuXG4gICAgICAgICAgaWYgKHN0YXRlLlMpIHsgY29weShzdGF0ZSwgYXJjNCk7IH1cbiAgICAgICAgICAvLyBPbmx5IHByb3ZpZGUgdGhlIC5zdGF0ZSBtZXRob2QgaWYgcmVxdWVzdGVkIHZpYSBvcHRpb25zLnN0YXRlLlxuICAgICAgICAgIHBybmcuc3RhdGUgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvcHkoYXJjNCwge30pOyB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBjYWxsZWQgYXMgYSBtZXRob2Qgb2YgTWF0aCAoTWF0aC5zZWVkcmFuZG9tKCkpLCBtdXRhdGVcbiAgICAgICAgLy8gTWF0aC5yYW5kb20gYmVjYXVzZSB0aGF0IGlzIGhvdyBzZWVkcmFuZG9tLmpzIGhhcyB3b3JrZWQgc2luY2UgdjEuMC5cbiAgICAgICAgaWYgKGlzX21hdGhfY2FsbCkgeyBtYXRoW3JuZ25hbWVdID0gcHJuZzsgcmV0dXJuIHNlZWQ7IH1cblxuICAgICAgICAvLyBPdGhlcndpc2UsIGl0IGlzIGEgbmV3ZXIgY2FsbGluZyBjb252ZW50aW9uLCBzbyByZXR1cm4gdGhlXG4gICAgICAgIC8vIHBybmcgZGlyZWN0bHkuXG4gICAgICAgIGVsc2UgcmV0dXJuIHBybmc7XG4gICAgICB9KShcbiAgcHJuZyxcbiAgc2hvcnRzZWVkLFxuICAnZ2xvYmFsJyBpbiBvcHRpb25zID8gb3B0aW9ucy5nbG9iYWwgOiAodGhpcyA9PSBtYXRoKSxcbiAgb3B0aW9ucy5zdGF0ZSk7XG59XG5cbi8vXG4vLyBBUkM0XG4vL1xuLy8gQW4gQVJDNCBpbXBsZW1lbnRhdGlvbi4gIFRoZSBjb25zdHJ1Y3RvciB0YWtlcyBhIGtleSBpbiB0aGUgZm9ybSBvZlxuLy8gYW4gYXJyYXkgb2YgYXQgbW9zdCAod2lkdGgpIGludGVnZXJzIHRoYXQgc2hvdWxkIGJlIDAgPD0geCA8ICh3aWR0aCkuXG4vL1xuLy8gVGhlIGcoY291bnQpIG1ldGhvZCByZXR1cm5zIGEgcHNldWRvcmFuZG9tIGludGVnZXIgdGhhdCBjb25jYXRlbmF0ZXNcbi8vIHRoZSBuZXh0IChjb3VudCkgb3V0cHV0cyBmcm9tIEFSQzQuICBJdHMgcmV0dXJuIHZhbHVlIGlzIGEgbnVtYmVyIHhcbi8vIHRoYXQgaXMgaW4gdGhlIHJhbmdlIDAgPD0geCA8ICh3aWR0aCBeIGNvdW50KS5cbi8vXG5mdW5jdGlvbiBBUkM0KGtleSkge1xuICB2YXIgdCwga2V5bGVuID0ga2V5Lmxlbmd0aCxcbiAgICAgIG1lID0gdGhpcywgaSA9IDAsIGogPSBtZS5pID0gbWUuaiA9IDAsIHMgPSBtZS5TID0gW107XG5cbiAgLy8gVGhlIGVtcHR5IGtleSBbXSBpcyB0cmVhdGVkIGFzIFswXS5cbiAgaWYgKCFrZXlsZW4pIHsga2V5ID0gW2tleWxlbisrXTsgfVxuXG4gIC8vIFNldCB1cCBTIHVzaW5nIHRoZSBzdGFuZGFyZCBrZXkgc2NoZWR1bGluZyBhbGdvcml0aG0uXG4gIHdoaWxlIChpIDwgd2lkdGgpIHtcbiAgICBzW2ldID0gaSsrO1xuICB9XG4gIGZvciAoaSA9IDA7IGkgPCB3aWR0aDsgaSsrKSB7XG4gICAgc1tpXSA9IHNbaiA9IG1hc2sgJiAoaiArIGtleVtpICUga2V5bGVuXSArICh0ID0gc1tpXSkpXTtcbiAgICBzW2pdID0gdDtcbiAgfVxuXG4gIC8vIFRoZSBcImdcIiBtZXRob2QgcmV0dXJucyB0aGUgbmV4dCAoY291bnQpIG91dHB1dHMgYXMgb25lIG51bWJlci5cbiAgKG1lLmcgPSBmdW5jdGlvbihjb3VudCkge1xuICAgIC8vIFVzaW5nIGluc3RhbmNlIG1lbWJlcnMgaW5zdGVhZCBvZiBjbG9zdXJlIHN0YXRlIG5lYXJseSBkb3VibGVzIHNwZWVkLlxuICAgIHZhciB0LCByID0gMCxcbiAgICAgICAgaSA9IG1lLmksIGogPSBtZS5qLCBzID0gbWUuUztcbiAgICB3aGlsZSAoY291bnQtLSkge1xuICAgICAgdCA9IHNbaSA9IG1hc2sgJiAoaSArIDEpXTtcbiAgICAgIHIgPSByICogd2lkdGggKyBzW21hc2sgJiAoKHNbaV0gPSBzW2ogPSBtYXNrICYgKGogKyB0KV0pICsgKHNbal0gPSB0KSldO1xuICAgIH1cbiAgICBtZS5pID0gaTsgbWUuaiA9IGo7XG4gICAgcmV0dXJuIHI7XG4gICAgLy8gRm9yIHJvYnVzdCB1bnByZWRpY3RhYmlsaXR5LCB0aGUgZnVuY3Rpb24gY2FsbCBiZWxvdyBhdXRvbWF0aWNhbGx5XG4gICAgLy8gZGlzY2FyZHMgYW4gaW5pdGlhbCBiYXRjaCBvZiB2YWx1ZXMuICBUaGlzIGlzIGNhbGxlZCBSQzQtZHJvcFsyNTZdLlxuICAgIC8vIFNlZSBodHRwOi8vZ29vZ2xlLmNvbS9zZWFyY2g/cT1yc2ErZmx1aHJlcityZXNwb25zZSZidG5JXG4gIH0pKHdpZHRoKTtcbn1cblxuLy9cbi8vIGNvcHkoKVxuLy8gQ29waWVzIGludGVybmFsIHN0YXRlIG9mIEFSQzQgdG8gb3IgZnJvbSBhIHBsYWluIG9iamVjdC5cbi8vXG5mdW5jdGlvbiBjb3B5KGYsIHQpIHtcbiAgdC5pID0gZi5pO1xuICB0LmogPSBmLmo7XG4gIHQuUyA9IGYuUy5zbGljZSgpO1xuICByZXR1cm4gdDtcbn07XG5cbi8vXG4vLyBmbGF0dGVuKClcbi8vIENvbnZlcnRzIGFuIG9iamVjdCB0cmVlIHRvIG5lc3RlZCBhcnJheXMgb2Ygc3RyaW5ncy5cbi8vXG5mdW5jdGlvbiBmbGF0dGVuKG9iaiwgZGVwdGgpIHtcbiAgdmFyIHJlc3VsdCA9IFtdLCB0eXAgPSAodHlwZW9mIG9iaiksIHByb3A7XG4gIGlmIChkZXB0aCAmJiB0eXAgPT0gJ29iamVjdCcpIHtcbiAgICBmb3IgKHByb3AgaW4gb2JqKSB7XG4gICAgICB0cnkgeyByZXN1bHQucHVzaChmbGF0dGVuKG9ialtwcm9wXSwgZGVwdGggLSAxKSk7IH0gY2F0Y2ggKGUpIHt9XG4gICAgfVxuICB9XG4gIHJldHVybiAocmVzdWx0Lmxlbmd0aCA/IHJlc3VsdCA6IHR5cCA9PSAnc3RyaW5nJyA/IG9iaiA6IG9iaiArICdcXDAnKTtcbn1cblxuLy9cbi8vIG1peGtleSgpXG4vLyBNaXhlcyBhIHN0cmluZyBzZWVkIGludG8gYSBrZXkgdGhhdCBpcyBhbiBhcnJheSBvZiBpbnRlZ2VycywgYW5kXG4vLyByZXR1cm5zIGEgc2hvcnRlbmVkIHN0cmluZyBzZWVkIHRoYXQgaXMgZXF1aXZhbGVudCB0byB0aGUgcmVzdWx0IGtleS5cbi8vXG5mdW5jdGlvbiBtaXhrZXkoc2VlZCwga2V5KSB7XG4gIHZhciBzdHJpbmdzZWVkID0gc2VlZCArICcnLCBzbWVhciwgaiA9IDA7XG4gIHdoaWxlIChqIDwgc3RyaW5nc2VlZC5sZW5ndGgpIHtcbiAgICBrZXlbbWFzayAmIGpdID1cbiAgICAgIG1hc2sgJiAoKHNtZWFyIF49IGtleVttYXNrICYgal0gKiAxOSkgKyBzdHJpbmdzZWVkLmNoYXJDb2RlQXQoaisrKSk7XG4gIH1cbiAgcmV0dXJuIHRvc3RyaW5nKGtleSk7XG59XG5cbi8vXG4vLyBhdXRvc2VlZCgpXG4vLyBSZXR1cm5zIGFuIG9iamVjdCBmb3IgYXV0b3NlZWRpbmcsIHVzaW5nIHdpbmRvdy5jcnlwdG8gYW5kIE5vZGUgY3J5cHRvXG4vLyBtb2R1bGUgaWYgYXZhaWxhYmxlLlxuLy9cbmZ1bmN0aW9uIGF1dG9zZWVkKCkge1xuICB0cnkge1xuICAgIHZhciBvdXQ7XG4gICAgaWYgKG5vZGVjcnlwdG8gJiYgKG91dCA9IG5vZGVjcnlwdG8ucmFuZG9tQnl0ZXMpKSB7XG4gICAgICAvLyBUaGUgdXNlIG9mICdvdXQnIHRvIHJlbWVtYmVyIHJhbmRvbUJ5dGVzIG1ha2VzIHRpZ2h0IG1pbmlmaWVkIGNvZGUuXG4gICAgICBvdXQgPSBvdXQod2lkdGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdXQgPSBuZXcgVWludDhBcnJheSh3aWR0aCk7XG4gICAgICAoZ2xvYmFsLmNyeXB0byB8fCBnbG9iYWwubXNDcnlwdG8pLmdldFJhbmRvbVZhbHVlcyhvdXQpO1xuICAgIH1cbiAgICByZXR1cm4gdG9zdHJpbmcob3V0KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHZhciBicm93c2VyID0gZ2xvYmFsLm5hdmlnYXRvcixcbiAgICAgICAgcGx1Z2lucyA9IGJyb3dzZXIgJiYgYnJvd3Nlci5wbHVnaW5zO1xuICAgIHJldHVybiBbK25ldyBEYXRlLCBnbG9iYWwsIHBsdWdpbnMsIGdsb2JhbC5zY3JlZW4sIHRvc3RyaW5nKHBvb2wpXTtcbiAgfVxufVxuXG4vL1xuLy8gdG9zdHJpbmcoKVxuLy8gQ29udmVydHMgYW4gYXJyYXkgb2YgY2hhcmNvZGVzIHRvIGEgc3RyaW5nXG4vL1xuZnVuY3Rpb24gdG9zdHJpbmcoYSkge1xuICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseSgwLCBhKTtcbn1cblxuLy9cbi8vIFdoZW4gc2VlZHJhbmRvbS5qcyBpcyBsb2FkZWQsIHdlIGltbWVkaWF0ZWx5IG1peCBhIGZldyBiaXRzXG4vLyBmcm9tIHRoZSBidWlsdC1pbiBSTkcgaW50byB0aGUgZW50cm9weSBwb29sLiAgQmVjYXVzZSB3ZSBkb1xuLy8gbm90IHdhbnQgdG8gaW50ZXJmZXJlIHdpdGggZGV0ZXJtaW5pc3RpYyBQUk5HIHN0YXRlIGxhdGVyLFxuLy8gc2VlZHJhbmRvbSB3aWxsIG5vdCBjYWxsIG1hdGgucmFuZG9tIG9uIGl0cyBvd24gYWdhaW4gYWZ0ZXJcbi8vIGluaXRpYWxpemF0aW9uLlxuLy9cbm1peGtleShtYXRoLnJhbmRvbSgpLCBwb29sKTtcblxuLy9cbi8vIE5vZGVqcyBhbmQgQU1EIHN1cHBvcnQ6IGV4cG9ydCB0aGUgaW1wbGVtZW50YXRpb24gYXMgYSBtb2R1bGUgdXNpbmdcbi8vIGVpdGhlciBjb252ZW50aW9uLlxuLy9cbmlmICgodHlwZW9mIG1vZHVsZSkgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBzZWVkcmFuZG9tO1xuICAvLyBXaGVuIGluIG5vZGUuanMsIHRyeSB1c2luZyBjcnlwdG8gcGFja2FnZSBmb3IgYXV0b3NlZWRpbmcuXG4gIHRyeSB7XG4gICAgbm9kZWNyeXB0byA9IHJlcXVpcmUoJ2NyeXB0bycpO1xuICB9IGNhdGNoIChleCkge31cbn0gZWxzZSBpZiAoKHR5cGVvZiBkZWZpbmUpID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICBkZWZpbmUoZnVuY3Rpb24oKSB7IHJldHVybiBzZWVkcmFuZG9tOyB9KTtcbn0gZWxzZSB7XG4gIC8vIFdoZW4gaW5jbHVkZWQgYXMgYSBwbGFpbiBzY3JpcHQsIHNldCB1cCBNYXRoLnNlZWRyYW5kb20gZ2xvYmFsLlxuICBtYXRoWydzZWVkJyArIHJuZ25hbWVdID0gc2VlZHJhbmRvbTtcbn1cblxuXG4vLyBFbmQgYW5vbnltb3VzIHNjb3BlLCBhbmQgcGFzcyBpbml0aWFsIHZhbHVlcy5cbn0pKFxuICAvLyBnbG9iYWw6IGBzZWxmYCBpbiBicm93c2VycyAoaW5jbHVkaW5nIHN0cmljdCBtb2RlIGFuZCB3ZWIgd29ya2VycyksXG4gIC8vIG90aGVyd2lzZSBgdGhpc2AgaW4gTm9kZSBhbmQgb3RoZXIgZW52aXJvbm1lbnRzXG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpID8gc2VsZiA6IHRoaXMsXG4gIFtdLCAgICAgLy8gcG9vbDogZW50cm9weSBwb29sIHN0YXJ0cyBlbXB0eVxuICBNYXRoICAgIC8vIG1hdGg6IHBhY2thZ2UgY29udGFpbmluZyByYW5kb20sIHBvdywgYW5kIHNlZWRyYW5kb21cbik7XG4iLCJjb25zdCBNQVRFUklBTF9BSVIgPSAwO1xuXG5jb25zdCBjZWxsUHJvY0ZhY2VNYXNrID0gW1swLCA0LCAwXSwgWzEsIDUsIDBdLCBbMiwgNiwgMF0sIFszLCA3LCAwXSwgWzAsIDIsIDFdLCBbNCwgNiwgMV0sIFsxLCAzLCAxXSwgWzUsIDcsIDFdLCBbMCwgMSwgMl0sIFsyLCAzLCAyXSwgWzQsIDUsIDJdLCBbNiwgNywgMl1dO1xuY29uc3QgY2VsbFByb2NFZGdlTWFzayA9IFtbMCwgMSwgMiwgMywgMF0sIFs0LCA1LCA2LCA3LCAwXSwgWzAsIDQsIDEsIDUsIDFdLCBbMiwgNiwgMywgNywgMV0sIFswLCAyLCA0LCA2LCAyXSwgWzEsIDMsIDUsIDcsIDJdXTtcblxuY29uc3QgZmFjZVByb2NGYWNlTWFzayA9IFtcbiAgW1s0LCAwLCAwXSwgWzUsIDEsIDBdLCBbNiwgMiwgMF0sIFs3LCAzLCAwXV0sXG4gIFtbMiwgMCwgMV0sIFs2LCA0LCAxXSwgWzMsIDEsIDFdLCBbNywgNSwgMV1dLFxuICBbWzEsIDAsIDJdLCBbMywgMiwgMl0sIFs1LCA0LCAyXSwgWzcsIDYsIDJdXVxuXTtcblxuY29uc3QgZmFjZVByb2NFZGdlTWFzayA9IFtcbiAgW1sxLCA0LCAwLCA1LCAxLCAxXSwgWzEsIDYsIDIsIDcsIDMsIDFdLCBbMCwgNCwgNiwgMCwgMiwgMl0sIFswLCA1LCA3LCAxLCAzLCAyXV0sXG4gIFtbMCwgMiwgMywgMCwgMSwgMF0sIFswLCA2LCA3LCA0LCA1LCAwXSwgWzEsIDIsIDAsIDYsIDQsIDJdLCBbMSwgMywgMSwgNywgNSwgMl1dLFxuICBbWzEsIDEsIDAsIDMsIDIsIDBdLCBbMSwgNSwgNCwgNywgNiwgMF0sIFswLCAxLCA1LCAwLCA0LCAxXSwgWzAsIDMsIDcsIDIsIDYsIDFdXVxuXTtcblxuY29uc3QgZWRnZVByb2NFZGdlTWFzayA9IFtcbiAgW1szLCAyLCAxLCAwLCAwXSwgWzcsIDYsIDUsIDQsIDBdXSxcbiAgW1s1LCAxLCA0LCAwLCAxXSwgWzcsIDMsIDYsIDIsIDFdXSxcbiAgW1s2LCA0LCAyLCAwLCAyXSwgWzcsIDUsIDMsIDEsIDJdXSxcbl07XG5cbmNvbnN0IHByb2Nlc3NFZGdlTWFzayA9IFtbMywgMiwgMSwgMF0sIFs3LCA1LCA2LCA0XSwgWzExLCAxMCwgOSwgOF1dO1xuXG5jb25zdCBlZGdldm1hcCA9IFtcbiAgWzAsIDRdLCBbMSwgNV0sIFsyLCA2XSwgWzMsIDddLFx0Ly8geC1heGlzIFxuICBbMCwgMl0sIFsxLCAzXSwgWzQsIDZdLCBbNSwgN10sXHQvLyB5LWF4aXNcbiAgWzAsIDFdLCBbMiwgM10sIFs0LCA1XSwgWzYsIDddXHRcdC8vIHotYXhpc1xuXTtcblxuY29uc3QgQ29udG91clByb2Nlc3NFZGdlID0gKG5vZGU6IGFueSwgZGlyOiBudW1iZXIsIGluZGljZXM6IG51bWJlcltdKSA9PiB7XG4gIGxldCBtaW5TaXplID0gMTAwMDAwMDtcdFx0Ly8gYXJiaXRyYXJ5IGJpZyBudW1iZXJcbiAgbGV0IG1pbkluZGV4ID0gMDtcbiAgbGV0IGluZGV4ZXMgPSBbLTEsIC0xLCAtMSwgLTFdO1xuICBsZXQgZmxpcCA9IGZhbHNlO1xuICBsZXQgc2lnbkNoYW5nZSA9IFtmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZV07XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICBsZXQgZWRnZSA9IHByb2Nlc3NFZGdlTWFza1tkaXJdW2ldO1xuICAgIGxldCBjMSA9IGVkZ2V2bWFwW2VkZ2VdWzBdO1xuICAgIGxldCBjMiA9IGVkZ2V2bWFwW2VkZ2VdWzFdO1xuXG4gICAgbGV0IG0xID0gKG5vZGVbaV0uZHJhd0luZm8uY29ybmVycyA+PiBjMSkgJiAxO1xuICAgIGxldCBtMiA9IChub2RlW2ldLmRyYXdJbmZvLmNvcm5lcnMgPj4gYzIpICYgMTtcblxuICAgIGlmIChub2RlW2ldLnNpemUgPCBtaW5TaXplKSB7XG4gICAgICBtaW5TaXplID0gbm9kZVtpXS5zaXplO1xuICAgICAgbWluSW5kZXggPSBpO1xuICAgICAgZmxpcCA9IG0xICE9PSBNQVRFUklBTF9BSVI7XG4gICAgfVxuXG4gICAgaW5kZXhlc1tpXSA9IG5vZGVbaV0uZHJhd0luZm8uaW5kZXg7XG5cbiAgICBzaWduQ2hhbmdlW2ldID1cbiAgICAgIChtMSA9PT0gTUFURVJJQUxfQUlSICYmIG0yICE9PSBNQVRFUklBTF9BSVIpIHx8XG4gICAgICAobTEgIT09IE1BVEVSSUFMX0FJUiAmJiBtMiA9PT0gTUFURVJJQUxfQUlSKTtcblxuXG4gIH1cblxuICBpZiAoc2lnbkNoYW5nZVttaW5JbmRleF0pIHtcblxuICAgIGlmICghZmxpcCkge1xuXG4gICAgICBpbmRpY2VzLnB1c2goaW5kZXhlc1swXSk7XG4gICAgICBpbmRpY2VzLnB1c2goaW5kZXhlc1sxXSk7XG4gICAgICBpbmRpY2VzLnB1c2goaW5kZXhlc1szXSk7XG5cbiAgICAgIGluZGljZXMucHVzaChpbmRleGVzWzBdKTtcbiAgICAgIGluZGljZXMucHVzaChpbmRleGVzWzNdKTtcbiAgICAgIGluZGljZXMucHVzaChpbmRleGVzWzJdKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpbmRpY2VzLnB1c2goaW5kZXhlc1swXSk7XG4gICAgICBpbmRpY2VzLnB1c2goaW5kZXhlc1szXSk7XG4gICAgICBpbmRpY2VzLnB1c2goaW5kZXhlc1sxXSk7XG5cbiAgICAgIGluZGljZXMucHVzaChpbmRleGVzWzBdKTtcbiAgICAgIGluZGljZXMucHVzaChpbmRleGVzWzJdKTtcbiAgICAgIGluZGljZXMucHVzaChpbmRleGVzWzNdKTtcblxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBDb250b3VyRWRnZVByb2MgPSAobm9kZTogYW55LCBkaXI6IG51bWJlciwgaW5kaWNlczogbnVtYmVyW10pID0+IHtcbiAgaWYgKG5vZGVbMF0gPT0gbnVsbCB8fCBub2RlWzFdID09IG51bGwgfHwgbm9kZVsyXSA9PSBudWxsIHx8IG5vZGVbM10gPT0gbnVsbClcbiAgICByZXR1cm47XG5cbiAgaWYgKG5vZGVbMF0udHlwZSAhPT0gJ2ludGVybmFsJyAmJlxuICAgIG5vZGVbMV0udHlwZSAhPT0gJ2ludGVybmFsJyAmJlxuICAgIG5vZGVbMl0udHlwZSAhPT0gJ2ludGVybmFsJyAmJlxuICAgIG5vZGVbM10udHlwZSAhPT0gJ2ludGVybmFsJykge1xuICAgIENvbnRvdXJQcm9jZXNzRWRnZShub2RlLCBkaXIsIGluZGljZXMpO1xuICB9XG4gIGVsc2Uge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICBsZXQgZWRnZU5vZGVzID0gW107XG4gICAgICBsZXQgYyA9IFtcbiAgICAgICAgZWRnZVByb2NFZGdlTWFza1tkaXJdW2ldWzBdLFxuICAgICAgICBlZGdlUHJvY0VkZ2VNYXNrW2Rpcl1baV1bMV0sXG4gICAgICAgIGVkZ2VQcm9jRWRnZU1hc2tbZGlyXVtpXVsyXSxcbiAgICAgICAgZWRnZVByb2NFZGdlTWFza1tkaXJdW2ldWzNdXG4gICAgICBdO1xuXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDQ7IGorKykge1xuICAgICAgICBpZiAobm9kZVtqXS50eXBlID09PSAnbGVhZicgfHwgbm9kZVtqXS50eXBlID09PSAncHNldWRvJykge1xuICAgICAgICAgIGVkZ2VOb2Rlc1tqXSA9IG5vZGVbal07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZWRnZU5vZGVzW2pdID0gbm9kZVtqXS5jaGlsZHJlbltjW2pdXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBDb250b3VyRWRnZVByb2MoZWRnZU5vZGVzLCBlZGdlUHJvY0VkZ2VNYXNrW2Rpcl1baV1bNF0sIGluZGljZXMpO1xuICAgIH1cbiAgfVxufVxuXG5jb25zdCBDb250b3VyRmFjZVByb2MgPSAobm9kZTogYW55LCBkaXI6IG51bWJlciwgaW5kaWNlczogbnVtYmVyW10pID0+IHtcbiAgaWYgKG5vZGVbMF0gPT0gbnVsbCB8fCBub2RlWzFdID09IG51bGwpXG4gICAgcmV0dXJuO1xuXG4gIGlmIChub2RlWzBdLnR5cGUgPT09ICdpbnRlcm5hbCcgfHxcbiAgICBub2RlWzFdLnR5cGUgPT09ICdpbnRlcm5hbCcpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgbGV0IGZhY2VOb2RlcyA9IFtdO1xuXG4gICAgICBsZXQgYyA9IFtcbiAgICAgICAgZmFjZVByb2NGYWNlTWFza1tkaXJdW2ldWzBdLFxuICAgICAgICBmYWNlUHJvY0ZhY2VNYXNrW2Rpcl1baV1bMV1cbiAgICAgIF07XG5cbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMjsgaisrKSB7XG4gICAgICAgIGlmIChub2RlW2pdLnR5cGUgIT09ICdpbnRlcm5hbCcpIHtcbiAgICAgICAgICBmYWNlTm9kZXNbal0gPSBub2RlW2pdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGZhY2VOb2Rlc1tqXSA9IG5vZGVbal0uY2hpbGRyZW5bY1tqXV07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgQ29udG91ckZhY2VQcm9jKGZhY2VOb2RlcywgZmFjZVByb2NGYWNlTWFza1tkaXJdW2ldWzJdLCBpbmRpY2VzKTtcbiAgICB9XG5cbiAgICBsZXQgb3JkZXJzID0gW1xuICAgICAgWzAsIDAsIDEsIDFdLFxuICAgICAgWzAsIDEsIDAsIDFdXG4gICAgXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICBsZXQgZWRnZU5vZGVzID0gW107XG4gICAgICBsZXQgYyA9IFtcbiAgICAgICAgZmFjZVByb2NFZGdlTWFza1tkaXJdW2ldWzFdLFxuICAgICAgICBmYWNlUHJvY0VkZ2VNYXNrW2Rpcl1baV1bMl0sXG4gICAgICAgIGZhY2VQcm9jRWRnZU1hc2tbZGlyXVtpXVszXSxcbiAgICAgICAgZmFjZVByb2NFZGdlTWFza1tkaXJdW2ldWzRdXG4gICAgICBdO1xuXG4gICAgICBsZXQgb3JkZXIgPSBbXG4gICAgICAgIG9yZGVyc1tmYWNlUHJvY0VkZ2VNYXNrW2Rpcl1baV1bMF1dWzBdLFxuICAgICAgICBvcmRlcnNbZmFjZVByb2NFZGdlTWFza1tkaXJdW2ldWzBdXVsxXSxcbiAgICAgICAgb3JkZXJzW2ZhY2VQcm9jRWRnZU1hc2tbZGlyXVtpXVswXV1bMl0sXG4gICAgICAgIG9yZGVyc1tmYWNlUHJvY0VkZ2VNYXNrW2Rpcl1baV1bMF1dWzNdXG4gICAgICBdO1xuXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDQ7IGorKykge1xuICAgICAgICBpZiAobm9kZVtvcmRlcltqXV0udHlwZSA9PT0gJ2xlYWYnIHx8XG4gICAgICAgICAgbm9kZVtvcmRlcltqXV0udHlwZSA9PT0gJ3BzZXVkbycpIHtcbiAgICAgICAgICBlZGdlTm9kZXNbal0gPSBub2RlW29yZGVyW2pdXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBlZGdlTm9kZXNbal0gPSBub2RlW29yZGVyW2pdXS5jaGlsZHJlbltjW2pdXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBDb250b3VyRWRnZVByb2MoZWRnZU5vZGVzLCBmYWNlUHJvY0VkZ2VNYXNrW2Rpcl1baV1bNV0sIGluZGljZXMpO1xuICAgIH1cbiAgfVxufVxuXG5jb25zdCBDb250b3VyQ2VsbFByb2MgPSAobm9kZTogYW55LCBpbmRpY2VzOiBudW1iZXJbXSkgPT4ge1xuICBpZiAobm9kZSA9PSBudWxsKVxuICAgIHJldHVybjtcblxuICBpZiAobm9kZS50eXBlID09PSAnaW50ZXJuYWwnKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICAgIENvbnRvdXJDZWxsUHJvYyhub2RlLmNoaWxkcmVuW2ldLCBpbmRpY2VzKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEyOyBpKyspIHtcbiAgICAgIGxldCBmYWNlTm9kZXMgPSBbXTtcbiAgICAgIGxldCBjID0gW2NlbGxQcm9jRmFjZU1hc2tbaV1bMF0sIGNlbGxQcm9jRmFjZU1hc2tbaV1bMV1dO1xuXG4gICAgICBmYWNlTm9kZXNbMF0gPSBub2RlLmNoaWxkcmVuW2NbMF1dO1xuICAgICAgZmFjZU5vZGVzWzFdID0gbm9kZS5jaGlsZHJlbltjWzFdXTtcblxuICAgICAgQ29udG91ckZhY2VQcm9jKGZhY2VOb2RlcywgY2VsbFByb2NGYWNlTWFza1tpXVsyXSwgaW5kaWNlcyk7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgIGxldCBlZGdlTm9kZXMgPSBbXTtcbiAgICAgIGxldCBjID0gW1xuICAgICAgICBjZWxsUHJvY0VkZ2VNYXNrW2ldWzBdLFxuICAgICAgICBjZWxsUHJvY0VkZ2VNYXNrW2ldWzFdLFxuICAgICAgICBjZWxsUHJvY0VkZ2VNYXNrW2ldWzJdLFxuICAgICAgICBjZWxsUHJvY0VkZ2VNYXNrW2ldWzNdXG4gICAgICBdO1xuXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDQ7IGorKykge1xuICAgICAgICBlZGdlTm9kZXNbal0gPSBub2RlLmNoaWxkcmVuW2Nbal1dO1xuICAgICAgfVxuXG4gICAgICBDb250b3VyRWRnZVByb2MoZWRnZU5vZGVzLCBjZWxsUHJvY0VkZ2VNYXNrW2ldWzRdLCBpbmRpY2VzKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udG91ckNlbGxQcm9jOyIsImltcG9ydCB7dmVjM30gZnJvbSAnZ2wtbWF0cml4JztcbmltcG9ydCBWb3hlbCBmcm9tICcuL3ZveGVsJztcbmltcG9ydCB7UXVldWVJdGVtfSBmcm9tIFwiLi9xdWV1ZUl0ZW1cIjtcbmltcG9ydCBXb3JsZEdlbmVyYXRvciwge1dvcmxkR2VuZXJhdG9ySW5mbywgV29ybGRQb3NpdGlvbn0gZnJvbSBcIi4vd29ybGQtZ2VuZXJhdG9yXCI7XG5pbXBvcnQge0NvdW50RG93bkxhdGNofSBmcm9tIFwiLi9jb3VudERvd25MYXRjaFwiO1xuXG5jb25zdCBjdHg6IFdvcmtlciA9IHNlbGYgYXMgYW55O1xuXG4oYXN5bmMgZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGFkYXB0ZXIgPSBhd2FpdCBuYXZpZ2F0b3IuZ3B1LnJlcXVlc3RBZGFwdGVyKCk7XG4gIGNvbnN0IGRldmljZSA9IGF3YWl0IGFkYXB0ZXIucmVxdWVzdERldmljZSgpO1xuXG4gIGNvbnN0IHZveGVsID0gbmV3IFZveGVsKCk7XG4gIGF3YWl0IHZveGVsLmluaXQoZGV2aWNlKTtcblxuICBjb25zdCBnZW5lcmF0b3JzOiBWb3hlbFtdID0gW107XG4gIGNvbnN0IHRocmVhZENvdW50ID0gMTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aHJlYWRDb3VudDsgaSsrKSB7XG4gICAgZ2VuZXJhdG9yc1tpXSA9IG5ldyBWb3hlbCgpO1xuICAgIGF3YWl0IGdlbmVyYXRvcnNbaV0uaW5pdChkZXZpY2UpO1xuICB9XG5cbiAgY29uc29sZS5sb2coJ1ZveGVsIGVuZ2luZSBpbml0IGNvbXBsZXRlJyk7XG4gIHBvc3RNZXNzYWdlKHsgdHlwZTogJ2luaXRfY29tcGxldGUnIH0pO1xuXG4gIGxldCBncHVRdWV1ZTogR1BVQ29tbWFuZEJ1ZmZlcltdID0gW107XG4gIGNvbnN0IGNhbGxiYWNrcyA9IFtdO1xuICBjb25zdCBxdWV1ZSA9IChpdGVtOiBRdWV1ZUl0ZW0pID0+IHtcbiAgICBjYWxsYmFja3MucHVzaChpdGVtLmNhbGxiYWNrKTtcbiAgICBncHVRdWV1ZS5wdXNoKC4uLml0ZW0uaXRlbXMpO1xuICAgIC8vZGV2aWNlLnF1ZXVlLnN1Ym1pdChpdGVtLml0ZW1zKTtcbiAgfTtcblxuICBsZXQgbGFzdEluZm86IFdvcmxkR2VuZXJhdG9ySW5mbyA9IG51bGw7XG5cblxuICBsZXQgZ2VuZXJhdGluZyA9IGZhbHNlO1xuICBjb25zdCBnZW5lcmF0ZWRQb3NpdGlvbnM6IFdvcmxkUG9zaXRpb25bXSA9IFtdO1xuXG4gIG9ubWVzc2FnZSA9IGFzeW5jIGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAoZ2VuZXJhdGluZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGdlbmVyYXRpbmcgPSB0cnVlO1xuICAgIGNvbnN0IHsgcG9zaXRpb24sIGRldGFpbCB9ID0gZS5kYXRhO1xuXG4gICAgaWYgKGRldGFpbCkge1xuICAgICAgY29uc3Qge3gsIHksIHosIHN9ID0gZGV0YWlsO1xuICAgICAgY29uc3QgeyB2ZXJ0aWNlcywgbm9ybWFscywgaW5kaWNlcyB9ID0gYXdhaXQgdm94ZWwuZ2VuZXJhdGUoZGV2aWNlLCBxdWV1ZSwgdmVjMy5mcm9tVmFsdWVzKHgtKDMxKnMqMC41KSwgeS0oMzEqcyowLjUpLCB6LSgzMSpzKjAuNSkpLCBzKTtcbiAgICAgIGlmICh2ZXJ0aWNlcy5sZW5ndGggPiAwKSB7XG4gICAgICB9XG4gICAgICBjdHgucG9zdE1lc3NhZ2UoKHsgdHlwZTogJ3VwZGF0ZScsIGk6IGAke3h9OiR7eX06JHt6fWAsIGl4OiB4LCBpeTogeSwgaXo6IHosIHg6IDAsIHk6IDAsIHo6IDAsIHZlcnRpY2VzOiB2ZXJ0aWNlcy5idWZmZXIsIG5vcm1hbHM6IG5vcm1hbHMuYnVmZmVyLCBpbmRpY2VzOiBpbmRpY2VzLmJ1ZmZlciwgc3RyaWRlOiBzIH0pLCBbdmVydGljZXMuYnVmZmVyLCBub3JtYWxzLmJ1ZmZlciwgaW5kaWNlcy5idWZmZXJdKVxuICAgICAgZ2VuZXJhdGluZyA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHN0cmlkZSA9IDMyO1xuICAgIGNvbnN0IHNpemUgPSAxMjg7XG4gICAgY29uc3QgY2h1bmtTaXplID0gMzE7XG4gICAgY29uc3Qgd29ybGRTaXplID0gIE1hdGguY2VpbChzaXplIC8gc3RyaWRlKTtcblxuICAgIGNvbnN0IHQwID0gcGVyZm9ybWFuY2Uubm93KCk7XG5cbiAgICBjb25zdCB3b3JsZEdlbmVyYXRvciA9IG5ldyBXb3JsZEdlbmVyYXRvcihzdHJpZGUpO1xuXG4gICAgbGV0IGluZm8gPSB3b3JsZEdlbmVyYXRvci5pbml0KChwb3NpdGlvblswXSAvIGNodW5rU2l6ZSksIChwb3NpdGlvblsxXSAvIGNodW5rU2l6ZSksIChwb3NpdGlvblsyXSAvIGNodW5rU2l6ZSkpO1xuXG5cbiAgICBpZiAobGFzdEluZm8gIT09IG51bGwgJiYgaW5mby54ID09PSBsYXN0SW5mby54ICYmIGluZm8ueSA9PT0gbGFzdEluZm8ueSAmJiBpbmZvLnogPT09IGxhc3RJbmZvLnopIHtcbiAgICAgIGdlbmVyYXRpbmcgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhgSW5pdCB3b3JsZCBhdCAke2luZm8ueH06JHtpbmZvLnl9OiR7aW5mby56fSBmb3Igc3RyaWRlICR7c3RyaWRlfWApXG5cbiAgICBsYXN0SW5mbyA9IGluZm87XG4gICAgLy9jdHgucG9zdE1lc3NhZ2UoeyB0eXBlOiAnY2xlYXInfSk7XG5cbiAgICBjb25zdCB0aW1lcyA9IHtcbiAgICAgIDMyOiBbXSxcbiAgICAgIDY0OiBbXSxcbiAgICAgIDEyODogW10sXG4gICAgICAyNTY6IFtdLFxuICAgICAgNTEyOiBbXSxcbiAgICAgIDEwMjQ6IFtdXG4gICAgfTtcblxuICAgIGRvIHtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aHJlYWRDb3VudDsgaSsrKSB7XG5cblxuICAgICAgICAvL2xldCB0aW1lciA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICBjb25zdCByID0gd29ybGRHZW5lcmF0b3IubmV4dChpbmZvKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gclswXTtcbiAgICAgICAgaW5mbyA9IHJbMV07XG5cbiAgICAgICAgY29uc3QgbWF0Y2hpbmdDaHVuayA9IGdlbmVyYXRlZFBvc2l0aW9ucy5maWx0ZXIocCA9PiBXb3JsZFBvc2l0aW9uLmVxdWFsKHAsIHJlc3VsdCkpO1xuICAgICAgICBpZiAobWF0Y2hpbmdDaHVuay5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZ2VuZXJhdG9yOiBWb3hlbCA9IG51bGw7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZ2VuZXJhdG9ycy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGlmICghZ2VuZXJhdG9yc1tpXS5ydW5uaW5nKSB7XG4gICAgICAgICAgICBnZW5lcmF0b3IgPSBnZW5lcmF0b3JzW2ldO1xuICAgICAgICAgICAgZ2VuZXJhdG9yLnJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qge3gsIHksIHp9ID0gcmVzdWx0O1xuICAgICAgICBjb25zdCBoYWxmQ2h1bmsgPSByZXN1bHQuc3RyaWRlICogY2h1bmtTaXplICogMC41O1xuXG4gICAgICAgIC8vY29uc3QgeyB2ZXJ0aWNlcywgbm9ybWFscywgaW5kaWNlcywgY29ybmVycyB9ID0gYXdhaXQgdm94ZWwuZ2VuZXJhdGUoZGV2aWNlLCBxdWV1ZSwgdmVjMy5mcm9tVmFsdWVzKHggKiBjaHVua1NpemUgLWhhbGZDaHVuaywgeSAqIGNodW5rU2l6ZSAtaGFsZkNodW5rLCB6ICogY2h1bmtTaXplIC1oYWxmQ2h1bmspLCByZXN1bHQuc3RyaWRlKTtcbiAgICAgICAgbGV0IHRpbWVyID0gcGVyZm9ybWFuY2Uubm93KCk7XG5cbiAgICAgICAgZ2VuZXJhdG9yLmdlbmVyYXRlKGRldmljZSwgcXVldWUsIHZlYzMuZnJvbVZhbHVlcyh4ICogY2h1bmtTaXplIC0gaGFsZkNodW5rLCB5ICogY2h1bmtTaXplIC0gaGFsZkNodW5rLCB6ICogY2h1bmtTaXplIC0gaGFsZkNodW5rKSwgcmVzdWx0LnN0cmlkZSlcbiAgICAgICAgICAudGhlbigoe3ZlcnRpY2VzLCBub3JtYWxzLCBpbmRpY2VzLCBjb3JuZXJzfSkgPT4ge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhgQmxvY2sgZ2VuZXJhdGVkIHdpdGggJHt2ZXJ0aWNlcy5sZW5ndGh9IGluICR7cGVyZm9ybWFuY2Uubm93KCkgLSB0aW1lcn1gKTtcbiAgICAgICAgICAgIGN0eC5wb3N0TWVzc2FnZSgoe1xuICAgICAgICAgICAgICB0eXBlOiAndXBkYXRlJyxcbiAgICAgICAgICAgICAgaTogYCR7eH06JHt5fToke3p9YCxcbiAgICAgICAgICAgICAgaXg6IHgsXG4gICAgICAgICAgICAgIGl5OiB5LFxuICAgICAgICAgICAgICBpejogeixcbiAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgICAgejogMCxcbiAgICAgICAgICAgICAgdmVydGljZXM6IHZlcnRpY2VzLmJ1ZmZlcixcbiAgICAgICAgICAgICAgbm9ybWFsczogbm9ybWFscy5idWZmZXIsXG4gICAgICAgICAgICAgIGluZGljZXM6IGluZGljZXMuYnVmZmVyLFxuICAgICAgICAgICAgICBzdHJpZGU6IHJlc3VsdC5zdHJpZGVcbiAgICAgICAgICAgIH0pLCBbdmVydGljZXMuYnVmZmVyLCBub3JtYWxzLmJ1ZmZlciwgaW5kaWNlcy5idWZmZXJdKTtcbiAgICAgICAgICAgIGdlbmVyYXRlZFBvc2l0aW9ucy5wdXNoKHJlc3VsdCk7XG4gICAgICAgICAgICBnZW5lcmF0b3IucnVubmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgLy90aW1lc1tpbmZvLnN0cmlkZV0ucHVzaChwZXJmb3JtYW5jZS5ub3coKSAtIHRpbWVyKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgLy8gaWYgKHZlcnRpY2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgLy8gICBjb25zb2xlLmxvZyhgR2VuZXJhdGluZyAke3h9OiR7eX06JHt6fSAoJHt4ICogY2h1bmtTaXplIC1oYWxmQ2h1bmt9OiR7eSAqIGNodW5rU2l6ZSAtaGFsZkNodW5rfToke3ogKiBjaHVua1NpemUgLWhhbGZDaHVua30pICgke3Jlc3VsdC5zdHJpZGV9IC8gJHtoYWxmQ2h1bmt9IC8gJHtpbmZvLnByZXZpb3VzT2Zmc2V0fSlgKVxuICAgICAgICAvLyB9XG5cbiAgICAgICAgLy8gaWYgKHZlcnRpY2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgLy8gICBjb25zb2xlLmxvZyhgQmxvY2sgZ2VuZXJhdGVkIHdpdGggJHt2ZXJ0aWNlcy5sZW5ndGh9IGluICR7cGVyZm9ybWFuY2Uubm93KCkgLSB0aW1lcn1gKTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvL2N0eC5wb3N0TWVzc2FnZSgoeyB0eXBlOiAndXBkYXRlJywgaTogYCR7eH06JHt5fToke3p9YCwgaXg6IHgsIGl5OiB5LCBpejogeiwgeDogMCwgeTogMCwgejogMCwgdmVydGljZXM6IHZlcnRpY2VzLmJ1ZmZlciwgbm9ybWFsczogbm9ybWFscy5idWZmZXIsIGluZGljZXM6IGluZGljZXMuYnVmZmVyLCBjb3JuZXJzOiBjb3JuZXJzLmJ1ZmZlciwgc3RyaWRlOiByZXN1bHQuc3RyaWRlIH0pLCBbdmVydGljZXMuYnVmZmVyLCBub3JtYWxzLmJ1ZmZlciwgaW5kaWNlcy5idWZmZXIsIGNvcm5lcnMuYnVmZmVyXSlcbiAgICAgICAgd2hpbGUgKGdwdVF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb25zdCBwcm9taXNlID0gZGV2aWNlLnF1ZXVlLm9uU3VibWl0dGVkV29ya0RvbmUoKTtcbiAgICAgICAgICBkZXZpY2UucXVldWUuc3VibWl0KGdwdVF1ZXVlKTtcbiAgICAgICAgICBhd2FpdCBwcm9taXNlO1xuICAgICAgICAgIGdwdVF1ZXVlID0gW107XG4gICAgICAgICAgY29uc3QgY291bnRkb3duID0gbmV3IENvdW50RG93bkxhdGNoKGNhbGxiYWNrcy5sZW5ndGgpO1xuXG4gICAgICAgICAgZm9yIChsZXQgaiA9IGNhbGxiYWNrcy5sZW5ndGggLSAxOyBqID49MDsgai0tKSB7XG4gICAgICAgICAgICBjYWxsYmFja3Nbal0oKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgY291bnRkb3duLmNvdW50RG93bigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjYWxsYmFja3Muc3BsaWNlKGosIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhd2FpdCBjb3VudGRvd24uYXdhaXRaZXJvKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IHdoaWxlIChpbmZvLnN0cmlkZSA8PSAyIDw8IDE0KTtcblxuICAgIGZvciAobGV0IGsgaW4gdGltZXMpIHtcbiAgICAgIGNvbnNvbGUubG9nKGAke2t9OiAke3RpbWVzW2tdLnJlZHVjZSgocGFydGlhbFN1bSwgYSkgPT4gcGFydGlhbFN1bSArIGEsIDApIC8gdGltZXNba10ubGVuZ3RofWApO1xuICAgIH1cbiAgICBnZW5lcmF0aW5nID0gZmFsc2U7XG5cbiAgICBjb25zb2xlLmxvZyhgR2VuZXJhdGlvbiBjb21wbGV0ZSBpbiAke3BlcmZvcm1hbmNlLm5vdygpIC0gdDB9IG1pbGxpc2Vjb25kc2ApO1xuICB9XG59KSgpO1xuIiwiZXhwb3J0IGNsYXNzIENvdW50RG93bkxhdGNoIHtcblxuICBwcml2YXRlIHJlYWRvbmx5IHByb21pc2U6IFByb21pc2U8dm9pZD47XG5cbiAgcHJpdmF0ZSBjb3VudERvd25GdW5jdGlvbjogKCkgPT4gbnVtYmVyO1xuICBwcml2YXRlIGNvdW50OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugd2l0aCBhIGdpdmVuIGNvdW50XG4gICAqXG4gICAqIEBwYXJhbSBjb3VudCBUaGUgaW5pdGlhbCBjb3VudFxuICAgKi9cbiAgY29uc3RydWN0b3IoY291bnQ6IG51bWJlcikge1xuICAgIHRoaXMuY291bnQgPSBNYXRoLm1heChjb3VudCwgMCk7XG4gICAgdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2U8dm9pZD4ocmVzb2x2ZSA9PiB7XG4gICAgICB0aGlzLmNvdW50RG93bkZ1bmN0aW9uID0gKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5jb3VudCA+IDApIHtcbiAgICAgICAgICB0aGlzLmNvdW50ID0gdGhpcy5jb3VudCAtIDE7XG4gICAgICAgICAgaWYgKHRoaXMuY291bnQgPD0gMCkge1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jb3VudDtcbiAgICAgIH07XG5cbiAgICAgIC8vUmVzb2x2ZSBwcm9taXNlIGlmIGluaXRpYWwgdmFsdWUgaXMgbGVzcyBvciBlcXVhbCAwXG4gICAgICAvL01heWJlIGNvdW50IHdhcyBjYWxjdWxhdGVkIGZyb20gZGF0YSBvciBzb21ldGhpbmcgZWxzZVxuICAgICAgLy9zbyB0aGlzIGNhc2UgbWFrZXMgc2Vuc2UgdW5kZXIgc29tZSBjaXJjdW1zdGFuY2VzXG4gICAgICBpZiAoY291bnQgPD0gMCkge1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRGVjcmVtZW50IHRoZSBjb3VudCBieSBvbmVcbiAgICovXG4gIHB1YmxpYyBjb3VudERvd24oKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5jb3VudERvd25GdW5jdGlvbigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCdzIHRoZSBjdXJyZW50IGNvdW50IHZhbHVlIG9mIHRoZSBsYXRjaFxuICAgKi9cbiAgcHVibGljIGdldENvdW50KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuY291bnQ7XG4gIH1cblxuICAvKipcbiAgICogQXdhaXQgdW50aWwgdGhlIGNvdW50IHJlYWNoZXMgemVybyAoMClcbiAgICovXG4gIHB1YmxpYyBhc3luYyBhd2FpdFplcm8oKSB7XG4gICAgYXdhaXQgdGhpcy5wcm9taXNlO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCdzIHRoZSBwcm9taXNlIHRoYXQgd2lsbCBiZSByZXNvbHZlIGFmdGVyIGNvdW50IHJlYWNoZWQgemVyb1xuICAgKi9cbiAgcHVibGljIGdldFByb21pc2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvbWlzZTtcbiAgfVxufSIsImltcG9ydCB7IHZlYzMgfSBmcm9tICdnbC1tYXRyaXgnO1xuXG5jb25zdCBDSElMRF9NSU5fT0ZGU0VUUyA9IFtcbiAgdmVjMy5mcm9tVmFsdWVzKDAsIDAsIDApLFxuICB2ZWMzLmZyb21WYWx1ZXMoMCwgMCwgMSksXG4gIHZlYzMuZnJvbVZhbHVlcygwLCAxLCAwKSxcbiAgdmVjMy5mcm9tVmFsdWVzKDAsIDEsIDEpLFxuICB2ZWMzLmZyb21WYWx1ZXMoMSwgMCwgMCksXG4gIHZlYzMuZnJvbVZhbHVlcygxLCAwLCAxKSxcbiAgdmVjMy5mcm9tVmFsdWVzKDEsIDEsIDApLFxuICB2ZWMzLmZyb21WYWx1ZXMoMSwgMSwgMSlcbl07XG5cbmNvbnN0IGNvbnN0cnVjdFBhcmVudHMgPSAoY2hpbGRyZW4sIHBvc2l0aW9uLCBwYXJlbnRTaXplKSA9PiB7XG4gIGxldCBwYXJlbnRzSGFzaCA9IHt9O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IG5vZGUgPSBjaGlsZHJlbltpXTtcbiAgICBsZXQgcGFyZW50UG9zID0gdmVjMy5zdWIodmVjMy5jcmVhdGUoKSwgbm9kZS5taW4sIHZlYzMuZnJvbVZhbHVlcygobm9kZS5taW5bMF0gLSBwb3NpdGlvblswXSkgJSBwYXJlbnRTaXplLFxuICAgICAgKG5vZGUubWluWzFdIC0gcG9zaXRpb25bMV0pICUgcGFyZW50U2l6ZSxcbiAgICAgIChub2RlLm1pblsyXSAtIHBvc2l0aW9uWzJdKSAlIHBhcmVudFNpemUpKTtcblxuICAgIGxldCBwYXJlbnQgPSBwYXJlbnRzSGFzaFsoPGFueT5wYXJlbnRQb3MpXTtcbiAgICBpZiAoIXBhcmVudCkge1xuICAgICAgcGFyZW50ID0ge1xuICAgICAgICBtaW46IHBhcmVudFBvcyxcbiAgICAgICAgc2l6ZTogcGFyZW50U2l6ZSxcbiAgICAgICAgdHlwZTogJ2ludGVybmFsJyxcbiAgICAgICAgY2hpbGRyZW46IFtdXG4gICAgICB9O1xuICAgICAgcGFyZW50c0hhc2hbcGFyZW50Lm1pbl0gPSBwYXJlbnQ7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCA4OyBqKyspIHtcbiAgICAgIGxldCBjaGlsZE1pbiA9IHZlYzMuYWRkKHZlYzMuY3JlYXRlKCksIHBhcmVudFBvcywgdmVjMy5mcm9tVmFsdWVzKENISUxEX01JTl9PRkZTRVRTW2pdWzBdICogbm9kZS5zaXplLCBDSElMRF9NSU5fT0ZGU0VUU1tqXVsxXSAqIG5vZGUuc2l6ZSwgQ0hJTERfTUlOX09GRlNFVFNbal1bMl0gKiBub2RlLnNpemUpKTtcblxuICAgICAgaWYgKHZlYzMuZXF1YWxzKGNoaWxkTWluLCBub2RlLm1pbikpIHtcbiAgICAgICAgcGFyZW50LmNoaWxkcmVuW2pdID0gbm9kZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2hpbGRyZW4ubGVuZ3RoID0gMDtcblxuICByZXR1cm4gT2JqZWN0LnZhbHVlcyhwYXJlbnRzSGFzaCk7XG59XG5cblxuY29uc3QgY29uc3RydWN0VHJlZVVwd2FyZHMgPSAobm9kZXMsIHJvb3RNaW4sIHJvb3ROb2RlU2l6ZSkgPT4ge1xuICBpZiAobm9kZXMubGVuZ3RoID09IDApIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIG5vZGVzLnNvcnQoKGxocywgcmhzKSA9PiBsaHMuc2l6ZSAtIHJocy5zaXplKTtcblxuICAvLyB0aGUgaW5wdXQgbm9kZXMgbWF5IGJlIGRpZmZlcmVudCBzaXplcyBpZiBhIHNlYW0gb2N0cmVlIGlzIGJlaW5nIGNvbnN0cnVjdGVkXG4gIC8vIGluIHRoYXQgY2FzZSB3ZSBuZWVkIHRvIHByb2Nlc3MgdGhlIGlucHV0IG5vZGVzIGluIHN0YWdlcyBhbG9uZyB3aXRoIHRoZSBuZXdseVxuICAvLyBjb25zdHJ1Y3RlZCBwYXJlbnQgbm9kZXMgdW50aWwgYWxsIHRoZSBub2RlcyBoYXZlIHRoZSBzYW1lIHNpemVcbiAgd2hpbGUgKG5vZGVzWzBdLnNpemUgIT0gbm9kZXNbbm9kZXMubGVuZ3RoIC0gMV0uc2l6ZSkge1xuICAgIC8vIGZpbmQgdGhlIGVuZCBvZiB0aGlzIHJ1blxuICAgIGxldCBpdGVyID0gMDtcbiAgICBsZXQgc2l6ZSA9IG5vZGVzW2l0ZXJdLnNpemU7XG4gICAgZG8ge1xuICAgICAgKytpdGVyO1xuICAgIH0gd2hpbGUgKG5vZGVzW2l0ZXJdLnNpemUgPT0gc2l6ZSk7XG5cbiAgICAvLyBjb25zdHJ1Y3QgdGhlIG5ldyBwYXJlbnQgbm9kZXMgZm9yIHRoaXMgcnVuXG4gICAgbGV0IG5ld05vZGVzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVyOyBpKyspXG4gICAgICBuZXdOb2Rlcy5wdXNoKG5vZGVzW2ldKTtcbiAgICBuZXdOb2RlcyA9IGNvbnN0cnVjdFBhcmVudHMobmV3Tm9kZXMsIHJvb3RNaW4sIHNpemUgKiAyKTtcblxuICAgIC8vIHNldCB1cCBmb3IgdGhlIG5leHQgaXRlcmF0aW9uOiB0aGUgcGFyZW50cyBwcm9kdWNlZCBwbHVzIGFueSByZW1haW5pbmcgaW5wdXQgbm9kZXNcbiAgICBmb3IgKGxldCBpID0gaXRlcjsgaSA8IG5vZGVzLkNvdW50OyBpKyspXG4gICAgICBuZXdOb2Rlcy5wdXNoKG5vZGVzW2ldKTtcblxuICAgIG5vZGVzLmxlbmd0aCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdOb2Rlcy5sZW5ndGg7IGkrKylcbiAgICAgIG5vZGVzLnB1c2gobmV3Tm9kZXNbaV0pO1xuICB9XG5cbiAgbGV0IHBhcmVudFNpemUgPSBub2Rlc1swXS5zaXplICogMjtcbiAgd2hpbGUgKHBhcmVudFNpemUgPD0gcm9vdE5vZGVTaXplKSB7XG4gICAgbm9kZXMgPSBjb25zdHJ1Y3RQYXJlbnRzKG5vZGVzLCByb290TWluLCBwYXJlbnRTaXplKTtcbiAgICBwYXJlbnRTaXplICo9IDI7XG4gIH1cblxuICBpZiAobm9kZXMubGVuZ3RoICE9IDEpIHtcbiAgICBjb25zb2xlLmxvZyhub2Rlcyk7XG4gICAgY29uc29sZS5lcnJvcihcIlRoZXJlIGNhbiBvbmx5IGJlIG9uZSByb290IG5vZGUhXCIpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIG5vZGVzWzBdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb25zdHJ1Y3RUcmVlVXB3YXJkczsiLCJpbXBvcnQge3ZlYzMsIHZlYzR9IGZyb20gJ2dsLW1hdHJpeCc7XG5pbXBvcnQgQ29tcHV0ZUNvcm5lcnMgZnJvbSAnISFyYXctbG9hZGVyIS4vY29tcHV0ZS1jb3JuZXJzLndnc2wnO1xuaW1wb3J0IENvbXB1dGVQb3NpdGlvbnMgZnJvbSAnISFyYXctbG9hZGVyIS4vY29tcHV0ZS1wb3NpdGlvbnMud2dzbCc7XG5pbXBvcnQgQ29tcHV0ZVZveGVscyBmcm9tICchIXJhdy1sb2FkZXIhLi9jb21wdXRlLXZveGVscy53Z3NsJztcbmltcG9ydCBEZW5zaXR5IGZyb20gJyEhcmF3LWxvYWRlciEuL2RlbnNpdHkud2dzbCc7XG5cbmltcG9ydCBSYW5kb20gZnJvbSAnc2VlZHJhbmRvbSc7XG5pbXBvcnQgQ29udG91ckNlbGxzIGZyb20gJy4vY29udG91cmluZyc7XG5pbXBvcnQgQ29uc3RydWN0T2N0cmVlIGZyb20gJy4vb2N0cmVlJztcblxuY29uc3QgZ2VuZXJhdGVWZXJ0ZXhJbmRpY2VzID0gKG5vZGUsIHZlcnRpY2VzLCBub3JtYWxzLCBub2RlU2l6ZSkgPT4ge1xuICBpZiAobm9kZSA9PSBudWxsKVxuICAgIHJldHVybjtcblxuICBpZiAobm9kZS5zaXplID4gbm9kZVNpemUpIHtcbiAgICBpZiAobm9kZS50eXBlICE9PSAnbGVhZicpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgICAgIGdlbmVyYXRlVmVydGV4SW5kaWNlcyhub2RlLmNoaWxkcmVuW2ldLCB2ZXJ0aWNlcywgbm9ybWFscywgbm9kZVNpemUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChub2RlLnR5cGUgIT09ICdpbnRlcm5hbCcpIHtcbiAgICBjb25zdCBkID0gbm9kZS5kcmF3SW5mbztcbiAgICBpZiAoZCA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBcIkVycm9yISBDb3VsZCBub3QgYWRkIHZlcnRleCFcIjtcbiAgICB9XG5cbiAgICBkLmluZGV4ID0gdmVydGljZXMubGVuZ3RoIC8gMztcbiAgICB2ZXJ0aWNlcy5wdXNoKGQucG9zaXRpb25bMF0sIGQucG9zaXRpb25bMV0sIGQucG9zaXRpb25bMl0pO1xuICAgIG5vcm1hbHMucHVzaChkLmF2ZXJhZ2VOb3JtYWxbMF0sIGQuYXZlcmFnZU5vcm1hbFsxXSwgZC5hdmVyYWdlTm9ybWFsWzJdKTtcbiAgfVxufVxuXG5jb25zdCBjb21wdXRlVm94ZWxzID0gKHBvc2l0aW9uLCBzdHJpZGUsIHZveGVsQ291bnQsIGNvbXB1dGVkVm94ZWxzRGF0YSkgPT4ge1xuICBjb25zdCBjb21wdXRlZFZveGVscyA9IFtdO1xuXG4gIGlmICh2b3hlbENvdW50ID09PSAwKSB7XG4gICAgcmV0dXJuIHsgdmVydGljZXM6IFtdLCBub3JtYWxzOiBbXSwgaW5kaWNlczogW10gfTtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdm94ZWxDb3VudCAqIDEyOyBpICs9IDEyKSB7XG4gICAgaWYgKGNvbXB1dGVkVm94ZWxzRGF0YVtpICsgMTFdICE9PSAwKSB7XG4gICAgICBjb25zdCBsZWFmID0ge1xuICAgICAgICB0eXBlOiAnbGVhZicsXG4gICAgICAgIHNpemU6IHN0cmlkZSxcbiAgICAgICAgbWluOiB2ZWMzLmZyb21WYWx1ZXMoY29tcHV0ZWRWb3hlbHNEYXRhW2ldLCBjb21wdXRlZFZveGVsc0RhdGFbaSArIDFdLCBjb21wdXRlZFZveGVsc0RhdGFbaSArIDJdKSxcbiAgICAgICAgZHJhd0luZm86IHtcbiAgICAgICAgICBwb3NpdGlvbjogdmVjMy5mcm9tVmFsdWVzKGNvbXB1dGVkVm94ZWxzRGF0YVtpICsgNF0sIGNvbXB1dGVkVm94ZWxzRGF0YVtpICsgNV0sIGNvbXB1dGVkVm94ZWxzRGF0YVtpICsgNl0pLFxuICAgICAgICAgIGF2ZXJhZ2VOb3JtYWw6IHZlYzMuZnJvbVZhbHVlcyhjb21wdXRlZFZveGVsc0RhdGFbaSArIDhdLCBjb21wdXRlZFZveGVsc0RhdGFbaSArIDldLCBjb21wdXRlZFZveGVsc0RhdGFbaSArIDEwXSksXG4gICAgICAgICAgY29ybmVyczogY29tcHV0ZWRWb3hlbHNEYXRhW2kgKyAzXVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgY29tcHV0ZWRWb3hlbHMucHVzaChsZWFmKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCB0cmVlID0gQ29uc3RydWN0T2N0cmVlKGNvbXB1dGVkVm94ZWxzLCBwb3NpdGlvbiwgMzIgKiBzdHJpZGUpO1xuXG5cbiAgY29uc3QgdmVydGljZXMgPSBbXTtcbiAgY29uc3Qgbm9ybWFscyA9IFtdO1xuXG4gIGdlbmVyYXRlVmVydGV4SW5kaWNlcyh0cmVlLCB2ZXJ0aWNlcywgbm9ybWFscywgMSk7XG5cbiAgY29uc3QgaW5kaWNlcyA9IFtdO1xuICBDb250b3VyQ2VsbHModHJlZSwgaW5kaWNlcyk7XG5cbiAgcmV0dXJuIHtcbiAgICB2ZXJ0aWNlczogbmV3IEZsb2F0MzJBcnJheSh2ZXJ0aWNlcyksXG4gICAgbm9ybWFsczogbmV3IEZsb2F0MzJBcnJheShub3JtYWxzKSxcbiAgICBpbmRpY2VzOiBuZXcgVWludDE2QXJyYXkoaW5kaWNlcylcbiAgfTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWb3hlbCB7XG4gIHB1YmxpYyBydW5uaW5nOiBib29sZWFuO1xuXG4gIHByaXZhdGUgY29tcHV0ZVBpcGVsaW5lOiBHUFVDb21wdXRlUGlwZWxpbmU7XG4gIHByaXZhdGUgY29tcHV0ZUNvcm5lcnNQaXBlbGluZTogR1BVQ29tcHV0ZVBpcGVsaW5lO1xuICBwcml2YXRlIHVuaWZvcm1CdWZmZXI6IEdQVUJ1ZmZlcjtcbiAgcHJpdmF0ZSBjb3JuZXJNYXRlcmlhbHM6IEdQVUJ1ZmZlcjtcbiAgcHJpdmF0ZSBjb3JuZXJNYXRlcmlhbHNSZWFkOiBHUFVCdWZmZXI7XG4gIHByaXZhdGUgdm94ZWxNYXRlcmlhbHNCdWZmZXI6IEdQVUJ1ZmZlcjtcbiAgcHJpdmF0ZSB2b3hlbE1hdGVyaWFsc0J1ZmZlclJlYWQ6IEdQVUJ1ZmZlcjtcbiAgcHJpdmF0ZSBjb3JuZXJJbmRleEJ1ZmZlcjogR1BVQnVmZmVyO1xuICBwcml2YXRlIGdwdVJlYWRCdWZmZXI6IEdQVUJ1ZmZlcjtcbiAgcHJpdmF0ZSBwZXJtdXRhdGlvbnNCdWZmZXI6IEdQVUJ1ZmZlcjtcbiAgcHJpdmF0ZSB2b3hlbHNCdWZmZXI6IEdQVUJ1ZmZlcjtcbiAgcHJpdmF0ZSBhY3RvcnNCdWZmZXI6IEdQVUJ1ZmZlcjtcbiAgcHJpdmF0ZSBjb21wdXRlQmluZEdyb3VwOiBHUFVCaW5kR3JvdXA7XG4gIHByaXZhdGUgY29tcHV0ZUNvcm5lcnNCaW5kR3JvdXA6IEdQVUJpbmRHcm91cDtcbiAgcHJpdmF0ZSBjb21wdXRlUG9zaXRpb25zUGlwZWxpbmU6IEdQVUNvbXB1dGVQaXBlbGluZTtcbiAgcHJpdmF0ZSBjb21wdXRlUG9zaXRpb25zQmluZEdyb3VwOiBHUFVCaW5kR3JvdXA7XG4gIHByaXZhdGUgY29tcHV0ZVZveGVsc1BpcGVsaW5lOiBHUFVDb21wdXRlUGlwZWxpbmU7XG4gIHByaXZhdGUgY29tcHV0ZVZveGVsc0JpbmRHcm91cDogR1BVQmluZEdyb3VwO1xuICBwcml2YXRlIHZveGVsUmVhZEJ1ZmZlcjogR1BVQnVmZmVyO1xuICBwcml2YXRlIGF1Z21lbnRhdGlvbkJ1ZmZlcjogR1BVQnVmZmVyO1xuICBwcml2YXRlIGRlbnNpdHlCaW5kR3JvdXA6IEdQVUJpbmRHcm91cDtcbiAgcHJpdmF0ZSBtYWluRGVuc2l0eUJpbmRHcm91cDogR1BVQmluZEdyb3VwO1xuXG4gIGFzeW5jIGluaXQoZGV2aWNlOiBHUFVEZXZpY2UpIHtcbiAgICBjb25zdCBjb21wdXRlVm94ZWxzQ29kZSA9IENvbXB1dGVWb3hlbHMucmVwbGFjZShcIiNpbXBvcnQgZGVuc2l0eVwiLCBEZW5zaXR5KTtcbiAgICBjb25zdCBzdGFydCA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIGNvbnNvbGUubG9nKCdTdGFydCBsb2FkaW5nIHZveGVsIGVuZ2luZScsIHBlcmZvcm1hbmNlLm5vdygpIC0gc3RhcnQpO1xuXG4gICAgY29uc3QgbW9kdWxlID0gZGV2aWNlLmNyZWF0ZVNoYWRlck1vZHVsZSh7XG4gICAgICBjb2RlOiBjb21wdXRlVm94ZWxzQ29kZSxcbiAgICB9KTtcblxuICAgIHRoaXMuY29tcHV0ZVBpcGVsaW5lID0gYXdhaXQgZGV2aWNlLmNyZWF0ZUNvbXB1dGVQaXBlbGluZUFzeW5jKHtcbiAgICAgIGxheW91dDogJ2F1dG8nLFxuICAgICAgY29tcHV0ZToge1xuICAgICAgICBtb2R1bGUsXG4gICAgICAgIGVudHJ5UG9pbnQ6ICdjb21wdXRlTWF0ZXJpYWxzJyxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICAvL2NvbnNvbGUubG9nKCcxMCcsIHBlcmZvcm1hbmNlLm5vdygpIC0gc3RhcnQpO1xuXG4gICAgdGhpcy5jb21wdXRlQ29ybmVyc1BpcGVsaW5lID0gYXdhaXQgZGV2aWNlLmNyZWF0ZUNvbXB1dGVQaXBlbGluZUFzeW5jKHtcbiAgICAgIGxheW91dDogJ2F1dG8nLFxuICAgICAgY29tcHV0ZToge1xuICAgICAgICBtb2R1bGU6IGRldmljZS5jcmVhdGVTaGFkZXJNb2R1bGUoe1xuICAgICAgICAgIGNvZGU6IENvbXB1dGVDb3JuZXJzXG4gICAgICAgIH0pLFxuICAgICAgICBlbnRyeVBvaW50OiAnbWFpbicsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgY29uc3QgdW5pZm9ybUJ1ZmZlclNpemUgPSA0ICogNTtcbiAgICB0aGlzLnVuaWZvcm1CdWZmZXIgPSBkZXZpY2UuY3JlYXRlQnVmZmVyKHtcbiAgICAgIHNpemU6IHVuaWZvcm1CdWZmZXJTaXplLFxuICAgICAgdXNhZ2U6IEdQVUJ1ZmZlclVzYWdlLlVOSUZPUk0gfCBHUFVCdWZmZXJVc2FnZS5DT1BZX0RTVCxcbiAgICB9KTtcblxuICAgIHRoaXMuY29ybmVyTWF0ZXJpYWxzID0gZGV2aWNlLmNyZWF0ZUJ1ZmZlcih7XG4gICAgICBzaXplOiBVaW50MzJBcnJheS5CWVRFU19QRVJfRUxFTUVOVCAqIDMzICogMzMgKiAzMyxcbiAgICAgIHVzYWdlOiBHUFVCdWZmZXJVc2FnZS5TVE9SQUdFIHwgR1BVQnVmZmVyVXNhZ2UuQ09QWV9TUkMsXG4gICAgICBtYXBwZWRBdENyZWF0aW9uOiBmYWxzZSxcbiAgICB9KTtcblxuXG5cbiAgICB0aGlzLmNvcm5lck1hdGVyaWFsc1JlYWQgPSBkZXZpY2UuY3JlYXRlQnVmZmVyKHtcbiAgICAgIHNpemU6IFVpbnQzMkFycmF5LkJZVEVTX1BFUl9FTEVNRU5UICogMzMgKiAzMyAqIDMzLFxuICAgICAgdXNhZ2U6IEdQVUJ1ZmZlclVzYWdlLkNPUFlfRFNUIHwgR1BVQnVmZmVyVXNhZ2UuTUFQX1JFQUQsXG4gICAgfSk7XG5cbiAgICB0aGlzLnZveGVsTWF0ZXJpYWxzQnVmZmVyID0gZGV2aWNlLmNyZWF0ZUJ1ZmZlcih7XG4gICAgICBzaXplOiBVaW50MzJBcnJheS5CWVRFU19QRVJfRUxFTUVOVCAqIDMyICogMzIgKiAzMixcbiAgICAgIHVzYWdlOiBHUFVCdWZmZXJVc2FnZS5TVE9SQUdFIHwgR1BVQnVmZmVyVXNhZ2UuQ09QWV9TUkMsXG4gICAgICBtYXBwZWRBdENyZWF0aW9uOiBmYWxzZSxcbiAgICB9KTtcblxuICAgIHRoaXMudm94ZWxNYXRlcmlhbHNCdWZmZXJSZWFkID0gZGV2aWNlLmNyZWF0ZUJ1ZmZlcih7XG4gICAgICBzaXplOiBVaW50MzJBcnJheS5CWVRFU19QRVJfRUxFTUVOVCAqIDMyICogMzIgKiAzMixcbiAgICAgIHVzYWdlOiBHUFVCdWZmZXJVc2FnZS5DT1BZX0RTVCB8IEdQVUJ1ZmZlclVzYWdlLk1BUF9SRUFELFxuICAgIH0pO1xuXG4gICAgdGhpcy5jb3JuZXJJbmRleEJ1ZmZlciA9IGRldmljZS5jcmVhdGVCdWZmZXIoe1xuICAgICAgc2l6ZTogVWludDMyQXJyYXkuQllURVNfUEVSX0VMRU1FTlQgKyBVaW50MzJBcnJheS5CWVRFU19QRVJfRUxFTUVOVCAqIDMyICogMzIgKiAzMixcbiAgICAgIHVzYWdlOiBHUFVCdWZmZXJVc2FnZS5TVE9SQUdFIHwgR1BVQnVmZmVyVXNhZ2UuQ09QWV9TUkMsXG4gICAgICBtYXBwZWRBdENyZWF0aW9uOiBmYWxzZSxcbiAgICB9KTtcblxuICAgIHRoaXMuZ3B1UmVhZEJ1ZmZlciA9IGRldmljZS5jcmVhdGVCdWZmZXIoe1xuICAgICAgc2l6ZTogVWludDMyQXJyYXkuQllURVNfUEVSX0VMRU1FTlQsXG4gICAgICB1c2FnZTogR1BVQnVmZmVyVXNhZ2UuQ09QWV9EU1QgfCBHUFVCdWZmZXJVc2FnZS5NQVBfUkVBRFxuICAgIH0pO1xuXG4gICAgY29uc3QgcGVybXV0YXRpb25zID0gbmV3IEludDMyQXJyYXkoNTEyKTtcblxuICAgIGNvbnN0IHJhbmRvbSA9IG5ldyBSYW5kb20oNjQ1Mik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyNTY7IGkrKylcbiAgICAgIHBlcm11dGF0aW9uc1tpXSA9ICgyNTYgKiAocmFuZG9tKCkpKTtcblxuICAgIGZvciAobGV0IGkgPSAyNTY7IGkgPCA1MTI7IGkrKylcbiAgICAgIHBlcm11dGF0aW9uc1tpXSA9IHBlcm11dGF0aW9uc1tpIC0gMjU2XTtcblxuICAgIHRoaXMucGVybXV0YXRpb25zQnVmZmVyID0gZGV2aWNlLmNyZWF0ZUJ1ZmZlcih7XG4gICAgICBzaXplOiBwZXJtdXRhdGlvbnMuYnl0ZUxlbmd0aCxcbiAgICAgIHVzYWdlOiBHUFVCdWZmZXJVc2FnZS5TVE9SQUdFIHwgR1BVQnVmZmVyVXNhZ2UuQ09QWV9EU1QsXG4gICAgICBtYXBwZWRBdENyZWF0aW9uOiB0cnVlLFxuICAgIH0pO1xuXG4gICAgbmV3IEludDMyQXJyYXkodGhpcy5wZXJtdXRhdGlvbnNCdWZmZXIuZ2V0TWFwcGVkUmFuZ2UoKSkuc2V0KFxuICAgICAgcGVybXV0YXRpb25zXG4gICAgKTtcbiAgICB0aGlzLnBlcm11dGF0aW9uc0J1ZmZlci51bm1hcCgpO1xuXG4gICAgdGhpcy52b3hlbHNCdWZmZXIgPSBkZXZpY2UuY3JlYXRlQnVmZmVyKHtcbiAgICAgIHNpemU6IEZsb2F0MzJBcnJheS5CWVRFU19QRVJfRUxFTUVOVCAqIDEyICogMzIgKiAzMiAqIDMyLFxuICAgICAgdXNhZ2U6IEdQVUJ1ZmZlclVzYWdlLlNUT1JBR0UgfCBHUFVCdWZmZXJVc2FnZS5DT1BZX1NSQyxcbiAgICAgIG1hcHBlZEF0Q3JlYXRpb246IGZhbHNlLFxuICAgIH0pO1xuXG4gICAgdGhpcy5hY3RvcnNCdWZmZXIgPSBkZXZpY2UuY3JlYXRlQnVmZmVyKHtcbiAgICAgIHNpemU6IEZsb2F0MzJBcnJheS5CWVRFU19QRVJfRUxFTUVOVCAqIDgsXG4gICAgICB1c2FnZTogR1BVQnVmZmVyVXNhZ2UuU1RPUkFHRSB8IEdQVUJ1ZmZlclVzYWdlLkNPUFlfU1JDLFxuICAgICAgbWFwcGVkQXRDcmVhdGlvbjogZmFsc2UsXG4gICAgfSk7XG5cbiAgICAvL2NvbnNvbGUubG9nKCcyMCcsIHBlcmZvcm1hbmNlLm5vdygpIC0gc3RhcnQpO1xuXG4gICAgdGhpcy5jb21wdXRlQmluZEdyb3VwID0gZGV2aWNlLmNyZWF0ZUJpbmRHcm91cCh7XG4gICAgICBsYXlvdXQ6IHRoaXMuY29tcHV0ZVBpcGVsaW5lLmdldEJpbmRHcm91cExheW91dCgwKSxcbiAgICAgIGVudHJpZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGJpbmRpbmc6IDEsXG4gICAgICAgICAgcmVzb3VyY2U6IHtcbiAgICAgICAgICAgIGJ1ZmZlcjogdGhpcy5jb3JuZXJNYXRlcmlhbHNcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuXG4gICAgICAgIHtcbiAgICAgICAgICBiaW5kaW5nOiA1LFxuICAgICAgICAgIHJlc291cmNlOiB7XG4gICAgICAgICAgICBidWZmZXI6IHRoaXMudW5pZm9ybUJ1ZmZlclxuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9KTtcblxuICAgIC8vY29uc29sZS5sb2coJzIxJywgcGVyZm9ybWFuY2Uubm93KCkgLSBzdGFydCk7XG5cbiAgICB0aGlzLmNvbXB1dGVDb3JuZXJzQmluZEdyb3VwID0gZGV2aWNlLmNyZWF0ZUJpbmRHcm91cCh7XG4gICAgICBsYXlvdXQ6IHRoaXMuY29tcHV0ZUNvcm5lcnNQaXBlbGluZS5nZXRCaW5kR3JvdXBMYXlvdXQoMCksXG4gICAgICBlbnRyaWVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBiaW5kaW5nOiAxLFxuICAgICAgICAgIHJlc291cmNlOiB7XG4gICAgICAgICAgICBidWZmZXI6IHRoaXMuY29ybmVyTWF0ZXJpYWxzXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGJpbmRpbmc6IDIsXG4gICAgICAgICAgcmVzb3VyY2U6IHtcbiAgICAgICAgICAgIGJ1ZmZlcjogdGhpcy52b3hlbE1hdGVyaWFsc0J1ZmZlclxuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9KTtcblxuICAgIHRoaXMuY29tcHV0ZVBvc2l0aW9uc1BpcGVsaW5lID0gYXdhaXQgZGV2aWNlLmNyZWF0ZUNvbXB1dGVQaXBlbGluZUFzeW5jKHtcbiAgICAgIGxheW91dDogJ2F1dG8nLFxuICAgICAgY29tcHV0ZToge1xuICAgICAgICBtb2R1bGU6IGRldmljZS5jcmVhdGVTaGFkZXJNb2R1bGUoe1xuICAgICAgICAgIGNvZGU6IENvbXB1dGVQb3NpdGlvbnMsXG4gICAgICAgIH0pLFxuICAgICAgICBlbnRyeVBvaW50OiAnbWFpbicsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgLy9jb25zb2xlLmxvZygnMzAnLCBwZXJmb3JtYW5jZS5ub3coKSAtIHN0YXJ0KTtcblxuXG4gICAgdGhpcy5jb21wdXRlUG9zaXRpb25zQmluZEdyb3VwID0gZGV2aWNlLmNyZWF0ZUJpbmRHcm91cCh7XG4gICAgICBsYXlvdXQ6IHRoaXMuY29tcHV0ZVBvc2l0aW9uc1BpcGVsaW5lLmdldEJpbmRHcm91cExheW91dCgwKSxcbiAgICAgIGVudHJpZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGJpbmRpbmc6IDIsXG4gICAgICAgICAgcmVzb3VyY2U6IHtcbiAgICAgICAgICAgIGJ1ZmZlcjogdGhpcy52b3hlbE1hdGVyaWFsc0J1ZmZlclxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBiaW5kaW5nOiAzLFxuICAgICAgICAgIHJlc291cmNlOiB7XG4gICAgICAgICAgICBidWZmZXI6IHRoaXMuY29ybmVySW5kZXhCdWZmZXJcbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSk7XG5cbiAgICAvL2NvbnNvbGUubG9nKCczMScsIHBlcmZvcm1hbmNlLm5vdygpIC0gc3RhcnQpO1xuXG4gICAgLy9jb25zb2xlLmxvZygnMzEuNScsIHBlcmZvcm1hbmNlLm5vdygpIC0gc3RhcnQpO1xuICAgIHRoaXMuY29tcHV0ZVZveGVsc1BpcGVsaW5lID0gYXdhaXQgZGV2aWNlLmNyZWF0ZUNvbXB1dGVQaXBlbGluZUFzeW5jKHtcbiAgICAgIGxheW91dDogJ2F1dG8nLFxuICAgICAgY29tcHV0ZToge1xuICAgICAgICBtb2R1bGUsXG4gICAgICAgIGVudHJ5UG9pbnQ6ICdtYWluJyxcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vY29uc29sZS5sb2coJzMyJywgcGVyZm9ybWFuY2Uubm93KCkgLSBzdGFydCk7XG5cblxuICAgIHRoaXMuY29tcHV0ZVZveGVsc0JpbmRHcm91cCA9IGRldmljZS5jcmVhdGVCaW5kR3JvdXAoe1xuICAgICAgbGF5b3V0OiB0aGlzLmNvbXB1dGVWb3hlbHNQaXBlbGluZS5nZXRCaW5kR3JvdXBMYXlvdXQoMCksXG4gICAgICBlbnRyaWVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBiaW5kaW5nOiAyLFxuICAgICAgICAgIHJlc291cmNlOiB7XG4gICAgICAgICAgICBidWZmZXI6IHRoaXMudm94ZWxNYXRlcmlhbHNCdWZmZXJcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYmluZGluZzogMyxcbiAgICAgICAgICByZXNvdXJjZToge1xuICAgICAgICAgICAgYnVmZmVyOiB0aGlzLmNvcm5lckluZGV4QnVmZmVyXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGJpbmRpbmc6IDQsXG4gICAgICAgICAgcmVzb3VyY2U6IHtcbiAgICAgICAgICAgIGJ1ZmZlcjogdGhpcy52b3hlbHNCdWZmZXJcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYmluZGluZzogNSxcbiAgICAgICAgICByZXNvdXJjZToge1xuICAgICAgICAgICAgYnVmZmVyOiB0aGlzLnVuaWZvcm1CdWZmZXJcbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSk7XG5cbiAgICAvL2NvbnNvbGUubG9nKCc0MCcsIHBlcmZvcm1hbmNlLm5vdygpIC0gc3RhcnQpO1xuXG5cbiAgICB0aGlzLnZveGVsUmVhZEJ1ZmZlciA9IGRldmljZS5jcmVhdGVCdWZmZXIoe1xuICAgICAgc2l6ZTogRmxvYXQzMkFycmF5LkJZVEVTX1BFUl9FTEVNRU5UICogMTIgKiAzMiAqIDMyICogMzIsXG4gICAgICB1c2FnZTogR1BVQnVmZmVyVXNhZ2UuQ09QWV9EU1QgfCBHUFVCdWZmZXJVc2FnZS5NQVBfUkVBRFxuICAgIH0pO1xuXG4gICAgY29uc3QgYXVnbWVudGF0aW9uU2l6ZSA9IDQgKiA0ICsgNCAqIDQ7XG4gICAgdGhpcy5hdWdtZW50YXRpb25CdWZmZXIgPSBkZXZpY2UuY3JlYXRlQnVmZmVyKHtcbiAgICAgIHNpemU6IGF1Z21lbnRhdGlvblNpemUsXG4gICAgICB1c2FnZTogR1BVQnVmZmVyVXNhZ2UuU1RPUkFHRSB8IEdQVUJ1ZmZlclVzYWdlLkNPUFlfRFNULFxuICAgICAgbWFwcGVkQXRDcmVhdGlvbjogdHJ1ZVxuICAgIH0pO1xuXG4gICAgY29uc3QgYXVnbWVudGF0aW9ucyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5hdWdtZW50YXRpb25CdWZmZXIuZ2V0TWFwcGVkUmFuZ2UoKSk7XG4gICAgYXVnbWVudGF0aW9uc1swXSA9IDIyMDAwMDAuMDtcblxuICAgIHRoaXMuYXVnbWVudGF0aW9uQnVmZmVyLnVubWFwKCk7XG5cbiAgICB0aGlzLmRlbnNpdHlCaW5kR3JvdXAgPSBkZXZpY2UuY3JlYXRlQmluZEdyb3VwKHtcbiAgICAgIGxheW91dDogdGhpcy5jb21wdXRlUGlwZWxpbmUuZ2V0QmluZEdyb3VwTGF5b3V0KDEpLFxuICAgICAgZW50cmllczogW1xuICAgICAgICB7XG4gICAgICAgICAgYmluZGluZzogMCxcbiAgICAgICAgICByZXNvdXJjZToge1xuICAgICAgICAgICAgYnVmZmVyOiB0aGlzLmF1Z21lbnRhdGlvbkJ1ZmZlcixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KTtcblxuICAgIHRoaXMubWFpbkRlbnNpdHlCaW5kR3JvdXAgPSBkZXZpY2UuY3JlYXRlQmluZEdyb3VwKHtcbiAgICAgIGxheW91dDogdGhpcy5jb21wdXRlVm94ZWxzUGlwZWxpbmUuZ2V0QmluZEdyb3VwTGF5b3V0KDEpLFxuICAgICAgZW50cmllczogW1xuICAgICAgICB7XG4gICAgICAgICAgYmluZGluZzogMCxcbiAgICAgICAgICByZXNvdXJjZToge1xuICAgICAgICAgICAgYnVmZmVyOiB0aGlzLmF1Z21lbnRhdGlvbkJ1ZmZlcixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KTtcblxuICAgIGNvbnNvbGUubG9nKCdEb25lJywgcGVyZm9ybWFuY2Uubm93KCkgLSBzdGFydCk7XG4gIH1cblxuICBnZW5lcmF0ZShkZXZpY2UsIHF1ZXVlLCBwb3NpdGlvbiwgc3RyaWRlKSA6IFByb21pc2U8YW55PiB7XG4gICAgaWYgKCFzdHJpZGUpIHN0cmlkZSA9IDE7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIF8pID0+IHtcblxuICAgICAgY29uc3QgcGVybXV0YXRpb25zID0gbmV3IEludDMyQXJyYXkoNTEyKTtcblxuICAgICAgY29uc3QgcmFuZG9tID0gbmV3IFJhbmRvbSgnSmFtZXMnKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjU2OyBpKyspXG4gICAgICAgIHBlcm11dGF0aW9uc1tpXSA9ICgyNTYgKiAocmFuZG9tKCkpKTtcblxuICAgICAgZm9yIChsZXQgaSA9IDI1NjsgaSA8IDUxMjsgaSsrKVxuICAgICAgICBwZXJtdXRhdGlvbnNbaV0gPSBwZXJtdXRhdGlvbnNbaSAtIDI1Nl07XG5cbiAgICAgIGRldmljZS5xdWV1ZS53cml0ZUJ1ZmZlcihcbiAgICAgICAgICB0aGlzLnBlcm11dGF0aW9uc0J1ZmZlcixcbiAgICAgICAgICAwLFxuICAgICAgICAgIHBlcm11dGF0aW9ucy5idWZmZXIsXG4gICAgICAgICAgcGVybXV0YXRpb25zLmJ5dGVPZmZzZXQsXG4gICAgICAgICAgcGVybXV0YXRpb25zLmJ5dGVMZW5ndGhcbiAgICAgICk7XG5cbiAgICAgIHZhciBidWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoNCAqIDUpO1xuICAgICAgY29uc3QgdW5pZm9ybSA9IG5ldyBGbG9hdDMyQXJyYXkoYnVmZmVyLCAwLCA0KTtcbiAgICAgIHVuaWZvcm0uc2V0KHBvc2l0aW9uLCAwKTtcbiAgICAgIHVuaWZvcm1bM10gPSBzdHJpZGU7XG5cbiAgICAgIG5ldyBVaW50MzJBcnJheShidWZmZXIsIDE2LCAxKVswXSA9IDMzO1xuXG4gICAgICBkZXZpY2UucXVldWUud3JpdGVCdWZmZXIoXG4gICAgICAgICAgdGhpcy51bmlmb3JtQnVmZmVyLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgYnVmZmVyLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgYnVmZmVyLmJ5dGVMZW5ndGhcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IGNvbXB1dGVFbmNvZGVyID0gZGV2aWNlLmNyZWF0ZUNvbW1hbmRFbmNvZGVyKCk7XG4gICAgICBjb25zdCBvY3RyZWVTaXplID0gMzI7XG4gICAgICBjb25zdCBjb21wdXRlUGFzc0VuY29kZXIgPSBjb21wdXRlRW5jb2Rlci5iZWdpbkNvbXB1dGVQYXNzKCk7XG4gICAgICBjb21wdXRlUGFzc0VuY29kZXIuc2V0UGlwZWxpbmUodGhpcy5jb21wdXRlUGlwZWxpbmUpO1xuICAgICAgY29tcHV0ZVBhc3NFbmNvZGVyLnNldEJpbmRHcm91cCgwLCB0aGlzLmNvbXB1dGVCaW5kR3JvdXApO1xuICAgICAgY29tcHV0ZVBhc3NFbmNvZGVyLnNldEJpbmRHcm91cCgxLCB0aGlzLmRlbnNpdHlCaW5kR3JvdXApO1xuICAgICAgY29tcHV0ZVBhc3NFbmNvZGVyLmRpc3BhdGNoV29ya2dyb3VwcyhvY3RyZWVTaXplICsgMSwgb2N0cmVlU2l6ZSArIDEsIG9jdHJlZVNpemUgKyAxKTtcbiAgICAgIGNvbXB1dGVQYXNzRW5jb2Rlci5lbmQoKTtcblxuICAgICAgY29uc3QgY29tcHV0ZUNvcm5lcnNQYXNzID0gY29tcHV0ZUVuY29kZXIuYmVnaW5Db21wdXRlUGFzcygpO1xuICAgICAgY29tcHV0ZUNvcm5lcnNQYXNzLnNldFBpcGVsaW5lKHRoaXMuY29tcHV0ZUNvcm5lcnNQaXBlbGluZSk7XG4gICAgICBjb21wdXRlQ29ybmVyc1Bhc3Muc2V0QmluZEdyb3VwKDAsIHRoaXMuY29tcHV0ZUNvcm5lcnNCaW5kR3JvdXApO1xuICAgICAgY29tcHV0ZUNvcm5lcnNQYXNzLmRpc3BhdGNoV29ya2dyb3VwcyhvY3RyZWVTaXplLCBvY3RyZWVTaXplLCBvY3RyZWVTaXplKTtcbiAgICAgIGNvbXB1dGVDb3JuZXJzUGFzcy5lbmQoKTtcblxuICAgICAgY29uc3QgY29tcHV0ZVBvc2l0aW9uc1Bhc3MgPSBjb21wdXRlRW5jb2Rlci5iZWdpbkNvbXB1dGVQYXNzKCk7XG4gICAgICBjb21wdXRlUG9zaXRpb25zUGFzcy5zZXRQaXBlbGluZSh0aGlzLmNvbXB1dGVQb3NpdGlvbnNQaXBlbGluZSk7XG4gICAgICBjb21wdXRlUG9zaXRpb25zUGFzcy5zZXRCaW5kR3JvdXAoMCwgdGhpcy5jb21wdXRlUG9zaXRpb25zQmluZEdyb3VwKTtcbiAgICAgIGNvbXB1dGVQb3NpdGlvbnNQYXNzLmRpc3BhdGNoV29ya2dyb3VwcygxKTtcbiAgICAgIGNvbXB1dGVQb3NpdGlvbnNQYXNzLmVuZCgpO1xuXG4gICAgICBjb25zdCBjb3B5RW5jb2RlciA9IGRldmljZS5jcmVhdGVDb21tYW5kRW5jb2RlcigpO1xuICAgICAgY29weUVuY29kZXIuY29weUJ1ZmZlclRvQnVmZmVyKFxuICAgICAgICAgIHRoaXMuY29ybmVySW5kZXhCdWZmZXIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICB0aGlzLmdwdVJlYWRCdWZmZXIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICBVaW50MzJBcnJheS5CWVRFU19QRVJfRUxFTUVOVFxuICAgICAgKTtcblxuICAgICAgY29weUVuY29kZXIuY29weUJ1ZmZlclRvQnVmZmVyKFxuICAgICAgICAgIHRoaXMuY29ybmVyTWF0ZXJpYWxzLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgdGhpcy5jb3JuZXJNYXRlcmlhbHNSZWFkLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgVWludDMyQXJyYXkuQllURVNfUEVSX0VMRU1FTlQgKiAzMyAqIDMzICogMzNcbiAgICAgICk7XG5cbiAgICAgIGNvcHlFbmNvZGVyLmNvcHlCdWZmZXJUb0J1ZmZlcihcbiAgICAgICAgICB0aGlzLnZveGVsTWF0ZXJpYWxzQnVmZmVyLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgdGhpcy52b3hlbE1hdGVyaWFsc0J1ZmZlclJlYWQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICBVaW50MzJBcnJheS5CWVRFU19QRVJfRUxFTUVOVCAqIDMyICogMzIgKiAzMlxuICAgICAgKTtcblxuICAgICAgcXVldWUoe1xuICAgICAgICBpdGVtczogW2NvbXB1dGVFbmNvZGVyLmZpbmlzaCgpLCBjb3B5RW5jb2Rlci5maW5pc2goKV0sXG4gICAgICAgIGNhbGxiYWNrOiBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgYXdhaXQgdGhpcy5jb3JuZXJNYXRlcmlhbHNSZWFkLm1hcEFzeW5jKEdQVU1hcE1vZGUuUkVBRCk7XG4gICAgICAgICAgY29uc3QgY29ybmVycyA9IG5ldyBVaW50MzJBcnJheSh0aGlzLmNvcm5lck1hdGVyaWFsc1JlYWQuZ2V0TWFwcGVkUmFuZ2UoKSkuc2xpY2UoKTtcbiAgICAgICAgICB0aGlzLmNvcm5lck1hdGVyaWFsc1JlYWQudW5tYXAoKTtcblxuICAgICAgICAgIGF3YWl0IHRoaXMuZ3B1UmVhZEJ1ZmZlci5tYXBBc3luYyhHUFVNYXBNb2RlLlJFQUQpO1xuXG4gICAgICAgICAgY29uc3QgYXJyYXlCdWZmZXIgPSB0aGlzLmdwdVJlYWRCdWZmZXIuZ2V0TWFwcGVkUmFuZ2UoKTtcbiAgICAgICAgICBjb25zdCB2b3hlbENvdW50ID0gbmV3IFVpbnQzMkFycmF5KGFycmF5QnVmZmVyKVswXTtcbiAgICAgICAgICB0aGlzLmdwdVJlYWRCdWZmZXIudW5tYXAoKTtcblxuICAgICAgICAgIGlmICh2b3hlbENvdW50ID09PSAwKSB7XG4gICAgICAgICAgICByZXNvbHZlKHt2ZXJ0aWNlczogbmV3IEZsb2F0MzJBcnJheSgpLCBub3JtYWxzOiBuZXcgRmxvYXQzMkFycmF5KCksIGluZGljZXM6IG5ldyBVaW50MTZBcnJheSgpLCBjb3JuZXJzOiBuZXcgVWludDMyQXJyYXkoKX0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGRpc3BhdGNoQ291bnQgPSBNYXRoLmNlaWwodm94ZWxDb3VudCAvIDEyOCk7XG4gICAgICAgICAgY29uc3QgY29tcHV0ZUVuY29kZXIgPSBkZXZpY2UuY3JlYXRlQ29tbWFuZEVuY29kZXIoKTtcbiAgICAgICAgICBjb25zdCBjb21wdXRlUGFzc0VuY29kZXIgPSBjb21wdXRlRW5jb2Rlci5iZWdpbkNvbXB1dGVQYXNzKCk7XG4gICAgICAgICAgY29tcHV0ZVBhc3NFbmNvZGVyLnNldFBpcGVsaW5lKHRoaXMuY29tcHV0ZVZveGVsc1BpcGVsaW5lKTtcbiAgICAgICAgICBjb21wdXRlUGFzc0VuY29kZXIuc2V0QmluZEdyb3VwKDAsIHRoaXMuY29tcHV0ZVZveGVsc0JpbmRHcm91cCk7XG4gICAgICAgICAgY29tcHV0ZVBhc3NFbmNvZGVyLnNldEJpbmRHcm91cCgxLCB0aGlzLm1haW5EZW5zaXR5QmluZEdyb3VwKTtcbiAgICAgICAgICBjb21wdXRlUGFzc0VuY29kZXIuZGlzcGF0Y2hXb3JrZ3JvdXBzKGRpc3BhdGNoQ291bnQpO1xuICAgICAgICAgIGNvbXB1dGVQYXNzRW5jb2Rlci5lbmQoKTtcblxuICAgICAgICAgIGNvbnN0IGNvcHlFbmNvZGVyID0gZGV2aWNlLmNyZWF0ZUNvbW1hbmRFbmNvZGVyKCk7XG4gICAgICAgICAgY29weUVuY29kZXIuY29weUJ1ZmZlclRvQnVmZmVyKFxuICAgICAgICAgICAgICB0aGlzLnZveGVsc0J1ZmZlcixcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgdGhpcy52b3hlbFJlYWRCdWZmZXIsXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIEZsb2F0MzJBcnJheS5CWVRFU19QRVJfRUxFTUVOVCAqIHZveGVsQ291bnQgKiAxMlxuICAgICAgICAgICk7XG5cblxuICAgICAgICAgIHF1ZXVlKHtcbiAgICAgICAgICAgIGl0ZW1zOiBbY29tcHV0ZUVuY29kZXIuZmluaXNoKCksIGNvcHlFbmNvZGVyLmZpbmlzaCgpXSxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgICAgICAgYXdhaXQgdGhpcy52b3hlbFJlYWRCdWZmZXIubWFwQXN5bmMoR1BVTWFwTW9kZS5SRUFEKTtcblxuICAgICAgICAgICAgICBjb25zdCBhcnJheUJ1ZmZlciA9IHRoaXMudm94ZWxSZWFkQnVmZmVyLmdldE1hcHBlZFJhbmdlKCk7XG4gICAgICAgICAgICAgIGNvbnN0IGNvbXB1dGVkVm94ZWxzRGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkoYXJyYXlCdWZmZXIpO1xuICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBjb21wdXRlVm94ZWxzKHBvc2l0aW9uLCBzdHJpZGUsIHZveGVsQ291bnQsIGNvbXB1dGVkVm94ZWxzRGF0YSk7XG5cbiAgICAgICAgICAgICAgdGhpcy52b3hlbFJlYWRCdWZmZXIudW5tYXAoKTtcblxuICAgICAgICAgICAgICByZXNvbHZlKHsuLi5yZXN1bHQsIGNvcm5lcnN9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn0iLCJleHBvcnQgaW50ZXJmYWNlIFdvcmxkR2VuZXJhdG9ySW5mbyB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICB6OiBudW1iZXI7XG4gIHN0cmlkZTogbnVtYmVyO1xuICBpdGVyYXRpb246IG51bWJlcjtcbiAgbGF5ZXI6IG51bWJlcjtcbiAgcHJldmlvdXNPZmZzZXQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIFdvcmxkUG9zaXRpb24ge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgejogbnVtYmVyO1xuICBzdHJpZGU6IG51bWJlcjtcblxuICBzdGF0aWMgZXF1YWwoYTogV29ybGRQb3NpdGlvbiwgYjogV29ybGRQb3NpdGlvbik6IGJvb2xlYW4ge1xuICAgIHJldHVybiBhLnN0cmlkZSA9PSBiLnN0cmlkZSAmJiBhLnggPT0gYi54ICYmIGEueSA9PSBiLnkgJiYgYS56ID09IGIuejtcbiAgfVxufVxuXG5pbnRlcmZhY2UgUG9pbnQge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgejogbnVtYmVyO1xufVxuXG5mdW5jdGlvbiBmaXhQb2ludChpOiBudW1iZXIpOiBudW1iZXIge1xuICBpZiAoaSA+PSAwKSByZXR1cm4gaSArIDE7XG4gIHJldHVybiBpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVQb2ludHMocmFkaXVzOiBudW1iZXIpOiBQb2ludFtdIHtcbiAgbGV0IHBvaW50czogUG9pbnRbXSA9IFtdO1xuXG4gIGxldCBkaWFtZXRlciA9IHJhZGl1cyAqIDI7XG5cbiAgZm9yIChsZXQgeCA9IDA7IHggPCBkaWFtZXRlcjsgeCsrKVxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgZGlhbWV0ZXI7IHkrKylcbiAgICAgIGZvciAobGV0IHogPSAwOyB6IDwgZGlhbWV0ZXI7IHorKykge1xuICAgICAgICBpZiAoISh4ID09PSAwIHx8IHggPT09IGRpYW1ldGVyIC0gMSB8fCB5ID09PSAwIHx8IHkgPT09IGRpYW1ldGVyIC0gMSB8fCB6ID09PSAwIHx8IHogPT09IGRpYW1ldGVyIC0gMSkpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcG9pbnQgPSB7XG4gICAgICAgICAgeDogZml4UG9pbnQoeCAtIHJhZGl1cyksXG4gICAgICAgICAgeTogZml4UG9pbnQoeSAtIHJhZGl1cyksXG4gICAgICAgICAgejogZml4UG9pbnQoeiAtIHJhZGl1cylcbiAgICAgICAgfTtcblxuICAgICAgICBwb2ludHMucHVzaChwb2ludCk7XG4gICAgICB9XG5cbiAgcmV0dXJuIHBvaW50cztcbn1cblxuY29uc3QgcG9pbnRzID0gW107XG5cbmZvciAobGV0IGkgPSAwOyBpIDw9IDY7IGkrKykge1xuICBwb2ludHNbaV0gPSBnZW5lcmF0ZVBvaW50cyhpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV29ybGRHZW5lcmF0b3Ige1xuICBwcml2YXRlIHJlYWRvbmx5IG1pblN0cmlkZTogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKG1pblN0cmlkZTogbnVtYmVyKSB7XG4gICAgdGhpcy5taW5TdHJpZGUgPSBtaW5TdHJpZGU7XG4gIH1cblxuICBpbml0KHg6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXIpOiBXb3JsZEdlbmVyYXRvckluZm8ge1xuICAgIHJldHVybiB7XG4gICAgICB4OiBNYXRoLnJvdW5kKHggLyB0aGlzLm1pblN0cmlkZSkgKiB0aGlzLm1pblN0cmlkZSxcbiAgICAgIHk6IE1hdGgucm91bmQoeSAvIHRoaXMubWluU3RyaWRlKSAqIHRoaXMubWluU3RyaWRlLFxuICAgICAgejogTWF0aC5yb3VuZCh6IC8gdGhpcy5taW5TdHJpZGUpICogdGhpcy5taW5TdHJpZGUsXG4gICAgICBzdHJpZGU6IHRoaXMubWluU3RyaWRlLFxuICAgICAgaXRlcmF0aW9uOiAwLFxuICAgICAgbGF5ZXI6IDEsXG4gICAgICBwcmV2aW91c09mZnNldDogLTEgKiB0aGlzLm1pblN0cmlkZSAvIDJcbiAgICB9O1xuICB9XG5cbiAgbGF5ZXJSYWRpdXMobGF5ZXI6IG51bWJlciwgc3RyaWRlOiBudW1iZXIpIHtcbiAgICBpZiAoc3RyaWRlID09PSB0aGlzLm1pblN0cmlkZSkge1xuICAgICAgcmV0dXJuIGxheWVyO1xuICAgIH1cbiAgICBpZiAoc3RyaWRlID09PSB0aGlzLm1pblN0cmlkZSAqIDIpIHtcbiAgICAgIHJldHVybiBsYXllciArIDE7XG4gICAgfVxuICAgIHJldHVybiBsYXllciArIDI7XG4gIH1cblxuICByYWRpdXMobGF5ZXI6IG51bWJlciwgc3RyaWRlOiBudW1iZXIsIHByZXZpb3VzT2Zmc2V0OiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLnNpZ24obGF5ZXIpICogKHByZXZpb3VzT2Zmc2V0ICsgKE1hdGguYWJzKGxheWVyKSAqIHN0cmlkZSkpO1xuICB9XG5cbiAgbGF5ZXJDb3VudChzdHJpZGU6IG51bWJlcik6IG51bWJlciB7XG4gICAgaWYgKHN0cmlkZSA9PSB0aGlzLm1pblN0cmlkZSAqIDIpXG4gICAgICByZXR1cm4gMztcbiAgICByZXR1cm4gMjtcbiAgfVxuXG4gIG5leHQoaW5mbzogV29ybGRHZW5lcmF0b3JJbmZvKTogW1dvcmxkUG9zaXRpb24sIFdvcmxkR2VuZXJhdG9ySW5mb10ge1xuICAgIGNvbnN0IG9mZnNldHMgPSBwb2ludHNbdGhpcy5sYXllclJhZGl1cyhpbmZvLmxheWVyLCBpbmZvLnN0cmlkZSldO1xuXG4gICAgY29uc3Qgb2Zmc2V0ID0gb2Zmc2V0c1tpbmZvLml0ZXJhdGlvbl07XG4gICAgY29uc3QgaGFsZlN0cmlkZSA9IGluZm8uc3RyaWRlIC8gMjtcblxuICAgIGxldCBpdGVyYXRpb24gPSBpbmZvLml0ZXJhdGlvbiArIDE7XG4gICAgbGV0IGxheWVyID0gaW5mby5sYXllcjtcbiAgICBsZXQgc3RyaWRlID0gaW5mby5zdHJpZGU7XG4gICAgbGV0IHByZXZpb3VzT2Zmc2V0ID0gaW5mby5wcmV2aW91c09mZnNldDtcblxuICAgIGlmIChpdGVyYXRpb24gPj0gb2Zmc2V0cy5sZW5ndGgpIHtcbiAgICAgIGl0ZXJhdGlvbiA9IDA7XG4gICAgICBsYXllcisrO1xuXG4gICAgICBjb25zdCBsYXllckNvdW50ID0gdGhpcy5sYXllckNvdW50KGluZm8uc3RyaWRlKTtcbiAgICAgIGlmIChsYXllciA+IGxheWVyQ291bnQpIHtcbiAgICAgICAgbGF5ZXIgPSAxO1xuICAgICAgICBzdHJpZGUgKj0gMjtcbiAgICAgICAgcHJldmlvdXNPZmZzZXQgPSB0aGlzLnJhZGl1cyhpbmZvLmxheWVyLCBpbmZvLnN0cmlkZSwgaW5mby5wcmV2aW91c09mZnNldCkgLSBpbmZvLnN0cmlkZSAvIDI7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBbXG4gICAgICB7XG4gICAgICAgIHg6IGluZm8uc3RyaWRlICogb2Zmc2V0LnggKyBpbmZvLnggLSBNYXRoLnNpZ24ob2Zmc2V0LngpICogaGFsZlN0cmlkZSxcbiAgICAgICAgeTogaW5mby5zdHJpZGUgKiBvZmZzZXQueSArIGluZm8ueSAtIE1hdGguc2lnbihvZmZzZXQueSkgKiBoYWxmU3RyaWRlLFxuICAgICAgICB6OiBpbmZvLnN0cmlkZSAqIG9mZnNldC56ICsgaW5mby56IC0gTWF0aC5zaWduKG9mZnNldC56KSAqIGhhbGZTdHJpZGUsXG4gICAgICAgIHN0cmlkZTogaW5mby5zdHJpZGVcbiAgICAgIH0sXG4gICAgICB7IC4uLmluZm8sIGl0ZXJhdGlvbiwgbGF5ZXIsIHN0cmlkZSwgcHJldmlvdXNPZmZzZXQgfVxuICAgIF07XG4gIH1cbn0iLCIvKiAoaWdub3JlZCkgKi8iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5hbWREID0gZnVuY3Rpb24gKCkge1xuXHR0aHJvdyBuZXcgRXJyb3IoJ2RlZmluZSBjYW5ub3QgYmUgdXNlZCBpbmRpcmVjdCcpO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmFtZE8gPSB7fTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanMhLi9zcmMvY29udG91cmluZy53b3JrZXIudHNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9