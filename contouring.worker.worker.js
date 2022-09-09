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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("const freq = 0.001;\n\nconst MATERIAL_AIR = 0u;\nconst MATERIAL_ROCK = 1u;\nconst MATERIAL_WOOD = 2u;\nconst MATERIAL_FIRE = 3u;\n\nstruct Density {\n  density: f32,\n  material: u32\n}\n\nfn subtract(base: Density, sub: f32) -> Density {\n  return Density(max(base.density, sub), base.material);\n}\n\nfn add(base: Density, add: f32, material: u32) -> Density {\n  if (add <= 0) {\n    return Density(add, material);\n  }\n  return base;\n}\n\nfn Box(worldPosition: vec3<f32>, origin: vec3<f32>, halfDimensions: vec3<f32>) -> f32\n{\n\tlet local_pos: vec3<f32> = worldPosition - origin;\n\tlet pos: vec3<f32> = local_pos;\n\n\tlet d: vec3<f32> = vec3<f32>(abs(pos.x), abs(pos.y), abs(pos.z)) - halfDimensions;\n\tlet m: f32 = max(d.x, max(d.y, d.z));\n\treturn clamp(min(m, length(max(d, vec3<f32>(0.0, 0.0, 0.0)))), -100.0, 100.0);\n}\n\nfn Torus(worldPosition: vec3<f32>, origin: vec3<f32>, t: vec3<f32>) -> f32\n{\n\tlet p: vec3<f32> = worldPosition - origin;\n\n  let q: vec2<f32> = vec2<f32>(length(p.xz)-t.x,p.y);\n  return length(q)-t.y;\n}\n\nfn Sphere(worldPosition: vec3<f32>, origin: vec3<f32>, radius: f32) -> f32\n{\n\treturn clamp(length(worldPosition - origin) - radius, -100.0, 100.0);\n}\n\nfn FractalNoise21(octaves: i32, frequency: f32, lacunarity: f32, persistence: f32, position: vec3<f32>) -> f32\n{\n\tlet SCALE: f32 = 1.0 / 128.0;\n\tvar p: vec3<f32> = position * SCALE;\n\tvar nois: f32 = 0.0;\n\n\tvar amplitude: f32 = 1.0;\n\tp = p * frequency;\n\n\tvar i: i32 = 0;\n\tloop {\n\t\tif (i >= octaves) { break; }\n\n\t\tnois = nois + perlinNoise3(p) * amplitude;\n\t\tp = p * lacunarity;\n\t\tamplitude = amplitude * persistence;\n\n\t\tcontinuing {\n\t\t\ti = i + 1;\n\t\t}\n\t}\n\n\treturn nois;\n}\n\nfn FractalNoise2(frequency: f32, lacunarity: f32, persistence: f32, position: vec3<f32>) -> f32\n{\n\tlet SCALE: f32 = 1.0 / 128.0;\n\tvar p: vec3<f32> = position * SCALE;\n\tvar nois: f32 = 0.0;\n\n\tvar amplitude: f32 = 1.0;\n\tp = p * frequency;\n\n\tnois = nois + perlinNoise3(p) * amplitude;\n\tp = p * lacunarity;\n\tamplitude = amplitude * persistence;\n\n\treturn nois;\n}\n\nfn permute41(x: vec4<f32>) -> vec4<f32> { return ((x * 34. + 1.) * x) % vec4<f32>(289.); }\nfn taylorInvSqrt4(r: vec4<f32>) -> vec4<f32> { return 1.79284291400159 - 0.85373472095314 * r; }\nfn fade3(t: vec3<f32>) -> vec3<f32> { return t * t * t * (t * (t * 6. - 15.) + 10.); }\n\nfn perlinNoise3(P: vec3<f32>) -> f32 {\n  var Pi0 : vec3<f32> = floor(P); // Integer part for indexing\n  var Pi1 : vec3<f32> = Pi0 + vec3<f32>(1.); // Integer part + 1\n  Pi0 = Pi0 % vec3<f32>(289.);\n  Pi1 = Pi1 % vec3<f32>(289.);\n  let Pf0 = fract(P); // Fractional part for interpolation\n  let Pf1 = Pf0 - vec3<f32>(1.); // Fractional part - 1.\n  let ix = vec4<f32>(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  let iy = vec4<f32>(Pi0.yy, Pi1.yy);\n  let iz0 = Pi0.zzzz;\n  let iz1 = Pi1.zzzz;\n\n  let ixy = permute41(permute41(ix) + iy);\n  let ixy0 = permute41(ixy + iz0);\n  let ixy1 = permute41(ixy + iz1);\n\n  var gx0: vec4<f32> = ixy0 / 7.;\n  var gy0: vec4<f32> = fract(floor(gx0) / 7.) - 0.5;\n  gx0 = fract(gx0);\n  var gz0: vec4<f32> = vec4<f32>(0.5) - abs(gx0) - abs(gy0);\n  var sz0: vec4<f32> = step(gz0, vec4<f32>(0.));\n  gx0 = gx0 + sz0 * (step(vec4<f32>(0.), gx0) - 0.5);\n  gy0 = gy0 + sz0 * (step(vec4<f32>(0.), gy0) - 0.5);\n\n  var gx1: vec4<f32> = ixy1 / 7.;\n  var gy1: vec4<f32> = fract(floor(gx1) / 7.) - 0.5;\n  gx1 = fract(gx1);\n  var gz1: vec4<f32> = vec4<f32>(0.5) - abs(gx1) - abs(gy1);\n  var sz1: vec4<f32> = step(gz1, vec4<f32>(0.));\n  gx1 = gx1 - sz1 * (step(vec4<f32>(0.), gx1) - 0.5);\n  gy1 = gy1 - sz1 * (step(vec4<f32>(0.), gy1) - 0.5);\n\n  var g000: vec3<f32> = vec3<f32>(gx0.x, gy0.x, gz0.x);\n  var g100: vec3<f32> = vec3<f32>(gx0.y, gy0.y, gz0.y);\n  var g010: vec3<f32> = vec3<f32>(gx0.z, gy0.z, gz0.z);\n  var g110: vec3<f32> = vec3<f32>(gx0.w, gy0.w, gz0.w);\n  var g001: vec3<f32> = vec3<f32>(gx1.x, gy1.x, gz1.x);\n  var g101: vec3<f32> = vec3<f32>(gx1.y, gy1.y, gz1.y);\n  var g011: vec3<f32> = vec3<f32>(gx1.z, gy1.z, gz1.z);\n  var g111: vec3<f32> = vec3<f32>(gx1.w, gy1.w, gz1.w);\n\n  let norm0 = taylorInvSqrt4(\n      vec4<f32>(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 = g000 * norm0.x;\n  g010 = g010 * norm0.y;\n  g100 = g100 * norm0.z;\n  g110 = g110 * norm0.w;\n  let norm1 = taylorInvSqrt4(\n      vec4<f32>(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 = g001 * norm1.x;\n  g011 = g011 * norm1.y;\n  g101 = g101 * norm1.z;\n  g111 = g111 * norm1.w;\n\n  let n000 = dot(g000, Pf0);\n  let n100 = dot(g100, vec3<f32>(Pf1.x, Pf0.yz));\n  let n010 = dot(g010, vec3<f32>(Pf0.x, Pf1.y, Pf0.z));\n  let n110 = dot(g110, vec3<f32>(Pf1.xy, Pf0.z));\n  let n001 = dot(g001, vec3<f32>(Pf0.xy, Pf1.z));\n  let n101 = dot(g101, vec3<f32>(Pf1.x, Pf0.y, Pf1.z));\n  let n011 = dot(g011, vec3<f32>(Pf0.x, Pf1.yz));\n  let n111 = dot(g111, Pf1);\n\n  var fade_xyz: vec3<f32> = fade3(Pf0);\n  let temp = vec4<f32>(f32(fade_xyz.z)); // simplify after chrome bug fix\n  let n_z = mix(vec4<f32>(n000, n100, n010, n110), vec4<f32>(n001, n101, n011, n111), temp);\n  let n_yz = mix(n_z.xy, n_z.zw, vec2<f32>(f32(fade_xyz.y))); // simplify after chrome bug fix\n  let n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\n  return 2.2 * n_xyz;\n}\n\nfn CalculateNoiseValue2(pos: vec3<f32>, scale: f32) -> f32\n{\n\treturn FractalNoise21(4, 0.5343, 2.2324, 0.68324, pos * scale);\n}\n\nfn CLerp2(a: f32, b: f32, t: f32) -> f32\n{\n\treturn (1.0 - t) * a + t * b;\n}\n\nfn calculateDensity(worldPosition: vec3<f32>) -> Density {\n\tvar worldRadius: f32 = 10000.0;\n\tvar world: vec3<f32> = worldPosition - vec3<f32>(worldRadius);\n\tvar worldDist: f32 = clamp(-worldRadius + length(world), -1000.0, 1000.0);\n\n\tlet flatlandNoiseScale: f32 = 3.0;\n\tlet flatlandLerpAmount: f32 = 0.07;\n\tlet flatlandYPercent: f32 = 1.2;\n\n\tlet rockyNoiseScale: f32 = 3.0;\n\tlet rockyLerpAmount: f32 = 0.05;\n\tlet rockyYPercent: f32 = 0.7;\n\n\tlet maxMountainMixLerpAmount: f32 = 0.075;\n\tlet minMountainMixLerpAmount: f32 = 1.0;\n\n\tlet rockyBlend: f32 = 1.0;\n\n\tlet mountainBlend: f32 = clamp(abs(FractalNoise2(0.5343, 2.2324, 0.68324, world)) * 4.0, 0.0, 1.0);\n\t//let mountainBlend: f32 = 0.0;\n\n\tlet mountain: f32 = CalculateNoiseValue2(world, 0.07);\n\t//let mountain: f32 = 0.0;\n\n\tvar blob: f32 = CalculateNoiseValue2(world, flatlandNoiseScale + ((rockyNoiseScale - flatlandNoiseScale) * rockyBlend));\n\t//var blob: f32 = 0.0;\n\tblob = CLerp2(blob, (worldDist) * (flatlandYPercent + ((rockyYPercent - flatlandYPercent) * rockyBlend)),\n\t\t\t\tflatlandLerpAmount + ((rockyLerpAmount - flatlandLerpAmount) * rockyBlend));\n\t\t\t\t//+ CLerp2(mountain, blob, minMountainMixLerpAmount + ((maxMountainMixLerpAmount - minMountainMixLerpAmount) * mountainBlend));\n\n  var result = Density(1.0, MATERIAL_AIR);\n\n\tresult = add(result, blob, MATERIAL_ROCK);\n\n  result = add(result, Box(worldPosition, vec3<f32>(2000000.0, 150.0, 5000.0), vec3<f32>(5000.0, 1000.0, 5000.0)), MATERIAL_WOOD);\n  result = add(result, Sphere(worldPosition, vec3<f32>(5000.0, 100.0, 100.0), 5000.0), MATERIAL_ROCK);\n  result = add(result, Sphere(worldPosition, vec3<f32>(10000.0, 100.0, 100.0), 5000.0), MATERIAL_ROCK);\n  result = add(result, Sphere(worldPosition, vec3<f32>(2000000.0, 100.0, 100.0), 5000.0), MATERIAL_ROCK);\n\n  result = add(result, Sphere(worldPosition, vec3<f32>(0.0, 0.0, 0.0), 200000.0), MATERIAL_FIRE);\n\n  result = subtract(result, -Sphere(worldPosition, vec3<f32>(2000000.0, 0.0, 0.0), 1000.0));\n  result = subtract(result, -Box(worldPosition, vec3<f32>(2000000.0, 0.0, 0.0), vec3<f32>(6000.0, 500.0, 500.0)));\n  result = subtract(result, -Box(worldPosition, vec3<f32>(2000000.0, 0.0, 0.0), vec3<f32>(500.0, 500.0, 5000.0)));\n\n  return result;\n}\n\nfn getDensity(worldPosition: vec3<f32>) -> f32 {\n\treturn calculateDensity(worldPosition).density;\n}");

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
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/vec3.js");
/* harmony import */ var _voxel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./voxel */ "./src/voxel.ts");
/* harmony import */ var _world_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./world-generator */ "./src/world-generator.ts");
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



var ctx = self;
(function () {
    return __awaiter(this, void 0, void 0, function () {
        var adapter, device, voxel, queue, generating;
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
                    console.log('Voxel engine init complete');
                    postMessage({ type: 'init_complete' });
                    queue = function (item) {
                        device.queue.onSubmittedWorkDone().then(function (_) {
                            item.callback();
                        });
                        device.queue.submit(item.items);
                    };
                    generating = false;
                    onmessage = function (e) {
                        return __awaiter(this, void 0, void 0, function () {
                            var _a, position, detail, x, y, z, s, _b, vertices, normals, indices, stride, size, chunkSize, worldSize, t0, worldGenerator, info, r, result, x, y, z, halfChunk, _c, vertices, normals, indices, corners;
                            return __generator(this, function (_d) {
                                switch (_d.label) {
                                    case 0:
                                        if (generating) {
                                            console.log('Still generating');
                                            return [2 /*return*/];
                                        }
                                        generating = true;
                                        _a = e.data, position = _a.position, detail = _a.detail;
                                        if (!detail) return [3 /*break*/, 2];
                                        x = detail.x, y = detail.y, z = detail.z, s = detail.s;
                                        return [4 /*yield*/, voxel.generate(device, queue, gl_matrix__WEBPACK_IMPORTED_MODULE_2__.fromValues(x - (31 * s * 0.5), y - (31 * s * 0.5), z - (31 * s * 0.5)), s)];
                                    case 1:
                                        _b = _d.sent(), vertices = _b.vertices, normals = _b.normals, indices = _b.indices;
                                        if (vertices.length > 0) {
                                        }
                                        ctx.postMessage(({ type: 'update', i: "".concat(x, ":").concat(y, ":").concat(z), ix: x, iy: y, iz: z, x: 0, y: 0, z: 0, vertices: vertices.buffer, normals: normals.buffer, indices: indices.buffer, stride: s }), [vertices.buffer, normals.buffer, indices.buffer]);
                                        generating = false;
                                        return [2 /*return*/];
                                    case 2:
                                        stride = 32;
                                        size = 128;
                                        console.log("World Size: ".concat(size, " (").concat(size * 32, ")"));
                                        chunkSize = 31;
                                        worldSize = Math.ceil(size / stride);
                                        console.log("Starting generation. Stride: ".concat(stride, " (").concat(worldSize, ")"));
                                        t0 = performance.now();
                                        worldGenerator = new _world_generator__WEBPACK_IMPORTED_MODULE_1__.default(stride);
                                        info = worldGenerator.init((position[0] / chunkSize), (position[1] / chunkSize), (position[2] / chunkSize));
                                        console.log("Init world at ".concat(info.x, ":").concat(info.y, ":").concat(info.z, " for stride ").concat(stride));
                                        _d.label = 3;
                                    case 3:
                                        r = worldGenerator.next(info);
                                        result = r[0];
                                        info = r[1];
                                        x = result.x, y = result.y, z = result.z;
                                        halfChunk = result.stride * chunkSize * 0.5;
                                        return [4 /*yield*/, voxel.generate(device, queue, gl_matrix__WEBPACK_IMPORTED_MODULE_2__.fromValues(x * chunkSize - halfChunk, y * chunkSize - halfChunk, z * chunkSize - halfChunk), result.stride)];
                                    case 4:
                                        _c = _d.sent(), vertices = _c.vertices, normals = _c.normals, indices = _c.indices, corners = _c.corners;
                                        // if (vertices.length > 0) {
                                        //   console.log(`Generating ${x}:${y}:${z} (${x * chunkSize -halfChunk}:${y * chunkSize -halfChunk}:${z * chunkSize -halfChunk}) (${result.stride} / ${halfChunk} / ${info.previousOffset})`)
                                        // }
                                        ctx.postMessage(({ type: 'update', i: "".concat(x, ":").concat(y, ":").concat(z), ix: x, iy: y, iz: z, x: 0, y: 0, z: 0, vertices: vertices.buffer, normals: normals.buffer, indices: indices.buffer, corners: corners.buffer, stride: result.stride }), [vertices.buffer, normals.buffer, indices.buffer, corners.buffer]);
                                        _d.label = 5;
                                    case 5:
                                        if (info.stride <= 32768) return [3 /*break*/, 3];
                                        _d.label = 6;
                                    case 6:
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
            var computeVoxelsCode, start, module, _a, _b, uniformBufferSize, permutations, random, i, i, _c, _d;
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
                    var corners;
                    var _this = this;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.cornerMaterialsRead.mapAsync(GPUMapMode.READ)];
                            case 1:
                                _a.sent();
                                corners = new Uint32Array(this.cornerMaterialsRead.getMappedRange()).slice();
                                this.cornerMaterialsRead.unmap();
                                this.gpuReadBuffer.mapAsync(GPUMapMode.READ).then(function () {
                                    var arrayBuffer = _this.gpuReadBuffer.getMappedRange();
                                    var voxelCount = new Uint32Array(arrayBuffer)[0];
                                    //console.log('Voxel count', voxelCount);
                                    _this.gpuReadBuffer.unmap();
                                    if (voxelCount === 0) {
                                        resolve({ vertices: new Float32Array(), normals: new Float32Array(), indices: new Uint16Array(), corners: new Uint32Array() });
                                        return;
                                    }
                                    var dispatchCount = Math.ceil(voxelCount / 128);
                                    var computeEncoder = device.createCommandEncoder();
                                    var computePassEncoder = computeEncoder.beginComputePass();
                                    computePassEncoder.setPipeline(_this.computeVoxelsPipeline);
                                    computePassEncoder.setBindGroup(0, _this.computeVoxelsBindGroup);
                                    computePassEncoder.dispatchWorkgroups(dispatchCount);
                                    computePassEncoder.end();
                                    var copyEncoder = device.createCommandEncoder();
                                    copyEncoder.copyBufferToBuffer(_this.voxelsBuffer, 0, _this.voxelReadBuffer, 0, Float32Array.BYTES_PER_ELEMENT * voxelCount * 12);
                                    queue({
                                        items: [computeEncoder.finish(), copyEncoder.finish()],
                                        callback: function () {
                                            _this.voxelReadBuffer.mapAsync(GPUMapMode.READ).then(function () {
                                                var arrayBuffer = _this.voxelReadBuffer.getMappedRange();
                                                var computedVoxelsData = new Float32Array(arrayBuffer);
                                                var result = computeVoxels(position, stride, voxelCount, computedVoxelsData);
                                                _this.voxelReadBuffer.unmap();
                                                resolve(__assign(__assign({}, result), { corners: corners }));
                                            });
                                        }
                                    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJncHUtY29tcHV0ZS8uL25vZGVfbW9kdWxlcy9nbC1tYXRyaXgvZXNtL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly93ZWJncHUtY29tcHV0ZS8uL25vZGVfbW9kdWxlcy9nbC1tYXRyaXgvZXNtL3ZlYzMuanMiLCJ3ZWJwYWNrOi8vd2ViZ3B1LWNvbXB1dGUvLi9zcmMvY29tcHV0ZS1jb3JuZXJzLndnc2wiLCJ3ZWJwYWNrOi8vd2ViZ3B1LWNvbXB1dGUvLi9zcmMvY29tcHV0ZS1wb3NpdGlvbnMud2dzbCIsIndlYnBhY2s6Ly93ZWJncHUtY29tcHV0ZS8uL3NyYy9jb21wdXRlLXZveGVscy53Z3NsIiwid2VicGFjazovL3dlYmdwdS1jb21wdXRlLy4vc3JjL2RlbnNpdHkud2dzbCIsIndlYnBhY2s6Ly93ZWJncHUtY29tcHV0ZS8uL25vZGVfbW9kdWxlcy9zZWVkcmFuZG9tL2luZGV4LmpzIiwid2VicGFjazovL3dlYmdwdS1jb21wdXRlLy4vbm9kZV9tb2R1bGVzL3NlZWRyYW5kb20vbGliL2FsZWEuanMiLCJ3ZWJwYWNrOi8vd2ViZ3B1LWNvbXB1dGUvLi9ub2RlX21vZHVsZXMvc2VlZHJhbmRvbS9saWIvdHljaGVpLmpzIiwid2VicGFjazovL3dlYmdwdS1jb21wdXRlLy4vbm9kZV9tb2R1bGVzL3NlZWRyYW5kb20vbGliL3hvcjEyOC5qcyIsIndlYnBhY2s6Ly93ZWJncHUtY29tcHV0ZS8uL25vZGVfbW9kdWxlcy9zZWVkcmFuZG9tL2xpYi94b3I0MDk2LmpzIiwid2VicGFjazovL3dlYmdwdS1jb21wdXRlLy4vbm9kZV9tb2R1bGVzL3NlZWRyYW5kb20vbGliL3hvcnNoaWZ0Ny5qcyIsIndlYnBhY2s6Ly93ZWJncHUtY29tcHV0ZS8uL25vZGVfbW9kdWxlcy9zZWVkcmFuZG9tL2xpYi94b3J3b3cuanMiLCJ3ZWJwYWNrOi8vd2ViZ3B1LWNvbXB1dGUvLi9ub2RlX21vZHVsZXMvc2VlZHJhbmRvbS9zZWVkcmFuZG9tLmpzIiwid2VicGFjazovL3dlYmdwdS1jb21wdXRlLy4vc3JjL2NvbnRvdXJpbmcudHMiLCJ3ZWJwYWNrOi8vd2ViZ3B1LWNvbXB1dGUvLi9zcmMvY29udG91cmluZy53b3JrZXIudHMiLCJ3ZWJwYWNrOi8vd2ViZ3B1LWNvbXB1dGUvLi9zcmMvb2N0cmVlLnRzIiwid2VicGFjazovL3dlYmdwdS1jb21wdXRlLy4vc3JjL3ZveGVsLnRzIiwid2VicGFjazovL3dlYmdwdS1jb21wdXRlLy4vc3JjL3dvcmxkLWdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly93ZWJncHUtY29tcHV0ZS9pZ25vcmVkfGNyeXB0byIsIndlYnBhY2s6Ly93ZWJncHUtY29tcHV0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJncHUtY29tcHV0ZS93ZWJwYWNrL3J1bnRpbWUvYW1kIGRlZmluZSIsIndlYnBhY2s6Ly93ZWJncHUtY29tcHV0ZS93ZWJwYWNrL3J1bnRpbWUvYW1kIG9wdGlvbnMiLCJ3ZWJwYWNrOi8vd2ViZ3B1LWNvbXB1dGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2ViZ3B1LWNvbXB1dGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYmdwdS1jb21wdXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2ViZ3B1LWNvbXB1dGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJncHUtY29tcHV0ZS93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL3dlYmdwdS1jb21wdXRlL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ0E7QUFDQTtBQUNQO0FBQ0E7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LENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDOUosSUFBTSxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFaEksSUFBTSxnQkFBZ0IsR0FBRztJQUN2QixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM1QyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM1QyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztDQUM3QyxDQUFDO0FBRUYsSUFBTSxnQkFBZ0IsR0FBRztJQUN2QixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoRixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoRixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztDQUNqRixDQUFDO0FBRUYsSUFBTSxnQkFBZ0IsR0FBRztJQUN2QixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbEMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztDQUNuQyxDQUFDO0FBRUYsSUFBTSxlQUFlLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVB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LENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVO2dCQUNyRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07YUFDcEI7a0NBQ0ksSUFBSSxLQUFFLFNBQVMsYUFBRSxLQUFLLFNBQUUsTUFBTSxVQUFFLGNBQWM7U0FDcEQsQ0FBQztJQUNKLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7OztBQ2hJRCxlOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3hCQTtXQUNBO1dBQ0EsRTs7Ozs7V0NGQSw4Qjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEU7Ozs7VUNKQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJjb250b3VyaW5nLndvcmtlci53b3JrZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ29tbW9uIHV0aWxpdGllc1xyXG4gKiBAbW9kdWxlIGdsTWF0cml4XHJcbiAqL1xuLy8gQ29uZmlndXJhdGlvbiBDb25zdGFudHNcbmV4cG9ydCB2YXIgRVBTSUxPTiA9IDAuMDAwMDAxO1xuZXhwb3J0IHZhciBBUlJBWV9UWVBFID0gdHlwZW9mIEZsb2F0MzJBcnJheSAhPT0gJ3VuZGVmaW5lZCcgPyBGbG9hdDMyQXJyYXkgOiBBcnJheTtcbmV4cG9ydCB2YXIgUkFORE9NID0gTWF0aC5yYW5kb207XG4vKipcclxuICogU2V0cyB0aGUgdHlwZSBvZiBhcnJheSB1c2VkIHdoZW4gY3JlYXRpbmcgbmV3IHZlY3RvcnMgYW5kIG1hdHJpY2VzXHJcbiAqXHJcbiAqIEBwYXJhbSB7RmxvYXQzMkFycmF5Q29uc3RydWN0b3IgfCBBcnJheUNvbnN0cnVjdG9yfSB0eXBlIEFycmF5IHR5cGUsIHN1Y2ggYXMgRmxvYXQzMkFycmF5IG9yIEFycmF5XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0TWF0cml4QXJyYXlUeXBlKHR5cGUpIHtcbiAgQVJSQVlfVFlQRSA9IHR5cGU7XG59XG52YXIgZGVncmVlID0gTWF0aC5QSSAvIDE4MDtcbi8qKlxyXG4gKiBDb252ZXJ0IERlZ3JlZSBUbyBSYWRpYW5cclxuICpcclxuICogQHBhcmFtIHtOdW1iZXJ9IGEgQW5nbGUgaW4gRGVncmVlc1xyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHRvUmFkaWFuKGEpIHtcbiAgcmV0dXJuIGEgKiBkZWdyZWU7XG59XG4vKipcclxuICogVGVzdHMgd2hldGhlciBvciBub3QgdGhlIGFyZ3VtZW50cyBoYXZlIGFwcHJveGltYXRlbHkgdGhlIHNhbWUgdmFsdWUsIHdpdGhpbiBhbiBhYnNvbHV0ZVxyXG4gKiBvciByZWxhdGl2ZSB0b2xlcmFuY2Ugb2YgZ2xNYXRyaXguRVBTSUxPTiAoYW4gYWJzb2x1dGUgdG9sZXJhbmNlIGlzIHVzZWQgZm9yIHZhbHVlcyBsZXNzXHJcbiAqIHRoYW4gb3IgZXF1YWwgdG8gMS4wLCBhbmQgYSByZWxhdGl2ZSB0b2xlcmFuY2UgaXMgdXNlZCBmb3IgbGFyZ2VyIHZhbHVlcylcclxuICpcclxuICogQHBhcmFtIHtOdW1iZXJ9IGEgVGhlIGZpcnN0IG51bWJlciB0byB0ZXN0LlxyXG4gKiBAcGFyYW0ge051bWJlcn0gYiBUaGUgc2Vjb25kIG51bWJlciB0byB0ZXN0LlxyXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gVHJ1ZSBpZiB0aGUgbnVtYmVycyBhcmUgYXBwcm94aW1hdGVseSBlcXVhbCwgZmFsc2Ugb3RoZXJ3aXNlLlxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGVxdWFscyhhLCBiKSB7XG4gIHJldHVybiBNYXRoLmFicyhhIC0gYikgPD0gRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYSksIE1hdGguYWJzKGIpKTtcbn1cbmlmICghTWF0aC5oeXBvdCkgTWF0aC5oeXBvdCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHkgPSAwLFxuICAgICAgaSA9IGFyZ3VtZW50cy5sZW5ndGg7XG5cbiAgd2hpbGUgKGktLSkge1xuICAgIHkgKz0gYXJndW1lbnRzW2ldICogYXJndW1lbnRzW2ldO1xuICB9XG5cbiAgcmV0dXJuIE1hdGguc3FydCh5KTtcbn07IiwiaW1wb3J0ICogYXMgZ2xNYXRyaXggZnJvbSBcIi4vY29tbW9uLmpzXCI7XG4vKipcclxuICogMyBEaW1lbnNpb25hbCBWZWN0b3JcclxuICogQG1vZHVsZSB2ZWMzXHJcbiAqL1xuXG4vKipcclxuICogQ3JlYXRlcyBhIG5ldywgZW1wdHkgdmVjM1xyXG4gKlxyXG4gKiBAcmV0dXJucyB7dmVjM30gYSBuZXcgM0QgdmVjdG9yXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlKCkge1xuICB2YXIgb3V0ID0gbmV3IGdsTWF0cml4LkFSUkFZX1RZUEUoMyk7XG5cbiAgaWYgKGdsTWF0cml4LkFSUkFZX1RZUEUgIT0gRmxvYXQzMkFycmF5KSB7XG4gICAgb3V0WzBdID0gMDtcbiAgICBvdXRbMV0gPSAwO1xuICAgIG91dFsyXSA9IDA7XG4gIH1cblxuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENyZWF0ZXMgYSBuZXcgdmVjMyBpbml0aWFsaXplZCB3aXRoIHZhbHVlcyBmcm9tIGFuIGV4aXN0aW5nIHZlY3RvclxyXG4gKlxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB2ZWN0b3IgdG8gY2xvbmVcclxuICogQHJldHVybnMge3ZlYzN9IGEgbmV3IDNEIHZlY3RvclxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lKGEpIHtcbiAgdmFyIG91dCA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDMpO1xuICBvdXRbMF0gPSBhWzBdO1xuICBvdXRbMV0gPSBhWzFdO1xuICBvdXRbMl0gPSBhWzJdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENhbGN1bGF0ZXMgdGhlIGxlbmd0aCBvZiBhIHZlYzNcclxuICpcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdmVjdG9yIHRvIGNhbGN1bGF0ZSBsZW5ndGggb2ZcclxuICogQHJldHVybnMge051bWJlcn0gbGVuZ3RoIG9mIGFcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBsZW5ndGgoYSkge1xuICB2YXIgeCA9IGFbMF07XG4gIHZhciB5ID0gYVsxXTtcbiAgdmFyIHogPSBhWzJdO1xuICByZXR1cm4gTWF0aC5oeXBvdCh4LCB5LCB6KTtcbn1cbi8qKlxyXG4gKiBDcmVhdGVzIGEgbmV3IHZlYzMgaW5pdGlhbGl6ZWQgd2l0aCB0aGUgZ2l2ZW4gdmFsdWVzXHJcbiAqXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB4IFggY29tcG9uZW50XHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB5IFkgY29tcG9uZW50XHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB6IFogY29tcG9uZW50XHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBhIG5ldyAzRCB2ZWN0b3JcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tVmFsdWVzKHgsIHksIHopIHtcbiAgdmFyIG91dCA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDMpO1xuICBvdXRbMF0gPSB4O1xuICBvdXRbMV0gPSB5O1xuICBvdXRbMl0gPSB6O1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENvcHkgdGhlIHZhbHVlcyBmcm9tIG9uZSB2ZWMzIHRvIGFub3RoZXJcclxuICpcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdGhlIHNvdXJjZSB2ZWN0b3JcclxuICogQHJldHVybnMge3ZlYzN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNvcHkob3V0LCBhKSB7XG4gIG91dFswXSA9IGFbMF07XG4gIG91dFsxXSA9IGFbMV07XG4gIG91dFsyXSA9IGFbMl07XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogU2V0IHRoZSBjb21wb25lbnRzIG9mIGEgdmVjMyB0byB0aGUgZ2l2ZW4gdmFsdWVzXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB4IFggY29tcG9uZW50XHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB5IFkgY29tcG9uZW50XHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB6IFogY29tcG9uZW50XHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzZXQob3V0LCB4LCB5LCB6KSB7XG4gIG91dFswXSA9IHg7XG4gIG91dFsxXSA9IHk7XG4gIG91dFsyXSA9IHo7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQWRkcyB0d28gdmVjMydzXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkKG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdICsgYlswXTtcbiAgb3V0WzFdID0gYVsxXSArIGJbMV07XG4gIG91dFsyXSA9IGFbMl0gKyBiWzJdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFN1YnRyYWN0cyB2ZWN0b3IgYiBmcm9tIHZlY3RvciBhXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc3VidHJhY3Qob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gLSBiWzBdO1xuICBvdXRbMV0gPSBhWzFdIC0gYlsxXTtcbiAgb3V0WzJdID0gYVsyXSAtIGJbMl07XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogTXVsdGlwbGllcyB0d28gdmVjMydzXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHkob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gKiBiWzBdO1xuICBvdXRbMV0gPSBhWzFdICogYlsxXTtcbiAgb3V0WzJdID0gYVsyXSAqIGJbMl07XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogRGl2aWRlcyB0d28gdmVjMydzXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZGl2aWRlKG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdIC8gYlswXTtcbiAgb3V0WzFdID0gYVsxXSAvIGJbMV07XG4gIG91dFsyXSA9IGFbMl0gLyBiWzJdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIE1hdGguY2VpbCB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzNcclxuICpcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdmVjdG9yIHRvIGNlaWxcclxuICogQHJldHVybnMge3ZlYzN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNlaWwob3V0LCBhKSB7XG4gIG91dFswXSA9IE1hdGguY2VpbChhWzBdKTtcbiAgb3V0WzFdID0gTWF0aC5jZWlsKGFbMV0pO1xuICBvdXRbMl0gPSBNYXRoLmNlaWwoYVsyXSk7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogTWF0aC5mbG9vciB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzNcclxuICpcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdmVjdG9yIHRvIGZsb29yXHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmbG9vcihvdXQsIGEpIHtcbiAgb3V0WzBdID0gTWF0aC5mbG9vcihhWzBdKTtcbiAgb3V0WzFdID0gTWF0aC5mbG9vcihhWzFdKTtcbiAgb3V0WzJdID0gTWF0aC5mbG9vcihhWzJdKTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBtaW5pbXVtIG9mIHR3byB2ZWMzJ3NcclxuICpcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBtaW4ob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IE1hdGgubWluKGFbMF0sIGJbMF0pO1xuICBvdXRbMV0gPSBNYXRoLm1pbihhWzFdLCBiWzFdKTtcbiAgb3V0WzJdID0gTWF0aC5taW4oYVsyXSwgYlsyXSk7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogUmV0dXJucyB0aGUgbWF4aW11bSBvZiB0d28gdmVjMydzXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbWF4KG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBNYXRoLm1heChhWzBdLCBiWzBdKTtcbiAgb3V0WzFdID0gTWF0aC5tYXgoYVsxXSwgYlsxXSk7XG4gIG91dFsyXSA9IE1hdGgubWF4KGFbMl0sIGJbMl0pO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIE1hdGgucm91bmQgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWMzXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHZlY3RvciB0byByb3VuZFxyXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcm91bmQob3V0LCBhKSB7XG4gIG91dFswXSA9IE1hdGgucm91bmQoYVswXSk7XG4gIG91dFsxXSA9IE1hdGgucm91bmQoYVsxXSk7XG4gIG91dFsyXSA9IE1hdGgucm91bmQoYVsyXSk7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogU2NhbGVzIGEgdmVjMyBieSBhIHNjYWxhciBudW1iZXJcclxuICpcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdGhlIHZlY3RvciB0byBzY2FsZVxyXG4gKiBAcGFyYW0ge051bWJlcn0gYiBhbW91bnQgdG8gc2NhbGUgdGhlIHZlY3RvciBieVxyXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc2NhbGUob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gKiBiO1xuICBvdXRbMV0gPSBhWzFdICogYjtcbiAgb3V0WzJdID0gYVsyXSAqIGI7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQWRkcyB0d28gdmVjMydzIGFmdGVyIHNjYWxpbmcgdGhlIHNlY29uZCBvcGVyYW5kIGJ5IGEgc2NhbGFyIHZhbHVlXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge051bWJlcn0gc2NhbGUgdGhlIGFtb3VudCB0byBzY2FsZSBiIGJ5IGJlZm9yZSBhZGRpbmdcclxuICogQHJldHVybnMge3ZlYzN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlQW5kQWRkKG91dCwgYSwgYiwgc2NhbGUpIHtcbiAgb3V0WzBdID0gYVswXSArIGJbMF0gKiBzY2FsZTtcbiAgb3V0WzFdID0gYVsxXSArIGJbMV0gKiBzY2FsZTtcbiAgb3V0WzJdID0gYVsyXSArIGJbMl0gKiBzY2FsZTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDYWxjdWxhdGVzIHRoZSBldWNsaWRpYW4gZGlzdGFuY2UgYmV0d2VlbiB0d28gdmVjMydzXHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBkaXN0YW5jZSBiZXR3ZWVuIGEgYW5kIGJcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBkaXN0YW5jZShhLCBiKSB7XG4gIHZhciB4ID0gYlswXSAtIGFbMF07XG4gIHZhciB5ID0gYlsxXSAtIGFbMV07XG4gIHZhciB6ID0gYlsyXSAtIGFbMl07XG4gIHJldHVybiBNYXRoLmh5cG90KHgsIHksIHopO1xufVxuLyoqXHJcbiAqIENhbGN1bGF0ZXMgdGhlIHNxdWFyZWQgZXVjbGlkaWFuIGRpc3RhbmNlIGJldHdlZW4gdHdvIHZlYzMnc1xyXG4gKlxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHJldHVybnMge051bWJlcn0gc3F1YXJlZCBkaXN0YW5jZSBiZXR3ZWVuIGEgYW5kIGJcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzcXVhcmVkRGlzdGFuY2UoYSwgYikge1xuICB2YXIgeCA9IGJbMF0gLSBhWzBdO1xuICB2YXIgeSA9IGJbMV0gLSBhWzFdO1xuICB2YXIgeiA9IGJbMl0gLSBhWzJdO1xuICByZXR1cm4geCAqIHggKyB5ICogeSArIHogKiB6O1xufVxuLyoqXHJcbiAqIENhbGN1bGF0ZXMgdGhlIHNxdWFyZWQgbGVuZ3RoIG9mIGEgdmVjM1xyXG4gKlxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB2ZWN0b3IgdG8gY2FsY3VsYXRlIHNxdWFyZWQgbGVuZ3RoIG9mXHJcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHNxdWFyZWQgbGVuZ3RoIG9mIGFcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzcXVhcmVkTGVuZ3RoKGEpIHtcbiAgdmFyIHggPSBhWzBdO1xuICB2YXIgeSA9IGFbMV07XG4gIHZhciB6ID0gYVsyXTtcbiAgcmV0dXJuIHggKiB4ICsgeSAqIHkgKyB6ICogejtcbn1cbi8qKlxyXG4gKiBOZWdhdGVzIHRoZSBjb21wb25lbnRzIG9mIGEgdmVjM1xyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB2ZWN0b3IgdG8gbmVnYXRlXHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBuZWdhdGUob3V0LCBhKSB7XG4gIG91dFswXSA9IC1hWzBdO1xuICBvdXRbMV0gPSAtYVsxXTtcbiAgb3V0WzJdID0gLWFbMl07XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogUmV0dXJucyB0aGUgaW52ZXJzZSBvZiB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzNcclxuICpcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdmVjdG9yIHRvIGludmVydFxyXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gaW52ZXJzZShvdXQsIGEpIHtcbiAgb3V0WzBdID0gMS4wIC8gYVswXTtcbiAgb3V0WzFdID0gMS4wIC8gYVsxXTtcbiAgb3V0WzJdID0gMS4wIC8gYVsyXTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBOb3JtYWxpemUgYSB2ZWMzXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHZlY3RvciB0byBub3JtYWxpemVcclxuICogQHJldHVybnMge3ZlYzN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZShvdXQsIGEpIHtcbiAgdmFyIHggPSBhWzBdO1xuICB2YXIgeSA9IGFbMV07XG4gIHZhciB6ID0gYVsyXTtcbiAgdmFyIGxlbiA9IHggKiB4ICsgeSAqIHkgKyB6ICogejtcblxuICBpZiAobGVuID4gMCkge1xuICAgIC8vVE9ETzogZXZhbHVhdGUgdXNlIG9mIGdsbV9pbnZzcXJ0IGhlcmU/XG4gICAgbGVuID0gMSAvIE1hdGguc3FydChsZW4pO1xuICB9XG5cbiAgb3V0WzBdID0gYVswXSAqIGxlbjtcbiAgb3V0WzFdID0gYVsxXSAqIGxlbjtcbiAgb3V0WzJdID0gYVsyXSAqIGxlbjtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDYWxjdWxhdGVzIHRoZSBkb3QgcHJvZHVjdCBvZiB0d28gdmVjMydzXHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBkb3QgcHJvZHVjdCBvZiBhIGFuZCBiXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZG90KGEsIGIpIHtcbiAgcmV0dXJuIGFbMF0gKiBiWzBdICsgYVsxXSAqIGJbMV0gKyBhWzJdICogYlsyXTtcbn1cbi8qKlxyXG4gKiBDb21wdXRlcyB0aGUgY3Jvc3MgcHJvZHVjdCBvZiB0d28gdmVjMydzXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY3Jvc3Mob3V0LCBhLCBiKSB7XG4gIHZhciBheCA9IGFbMF0sXG4gICAgICBheSA9IGFbMV0sXG4gICAgICBheiA9IGFbMl07XG4gIHZhciBieCA9IGJbMF0sXG4gICAgICBieSA9IGJbMV0sXG4gICAgICBieiA9IGJbMl07XG4gIG91dFswXSA9IGF5ICogYnogLSBheiAqIGJ5O1xuICBvdXRbMV0gPSBheiAqIGJ4IC0gYXggKiBiejtcbiAgb3V0WzJdID0gYXggKiBieSAtIGF5ICogYng7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogUGVyZm9ybXMgYSBsaW5lYXIgaW50ZXJwb2xhdGlvbiBiZXR3ZWVuIHR3byB2ZWMzJ3NcclxuICpcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB0IGludGVycG9sYXRpb24gYW1vdW50LCBpbiB0aGUgcmFuZ2UgWzAtMV0sIGJldHdlZW4gdGhlIHR3byBpbnB1dHNcclxuICogQHJldHVybnMge3ZlYzN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGxlcnAob3V0LCBhLCBiLCB0KSB7XG4gIHZhciBheCA9IGFbMF07XG4gIHZhciBheSA9IGFbMV07XG4gIHZhciBheiA9IGFbMl07XG4gIG91dFswXSA9IGF4ICsgdCAqIChiWzBdIC0gYXgpO1xuICBvdXRbMV0gPSBheSArIHQgKiAoYlsxXSAtIGF5KTtcbiAgb3V0WzJdID0gYXogKyB0ICogKGJbMl0gLSBheik7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogUGVyZm9ybXMgYSBoZXJtaXRlIGludGVycG9sYXRpb24gd2l0aCB0d28gY29udHJvbCBwb2ludHNcclxuICpcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBjIHRoZSB0aGlyZCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBkIHRoZSBmb3VydGggb3BlcmFuZFxyXG4gKiBAcGFyYW0ge051bWJlcn0gdCBpbnRlcnBvbGF0aW9uIGFtb3VudCwgaW4gdGhlIHJhbmdlIFswLTFdLCBiZXR3ZWVuIHRoZSB0d28gaW5wdXRzXHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBoZXJtaXRlKG91dCwgYSwgYiwgYywgZCwgdCkge1xuICB2YXIgZmFjdG9yVGltZXMyID0gdCAqIHQ7XG4gIHZhciBmYWN0b3IxID0gZmFjdG9yVGltZXMyICogKDIgKiB0IC0gMykgKyAxO1xuICB2YXIgZmFjdG9yMiA9IGZhY3RvclRpbWVzMiAqICh0IC0gMikgKyB0O1xuICB2YXIgZmFjdG9yMyA9IGZhY3RvclRpbWVzMiAqICh0IC0gMSk7XG4gIHZhciBmYWN0b3I0ID0gZmFjdG9yVGltZXMyICogKDMgLSAyICogdCk7XG4gIG91dFswXSA9IGFbMF0gKiBmYWN0b3IxICsgYlswXSAqIGZhY3RvcjIgKyBjWzBdICogZmFjdG9yMyArIGRbMF0gKiBmYWN0b3I0O1xuICBvdXRbMV0gPSBhWzFdICogZmFjdG9yMSArIGJbMV0gKiBmYWN0b3IyICsgY1sxXSAqIGZhY3RvcjMgKyBkWzFdICogZmFjdG9yNDtcbiAgb3V0WzJdID0gYVsyXSAqIGZhY3RvcjEgKyBiWzJdICogZmFjdG9yMiArIGNbMl0gKiBmYWN0b3IzICsgZFsyXSAqIGZhY3RvcjQ7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogUGVyZm9ybXMgYSBiZXppZXIgaW50ZXJwb2xhdGlvbiB3aXRoIHR3byBjb250cm9sIHBvaW50c1xyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGMgdGhlIHRoaXJkIG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGQgdGhlIGZvdXJ0aCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB0IGludGVycG9sYXRpb24gYW1vdW50LCBpbiB0aGUgcmFuZ2UgWzAtMV0sIGJldHdlZW4gdGhlIHR3byBpbnB1dHNcclxuICogQHJldHVybnMge3ZlYzN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGJlemllcihvdXQsIGEsIGIsIGMsIGQsIHQpIHtcbiAgdmFyIGludmVyc2VGYWN0b3IgPSAxIC0gdDtcbiAgdmFyIGludmVyc2VGYWN0b3JUaW1lc1R3byA9IGludmVyc2VGYWN0b3IgKiBpbnZlcnNlRmFjdG9yO1xuICB2YXIgZmFjdG9yVGltZXMyID0gdCAqIHQ7XG4gIHZhciBmYWN0b3IxID0gaW52ZXJzZUZhY3RvclRpbWVzVHdvICogaW52ZXJzZUZhY3RvcjtcbiAgdmFyIGZhY3RvcjIgPSAzICogdCAqIGludmVyc2VGYWN0b3JUaW1lc1R3bztcbiAgdmFyIGZhY3RvcjMgPSAzICogZmFjdG9yVGltZXMyICogaW52ZXJzZUZhY3RvcjtcbiAgdmFyIGZhY3RvcjQgPSBmYWN0b3JUaW1lczIgKiB0O1xuICBvdXRbMF0gPSBhWzBdICogZmFjdG9yMSArIGJbMF0gKiBmYWN0b3IyICsgY1swXSAqIGZhY3RvcjMgKyBkWzBdICogZmFjdG9yNDtcbiAgb3V0WzFdID0gYVsxXSAqIGZhY3RvcjEgKyBiWzFdICogZmFjdG9yMiArIGNbMV0gKiBmYWN0b3IzICsgZFsxXSAqIGZhY3RvcjQ7XG4gIG91dFsyXSA9IGFbMl0gKiBmYWN0b3IxICsgYlsyXSAqIGZhY3RvcjIgKyBjWzJdICogZmFjdG9yMyArIGRbMl0gKiBmYWN0b3I0O1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIEdlbmVyYXRlcyBhIHJhbmRvbSB2ZWN0b3Igd2l0aCB0aGUgZ2l2ZW4gc2NhbGVcclxuICpcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtOdW1iZXJ9IFtzY2FsZV0gTGVuZ3RoIG9mIHRoZSByZXN1bHRpbmcgdmVjdG9yLiBJZiBvbW1pdHRlZCwgYSB1bml0IHZlY3RvciB3aWxsIGJlIHJldHVybmVkXHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByYW5kb20ob3V0LCBzY2FsZSkge1xuICBzY2FsZSA9IHNjYWxlIHx8IDEuMDtcbiAgdmFyIHIgPSBnbE1hdHJpeC5SQU5ET00oKSAqIDIuMCAqIE1hdGguUEk7XG4gIHZhciB6ID0gZ2xNYXRyaXguUkFORE9NKCkgKiAyLjAgLSAxLjA7XG4gIHZhciB6U2NhbGUgPSBNYXRoLnNxcnQoMS4wIC0geiAqIHopICogc2NhbGU7XG4gIG91dFswXSA9IE1hdGguY29zKHIpICogelNjYWxlO1xuICBvdXRbMV0gPSBNYXRoLnNpbihyKSAqIHpTY2FsZTtcbiAgb3V0WzJdID0geiAqIHNjYWxlO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFRyYW5zZm9ybXMgdGhlIHZlYzMgd2l0aCBhIG1hdDQuXHJcbiAqIDR0aCB2ZWN0b3IgY29tcG9uZW50IGlzIGltcGxpY2l0bHkgJzEnXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHRoZSB2ZWN0b3IgdG8gdHJhbnNmb3JtXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBtIG1hdHJpeCB0byB0cmFuc2Zvcm0gd2l0aFxyXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtTWF0NChvdXQsIGEsIG0pIHtcbiAgdmFyIHggPSBhWzBdLFxuICAgICAgeSA9IGFbMV0sXG4gICAgICB6ID0gYVsyXTtcbiAgdmFyIHcgPSBtWzNdICogeCArIG1bN10gKiB5ICsgbVsxMV0gKiB6ICsgbVsxNV07XG4gIHcgPSB3IHx8IDEuMDtcbiAgb3V0WzBdID0gKG1bMF0gKiB4ICsgbVs0XSAqIHkgKyBtWzhdICogeiArIG1bMTJdKSAvIHc7XG4gIG91dFsxXSA9IChtWzFdICogeCArIG1bNV0gKiB5ICsgbVs5XSAqIHogKyBtWzEzXSkgLyB3O1xuICBvdXRbMl0gPSAobVsyXSAqIHggKyBtWzZdICogeSArIG1bMTBdICogeiArIG1bMTRdKSAvIHc7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogVHJhbnNmb3JtcyB0aGUgdmVjMyB3aXRoIGEgbWF0My5cclxuICpcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdGhlIHZlY3RvciB0byB0cmFuc2Zvcm1cclxuICogQHBhcmFtIHtSZWFkb25seU1hdDN9IG0gdGhlIDN4MyBtYXRyaXggdG8gdHJhbnNmb3JtIHdpdGhcclxuICogQHJldHVybnMge3ZlYzN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybU1hdDMob3V0LCBhLCBtKSB7XG4gIHZhciB4ID0gYVswXSxcbiAgICAgIHkgPSBhWzFdLFxuICAgICAgeiA9IGFbMl07XG4gIG91dFswXSA9IHggKiBtWzBdICsgeSAqIG1bM10gKyB6ICogbVs2XTtcbiAgb3V0WzFdID0geCAqIG1bMV0gKyB5ICogbVs0XSArIHogKiBtWzddO1xuICBvdXRbMl0gPSB4ICogbVsyXSArIHkgKiBtWzVdICsgeiAqIG1bOF07XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogVHJhbnNmb3JtcyB0aGUgdmVjMyB3aXRoIGEgcXVhdFxyXG4gKiBDYW4gYWxzbyBiZSB1c2VkIGZvciBkdWFsIHF1YXRlcm5pb25zLiAoTXVsdGlwbHkgaXQgd2l0aCB0aGUgcmVhbCBwYXJ0KVxyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB0aGUgdmVjdG9yIHRvIHRyYW5zZm9ybVxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gcSBxdWF0ZXJuaW9uIHRvIHRyYW5zZm9ybSB3aXRoXHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1RdWF0KG91dCwgYSwgcSkge1xuICAvLyBiZW5jaG1hcmtzOiBodHRwczovL2pzcGVyZi5jb20vcXVhdGVybmlvbi10cmFuc2Zvcm0tdmVjMy1pbXBsZW1lbnRhdGlvbnMtZml4ZWRcbiAgdmFyIHF4ID0gcVswXSxcbiAgICAgIHF5ID0gcVsxXSxcbiAgICAgIHF6ID0gcVsyXSxcbiAgICAgIHF3ID0gcVszXTtcbiAgdmFyIHggPSBhWzBdLFxuICAgICAgeSA9IGFbMV0sXG4gICAgICB6ID0gYVsyXTsgLy8gdmFyIHF2ZWMgPSBbcXgsIHF5LCBxel07XG4gIC8vIHZhciB1diA9IHZlYzMuY3Jvc3MoW10sIHF2ZWMsIGEpO1xuXG4gIHZhciB1dnggPSBxeSAqIHogLSBxeiAqIHksXG4gICAgICB1dnkgPSBxeiAqIHggLSBxeCAqIHosXG4gICAgICB1dnogPSBxeCAqIHkgLSBxeSAqIHg7IC8vIHZhciB1dXYgPSB2ZWMzLmNyb3NzKFtdLCBxdmVjLCB1dik7XG5cbiAgdmFyIHV1dnggPSBxeSAqIHV2eiAtIHF6ICogdXZ5LFxuICAgICAgdXV2eSA9IHF6ICogdXZ4IC0gcXggKiB1dnosXG4gICAgICB1dXZ6ID0gcXggKiB1dnkgLSBxeSAqIHV2eDsgLy8gdmVjMy5zY2FsZSh1diwgdXYsIDIgKiB3KTtcblxuICB2YXIgdzIgPSBxdyAqIDI7XG4gIHV2eCAqPSB3MjtcbiAgdXZ5ICo9IHcyO1xuICB1dnogKj0gdzI7IC8vIHZlYzMuc2NhbGUodXV2LCB1dXYsIDIpO1xuXG4gIHV1dnggKj0gMjtcbiAgdXV2eSAqPSAyO1xuICB1dXZ6ICo9IDI7IC8vIHJldHVybiB2ZWMzLmFkZChvdXQsIGEsIHZlYzMuYWRkKG91dCwgdXYsIHV1dikpO1xuXG4gIG91dFswXSA9IHggKyB1dnggKyB1dXZ4O1xuICBvdXRbMV0gPSB5ICsgdXZ5ICsgdXV2eTtcbiAgb3V0WzJdID0geiArIHV2eiArIHV1dno7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogUm90YXRlIGEgM0QgdmVjdG9yIGFyb3VuZCB0aGUgeC1heGlzXHJcbiAqIEBwYXJhbSB7dmVjM30gb3V0IFRoZSByZWNlaXZpbmcgdmVjM1xyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSBUaGUgdmVjMyBwb2ludCB0byByb3RhdGVcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGIgVGhlIG9yaWdpbiBvZiB0aGUgcm90YXRpb25cclxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCBUaGUgYW5nbGUgb2Ygcm90YXRpb24gaW4gcmFkaWFuc1xyXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlWChvdXQsIGEsIGIsIHJhZCkge1xuICB2YXIgcCA9IFtdLFxuICAgICAgciA9IFtdOyAvL1RyYW5zbGF0ZSBwb2ludCB0byB0aGUgb3JpZ2luXG5cbiAgcFswXSA9IGFbMF0gLSBiWzBdO1xuICBwWzFdID0gYVsxXSAtIGJbMV07XG4gIHBbMl0gPSBhWzJdIC0gYlsyXTsgLy9wZXJmb3JtIHJvdGF0aW9uXG5cbiAgclswXSA9IHBbMF07XG4gIHJbMV0gPSBwWzFdICogTWF0aC5jb3MocmFkKSAtIHBbMl0gKiBNYXRoLnNpbihyYWQpO1xuICByWzJdID0gcFsxXSAqIE1hdGguc2luKHJhZCkgKyBwWzJdICogTWF0aC5jb3MocmFkKTsgLy90cmFuc2xhdGUgdG8gY29ycmVjdCBwb3NpdGlvblxuXG4gIG91dFswXSA9IHJbMF0gKyBiWzBdO1xuICBvdXRbMV0gPSByWzFdICsgYlsxXTtcbiAgb3V0WzJdID0gclsyXSArIGJbMl07XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogUm90YXRlIGEgM0QgdmVjdG9yIGFyb3VuZCB0aGUgeS1heGlzXHJcbiAqIEBwYXJhbSB7dmVjM30gb3V0IFRoZSByZWNlaXZpbmcgdmVjM1xyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSBUaGUgdmVjMyBwb2ludCB0byByb3RhdGVcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGIgVGhlIG9yaWdpbiBvZiB0aGUgcm90YXRpb25cclxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCBUaGUgYW5nbGUgb2Ygcm90YXRpb24gaW4gcmFkaWFuc1xyXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlWShvdXQsIGEsIGIsIHJhZCkge1xuICB2YXIgcCA9IFtdLFxuICAgICAgciA9IFtdOyAvL1RyYW5zbGF0ZSBwb2ludCB0byB0aGUgb3JpZ2luXG5cbiAgcFswXSA9IGFbMF0gLSBiWzBdO1xuICBwWzFdID0gYVsxXSAtIGJbMV07XG4gIHBbMl0gPSBhWzJdIC0gYlsyXTsgLy9wZXJmb3JtIHJvdGF0aW9uXG5cbiAgclswXSA9IHBbMl0gKiBNYXRoLnNpbihyYWQpICsgcFswXSAqIE1hdGguY29zKHJhZCk7XG4gIHJbMV0gPSBwWzFdO1xuICByWzJdID0gcFsyXSAqIE1hdGguY29zKHJhZCkgLSBwWzBdICogTWF0aC5zaW4ocmFkKTsgLy90cmFuc2xhdGUgdG8gY29ycmVjdCBwb3NpdGlvblxuXG4gIG91dFswXSA9IHJbMF0gKyBiWzBdO1xuICBvdXRbMV0gPSByWzFdICsgYlsxXTtcbiAgb3V0WzJdID0gclsyXSArIGJbMl07XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogUm90YXRlIGEgM0QgdmVjdG9yIGFyb3VuZCB0aGUgei1heGlzXHJcbiAqIEBwYXJhbSB7dmVjM30gb3V0IFRoZSByZWNlaXZpbmcgdmVjM1xyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSBUaGUgdmVjMyBwb2ludCB0byByb3RhdGVcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGIgVGhlIG9yaWdpbiBvZiB0aGUgcm90YXRpb25cclxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCBUaGUgYW5nbGUgb2Ygcm90YXRpb24gaW4gcmFkaWFuc1xyXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlWihvdXQsIGEsIGIsIHJhZCkge1xuICB2YXIgcCA9IFtdLFxuICAgICAgciA9IFtdOyAvL1RyYW5zbGF0ZSBwb2ludCB0byB0aGUgb3JpZ2luXG5cbiAgcFswXSA9IGFbMF0gLSBiWzBdO1xuICBwWzFdID0gYVsxXSAtIGJbMV07XG4gIHBbMl0gPSBhWzJdIC0gYlsyXTsgLy9wZXJmb3JtIHJvdGF0aW9uXG5cbiAgclswXSA9IHBbMF0gKiBNYXRoLmNvcyhyYWQpIC0gcFsxXSAqIE1hdGguc2luKHJhZCk7XG4gIHJbMV0gPSBwWzBdICogTWF0aC5zaW4ocmFkKSArIHBbMV0gKiBNYXRoLmNvcyhyYWQpO1xuICByWzJdID0gcFsyXTsgLy90cmFuc2xhdGUgdG8gY29ycmVjdCBwb3NpdGlvblxuXG4gIG91dFswXSA9IHJbMF0gKyBiWzBdO1xuICBvdXRbMV0gPSByWzFdICsgYlsxXTtcbiAgb3V0WzJdID0gclsyXSArIGJbMl07XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogR2V0IHRoZSBhbmdsZSBiZXR3ZWVuIHR3byAzRCB2ZWN0b3JzXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIFRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBiIFRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBUaGUgYW5nbGUgaW4gcmFkaWFuc1xyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGFuZ2xlKGEsIGIpIHtcbiAgdmFyIGF4ID0gYVswXSxcbiAgICAgIGF5ID0gYVsxXSxcbiAgICAgIGF6ID0gYVsyXSxcbiAgICAgIGJ4ID0gYlswXSxcbiAgICAgIGJ5ID0gYlsxXSxcbiAgICAgIGJ6ID0gYlsyXSxcbiAgICAgIG1hZzEgPSBNYXRoLnNxcnQoYXggKiBheCArIGF5ICogYXkgKyBheiAqIGF6KSxcbiAgICAgIG1hZzIgPSBNYXRoLnNxcnQoYnggKiBieCArIGJ5ICogYnkgKyBieiAqIGJ6KSxcbiAgICAgIG1hZyA9IG1hZzEgKiBtYWcyLFxuICAgICAgY29zaW5lID0gbWFnICYmIGRvdChhLCBiKSAvIG1hZztcbiAgcmV0dXJuIE1hdGguYWNvcyhNYXRoLm1pbihNYXRoLm1heChjb3NpbmUsIC0xKSwgMSkpO1xufVxuLyoqXHJcbiAqIFNldCB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzMgdG8gemVyb1xyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gemVybyhvdXQpIHtcbiAgb3V0WzBdID0gMC4wO1xuICBvdXRbMV0gPSAwLjA7XG4gIG91dFsyXSA9IDAuMDtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgdmVjdG9yXHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHZlY3RvciB0byByZXByZXNlbnQgYXMgYSBzdHJpbmdcclxuICogQHJldHVybnMge1N0cmluZ30gc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2ZWN0b3JcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzdHIoYSkge1xuICByZXR1cm4gXCJ2ZWMzKFwiICsgYVswXSArIFwiLCBcIiArIGFbMV0gKyBcIiwgXCIgKyBhWzJdICsgXCIpXCI7XG59XG4vKipcclxuICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgdmVjdG9ycyBoYXZlIGV4YWN0bHkgdGhlIHNhbWUgZWxlbWVudHMgaW4gdGhlIHNhbWUgcG9zaXRpb24gKHdoZW4gY29tcGFyZWQgd2l0aCA9PT0pXHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIFRoZSBmaXJzdCB2ZWN0b3IuXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBiIFRoZSBzZWNvbmQgdmVjdG9yLlxyXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmVjdG9ycyBhcmUgZXF1YWwsIGZhbHNlIG90aGVyd2lzZS5cclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBleGFjdEVxdWFscyhhLCBiKSB7XG4gIHJldHVybiBhWzBdID09PSBiWzBdICYmIGFbMV0gPT09IGJbMV0gJiYgYVsyXSA9PT0gYlsyXTtcbn1cbi8qKlxyXG4gKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSB2ZWN0b3JzIGhhdmUgYXBwcm94aW1hdGVseSB0aGUgc2FtZSBlbGVtZW50cyBpbiB0aGUgc2FtZSBwb3NpdGlvbi5cclxuICpcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgVGhlIGZpcnN0IHZlY3Rvci5cclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGIgVGhlIHNlY29uZCB2ZWN0b3IuXHJcbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmIHRoZSB2ZWN0b3JzIGFyZSBlcXVhbCwgZmFsc2Ugb3RoZXJ3aXNlLlxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGVxdWFscyhhLCBiKSB7XG4gIHZhciBhMCA9IGFbMF0sXG4gICAgICBhMSA9IGFbMV0sXG4gICAgICBhMiA9IGFbMl07XG4gIHZhciBiMCA9IGJbMF0sXG4gICAgICBiMSA9IGJbMV0sXG4gICAgICBiMiA9IGJbMl07XG4gIHJldHVybiBNYXRoLmFicyhhMCAtIGIwKSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMCksIE1hdGguYWJzKGIwKSkgJiYgTWF0aC5hYnMoYTEgLSBiMSkgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTEpLCBNYXRoLmFicyhiMSkpICYmIE1hdGguYWJzKGEyIC0gYjIpIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGEyKSwgTWF0aC5hYnMoYjIpKTtcbn1cbi8qKlxyXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzMuc3VidHJhY3R9XHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBzdWIgPSBzdWJ0cmFjdDtcbi8qKlxyXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzMubXVsdGlwbHl9XHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBtdWwgPSBtdWx0aXBseTtcbi8qKlxyXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzMuZGl2aWRlfVxyXG4gKiBAZnVuY3Rpb25cclxuICovXG5cbmV4cG9ydCB2YXIgZGl2ID0gZGl2aWRlO1xuLyoqXHJcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjMy5kaXN0YW5jZX1cclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgdmFyIGRpc3QgPSBkaXN0YW5jZTtcbi8qKlxyXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzMuc3F1YXJlZERpc3RhbmNlfVxyXG4gKiBAZnVuY3Rpb25cclxuICovXG5cbmV4cG9ydCB2YXIgc3FyRGlzdCA9IHNxdWFyZWREaXN0YW5jZTtcbi8qKlxyXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzMubGVuZ3RofVxyXG4gKiBAZnVuY3Rpb25cclxuICovXG5cbmV4cG9ydCB2YXIgbGVuID0gbGVuZ3RoO1xuLyoqXHJcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjMy5zcXVhcmVkTGVuZ3RofVxyXG4gKiBAZnVuY3Rpb25cclxuICovXG5cbmV4cG9ydCB2YXIgc3FyTGVuID0gc3F1YXJlZExlbmd0aDtcbi8qKlxyXG4gKiBQZXJmb3JtIHNvbWUgb3BlcmF0aW9uIG92ZXIgYW4gYXJyYXkgb2YgdmVjM3MuXHJcbiAqXHJcbiAqIEBwYXJhbSB7QXJyYXl9IGEgdGhlIGFycmF5IG9mIHZlY3RvcnMgdG8gaXRlcmF0ZSBvdmVyXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBzdHJpZGUgTnVtYmVyIG9mIGVsZW1lbnRzIGJldHdlZW4gdGhlIHN0YXJ0IG9mIGVhY2ggdmVjMy4gSWYgMCBhc3N1bWVzIHRpZ2h0bHkgcGFja2VkXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBvZmZzZXQgTnVtYmVyIG9mIGVsZW1lbnRzIHRvIHNraXAgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgYXJyYXlcclxuICogQHBhcmFtIHtOdW1iZXJ9IGNvdW50IE51bWJlciBvZiB2ZWMzcyB0byBpdGVyYXRlIG92ZXIuIElmIDAgaXRlcmF0ZXMgb3ZlciBlbnRpcmUgYXJyYXlcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gRnVuY3Rpb24gdG8gY2FsbCBmb3IgZWFjaCB2ZWN0b3IgaW4gdGhlIGFycmF5XHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbYXJnXSBhZGRpdGlvbmFsIGFyZ3VtZW50IHRvIHBhc3MgdG8gZm5cclxuICogQHJldHVybnMge0FycmF5fSBhXHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBmb3JFYWNoID0gZnVuY3Rpb24gKCkge1xuICB2YXIgdmVjID0gY3JlYXRlKCk7XG4gIHJldHVybiBmdW5jdGlvbiAoYSwgc3RyaWRlLCBvZmZzZXQsIGNvdW50LCBmbiwgYXJnKSB7XG4gICAgdmFyIGksIGw7XG5cbiAgICBpZiAoIXN0cmlkZSkge1xuICAgICAgc3RyaWRlID0gMztcbiAgICB9XG5cbiAgICBpZiAoIW9mZnNldCkge1xuICAgICAgb2Zmc2V0ID0gMDtcbiAgICB9XG5cbiAgICBpZiAoY291bnQpIHtcbiAgICAgIGwgPSBNYXRoLm1pbihjb3VudCAqIHN0cmlkZSArIG9mZnNldCwgYS5sZW5ndGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsID0gYS5sZW5ndGg7XG4gICAgfVxuXG4gICAgZm9yIChpID0gb2Zmc2V0OyBpIDwgbDsgaSArPSBzdHJpZGUpIHtcbiAgICAgIHZlY1swXSA9IGFbaV07XG4gICAgICB2ZWNbMV0gPSBhW2kgKyAxXTtcbiAgICAgIHZlY1syXSA9IGFbaSArIDJdO1xuICAgICAgZm4odmVjLCB2ZWMsIGFyZyk7XG4gICAgICBhW2ldID0gdmVjWzBdO1xuICAgICAgYVtpICsgMV0gPSB2ZWNbMV07XG4gICAgICBhW2kgKyAyXSA9IHZlY1syXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYTtcbiAgfTtcbn0oKTsiLCJleHBvcnQgZGVmYXVsdCBcImNvbnN0IE9jdHJlZVNpemUgPSAzMnU7XFxuXFxuc3RydWN0IENvcm5lck1hdGVyaWFscyB7XFxuICBjb3JuZXJNYXRlcmlhbHMgOiBhcnJheTx1MzI+LFxcbn07XFxuQGJpbmRpbmcoMSkgQGdyb3VwKDApIHZhcjxzdG9yYWdlLCByZWFkPiBjb3JuZXJNYXRlcmlhbHM6IENvcm5lck1hdGVyaWFscztcXG5cXG5zdHJ1Y3QgVm94ZWxNYXRlcmlhbHMge1xcbiAgdm94ZWxNYXRlcmlhbHMgOiBhcnJheTx1MzI+LFxcbn07XFxuQGJpbmRpbmcoMikgQGdyb3VwKDApIHZhcjxzdG9yYWdlLCByZWFkX3dyaXRlPiB2b3hlbE1hdGVyaWFsczogVm94ZWxNYXRlcmlhbHM7XFxuXFxuY29uc3QgQ0hJTERfTUlOX09GRlNFVFMgPSBhcnJheTx2ZWMzPHUzMj4sIDg+XFxuKFxcbiAgdmVjMzx1MzI+KDB1LCAwdSwgMHUpLFxcbiAgdmVjMzx1MzI+KDB1LCAwdSwgMXUpLFxcbiAgdmVjMzx1MzI+KDB1LCAxdSwgMHUpLFxcbiAgdmVjMzx1MzI+KDB1LCAxdSwgMXUpLFxcbiAgdmVjMzx1MzI+KDF1LCAwdSwgMHUpLFxcbiAgdmVjMzx1MzI+KDF1LCAwdSwgMXUpLFxcbiAgdmVjMzx1MzI+KDF1LCAxdSwgMHUpLFxcbiAgdmVjMzx1MzI+KDF1LCAxdSwgMXUpXFxuKTtcXG5cXG5AY29tcHV0ZSBAd29ya2dyb3VwX3NpemUoMSlcXG5mbiBtYWluKEBidWlsdGluKGdsb2JhbF9pbnZvY2F0aW9uX2lkKSBHbG9iYWxJbnZvY2F0aW9uSUQgOiB2ZWMzPHUzMj4pIHtcXG4gIGxldCBpbmRleDogdTMyID0gR2xvYmFsSW52b2NhdGlvbklELnogKiAzMnUgKiAzMnUgKyBHbG9iYWxJbnZvY2F0aW9uSUQueSAqIDMydSArIEdsb2JhbEludm9jYXRpb25JRC54O1xcblxcbiAgbGV0IG5vZGVQb3M6IHZlYzM8dTMyPiA9IHZlYzM8dTMyPihHbG9iYWxJbnZvY2F0aW9uSUQueCwgR2xvYmFsSW52b2NhdGlvbklELnksIEdsb2JhbEludm9jYXRpb25JRC56KTtcXG4gIHZhciBjb3JuZXJzOiB1MzIgPSAwdTtcXG5cXG4gIHZhciBqOiB1MzIgPSAwdTtcXG4gIGxvb3Age1xcbiAgICBpZiAoaiA+PSA4dSkgeyBicmVhazsgfVxcblxcbiAgICBsZXQgY29ybmVyUG9zOiB2ZWMzPHUzMj4gPSB2ZWMzPHUzMj4oR2xvYmFsSW52b2NhdGlvbklELnggKyBDSElMRF9NSU5fT0ZGU0VUU1tqXS54LCBHbG9iYWxJbnZvY2F0aW9uSUQueSArIENISUxEX01JTl9PRkZTRVRTW2pdLnksIEdsb2JhbEludm9jYXRpb25JRC56ICsgQ0hJTERfTUlOX09GRlNFVFNbal0ueik7XFxuICAgIGxldCBtYXRlcmlhbDogdTMyID0gbWluKDEsIGNvcm5lck1hdGVyaWFscy5jb3JuZXJNYXRlcmlhbHNbY29ybmVyUG9zLnogKiAzM3UgKiAzM3UgKyBjb3JuZXJQb3MueSAqIDMzdSArIGNvcm5lclBvcy54XSk7XFxuICAgIGNvcm5lcnMgPSBjb3JuZXJzIHwgKG1hdGVyaWFsIDw8IGopO1xcblxcbiAgICBjb250aW51aW5nIHtcXG4gICAgICBqID0gaiArIDF1O1xcbiAgICB9XFxuICB9XFxuICBcXG4gIHZveGVsTWF0ZXJpYWxzLnZveGVsTWF0ZXJpYWxzW2luZGV4XSA9IGNvcm5lcnM7XFxufVwiOyIsImV4cG9ydCBkZWZhdWx0IFwic3RydWN0IFZveGVsTWF0ZXJpYWxzIHtcXG4gIHZveGVsTWF0ZXJpYWxzIDogYXJyYXk8dTMyPixcXG59O1xcbkBiaW5kaW5nKDIpIEBncm91cCgwKSB2YXI8c3RvcmFnZSwgcmVhZD4gdm94ZWxNYXRlcmlhbHM6IFZveGVsTWF0ZXJpYWxzO1xcblxcbnN0cnVjdCBDb3JuZXJJbmRleCB7XFxuICBjb3JuZXJDb3VudCA6IHUzMixcXG4gIGNvcm5lckluZGV4ZXMgOiBhcnJheTx1MzI+LFxcbn07XFxuQGJpbmRpbmcoMykgQGdyb3VwKDApIHZhcjxzdG9yYWdlLCByZWFkX3dyaXRlPiBjb3JuZXJJbmRleDogQ29ybmVySW5kZXg7XFxuXFxuXFxuQGNvbXB1dGUgQHdvcmtncm91cF9zaXplKDEpXFxuZm4gbWFpbihAYnVpbHRpbihnbG9iYWxfaW52b2NhdGlvbl9pZCkgR2xvYmFsSW52b2NhdGlvbklEIDogdmVjMzx1MzI+KSB7XFxuXFx0dmFyIHBvc2l0aW9uOiB1MzIgPSAwdTtcXG5cXG5cXHR2YXIgaSA6IHUzMiA9IDB1O1xcblxcdGxvb3Age1xcblxcdFxcdGlmIChpID49IDMydSAqIDMydSAqIDMydSkgeyBicmVhazsgfVxcblxcdFxcdFxcblxcdFxcdGlmICh2b3hlbE1hdGVyaWFscy52b3hlbE1hdGVyaWFsc1tpXSAhPSAwdSAmJiB2b3hlbE1hdGVyaWFscy52b3hlbE1hdGVyaWFsc1tpXSAhPSAyNTV1KSB7XFxuXFx0XFx0XFx0Y29ybmVySW5kZXguY29ybmVySW5kZXhlc1twb3NpdGlvbl0gPSBpO1xcblxcdFxcdFxcdHBvc2l0aW9uID0gcG9zaXRpb24gKyAxdTsgIFxcblxcdFxcdH1cXG5cXHRcXHRcXHRcXG5cXHRcXHRjb250aW51aW5nIHsgIFxcblxcdFxcdFxcdGkgPSBpICsgMXU7XFxuXFx0XFx0fVxcblxcdH1cXG5cXG5cXHRjb3JuZXJJbmRleC5jb3JuZXJDb3VudCA9IHBvc2l0aW9uO1xcbn1cIjsiLCJleHBvcnQgZGVmYXVsdCBcInN0cnVjdCBQZXJtdXRhdGlvbnMge1xcbiAgUGVybSA6IGFycmF5PGkzMiwgNTEyPixcXG59O1xcblxcbkBiaW5kaW5nKDApIEBncm91cCgwKVxcbnZhcjxzdG9yYWdlLCByZWFkPiBwZXJtIDogUGVybXV0YXRpb25zO1xcblxcbnN0cnVjdCBDb3JuZXJNYXRlcmlhbHMge1xcbiAgY29ybmVyTWF0ZXJpYWxzIDogYXJyYXk8dTMyPixcXG59O1xcblxcbkBiaW5kaW5nKDEpIEBncm91cCgwKVxcbnZhcjxzdG9yYWdlLCByZWFkX3dyaXRlPiBjb3JuZXJNYXRlcmlhbHM6IENvcm5lck1hdGVyaWFscztcXG5cXG5zdHJ1Y3QgVm94ZWxNYXRlcmlhbHMge1xcbiAgdm94ZWxNYXRlcmlhbHMgOiBhcnJheTx1MzI+LFxcbn07XFxuXFxuQGJpbmRpbmcoMikgQGdyb3VwKDApXFxudmFyPHN0b3JhZ2UsIHJlYWRfd3JpdGU+IHZveGVsTWF0ZXJpYWxzOiBWb3hlbE1hdGVyaWFscztcXG5cXG5zdHJ1Y3QgQ29ybmVySW5kZXgge1xcbiAgY29ybmVyQ291bnQgOiB1MzIsXFxuICBjb3JuZXJJbmRleGVzIDogYXJyYXk8dTMyPlxcbn07XFxuXFxuQGJpbmRpbmcoMykgQGdyb3VwKDApXFxudmFyPHN0b3JhZ2UsIHJlYWRfd3JpdGU+IGNvcm5lckluZGV4OiBDb3JuZXJJbmRleDtcXG5cXG5zdHJ1Y3QgR1BVVk9YXFxue1xcblxcdHZveE1pbjogdmVjMzxmMzI+LFxcblxcdGNvcm5lcnM6IGYzMixcXG5cXHR2ZXJ0UG9pbnQ6IHZlYzM8ZjMyPixcXG5cXHRhdmdOb3JtYWw6IHZlYzM8ZjMyPixcXG5cXHRudW1Qb2ludHM6IGYzMlxcbn07XFxuc3RydWN0IEdQVVZPWFMge1xcbiAgdm94ZWxzIDogYXJyYXk8R1BVVk9YPixcXG59O1xcblxcbkBiaW5kaW5nKDQpIEBncm91cCgwKVxcbnZhcjxzdG9yYWdlLCByZWFkX3dyaXRlPiB2b3hlbHM6IEdQVVZPWFM7XFxuXFxuc3RydWN0IFVuaWZvcm1CdWZmZXJPYmplY3Qge1xcbiAgY2h1bmtQb3NpdGlvbiA6IHZlYzM8ZjMyPixcXG4gIHN0cmlkZSA6IGYzMixcXG5cXHR3aWR0aDogdTMyXFxufTtcXG5cXG5AYmluZGluZyg1KSBAZ3JvdXAoMClcXG52YXI8dW5pZm9ybT4gdW5pZm9ybXMgOiBVbmlmb3JtQnVmZmVyT2JqZWN0O1xcblxcbmNvbnN0IENISUxEX01JTl9PRkZTRVRTOiBhcnJheTx2ZWMzPHUzMj4sIDg+ID0gYXJyYXk8dmVjMzx1MzI+LCA4PlxcbihcXG4gIHZlYzM8dTMyPigwdSwgMHUsIDB1KSxcXG4gIHZlYzM8dTMyPigwdSwgMHUsIDF1KSxcXG4gIHZlYzM8dTMyPigwdSwgMXUsIDB1KSxcXG4gIHZlYzM8dTMyPigwdSwgMXUsIDF1KSxcXG4gIHZlYzM8dTMyPigxdSwgMHUsIDB1KSxcXG4gIHZlYzM8dTMyPigxdSwgMHUsIDF1KSxcXG4gIHZlYzM8dTMyPigxdSwgMXUsIDB1KSxcXG4gIHZlYzM8dTMyPigxdSwgMXUsIDF1KVxcbik7XFxuXFxuY29uc3QgZWRnZXZtYXA6IGFycmF5PHZlYzI8aTMyPiwgMTI+ID0gYXJyYXk8dmVjMjxpMzI+LCAxMj5cXG4oXFxuXFx0dmVjMjxpMzI+KDAsNCksIHZlYzI8aTMyPigxLDUpLCB2ZWMyPGkzMj4oMiw2KSwgdmVjMjxpMzI+KDMsNyksXFxuXFx0dmVjMjxpMzI+KDAsMiksIHZlYzI8aTMyPigxLDMpLCB2ZWMyPGkzMj4oNCw2KSwgdmVjMjxpMzI+KDUsNyksXFxuXFx0dmVjMjxpMzI+KDAsMSksIHZlYzI8aTMyPigyLDMpLCB2ZWMyPGkzMj4oNCw1KSwgdmVjMjxpMzI+KDYsNylcXG4pO1xcblxcbmZuIHJhbmRvbShpOiB2ZWMyPGYzMj4pIC0+IGYzMiB7XFxuICByZXR1cm4gZnJhY3Qoc2luKGRvdChpLHZlYzIoMTIuOTg5OCw3OC4yMzMpKSkqNDM3NTguNTQ1MzEyMyk7XFxufVxcblxcbmZuIFZlYzNEb3QoYTogdmVjMzxmMzI+LCBiOiB2ZWMzPGYzMj4pIC0+IGYzMlxcbntcXG5cXHRyZXR1cm4gKGEueCAqIGIueCkgKyAoYS55ICogYi55KSArIChhLnogKiBiLnopO1xcbn1cXG5cXG5jb25zdCBHcmFkMzogYXJyYXk8dmVjMzxmMzI+LCAxMj4gPSBhcnJheTx2ZWMzPGYzMj4sIDEyPihcXG5cXHR2ZWMzPGYzMj4oMS4wLDEuMCwwLjApLCB2ZWMzPGYzMj4oLTEuMCwxLjAsMC4wKSwgdmVjMzxmMzI+KDEuMCwtMS4wLDAuMCksIHZlYzM8ZjMyPigtMS4wLC0xLjAsMC4wKSxcXG5cXHR2ZWMzPGYzMj4oMS4wLDAuMCwxLjApLCB2ZWMzPGYzMj4oLTEuMCwwLjAsMS4wKSwgdmVjMzxmMzI+KDEuMCwwLjAsLTEuMCksIHZlYzM8ZjMyPigtMS4wLDAuMCwtMS4wKSxcXG5cXHR2ZWMzPGYzMj4oMC4wLDEuMCwxLjApLCB2ZWMzPGYzMj4oMC4wLC0xLjAsMS4wKSwgdmVjMzxmMzI+KDAuMCwxLjAsLTEuMCksIHZlYzM8ZjMyPigwLjAsLTEuMCwtMS4wKVxcbik7XFxuXFxuZm4gUGVybGluKHgxOiBmMzIsIHkxOiBmMzIsIHoxOiBmMzIpIC0+IGYzMlxcbntcXG5cXHR2YXIgWDogaTMyID0gMDtcXG5cXHRpZiAoeDEgPiAwLjApIHtcXG5cXHRcXHRYID0gaTMyKHgxKTtcXG5cXHR9IGVsc2Uge1xcblxcdFxcdFggPSBpMzIoeDEpIC0gMTtcXG5cXHR9XFxuXFxuXFx0dmFyIFk6IGkzMiA9IDA7XFxuXFx0aWYgKHkxID4gMC4wKSB7XFxuXFx0XFx0WSA9IGkzMih5MSk7XFxuXFx0fSBlbHNlIHtcXG5cXHRcXHRZID0gaTMyKHkxKSAtIDE7XFxuXFx0fVxcblxcblxcdHZhciBaOiBpMzIgPSAwO1xcblxcdGlmICh6MSA+IDAuMCkge1xcblxcdFxcdFogPSBpMzIoejEpO1xcblxcdH0gZWxzZSB7XFxuXFx0XFx0WiA9IGkzMih6MSkgLSAxO1xcblxcdH1cXG5cXHRcXG5cXHRsZXQgeDogZjMyID0geDEgLSBmMzIoWCk7XFxuXFx0bGV0IHk6IGYzMiA9IHkxIC0gZjMyKFkpO1xcblxcdGxldCB6OiBmMzIgPSB6MSAtIGYzMihaKTtcXG5cXHRcXG5cXHRYID0gWCAmIDI1NTtcXG5cXHRZID0gWSAmIDI1NTtcXG5cXHRaID0gWiAmIDI1NTtcXG5cXHRcXG5cXHRsZXQgZ2kwMDA6IGkzMiA9IChwZXJtLlBlcm1bWCArIHBlcm0uUGVybVtZICsgcGVybS5QZXJtW1pdIF0gXSAlIDEyKTtcXG5cXHRsZXQgZ2kwMDE6IGkzMiA9IChwZXJtLlBlcm1bWCArIHBlcm0uUGVybVtZICsgcGVybS5QZXJtW1ogKyAxXSBdIF0gJSAxMik7XFxuXFx0bGV0IGdpMDEwOiBpMzIgPSAocGVybS5QZXJtW1ggKyBwZXJtLlBlcm1bWSArIDEgKyBwZXJtLlBlcm1bWl0gXSBdICUgMTIpO1xcblxcdGxldCBnaTAxMTogaTMyID0gKHBlcm0uUGVybVtYICsgcGVybS5QZXJtW1kgKyAxICsgcGVybS5QZXJtW1ogKyAxXSBdIF0gJSAxMik7XFxuXFx0bGV0IGdpMTAwOiBpMzIgPSAocGVybS5QZXJtW1ggKyAxICsgcGVybS5QZXJtW1kgKyBwZXJtLlBlcm1bWl0gXSBdICUgMTIpO1xcblxcdGxldCBnaTEwMTogaTMyID0gKHBlcm0uUGVybVtYICsgMSArIHBlcm0uUGVybVtZICsgcGVybS5QZXJtW1ogKyAxXSBdIF0gJSAxMik7XFxuXFx0bGV0IGdpMTEwOiBpMzIgPSAocGVybS5QZXJtW1ggKyAxICsgcGVybS5QZXJtW1kgKyAxICsgcGVybS5QZXJtW1pdIF0gXSAlIDEyKTtcXG5cXHRsZXQgZ2kxMTE6IGkzMiA9IChwZXJtLlBlcm1bWCArIDEgKyBwZXJtLlBlcm1bWSArIDEgKyBwZXJtLlBlcm1bWiArIDFdIF0gXSAlIDEyKTtcXG5cXG5cXHRsZXQgbjAwMDogZjMyID0gZG90KEdyYWQzW2dpMDAwXSwgdmVjMzxmMzI+KHgsIHksIHopKTtcXG5cXHRsZXQgbjEwMDogZjMyID0gZG90KEdyYWQzW2dpMTAwXSwgdmVjMzxmMzI+KHggLSAxLjAsIHksIHopKTtcXG5cXHRsZXQgbjAxMDogZjMyID0gZG90KEdyYWQzW2dpMDEwXSwgdmVjMzxmMzI+KHgsIHkgLSAxLjAsIHopKTtcXG5cXHRsZXQgbjExMDogZjMyID0gZG90KEdyYWQzW2dpMTEwXSwgdmVjMzxmMzI+KHggLSAxLjAsIHkgLSAxLjAsIHopKTtcXG5cXHRsZXQgbjAwMTogZjMyID0gZG90KEdyYWQzW2dpMDAxXSwgdmVjMzxmMzI+KHgsIHksIHogLSAxLjApKTtcXG5cXHRsZXQgbjEwMTogZjMyID0gZG90KEdyYWQzW2dpMTAxXSwgdmVjMzxmMzI+KHggLSAxLjAsIHksIHogLSAxLjApKTtcXG5cXHRsZXQgbjAxMTogZjMyID0gZG90KEdyYWQzW2dpMDExXSwgdmVjMzxmMzI+KHgsIHkgLSAxLjAsIHogLSAxLjApKTtcXG5cXHRsZXQgbjExMTogZjMyID0gZG90KEdyYWQzW2dpMTExXSwgdmVjMzxmMzI+KHggLSAxLjAsIHkgLSAxLjAsIHogLSAxLjApKTtcXG5cXHRcXG5cXHRsZXQgdTogZjMyID0gZjMyKHggKiB4ICogeCAqICh4ICogKHggKiA2LjAgLSAxNS4wKSArIDEwLjApKTtcXG5cXHRsZXQgdjogZjMyID0gZjMyKHkgKiB5ICogeSAqICh5ICogKHkgKiA2LjAgLSAxNS4wKSArIDEwLjApKTtcXG5cXHRsZXQgdzogZjMyID0gZjMyKHogKiB6ICogeiAqICh6ICogKHogKiA2LjAgLSAxNS4wKSArIDEwLjApKTtcXG5cXHRsZXQgbngwMDogZjMyID0gbWl4KG4wMDAsIG4xMDAsIHUpO1xcblxcdGxldCBueDAxOiBmMzIgPSBtaXgobjAwMSwgbjEwMSwgdSk7XFxuXFx0bGV0IG54MTA6IGYzMiA9IG1peChuMDEwLCBuMTEwLCB1KTtcXG5cXHRsZXQgbngxMTogZjMyID0gbWl4KG4wMTEsIG4xMTEsIHUpO1xcblxcdGxldCBueHkwOiBmMzIgPSBtaXgobngwMCwgbngxMCwgdik7XFxuXFx0bGV0IG54eTE6IGYzMiA9IG1peChueDAxLCBueDExLCB2KTtcXG5cXHRsZXQgbnh5ejogZjMyID0gbWl4KG54eTAsIG54eTEsIHcpO1xcblxcdFxcblxcdHJldHVybiBueHl6O1xcbn1cXG5cXG5mbiBGcmFjdGFsTm9pc2Uob2N0YXZlczogaTMyLCBmcmVxdWVuY3k6IGYzMiwgbGFjdW5hcml0eTogZjMyLCBwZXJzaXN0ZW5jZTogZjMyLCBwb3NpdGlvbjogdmVjMzxmMzI+KSAtPiBmMzJcXG57XFxuXFx0bGV0IFNDQUxFOiBmMzIgPSAxLjAgLyAxMjguMDtcXG5cXHR2YXIgcDogdmVjMzxmMzI+ID0gcG9zaXRpb24gKiBTQ0FMRTtcXG5cXHR2YXIgbm9pczogZjMyID0gMC4wO1xcblxcblxcdHZhciBhbXBsaXR1ZGU6IGYzMiA9IDEuMDtcXG5cXHRwID0gcCAqIGZyZXF1ZW5jeTtcXG5cXG5cXHR2YXIgaTogaTMyID0gMDtcXG5cXHRsb29wIHtcXG5cXHRcXHRpZiAoaSA+PSBvY3RhdmVzKSB7IGJyZWFrOyB9XFxuXFxuXFx0XFx0bm9pcyA9IG5vaXMgKyBQZXJsaW4ocC54LCBwLnksIHAueikgKiBhbXBsaXR1ZGU7XFxuXFx0XFx0cCA9IHAgKiBsYWN1bmFyaXR5O1xcblxcdFxcdGFtcGxpdHVkZSA9IGFtcGxpdHVkZSAqIHBlcnNpc3RlbmNlO1xcblxcblxcdFxcdGNvbnRpbnVpbmcge1xcblxcdFxcdFxcdGkgPSBpICsgMTtcXG5cXHRcXHR9XFxuXFx0fVxcblxcdFxcblxcdHJldHVybiBub2lzO1xcbn1cXG5cXG5mbiBGcmFjdGFsTm9pc2UxKGZyZXF1ZW5jeTogZjMyLCBsYWN1bmFyaXR5OiBmMzIsIHBlcnNpc3RlbmNlOiBmMzIsIHBvc2l0aW9uOiB2ZWMzPGYzMj4pIC0+IGYzMlxcbntcXG5cXHRsZXQgU0NBTEU6IGYzMiA9IDEuMCAvIDEyOC4wO1xcblxcdHZhciBwOiB2ZWMzPGYzMj4gPSBwb3NpdGlvbiAqIFNDQUxFO1xcblxcdHZhciBub2lzOiBmMzIgPSAwLjA7XFxuXFxuXFx0dmFyIGFtcGxpdHVkZTogZjMyID0gMS4wO1xcblxcdHAgPSBwICogZnJlcXVlbmN5O1xcblxcdFxcblxcdG5vaXMgPSBub2lzICsgUGVybGluKHAueCwgcC55LCBwLnopICogYW1wbGl0dWRlO1xcblxcdHAgPSBwICogbGFjdW5hcml0eTtcXG5cXHRhbXBsaXR1ZGUgPSBhbXBsaXR1ZGUgKiBwZXJzaXN0ZW5jZTtcXG5cXHRcXG5cXHRyZXR1cm4gbm9pcztcXG59XFxuXFxuZm4gQ2FsY3VsYXRlTm9pc2VWYWx1ZShwb3M6IHZlYzM8ZjMyPiwgc2NhbGU6IGYzMikgLT4gZjMyXFxue1xcblxcdHJldHVybiBGcmFjdGFsTm9pc2UoNCwgMC41MzQzLCAyLjIzMjQsIDAuNjgzMjQsIHBvcyAqIHNjYWxlKTtcXG59XFxuXFxuZm4gQ0xlcnAoYTogZjMyLCBiOiBmMzIsIHQ6IGYzMikgLT4gZjMyXFxue1xcblxcdHJldHVybiAoMS4wIC0gdCkgKiBhICsgdCAqIGI7XFxufVxcblxcbi8vIFNWRFxcblxcbmNvbnN0IFNWRF9OVU1fU1dFRVBTOiBpMzIgPSA0O1xcbmNvbnN0IFBTVUVET19JTlZFUlNFX1RIUkVTSE9MRDogZjMyID0gMC4wMDAwMDAwMTtcXG5cXG5mbiBzdmRfbXVsX21hdHJpeF92ZWMobTogbWF0M3gzPGYzMj4sIGI6IHZlYzQ8ZjMyPikgLT4gdmVjNDxmMzI+XFxue1xcblxcdHZhciBhOiBtYXQzeDM8ZjMyPiA9IG07XFxuXFx0XFxuXFx0cmV0dXJuIHZlYzQ8ZjMyPihcXG5cXHRcXHRkb3QodmVjNDxmMzI+KGFbMF1bMF0sIGFbMF1bMV0sIGFbMF1bMl0sIDAuMCksIGIpLFxcblxcdFxcdGRvdCh2ZWM0PGYzMj4oYVsxXVswXSwgYVsxXVsxXSwgYVsxXVsyXSwgMC4wKSwgYiksXFxuXFx0XFx0ZG90KHZlYzQ8ZjMyPihhWzJdWzBdLCBhWzJdWzFdLCBhWzJdWzJdLCAwLjApLCBiKSxcXG5cXHRcXHQwLjBcXG5cXHQpO1xcbn1cXG5cXG5mbiBnaXZlbnNfY29lZmZzX3N5bShhX3BwOiBmMzIsIGFfcHE6IGYzMiwgYV9xcTogZjMyKSAtPiB2ZWMyPGYzMj5cXG57XFxuXFx0aWYgKGFfcHEgPT0gMC4wKSB7XFxuXFx0XFx0cmV0dXJuIHZlYzI8ZjMyPigxLjAsIDAuMCk7XFxuXFx0fVxcblxcdFxcblxcdGxldCB0YXU6IGYzMiA9IChhX3FxIC0gYV9wcCkgLyAoMi4wICogYV9wcSk7XFxuXFx0bGV0IHN0dDogZjMyID0gc3FydCgxLjAgKyB0YXUgKiB0YXUpO1xcblxcdHZhciB0YW46IGYzMjtcXG5cXHRpZiAoKHRhdSA+PSAwLjApKSB7XFxuXFx0XFx0dGFuID0gKHRhdSArIHN0dCk7XFxuXFx0fSBlbHNlIHtcXG5cXHRcXHR0YW4gPSAodGF1IC0gc3R0KTtcXG5cXHR9XFxuXFx0dGFuID0gMS4wIC8gdGFuO1xcblxcblxcdGxldCBjOiBmMzIgPSBpbnZlcnNlU3FydCgxLjAgKyB0YW4gKiB0YW4pO1xcblxcdGxldCBzOiBmMzIgPSB0YW4gKiBjO1xcblxcblxcdHJldHVybiB2ZWMyPGYzMj4oYywgcyk7XFxufVxcblxcbmZuIHN2ZF9yb3RhdGVfeHkoeDogZjMyLCB5OiBmMzIsIGM6IGYzMiwgczogZjMyKSAtPiB2ZWMyPGYzMj5cXG57XFxuXFx0cmV0dXJuIHZlYzI8ZjMyPihjICogeCAtIHMgKiB5LCBzICogeCArIGMgKiB5KTtcXG59XFxuXFxuZm4gc3ZkX3JvdGF0ZXFfeHkoeDogZjMyLCB5OiBmMzIsIHo6IGYzMiwgYzogZjMyLCBzOiBmMzIpIC0+IHZlYzI8ZjMyPlxcbntcXG5cXHRsZXQgY2M6IGYzMiA9IGMgKiBjO1xcblxcdGxldCBzczogZjMyID0gcyAqIHM7XFxuXFx0bGV0IG14OiBmMzIgPSAyLjAgKiBjICogcyAqIHo7XFxuXFxuXFx0cmV0dXJuIHZlYzI8ZjMyPihcXG5cXHRcXHRjYyAqIHggLSBteCArIHNzICogeSxcXG5cXHRcXHRzcyAqIHggKyBteCArIGNjICogelxcblxcdCk7XFxufVxcblxcbnZhcjxwcml2YXRlPiB2dGF2OiBtYXQzeDM8ZjMyPjtcXG52YXI8cHJpdmF0ZT4gdjogbWF0M3gzPGYzMj47XFxudmFyPHByaXZhdGU+IEFUQTogYXJyYXk8ZjMyLCA2PjtcXG52YXI8cHJpdmF0ZT4gQXRiOiB2ZWM0PGYzMj47XFxudmFyPHByaXZhdGU+IHBvaW50YWNjdW06IHZlYzQ8ZjMyPjtcXG52YXI8cHJpdmF0ZT4gYnRiOiBmMzI7XFxuXFxuZm4gc3ZkX3JvdGF0ZShhOiBpMzIsIGI6IGkzMilcXG57XFxuXFx0aWYgKHZ0YXZbYV1bYl0gPT0gMC4wKSB7IHJldHVybjsgfVxcblxcblxcblxcdFxcblxcdGxldCBjb2VmZnM6IHZlYzI8ZjMyPiA9IGdpdmVuc19jb2VmZnNfc3ltKHZ0YXZbYV1bYV0sIHZ0YXZbYV1bYl0sIHZ0YXZbYl1bYl0pO1xcblxcdGxldCBjOiBmMzIgPSBjb2VmZnMueDtcXG5cXHRsZXQgczogZjMyID0gY29lZmZzLnk7XFxuXFx0XFxuXFx0bGV0IHJvdDE6IHZlYzI8ZjMyPiA9IHN2ZF9yb3RhdGVxX3h5KHZ0YXZbYV1bYV0sIHZ0YXZbYl1bYl0sIHZ0YXZbYV1bYl0sIGMsIHMpO1xcblxcdHZ0YXZbYV1bYV0gPSByb3QxLng7XFxuXFx0dnRhdltiXVtiXSA9IHJvdDEueTtcXG5cXHRcXG5cXHRsZXQgcm90MjogdmVjMjxmMzI+ID0gc3ZkX3JvdGF0ZV94eSh2dGF2WzBdWzMtYl0sIHZ0YXZbMS1hXVsyXSwgYywgcyk7XFxuXFx0dnRhdlswXVszLWJdID0gcm90Mi54OyBcXG5cXHR2dGF2WzEtYV1bMl0gPSByb3QyLnk7XFxuXFx0XFxuXFx0dnRhdlthXVtiXSA9IDAuMDtcXG5cXHRcXG5cXHRsZXQgcm90MzogdmVjMjxmMzI+ID0gc3ZkX3JvdGF0ZV94eSh2WzBdW2FdLCB2WzBdW2JdLCBjLCBzKTtcXG5cXHR2WzBdW2FdID0gcm90My54OyB2WzBdW2JdID0gcm90My55O1xcblxcdFxcblxcdGxldCByb3Q0OiB2ZWMyPGYzMj4gPSBzdmRfcm90YXRlX3h5KHZbMV1bYV0sIHZbMV1bYl0sIGMsIHMpO1xcblxcdHZbMV1bYV0gPSByb3Q0Lng7IHZbMV1bYl0gPSByb3Q0Lnk7XFxuXFx0XFxuXFx0bGV0IHJvdDU6IHZlYzI8ZjMyPiA9IHN2ZF9yb3RhdGVfeHkodlsyXVthXSwgdlsyXVtiXSwgYywgcyk7XFxuXFx0dlsyXVthXSA9IHJvdDUueDsgdlsyXVtiXSA9IHJvdDUueTtcXG59XFxuXFxuZm4gc3ZkX3NvbHZlX3N5bShiOiBhcnJheTxmMzIsIDY+KSAtPiB2ZWM0PGYzMj5cXG57XFxuXFx0dmFyIGE6IGFycmF5PGYzMiwgNj4gPSBiO1xcblxcdFxcblxcdHZ0YXYgPSBtYXQzeDM8ZjMyPiggXFxuXFx0XFx0dmVjMzxmMzI+KGFbMF0sIGFbMV0sIGFbMl0pLCBcXG5cXHRcXHR2ZWMzPGYzMj4oMC4wLCBhWzNdLCBhWzRdKSwgXFxuXFx0XFx0dmVjMzxmMzI+KDAuMCwgMC4wLCBhWzVdKVxcblxcdCk7XFxuXFxuXFx0dmFyIGk6IGkzMjtcXG5cXHRsb29wIHtcXG5cXHRcXHRpZiAoaSA+PSBTVkRfTlVNX1NXRUVQUykgeyBicmVhazsgfVxcblxcblxcdFxcdHN2ZF9yb3RhdGUoMCwgMSk7XFxuXFx0XFx0c3ZkX3JvdGF0ZSgwLCAyKTtcXG5cXHRcXHRzdmRfcm90YXRlKDEsIDIpO1xcblxcblxcdFxcdGNvbnRpbnVpbmcge1xcblxcdFxcdFxcdGkgPSBpICsgMTtcXG5cXHRcXHR9XFxuXFx0fVxcblxcblxcdHZhciBjb3B5OiBtYXQzeDM8ZjMyPiA9IHZ0YXY7XFxuXFx0cmV0dXJuIHZlYzQ8ZjMyPihjb3B5WzBdWzBdLCBjb3B5WzFdWzFdLCBjb3B5WzJdWzJdLCAwLjApO1xcbn1cXG5cXG5cXG5mbiBzdmRfaW52ZGV0KHg6IGYzMiwgdG9sOiBmMzIpIC0+IGYzMlxcbntcXG5cXHRpZiAoYWJzKHgpIDwgdG9sIHx8IGFicygxLjAgLyB4KSA8IHRvbCkge1xcblxcdFxcdHJldHVybiAwLjA7XFxuXFx0fVxcblxcdHJldHVybiAoMS4wIC8geCk7XFxufVxcblxcbmZuIHN2ZF9wc2V1ZG9pbnZlcnNlKHNpZ21hOiB2ZWM0PGYzMj4sIGM6IG1hdDN4MzxmMzI+KSAtPiBtYXQzeDM8ZjMyPlxcbntcXG5cXHRsZXQgZDA6IGYzMiA9IHN2ZF9pbnZkZXQoc2lnbWEueCwgUFNVRURPX0lOVkVSU0VfVEhSRVNIT0xEKTtcXG5cXHRsZXQgZDE6IGYzMiA9IHN2ZF9pbnZkZXQoc2lnbWEueSwgUFNVRURPX0lOVkVSU0VfVEhSRVNIT0xEKTtcXG5cXHRsZXQgZDI6IGYzMiA9IHN2ZF9pbnZkZXQoc2lnbWEueiwgUFNVRURPX0lOVkVSU0VfVEhSRVNIT0xEKTtcXG5cXG5cXHR2YXIgY29weTogbWF0M3gzPGYzMj4gPSBjO1xcblxcblxcdHJldHVybiBtYXQzeDM8ZjMyPiAoXFxuXFx0XFx0dmVjMzxmMzI+KFxcblxcdFxcdFxcdGNvcHlbMF1bMF0gKiBkMCAqIGNvcHlbMF1bMF0gKyBjb3B5WzBdWzFdICogZDEgKiBjb3B5WzBdWzFdICsgY29weVswXVsyXSAqIGQyICogY29weVswXVsyXSxcXG5cXHRcXHRcXHRjb3B5WzBdWzBdICogZDAgKiBjb3B5WzFdWzBdICsgY29weVswXVsxXSAqIGQxICogY29weVsxXVsxXSArIGNvcHlbMF1bMl0gKiBkMiAqIGNvcHlbMV1bMl0sXFxuXFx0XFx0XFx0Y29weVswXVswXSAqIGQwICogY29weVsyXVswXSArIGNvcHlbMF1bMV0gKiBkMSAqIGNvcHlbMl1bMV0gKyBjb3B5WzBdWzJdICogZDIgKiBjb3B5WzJdWzJdXFxuXFx0XFx0KSxcXG5cXHRcXHR2ZWMzPGYzMj4oXFxuXFx0XFx0XFx0Y29weVsxXVswXSAqIGQwICogY29weVswXVswXSArIGNvcHlbMV1bMV0gKiBkMSAqIGNvcHlbMF1bMV0gKyBjb3B5WzFdWzJdICogZDIgKiBjb3B5WzBdWzJdLFxcblxcdFxcdFxcdGNvcHlbMV1bMF0gKiBkMCAqIGNvcHlbMV1bMF0gKyBjb3B5WzFdWzFdICogZDEgKiBjb3B5WzFdWzFdICsgY29weVsxXVsyXSAqIGQyICogY29weVsxXVsyXSxcXG5cXHRcXHRcXHRjb3B5WzFdWzBdICogZDAgKiBjb3B5WzJdWzBdICsgY29weVsxXVsxXSAqIGQxICogY29weVsyXVsxXSArIGNvcHlbMV1bMl0gKiBkMiAqIGNvcHlbMl1bMl1cXG5cXHRcXHQpLFxcblxcdFxcdHZlYzM8ZjMyPihcXG5cXHRcXHRcXHRjb3B5WzJdWzBdICogZDAgKiBjb3B5WzBdWzBdICsgY29weVsyXVsxXSAqIGQxICogY29weVswXVsxXSArIGNvcHlbMl1bMl0gKiBkMiAqIGNvcHlbMF1bMl0sXFxuXFx0XFx0XFx0Y29weVsyXVswXSAqIGQwICogY29weVsxXVswXSArIGNvcHlbMl1bMV0gKiBkMSAqIGNvcHlbMV1bMV0gKyBjb3B5WzJdWzJdICogZDIgKiBjb3B5WzFdWzJdLFxcblxcdFxcdFxcdGNvcHlbMl1bMF0gKiBkMCAqIGNvcHlbMl1bMF0gKyBjb3B5WzJdWzFdICogZDEgKiBjb3B5WzJdWzFdICsgY29weVsyXVsyXSAqIGQyICogY29weVsyXVsyXVxcblxcdFxcdCksXFxuXFx0KTtcXG59XFxuXFxuZm4gc3ZkX3NvbHZlX0FUQV9BdGIoYTogdmVjNDxmMzI+KSAtPiB2ZWM0PGYzMj5cXG57XFxuXFx0diA9IG1hdDN4MzxmMzI+KHZlYzM8ZjMyPigxLjAsIDAuMCwgMC4wKSwgdmVjMzxmMzI+KDAuMCwgMS4wLCAwLjApLCB2ZWMzPGYzMj4oMC4wLCAwLjAsIDEuMCkpO1xcblxcdFxcblxcdGxldCBzaWdtYTogdmVjNDxmMzI+ID0gc3ZkX3NvbHZlX3N5bShBVEEpO1xcblxcdFxcblxcdGxldCBWaW52OiBtYXQzeDM8ZjMyPiA9IHN2ZF9wc2V1ZG9pbnZlcnNlKHNpZ21hLCB2KTtcXG5cXHRyZXR1cm4gc3ZkX211bF9tYXRyaXhfdmVjKFZpbnYsIGEpO1xcbn1cXG5cXG5mbiBzdmRfdm11bF9zeW0odjogdmVjNDxmMzI+KSAtPiB2ZWM0PGYzMj5cXG57XFxuXFx0bGV0IEFfcm93X3g6IHZlYzQ8ZjMyPiA9IHZlYzQ8ZjMyPihBVEFbMF0sIEFUQVsxXSwgQVRBWzJdLCAwLjApO1xcblxcdHJldHVybiB2ZWM0PGYzMj4gKFxcblxcdFxcdGRvdChBX3Jvd194LCB2KSxcXG5cXHRcXHRBVEFbMV0gKiB2LnggKyBBVEFbM10gKiB2LnkgKyBBVEFbNF0gKiB2LnosXFxuXFx0XFx0QVRBWzJdICogdi54ICsgQVRBWzRdICogdi55ICsgQVRBWzVdICogdi56LFxcblxcdFxcdDAuMFxcblxcdCk7XFxufVxcblxcblxcbi8vIC8vIFFFRlxcblxcbmZuIHFlZl9hZGQobjogdmVjNDxmMzI+LCBwOiB2ZWM0PGYzMj4pXFxue1xcblxcdEFUQVswXSA9IEFUQVswXSArIG4ueCAqIG4ueDtcXG5cXHRBVEFbMV0gPSBBVEFbMV0gKyBuLnggKiBuLnk7XFxuXFx0QVRBWzJdID0gQVRBWzJdICsgbi54ICogbi56O1xcblxcdEFUQVszXSA9IEFUQVszXSArIG4ueSAqIG4ueTtcXG5cXHRBVEFbNF0gPSBBVEFbNF0gKyBuLnkgKiBuLno7XFxuXFx0QVRBWzVdID0gQVRBWzVdICsgbi56ICogbi56O1xcblxcdFxcblxcdGxldCBiOiBmMzIgPSBkb3QocCwgbik7XFxuXFx0QXRiLnggPSBBdGIueCArbi54ICogYjtcXG5cXHRBdGIueSA9IEF0Yi55ICtuLnkgKiBiO1xcblxcdEF0Yi56ID0gQXRiLnogK24ueiAqIGI7XFxuXFx0YnRiID0gYnRiICsgYiAqIGI7XFxuXFx0XFxuXFx0cG9pbnRhY2N1bS54ID0gcG9pbnRhY2N1bS54ICtwLng7XFxuXFx0cG9pbnRhY2N1bS55ID0gcG9pbnRhY2N1bS55ICtwLnk7XFxuXFx0cG9pbnRhY2N1bS56ID0gcG9pbnRhY2N1bS56ICtwLno7XFxuXFx0cG9pbnRhY2N1bS53ID0gcG9pbnRhY2N1bS53ICsxLjA7XFxufVxcblxcbmZuIHFlZl9jYWxjX2Vycm9yKHg6IHZlYzQ8ZjMyPikgLT4gZjMyXFxue1xcblxcdHZhciB0bXA6IHZlYzQ8ZjMyPiA9IHN2ZF92bXVsX3N5bSh4KTtcXG5cXHR0bXAgPSBBdGIgLSB0bXA7XFxuXFx0XFxuXFx0cmV0dXJuIGRvdCh0bXAsIHRtcCk7XFxufVxcblxcbmZuIHFlZl9zb2x2ZSgpIC0+IHZlYzQ8ZjMyPlxcbntcXG5cXHRsZXQgbWFzc3BvaW50OiB2ZWM0PGYzMj4gPSB2ZWM0PGYzMj4ocG9pbnRhY2N1bS54IC8gcG9pbnRhY2N1bS53LCBwb2ludGFjY3VtLnkgLyBwb2ludGFjY3VtLncsIHBvaW50YWNjdW0ueiAvIHBvaW50YWNjdW0udywgcG9pbnRhY2N1bS53IC8gcG9pbnRhY2N1bS53KTtcXG5cXHRcXG5cXHR2YXIgQV9tcDogdmVjNDxmMzI+ID0gc3ZkX3ZtdWxfc3ltKG1hc3Nwb2ludCk7XFxuXFx0QV9tcCA9IEF0YiAtIEFfbXA7XFxuXFx0XFxuXFx0bGV0IHg6IHZlYzQ8ZjMyPiA9IHN2ZF9zb2x2ZV9BVEFfQXRiKEFfbXApO1xcblxcdFxcblxcdGxldCBlcnJvcjogZjMyID0gcWVmX2NhbGNfZXJyb3IoeCk7XFxuXFx0bGV0IHI6IHZlYzQ8ZjMyPiA9IHggKyBtYXNzcG9pbnQ7XFxuXFx0XFxuXFx0cmV0dXJuIHZlYzQ8ZjMyPihyLngsIHIueSwgci56LCBlcnJvcik7XFxufVxcblxcbiNpbXBvcnQgZGVuc2l0eVxcblxcbmZuIEFwcHJveGltYXRlWmVyb0Nyb3NzaW5nUG9zaXRpb24ocDA6IHZlYzM8ZjMyPiwgcDE6IHZlYzM8ZjMyPikgLT4gdmVjMzxmMzI+XFxue1xcblxcdHZhciBtaW5WYWx1ZTogZjMyID0gMTAwMDAwLjA7XFxuXFx0dmFyIHQ6IGYzMiA9IDAuMDtcXG5cXHR2YXIgY3VycmVudFQ6IGYzMiA9IDAuMDtcXG5cXHRsZXQgc3RlcHM6IGYzMiA9IDguMDtcXG5cXHRsZXQgaW5jcmVtZW50OiBmMzIgPSAxLjAgLyBzdGVwcztcXG5cXHRsb29wIHtcXG5cXHRcXHRpZiAoY3VycmVudFQgPiAxLjApIHsgYnJlYWs7IH1cXG5cXG5cXHRcXHRsZXQgcDogdmVjMzxmMzI+ID0gcDAgKyAoKHAxIC0gcDApICogY3VycmVudFQpO1xcblxcdFxcdGxldCBkZW5zaXR5OiBmMzIgPSBhYnMoZ2V0RGVuc2l0eShwKSk7XFxuXFx0XFx0aWYgKGRlbnNpdHkgPCBtaW5WYWx1ZSlcXG5cXHRcXHR7XFxuXFx0XFx0XFx0bWluVmFsdWUgPSBkZW5zaXR5O1xcblxcdFxcdFxcdHQgPSBjdXJyZW50VDtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0Y29udGludWluZyB7XFxuXFx0XFx0XFx0Y3VycmVudFQgPSBjdXJyZW50VCArIGluY3JlbWVudDtcXG5cXHRcXHR9XFxuXFx0fVxcblxcblxcdHJldHVybiBwMCArICgocDEgLSBwMCkgKiB0KTtcXG59XFxuXFxuZm4gQ2FsY3VsYXRlU3VyZmFjZU5vcm1hbChwOiB2ZWMzPGYzMj4pIC0+IHZlYzM8ZjMyPlxcbntcXG5cXHRsZXQgSDogZjMyID0gdW5pZm9ybXMuc3RyaWRlOyAvLyBUaGlzIG5lZWRzIHRvIHNjYWxlIGJhc2VkIG9uIHNvbWV0aGluZy4uLlxcblxcdGxldCBkeDogZjMyID0gZ2V0RGVuc2l0eShwICsgdmVjMzxmMzI+KEgsIDAuMCwgMC4wKSkgLSBnZXREZW5zaXR5KHAgLSB2ZWMzPGYzMj4oSCwgMC4wLCAwLjApKTtcXG5cXHRsZXQgZHk6IGYzMiA9IGdldERlbnNpdHkocCArIHZlYzM8ZjMyPigwLjAsIEgsIDAuMCkpIC0gZ2V0RGVuc2l0eShwIC0gdmVjMzxmMzI+KDAuMCwgSCwgMC4wKSk7XFxuXFx0bGV0IGR6OiBmMzIgPSBnZXREZW5zaXR5KHAgKyB2ZWMzPGYzMj4oMC4wLCAwLjAsIEgpKSAtIGdldERlbnNpdHkocCAtIHZlYzM8ZjMyPigwLjAsIDAuMCwgSCkpO1xcblxcblxcdHJldHVybiBub3JtYWxpemUodmVjMzxmMzI+KGR4LCBkeSwgZHopKTtcXG59XFxuXFxuQGNvbXB1dGUgQHdvcmtncm91cF9zaXplKDEyOClcXG5mbiBtYWluKEBidWlsdGluKGdsb2JhbF9pbnZvY2F0aW9uX2lkKSBHbG9iYWxJbnZvY2F0aW9uSUQgOiB2ZWMzPHUzMj4pIHtcXG5cXHRsZXQgdHJ1ZUluZGV4OiB1MzIgPSBHbG9iYWxJbnZvY2F0aW9uSUQueDtcXG5cXG5cXHRpZiAodHJ1ZUluZGV4IDwgY29ybmVySW5kZXguY29ybmVyQ291bnQpXFxuXFx0e1xcblxcdFxcdGxldCB1cmVzOiB1MzIgPSAzMnU7XFxuXFxuXFx0XFx0bGV0IG5vZGVTaXplOiB1MzIgPSB1MzIodW5pZm9ybXMuc3RyaWRlKTtcXG5cXG5cXHRcXHRsZXQgdm94ZWxJbmRleDogdTMyID0gY29ybmVySW5kZXguY29ybmVySW5kZXhlc1t0cnVlSW5kZXhdO1xcblxcdFxcdGxldCB6OiB1MzIgPSB2b3hlbEluZGV4IC8gKHVyZXMgKiB1cmVzKTtcXG5cXHRcXHRsZXQgeTogdTMyID0gKHZveGVsSW5kZXggLSAoeiAqIHVyZXMgKiB1cmVzKSkgLyB1cmVzO1xcblxcdFxcdGxldCB4OiB1MzIgPSB2b3hlbEluZGV4IC0gKHogKiB1cmVzICogdXJlcykgLSAoeSAqIHVyZXMpO1xcblxcblxcdFxcdGxldCBjb3JuZXJzOiB1MzIgPSB2b3hlbE1hdGVyaWFscy52b3hlbE1hdGVyaWFsc1t2b3hlbEluZGV4XTtcXG5cXG5cXHRcXHRsZXQgbm9kZVBvczogdmVjMzxmMzI+ID0gKHZlYzM8ZjMyPihmMzIoeCksIGYzMih5KSwgZjMyICh6KSkgKiB1bmlmb3Jtcy5zdHJpZGUpICsgdW5pZm9ybXMuY2h1bmtQb3NpdGlvbjtcXG5cXHRcXHR2b3hlbHMudm94ZWxzW3RydWVJbmRleF0udm94TWluID0gbm9kZVBvcztcXG5cXHRcXHRsZXQgTUFYX0NST1NTSU5HUzogaTMyID0gNjtcXG5cXHRcXHR2YXIgZWRnZUNvdW50OiBpMzIgPSAwO1xcblxcblxcdFxcdHBvaW50YWNjdW0gPSB2ZWM0PGYzMj4oMC4wLCAwLjAsIDAuMCwgMC4wKTtcXG5cXHRcXHRBVEEgPSBhcnJheTxmMzIsIDY+KDAuMCwgMC4wLCAwLjAsIDAuMCwgMC4wLCAwLjApO1xcblxcdFxcdEF0YiA9IHZlYzQ8ZjMyPigwLjAsIDAuMCwgMC4wLCAwLjApO1xcblxcdFxcdHZhciBhdmVyYWdlTm9ybWFsOiB2ZWMzPGYzMj4gPSB2ZWMzPGYzMj4oMC4wLCAwLjAsIDAuMCk7XFxuXFx0XFx0YnRiID0gMC4wO1xcblxcblxcdFxcdHZhciBqOiBpMzIgPSAwO1xcblxcdFxcdGxvb3Age1xcblxcdFxcdFxcdGlmICghKGogPCAxMiAmJiBlZGdlQ291bnQgPD0gTUFYX0NST1NTSU5HUykpIHtcXG5cXHRcXHRcXHRcXHRicmVhaztcXG5cXHRcXHRcXHR9XFxuXFxuXFx0XFx0XFx0bGV0IGMxOiBpMzIgPSBlZGdldm1hcFtqXS54O1xcblxcdFxcdFxcdGxldCBjMjogaTMyID0gZWRnZXZtYXBbal0ueTtcXG5cXG5cXHRcXHRcXHRsZXQgbTE6IHUzMiA9IChjb3JuZXJzID4+IHUzMihjMSkpICYgMXU7XFxuXFx0XFx0XFx0bGV0IG0yOiB1MzIgPSAoY29ybmVycyA+PiB1MzIoYzIpKSAmIDF1O1xcblxcblxcdFxcdFxcdGlmICghKChtMSA9PSAwdSAmJiBtMiA9PSAwdSkgfHwgKG0xID09IDF1ICYmIG0yID09IDF1KSkpXFxuXFx0XFx0XFx0e1xcblxcdFxcdFxcdFxcdGxldCBwMTogdmVjMzxmMzI+ID0gbm9kZVBvcyArIHZlYzM8ZjMyPihmMzIoQ0hJTERfTUlOX09GRlNFVFNbYzFdLnggKiBub2RlU2l6ZSksIGYzMihDSElMRF9NSU5fT0ZGU0VUU1tjMV0ueSAqIG5vZGVTaXplKSwgZjMyKENISUxEX01JTl9PRkZTRVRTW2MxXS56ICogbm9kZVNpemUpKTtcXG5cXHRcXHRcXHRcXHRsZXQgcDI6IHZlYzM8ZjMyPiA9IG5vZGVQb3MgKyB2ZWMzPGYzMj4oZjMyKENISUxEX01JTl9PRkZTRVRTW2MyXS54ICogbm9kZVNpemUpLCBmMzIoQ0hJTERfTUlOX09GRlNFVFNbYzJdLnkgKiBub2RlU2l6ZSksIGYzMihDSElMRF9NSU5fT0ZGU0VUU1tjMl0ueiAqIG5vZGVTaXplKSk7XFxuXFx0XFx0XFx0XFx0bGV0IHA6IHZlYzM8ZjMyPiA9IEFwcHJveGltYXRlWmVyb0Nyb3NzaW5nUG9zaXRpb24ocDEsIHAyKTtcXG5cXHRcXHRcXHRcXHRsZXQgbjogdmVjMzxmMzI+ID0gQ2FsY3VsYXRlU3VyZmFjZU5vcm1hbChwKTtcXG5cXG5cXHRcXHRcXHRcXHRxZWZfYWRkKHZlYzQ8ZjMyPihuLngsIG4ueSwgbi56LCAwLjApLCB2ZWM0PGYzMj4ocC54LCBwLnksIHAueiwgMC4wKSk7XFxuXFxuXFx0XFx0XFx0XFx0YXZlcmFnZU5vcm1hbCA9IGF2ZXJhZ2VOb3JtYWwgKyBuO1xcblxcblxcdFxcdFxcdFxcdGVkZ2VDb3VudCA9IGVkZ2VDb3VudCArIDE7XFxuXFx0XFx0XFx0fVxcblxcblxcdFxcdFxcdGNvbnRpbnVpbmcge1xcblxcdFxcdFxcdFxcdGogPSBqICsgMTtcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcblxcblxcdFxcdGF2ZXJhZ2VOb3JtYWwgPSBub3JtYWxpemUoYXZlcmFnZU5vcm1hbCAvIHZlYzM8ZjMyPihmMzIoZWRnZUNvdW50KSwgZjMyKGVkZ2VDb3VudCksIGYzMihlZGdlQ291bnQpKSk7XFxuXFxuXFx0XFx0bGV0IGNvbTogdmVjMzxmMzI+ID0gdmVjMzxmMzI+KHBvaW50YWNjdW0ueCAvIHBvaW50YWNjdW0udywgcG9pbnRhY2N1bS55IC8gcG9pbnRhY2N1bS53LCBwb2ludGFjY3VtLnogLyBwb2ludGFjY3VtLncpO1xcblxcblxcdFxcdGxldCByZXN1bHQ6IHZlYzQ8ZjMyPiA9IHFlZl9zb2x2ZSgpO1xcblxcdFxcdHZhciBzb2x2ZWRfcG9zaXRpb246IHZlYzM8ZjMyPiA9IHJlc3VsdC54eXo7XFxuXFx0XFx0bGV0IGVycm9yOiBmMzIgPSByZXN1bHQudztcXG5cXG5cXG5cXHRcXHRsZXQgTWluOiB2ZWMzPGYzMj4gPSBub2RlUG9zO1xcblxcdFxcdGxldCBNYXg6IHZlYzM8ZjMyPiA9IG5vZGVQb3MgKyB2ZWMzPGYzMj4oMS4wLCAxLjAsIDEuMCk7XFxuXFx0XFx0aWYgKHNvbHZlZF9wb3NpdGlvbi54IDwgTWluLnggfHwgc29sdmVkX3Bvc2l0aW9uLnggPiBNYXgueCB8fFxcblxcdFxcdFxcdFxcdHNvbHZlZF9wb3NpdGlvbi55IDwgTWluLnkgfHwgc29sdmVkX3Bvc2l0aW9uLnkgPiBNYXgueSB8fFxcblxcdFxcdFxcdFxcdHNvbHZlZF9wb3NpdGlvbi56IDwgTWluLnogfHwgc29sdmVkX3Bvc2l0aW9uLnogPiBNYXgueilcXG5cXHRcXHR7XFxuXFx0XFx0XFx0c29sdmVkX3Bvc2l0aW9uID0gY29tO1xcblxcdFxcdH1cXG5cXG5cXHRcXHR2b3hlbHMudm94ZWxzW3RydWVJbmRleF0udmVydFBvaW50ID0gc29sdmVkX3Bvc2l0aW9uO1xcblxcdFxcdHZveGVscy52b3hlbHNbdHJ1ZUluZGV4XS5hdmdOb3JtYWwgPSBhdmVyYWdlTm9ybWFsO1xcblxcdFxcdHZveGVscy52b3hlbHNbdHJ1ZUluZGV4XS5udW1Qb2ludHMgPSBmMzIoZWRnZUNvdW50KTtcXG5cXHRcXHR2b3hlbHMudm94ZWxzW3RydWVJbmRleF0uY29ybmVycyA9IGYzMih2b3hlbE1hdGVyaWFscy52b3hlbE1hdGVyaWFsc1t2b3hlbEluZGV4XSk7XFxuXFx0fVxcbn1cXG5cXG5AY29tcHV0ZSBAd29ya2dyb3VwX3NpemUoMSlcXG5mbiBjb21wdXRlTWF0ZXJpYWxzKEBidWlsdGluKGdsb2JhbF9pbnZvY2F0aW9uX2lkKSBHbG9iYWxJbnZvY2F0aW9uSUQgOiB2ZWMzPHUzMj4pIHtcXG5cXHRcXHRsZXQgd2lkdGggPSB1bmlmb3Jtcy53aWR0aDtcXG4gICAgbGV0IGluZGV4OiB1MzIgPSBHbG9iYWxJbnZvY2F0aW9uSUQueiAqIHdpZHRoICogd2lkdGggKyBHbG9iYWxJbnZvY2F0aW9uSUQueSAqIHdpZHRoICsgR2xvYmFsSW52b2NhdGlvbklELng7XFxuICAgIGxldCBjb3JuZXJQb3M6IHZlYzM8ZjMyPiA9IHZlYzM8ZjMyPihmMzIoR2xvYmFsSW52b2NhdGlvbklELngpICogdW5pZm9ybXMuc3RyaWRlLCBmMzIoR2xvYmFsSW52b2NhdGlvbklELnkpICogdW5pZm9ybXMuc3RyaWRlLCBmMzIoR2xvYmFsSW52b2NhdGlvbklELnopICogdW5pZm9ybXMuc3RyaWRlKTtcXG5cXG4gICAgbGV0IGRlbnNpdHk6IGYzMiA9IGdldERlbnNpdHkoY29ybmVyUG9zICsgdW5pZm9ybXMuY2h1bmtQb3NpdGlvbik7XFxuXFxuXFx0XFx0aWYgKGRlbnNpdHkgPCAwLjApIHtcXG5cXHRcXHRcXHRpZiAobGVuZ3RoKGNvcm5lclBvcyArIHVuaWZvcm1zLmNodW5rUG9zaXRpb24pIDwgMjAwMC4wKSB7XFxuICAgICAgICAvL2Nvcm5lck1hdGVyaWFscy5jb3JuZXJNYXRlcmlhbHNbaW5kZXhdID0gdTMyKHJhbmRvbSh2ZWMyKGYzMihpbmRleCkpKSAqIDI1NS4wKSArIDE7XFxuXFx0XFx0XFx0ICBjb3JuZXJNYXRlcmlhbHMuY29ybmVyTWF0ZXJpYWxzW2luZGV4XSA9IDI1NnU7XFxuXFx0XFx0XFx0fSBlbHNlIHtcXG4gICAgICAgIGNvcm5lck1hdGVyaWFscy5jb3JuZXJNYXRlcmlhbHNbaW5kZXhdID0gdTMyKGxlbmd0aChjb3JuZXJQb3MpIC8gdW5pZm9ybXMuc3RyaWRlICogMjU2LjApO1xcblxcdFxcdFxcdH1cXG5cXHRcXHR9IGVsc2Uge1xcblxcdFxcdFxcdGNvcm5lck1hdGVyaWFscy5jb3JuZXJNYXRlcmlhbHNbaW5kZXhdID0gMHU7XFxuXFx0XFx0fVxcbn1cIjsiLCJleHBvcnQgZGVmYXVsdCBcImNvbnN0IGZyZXEgPSAwLjAwMTtcXG5cXG5jb25zdCBNQVRFUklBTF9BSVIgPSAwdTtcXG5jb25zdCBNQVRFUklBTF9ST0NLID0gMXU7XFxuY29uc3QgTUFURVJJQUxfV09PRCA9IDJ1O1xcbmNvbnN0IE1BVEVSSUFMX0ZJUkUgPSAzdTtcXG5cXG5zdHJ1Y3QgRGVuc2l0eSB7XFxuICBkZW5zaXR5OiBmMzIsXFxuICBtYXRlcmlhbDogdTMyXFxufVxcblxcbmZuIHN1YnRyYWN0KGJhc2U6IERlbnNpdHksIHN1YjogZjMyKSAtPiBEZW5zaXR5IHtcXG4gIHJldHVybiBEZW5zaXR5KG1heChiYXNlLmRlbnNpdHksIHN1YiksIGJhc2UubWF0ZXJpYWwpO1xcbn1cXG5cXG5mbiBhZGQoYmFzZTogRGVuc2l0eSwgYWRkOiBmMzIsIG1hdGVyaWFsOiB1MzIpIC0+IERlbnNpdHkge1xcbiAgaWYgKGFkZCA8PSAwKSB7XFxuICAgIHJldHVybiBEZW5zaXR5KGFkZCwgbWF0ZXJpYWwpO1xcbiAgfVxcbiAgcmV0dXJuIGJhc2U7XFxufVxcblxcbmZuIEJveCh3b3JsZFBvc2l0aW9uOiB2ZWMzPGYzMj4sIG9yaWdpbjogdmVjMzxmMzI+LCBoYWxmRGltZW5zaW9uczogdmVjMzxmMzI+KSAtPiBmMzJcXG57XFxuXFx0bGV0IGxvY2FsX3BvczogdmVjMzxmMzI+ID0gd29ybGRQb3NpdGlvbiAtIG9yaWdpbjtcXG5cXHRsZXQgcG9zOiB2ZWMzPGYzMj4gPSBsb2NhbF9wb3M7XFxuXFxuXFx0bGV0IGQ6IHZlYzM8ZjMyPiA9IHZlYzM8ZjMyPihhYnMocG9zLngpLCBhYnMocG9zLnkpLCBhYnMocG9zLnopKSAtIGhhbGZEaW1lbnNpb25zO1xcblxcdGxldCBtOiBmMzIgPSBtYXgoZC54LCBtYXgoZC55LCBkLnopKTtcXG5cXHRyZXR1cm4gY2xhbXAobWluKG0sIGxlbmd0aChtYXgoZCwgdmVjMzxmMzI+KDAuMCwgMC4wLCAwLjApKSkpLCAtMTAwLjAsIDEwMC4wKTtcXG59XFxuXFxuZm4gVG9ydXMod29ybGRQb3NpdGlvbjogdmVjMzxmMzI+LCBvcmlnaW46IHZlYzM8ZjMyPiwgdDogdmVjMzxmMzI+KSAtPiBmMzJcXG57XFxuXFx0bGV0IHA6IHZlYzM8ZjMyPiA9IHdvcmxkUG9zaXRpb24gLSBvcmlnaW47XFxuXFxuICBsZXQgcTogdmVjMjxmMzI+ID0gdmVjMjxmMzI+KGxlbmd0aChwLnh6KS10LngscC55KTtcXG4gIHJldHVybiBsZW5ndGgocSktdC55O1xcbn1cXG5cXG5mbiBTcGhlcmUod29ybGRQb3NpdGlvbjogdmVjMzxmMzI+LCBvcmlnaW46IHZlYzM8ZjMyPiwgcmFkaXVzOiBmMzIpIC0+IGYzMlxcbntcXG5cXHRyZXR1cm4gY2xhbXAobGVuZ3RoKHdvcmxkUG9zaXRpb24gLSBvcmlnaW4pIC0gcmFkaXVzLCAtMTAwLjAsIDEwMC4wKTtcXG59XFxuXFxuZm4gRnJhY3RhbE5vaXNlMjEob2N0YXZlczogaTMyLCBmcmVxdWVuY3k6IGYzMiwgbGFjdW5hcml0eTogZjMyLCBwZXJzaXN0ZW5jZTogZjMyLCBwb3NpdGlvbjogdmVjMzxmMzI+KSAtPiBmMzJcXG57XFxuXFx0bGV0IFNDQUxFOiBmMzIgPSAxLjAgLyAxMjguMDtcXG5cXHR2YXIgcDogdmVjMzxmMzI+ID0gcG9zaXRpb24gKiBTQ0FMRTtcXG5cXHR2YXIgbm9pczogZjMyID0gMC4wO1xcblxcblxcdHZhciBhbXBsaXR1ZGU6IGYzMiA9IDEuMDtcXG5cXHRwID0gcCAqIGZyZXF1ZW5jeTtcXG5cXG5cXHR2YXIgaTogaTMyID0gMDtcXG5cXHRsb29wIHtcXG5cXHRcXHRpZiAoaSA+PSBvY3RhdmVzKSB7IGJyZWFrOyB9XFxuXFxuXFx0XFx0bm9pcyA9IG5vaXMgKyBwZXJsaW5Ob2lzZTMocCkgKiBhbXBsaXR1ZGU7XFxuXFx0XFx0cCA9IHAgKiBsYWN1bmFyaXR5O1xcblxcdFxcdGFtcGxpdHVkZSA9IGFtcGxpdHVkZSAqIHBlcnNpc3RlbmNlO1xcblxcblxcdFxcdGNvbnRpbnVpbmcge1xcblxcdFxcdFxcdGkgPSBpICsgMTtcXG5cXHRcXHR9XFxuXFx0fVxcblxcblxcdHJldHVybiBub2lzO1xcbn1cXG5cXG5mbiBGcmFjdGFsTm9pc2UyKGZyZXF1ZW5jeTogZjMyLCBsYWN1bmFyaXR5OiBmMzIsIHBlcnNpc3RlbmNlOiBmMzIsIHBvc2l0aW9uOiB2ZWMzPGYzMj4pIC0+IGYzMlxcbntcXG5cXHRsZXQgU0NBTEU6IGYzMiA9IDEuMCAvIDEyOC4wO1xcblxcdHZhciBwOiB2ZWMzPGYzMj4gPSBwb3NpdGlvbiAqIFNDQUxFO1xcblxcdHZhciBub2lzOiBmMzIgPSAwLjA7XFxuXFxuXFx0dmFyIGFtcGxpdHVkZTogZjMyID0gMS4wO1xcblxcdHAgPSBwICogZnJlcXVlbmN5O1xcblxcblxcdG5vaXMgPSBub2lzICsgcGVybGluTm9pc2UzKHApICogYW1wbGl0dWRlO1xcblxcdHAgPSBwICogbGFjdW5hcml0eTtcXG5cXHRhbXBsaXR1ZGUgPSBhbXBsaXR1ZGUgKiBwZXJzaXN0ZW5jZTtcXG5cXG5cXHRyZXR1cm4gbm9pcztcXG59XFxuXFxuZm4gcGVybXV0ZTQxKHg6IHZlYzQ8ZjMyPikgLT4gdmVjNDxmMzI+IHsgcmV0dXJuICgoeCAqIDM0LiArIDEuKSAqIHgpICUgdmVjNDxmMzI+KDI4OS4pOyB9XFxuZm4gdGF5bG9ySW52U3FydDQocjogdmVjNDxmMzI+KSAtPiB2ZWM0PGYzMj4geyByZXR1cm4gMS43OTI4NDI5MTQwMDE1OSAtIDAuODUzNzM0NzIwOTUzMTQgKiByOyB9XFxuZm4gZmFkZTModDogdmVjMzxmMzI+KSAtPiB2ZWMzPGYzMj4geyByZXR1cm4gdCAqIHQgKiB0ICogKHQgKiAodCAqIDYuIC0gMTUuKSArIDEwLik7IH1cXG5cXG5mbiBwZXJsaW5Ob2lzZTMoUDogdmVjMzxmMzI+KSAtPiBmMzIge1xcbiAgdmFyIFBpMCA6IHZlYzM8ZjMyPiA9IGZsb29yKFApOyAvLyBJbnRlZ2VyIHBhcnQgZm9yIGluZGV4aW5nXFxuICB2YXIgUGkxIDogdmVjMzxmMzI+ID0gUGkwICsgdmVjMzxmMzI+KDEuKTsgLy8gSW50ZWdlciBwYXJ0ICsgMVxcbiAgUGkwID0gUGkwICUgdmVjMzxmMzI+KDI4OS4pO1xcbiAgUGkxID0gUGkxICUgdmVjMzxmMzI+KDI4OS4pO1xcbiAgbGV0IFBmMCA9IGZyYWN0KFApOyAvLyBGcmFjdGlvbmFsIHBhcnQgZm9yIGludGVycG9sYXRpb25cXG4gIGxldCBQZjEgPSBQZjAgLSB2ZWMzPGYzMj4oMS4pOyAvLyBGcmFjdGlvbmFsIHBhcnQgLSAxLlxcbiAgbGV0IGl4ID0gdmVjNDxmMzI+KFBpMC54LCBQaTEueCwgUGkwLngsIFBpMS54KTtcXG4gIGxldCBpeSA9IHZlYzQ8ZjMyPihQaTAueXksIFBpMS55eSk7XFxuICBsZXQgaXowID0gUGkwLnp6eno7XFxuICBsZXQgaXoxID0gUGkxLnp6eno7XFxuXFxuICBsZXQgaXh5ID0gcGVybXV0ZTQxKHBlcm11dGU0MShpeCkgKyBpeSk7XFxuICBsZXQgaXh5MCA9IHBlcm11dGU0MShpeHkgKyBpejApO1xcbiAgbGV0IGl4eTEgPSBwZXJtdXRlNDEoaXh5ICsgaXoxKTtcXG5cXG4gIHZhciBneDA6IHZlYzQ8ZjMyPiA9IGl4eTAgLyA3LjtcXG4gIHZhciBneTA6IHZlYzQ8ZjMyPiA9IGZyYWN0KGZsb29yKGd4MCkgLyA3LikgLSAwLjU7XFxuICBneDAgPSBmcmFjdChneDApO1xcbiAgdmFyIGd6MDogdmVjNDxmMzI+ID0gdmVjNDxmMzI+KDAuNSkgLSBhYnMoZ3gwKSAtIGFicyhneTApO1xcbiAgdmFyIHN6MDogdmVjNDxmMzI+ID0gc3RlcChnejAsIHZlYzQ8ZjMyPigwLikpO1xcbiAgZ3gwID0gZ3gwICsgc3owICogKHN0ZXAodmVjNDxmMzI+KDAuKSwgZ3gwKSAtIDAuNSk7XFxuICBneTAgPSBneTAgKyBzejAgKiAoc3RlcCh2ZWM0PGYzMj4oMC4pLCBneTApIC0gMC41KTtcXG5cXG4gIHZhciBneDE6IHZlYzQ8ZjMyPiA9IGl4eTEgLyA3LjtcXG4gIHZhciBneTE6IHZlYzQ8ZjMyPiA9IGZyYWN0KGZsb29yKGd4MSkgLyA3LikgLSAwLjU7XFxuICBneDEgPSBmcmFjdChneDEpO1xcbiAgdmFyIGd6MTogdmVjNDxmMzI+ID0gdmVjNDxmMzI+KDAuNSkgLSBhYnMoZ3gxKSAtIGFicyhneTEpO1xcbiAgdmFyIHN6MTogdmVjNDxmMzI+ID0gc3RlcChnejEsIHZlYzQ8ZjMyPigwLikpO1xcbiAgZ3gxID0gZ3gxIC0gc3oxICogKHN0ZXAodmVjNDxmMzI+KDAuKSwgZ3gxKSAtIDAuNSk7XFxuICBneTEgPSBneTEgLSBzejEgKiAoc3RlcCh2ZWM0PGYzMj4oMC4pLCBneTEpIC0gMC41KTtcXG5cXG4gIHZhciBnMDAwOiB2ZWMzPGYzMj4gPSB2ZWMzPGYzMj4oZ3gwLngsIGd5MC54LCBnejAueCk7XFxuICB2YXIgZzEwMDogdmVjMzxmMzI+ID0gdmVjMzxmMzI+KGd4MC55LCBneTAueSwgZ3owLnkpO1xcbiAgdmFyIGcwMTA6IHZlYzM8ZjMyPiA9IHZlYzM8ZjMyPihneDAueiwgZ3kwLnosIGd6MC56KTtcXG4gIHZhciBnMTEwOiB2ZWMzPGYzMj4gPSB2ZWMzPGYzMj4oZ3gwLncsIGd5MC53LCBnejAudyk7XFxuICB2YXIgZzAwMTogdmVjMzxmMzI+ID0gdmVjMzxmMzI+KGd4MS54LCBneTEueCwgZ3oxLngpO1xcbiAgdmFyIGcxMDE6IHZlYzM8ZjMyPiA9IHZlYzM8ZjMyPihneDEueSwgZ3kxLnksIGd6MS55KTtcXG4gIHZhciBnMDExOiB2ZWMzPGYzMj4gPSB2ZWMzPGYzMj4oZ3gxLnosIGd5MS56LCBnejEueik7XFxuICB2YXIgZzExMTogdmVjMzxmMzI+ID0gdmVjMzxmMzI+KGd4MS53LCBneTEudywgZ3oxLncpO1xcblxcbiAgbGV0IG5vcm0wID0gdGF5bG9ySW52U3FydDQoXFxuICAgICAgdmVjNDxmMzI+KGRvdChnMDAwLCBnMDAwKSwgZG90KGcwMTAsIGcwMTApLCBkb3QoZzEwMCwgZzEwMCksIGRvdChnMTEwLCBnMTEwKSkpO1xcbiAgZzAwMCA9IGcwMDAgKiBub3JtMC54O1xcbiAgZzAxMCA9IGcwMTAgKiBub3JtMC55O1xcbiAgZzEwMCA9IGcxMDAgKiBub3JtMC56O1xcbiAgZzExMCA9IGcxMTAgKiBub3JtMC53O1xcbiAgbGV0IG5vcm0xID0gdGF5bG9ySW52U3FydDQoXFxuICAgICAgdmVjNDxmMzI+KGRvdChnMDAxLCBnMDAxKSwgZG90KGcwMTEsIGcwMTEpLCBkb3QoZzEwMSwgZzEwMSksIGRvdChnMTExLCBnMTExKSkpO1xcbiAgZzAwMSA9IGcwMDEgKiBub3JtMS54O1xcbiAgZzAxMSA9IGcwMTEgKiBub3JtMS55O1xcbiAgZzEwMSA9IGcxMDEgKiBub3JtMS56O1xcbiAgZzExMSA9IGcxMTEgKiBub3JtMS53O1xcblxcbiAgbGV0IG4wMDAgPSBkb3QoZzAwMCwgUGYwKTtcXG4gIGxldCBuMTAwID0gZG90KGcxMDAsIHZlYzM8ZjMyPihQZjEueCwgUGYwLnl6KSk7XFxuICBsZXQgbjAxMCA9IGRvdChnMDEwLCB2ZWMzPGYzMj4oUGYwLngsIFBmMS55LCBQZjAueikpO1xcbiAgbGV0IG4xMTAgPSBkb3QoZzExMCwgdmVjMzxmMzI+KFBmMS54eSwgUGYwLnopKTtcXG4gIGxldCBuMDAxID0gZG90KGcwMDEsIHZlYzM8ZjMyPihQZjAueHksIFBmMS56KSk7XFxuICBsZXQgbjEwMSA9IGRvdChnMTAxLCB2ZWMzPGYzMj4oUGYxLngsIFBmMC55LCBQZjEueikpO1xcbiAgbGV0IG4wMTEgPSBkb3QoZzAxMSwgdmVjMzxmMzI+KFBmMC54LCBQZjEueXopKTtcXG4gIGxldCBuMTExID0gZG90KGcxMTEsIFBmMSk7XFxuXFxuICB2YXIgZmFkZV94eXo6IHZlYzM8ZjMyPiA9IGZhZGUzKFBmMCk7XFxuICBsZXQgdGVtcCA9IHZlYzQ8ZjMyPihmMzIoZmFkZV94eXoueikpOyAvLyBzaW1wbGlmeSBhZnRlciBjaHJvbWUgYnVnIGZpeFxcbiAgbGV0IG5feiA9IG1peCh2ZWM0PGYzMj4objAwMCwgbjEwMCwgbjAxMCwgbjExMCksIHZlYzQ8ZjMyPihuMDAxLCBuMTAxLCBuMDExLCBuMTExKSwgdGVtcCk7XFxuICBsZXQgbl95eiA9IG1peChuX3oueHksIG5fei56dywgdmVjMjxmMzI+KGYzMihmYWRlX3h5ei55KSkpOyAvLyBzaW1wbGlmeSBhZnRlciBjaHJvbWUgYnVnIGZpeFxcbiAgbGV0IG5feHl6ID0gbWl4KG5feXoueCwgbl95ei55LCBmYWRlX3h5ei54KTtcXG4gIHJldHVybiAyLjIgKiBuX3h5ejtcXG59XFxuXFxuZm4gQ2FsY3VsYXRlTm9pc2VWYWx1ZTIocG9zOiB2ZWMzPGYzMj4sIHNjYWxlOiBmMzIpIC0+IGYzMlxcbntcXG5cXHRyZXR1cm4gRnJhY3RhbE5vaXNlMjEoNCwgMC41MzQzLCAyLjIzMjQsIDAuNjgzMjQsIHBvcyAqIHNjYWxlKTtcXG59XFxuXFxuZm4gQ0xlcnAyKGE6IGYzMiwgYjogZjMyLCB0OiBmMzIpIC0+IGYzMlxcbntcXG5cXHRyZXR1cm4gKDEuMCAtIHQpICogYSArIHQgKiBiO1xcbn1cXG5cXG5mbiBjYWxjdWxhdGVEZW5zaXR5KHdvcmxkUG9zaXRpb246IHZlYzM8ZjMyPikgLT4gRGVuc2l0eSB7XFxuXFx0dmFyIHdvcmxkUmFkaXVzOiBmMzIgPSAxMDAwMC4wO1xcblxcdHZhciB3b3JsZDogdmVjMzxmMzI+ID0gd29ybGRQb3NpdGlvbiAtIHZlYzM8ZjMyPih3b3JsZFJhZGl1cyk7XFxuXFx0dmFyIHdvcmxkRGlzdDogZjMyID0gY2xhbXAoLXdvcmxkUmFkaXVzICsgbGVuZ3RoKHdvcmxkKSwgLTEwMDAuMCwgMTAwMC4wKTtcXG5cXG5cXHRsZXQgZmxhdGxhbmROb2lzZVNjYWxlOiBmMzIgPSAzLjA7XFxuXFx0bGV0IGZsYXRsYW5kTGVycEFtb3VudDogZjMyID0gMC4wNztcXG5cXHRsZXQgZmxhdGxhbmRZUGVyY2VudDogZjMyID0gMS4yO1xcblxcblxcdGxldCByb2NreU5vaXNlU2NhbGU6IGYzMiA9IDMuMDtcXG5cXHRsZXQgcm9ja3lMZXJwQW1vdW50OiBmMzIgPSAwLjA1O1xcblxcdGxldCByb2NreVlQZXJjZW50OiBmMzIgPSAwLjc7XFxuXFxuXFx0bGV0IG1heE1vdW50YWluTWl4TGVycEFtb3VudDogZjMyID0gMC4wNzU7XFxuXFx0bGV0IG1pbk1vdW50YWluTWl4TGVycEFtb3VudDogZjMyID0gMS4wO1xcblxcblxcdGxldCByb2NreUJsZW5kOiBmMzIgPSAxLjA7XFxuXFxuXFx0bGV0IG1vdW50YWluQmxlbmQ6IGYzMiA9IGNsYW1wKGFicyhGcmFjdGFsTm9pc2UyKDAuNTM0MywgMi4yMzI0LCAwLjY4MzI0LCB3b3JsZCkpICogNC4wLCAwLjAsIDEuMCk7XFxuXFx0Ly9sZXQgbW91bnRhaW5CbGVuZDogZjMyID0gMC4wO1xcblxcblxcdGxldCBtb3VudGFpbjogZjMyID0gQ2FsY3VsYXRlTm9pc2VWYWx1ZTIod29ybGQsIDAuMDcpO1xcblxcdC8vbGV0IG1vdW50YWluOiBmMzIgPSAwLjA7XFxuXFxuXFx0dmFyIGJsb2I6IGYzMiA9IENhbGN1bGF0ZU5vaXNlVmFsdWUyKHdvcmxkLCBmbGF0bGFuZE5vaXNlU2NhbGUgKyAoKHJvY2t5Tm9pc2VTY2FsZSAtIGZsYXRsYW5kTm9pc2VTY2FsZSkgKiByb2NreUJsZW5kKSk7XFxuXFx0Ly92YXIgYmxvYjogZjMyID0gMC4wO1xcblxcdGJsb2IgPSBDTGVycDIoYmxvYiwgKHdvcmxkRGlzdCkgKiAoZmxhdGxhbmRZUGVyY2VudCArICgocm9ja3lZUGVyY2VudCAtIGZsYXRsYW5kWVBlcmNlbnQpICogcm9ja3lCbGVuZCkpLFxcblxcdFxcdFxcdFxcdGZsYXRsYW5kTGVycEFtb3VudCArICgocm9ja3lMZXJwQW1vdW50IC0gZmxhdGxhbmRMZXJwQW1vdW50KSAqIHJvY2t5QmxlbmQpKTtcXG5cXHRcXHRcXHRcXHQvLysgQ0xlcnAyKG1vdW50YWluLCBibG9iLCBtaW5Nb3VudGFpbk1peExlcnBBbW91bnQgKyAoKG1heE1vdW50YWluTWl4TGVycEFtb3VudCAtIG1pbk1vdW50YWluTWl4TGVycEFtb3VudCkgKiBtb3VudGFpbkJsZW5kKSk7XFxuXFxuICB2YXIgcmVzdWx0ID0gRGVuc2l0eSgxLjAsIE1BVEVSSUFMX0FJUik7XFxuXFxuXFx0cmVzdWx0ID0gYWRkKHJlc3VsdCwgYmxvYiwgTUFURVJJQUxfUk9DSyk7XFxuXFxuICByZXN1bHQgPSBhZGQocmVzdWx0LCBCb3god29ybGRQb3NpdGlvbiwgdmVjMzxmMzI+KDIwMDAwMDAuMCwgMTUwLjAsIDUwMDAuMCksIHZlYzM8ZjMyPig1MDAwLjAsIDEwMDAuMCwgNTAwMC4wKSksIE1BVEVSSUFMX1dPT0QpO1xcbiAgcmVzdWx0ID0gYWRkKHJlc3VsdCwgU3BoZXJlKHdvcmxkUG9zaXRpb24sIHZlYzM8ZjMyPig1MDAwLjAsIDEwMC4wLCAxMDAuMCksIDUwMDAuMCksIE1BVEVSSUFMX1JPQ0spO1xcbiAgcmVzdWx0ID0gYWRkKHJlc3VsdCwgU3BoZXJlKHdvcmxkUG9zaXRpb24sIHZlYzM8ZjMyPigxMDAwMC4wLCAxMDAuMCwgMTAwLjApLCA1MDAwLjApLCBNQVRFUklBTF9ST0NLKTtcXG4gIHJlc3VsdCA9IGFkZChyZXN1bHQsIFNwaGVyZSh3b3JsZFBvc2l0aW9uLCB2ZWMzPGYzMj4oMjAwMDAwMC4wLCAxMDAuMCwgMTAwLjApLCA1MDAwLjApLCBNQVRFUklBTF9ST0NLKTtcXG5cXG4gIHJlc3VsdCA9IGFkZChyZXN1bHQsIFNwaGVyZSh3b3JsZFBvc2l0aW9uLCB2ZWMzPGYzMj4oMC4wLCAwLjAsIDAuMCksIDIwMDAwMC4wKSwgTUFURVJJQUxfRklSRSk7XFxuXFxuICByZXN1bHQgPSBzdWJ0cmFjdChyZXN1bHQsIC1TcGhlcmUod29ybGRQb3NpdGlvbiwgdmVjMzxmMzI+KDIwMDAwMDAuMCwgMC4wLCAwLjApLCAxMDAwLjApKTtcXG4gIHJlc3VsdCA9IHN1YnRyYWN0KHJlc3VsdCwgLUJveCh3b3JsZFBvc2l0aW9uLCB2ZWMzPGYzMj4oMjAwMDAwMC4wLCAwLjAsIDAuMCksIHZlYzM8ZjMyPig2MDAwLjAsIDUwMC4wLCA1MDAuMCkpKTtcXG4gIHJlc3VsdCA9IHN1YnRyYWN0KHJlc3VsdCwgLUJveCh3b3JsZFBvc2l0aW9uLCB2ZWMzPGYzMj4oMjAwMDAwMC4wLCAwLjAsIDAuMCksIHZlYzM8ZjMyPig1MDAuMCwgNTAwLjAsIDUwMDAuMCkpKTtcXG5cXG4gIHJldHVybiByZXN1bHQ7XFxufVxcblxcbmZuIGdldERlbnNpdHkod29ybGRQb3NpdGlvbjogdmVjMzxmMzI+KSAtPiBmMzIge1xcblxcdHJldHVybiBjYWxjdWxhdGVEZW5zaXR5KHdvcmxkUG9zaXRpb24pLmRlbnNpdHk7XFxufVwiOyIsIi8vIEEgbGlicmFyeSBvZiBzZWVkYWJsZSBSTkdzIGltcGxlbWVudGVkIGluIEphdmFzY3JpcHQuXG4vL1xuLy8gVXNhZ2U6XG4vL1xuLy8gdmFyIHNlZWRyYW5kb20gPSByZXF1aXJlKCdzZWVkcmFuZG9tJyk7XG4vLyB2YXIgcmFuZG9tID0gc2VlZHJhbmRvbSgxKTsgLy8gb3IgYW55IHNlZWQuXG4vLyB2YXIgeCA9IHJhbmRvbSgpOyAgICAgICAvLyAwIDw9IHggPCAxLiAgRXZlcnkgYml0IGlzIHJhbmRvbS5cbi8vIHZhciB4ID0gcmFuZG9tLnF1aWNrKCk7IC8vIDAgPD0geCA8IDEuICAzMiBiaXRzIG9mIHJhbmRvbW5lc3MuXG5cbi8vIGFsZWEsIGEgNTMtYml0IG11bHRpcGx5LXdpdGgtY2FycnkgZ2VuZXJhdG9yIGJ5IEpvaGFubmVzIEJhYWfDuGUuXG4vLyBQZXJpb2Q6IH4yXjExNlxuLy8gUmVwb3J0ZWQgdG8gcGFzcyBhbGwgQmlnQ3J1c2ggdGVzdHMuXG52YXIgYWxlYSA9IHJlcXVpcmUoJy4vbGliL2FsZWEnKTtcblxuLy8geG9yMTI4LCBhIHB1cmUgeG9yLXNoaWZ0IGdlbmVyYXRvciBieSBHZW9yZ2UgTWFyc2FnbGlhLlxuLy8gUGVyaW9kOiAyXjEyOC0xLlxuLy8gUmVwb3J0ZWQgdG8gZmFpbDogTWF0cml4UmFuayBhbmQgTGluZWFyQ29tcC5cbnZhciB4b3IxMjggPSByZXF1aXJlKCcuL2xpYi94b3IxMjgnKTtcblxuLy8geG9yd293LCBHZW9yZ2UgTWFyc2FnbGlhJ3MgMTYwLWJpdCB4b3Itc2hpZnQgY29tYmluZWQgcGx1cyB3ZXlsLlxuLy8gUGVyaW9kOiAyXjE5Mi0yXjMyXG4vLyBSZXBvcnRlZCB0byBmYWlsOiBDb2xsaXNpb25PdmVyLCBTaW1wUG9rZXIsIGFuZCBMaW5lYXJDb21wLlxudmFyIHhvcndvdyA9IHJlcXVpcmUoJy4vbGliL3hvcndvdycpO1xuXG4vLyB4b3JzaGlmdDcsIGJ5IEZyYW7Dp29pcyBQYW5uZXRvbiBhbmQgUGllcnJlIEwnZWN1eWVyLCB0YWtlc1xuLy8gYSBkaWZmZXJlbnQgYXBwcm9hY2g6IGl0IGFkZHMgcm9idXN0bmVzcyBieSBhbGxvd2luZyBtb3JlIHNoaWZ0c1xuLy8gdGhhbiBNYXJzYWdsaWEncyBvcmlnaW5hbCB0aHJlZS4gIEl0IGlzIGEgNy1zaGlmdCBnZW5lcmF0b3Jcbi8vIHdpdGggMjU2IGJpdHMsIHRoYXQgcGFzc2VzIEJpZ0NydXNoIHdpdGggbm8gc3lzdG1hdGljIGZhaWx1cmVzLlxuLy8gUGVyaW9kIDJeMjU2LTEuXG4vLyBObyBzeXN0ZW1hdGljIEJpZ0NydXNoIGZhaWx1cmVzIHJlcG9ydGVkLlxudmFyIHhvcnNoaWZ0NyA9IHJlcXVpcmUoJy4vbGliL3hvcnNoaWZ0NycpO1xuXG4vLyB4b3I0MDk2LCBieSBSaWNoYXJkIEJyZW50LCBpcyBhIDQwOTYtYml0IHhvci1zaGlmdCB3aXRoIGFcbi8vIHZlcnkgbG9uZyBwZXJpb2QgdGhhdCBhbHNvIGFkZHMgYSBXZXlsIGdlbmVyYXRvci4gSXQgYWxzbyBwYXNzZXNcbi8vIEJpZ0NydXNoIHdpdGggbm8gc3lzdGVtYXRpYyBmYWlsdXJlcy4gIEl0cyBsb25nIHBlcmlvZCBtYXlcbi8vIGJlIHVzZWZ1bCBpZiB5b3UgaGF2ZSBtYW55IGdlbmVyYXRvcnMgYW5kIG5lZWQgdG8gYXZvaWRcbi8vIGNvbGxpc2lvbnMuXG4vLyBQZXJpb2Q6IDJeNDEyOC0yXjMyLlxuLy8gTm8gc3lzdGVtYXRpYyBCaWdDcnVzaCBmYWlsdXJlcyByZXBvcnRlZC5cbnZhciB4b3I0MDk2ID0gcmVxdWlyZSgnLi9saWIveG9yNDA5NicpO1xuXG4vLyBUeWNoZS1pLCBieSBTYW11ZWwgTmV2ZXMgYW5kIEZpbGlwZSBBcmF1am8sIGlzIGEgYml0LXNoaWZ0aW5nIHJhbmRvbVxuLy8gbnVtYmVyIGdlbmVyYXRvciBkZXJpdmVkIGZyb20gQ2hhQ2hhLCBhIG1vZGVybiBzdHJlYW0gY2lwaGVyLlxuLy8gaHR0cHM6Ly9lZGVuLmRlaS51Yy5wdC9+c25ldmVzL3B1YnMvMjAxMS1zbmZhMi5wZGZcbi8vIFBlcmlvZDogfjJeMTI3XG4vLyBObyBzeXN0ZW1hdGljIEJpZ0NydXNoIGZhaWx1cmVzIHJlcG9ydGVkLlxudmFyIHR5Y2hlaSA9IHJlcXVpcmUoJy4vbGliL3R5Y2hlaScpO1xuXG4vLyBUaGUgb3JpZ2luYWwgQVJDNC1iYXNlZCBwcm5nIGluY2x1ZGVkIGluIHRoaXMgbGlicmFyeS5cbi8vIFBlcmlvZDogfjJeMTYwMFxudmFyIHNyID0gcmVxdWlyZSgnLi9zZWVkcmFuZG9tJyk7XG5cbnNyLmFsZWEgPSBhbGVhO1xuc3IueG9yMTI4ID0geG9yMTI4O1xuc3IueG9yd293ID0geG9yd293O1xuc3IueG9yc2hpZnQ3ID0geG9yc2hpZnQ3O1xuc3IueG9yNDA5NiA9IHhvcjQwOTY7XG5zci50eWNoZWkgPSB0eWNoZWk7XG5cbm1vZHVsZS5leHBvcnRzID0gc3I7XG4iLCIvLyBBIHBvcnQgb2YgYW4gYWxnb3JpdGhtIGJ5IEpvaGFubmVzIEJhYWfDuGUgPGJhYWdvZUBiYWFnb2UuY29tPiwgMjAxMFxuLy8gaHR0cDovL2JhYWdvZS5jb20vZW4vUmFuZG9tTXVzaW5ncy9qYXZhc2NyaXB0L1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL25xdWlubGFuL2JldHRlci1yYW5kb20tbnVtYmVycy1mb3ItamF2YXNjcmlwdC1taXJyb3Jcbi8vIE9yaWdpbmFsIHdvcmsgaXMgdW5kZXIgTUlUIGxpY2Vuc2UgLVxuXG4vLyBDb3B5cmlnaHQgKEMpIDIwMTAgYnkgSm9oYW5uZXMgQmFhZ8O4ZSA8YmFhZ29lQGJhYWdvZS5vcmc+XG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuXG5cbihmdW5jdGlvbihnbG9iYWwsIG1vZHVsZSwgZGVmaW5lKSB7XG5cbmZ1bmN0aW9uIEFsZWEoc2VlZCkge1xuICB2YXIgbWUgPSB0aGlzLCBtYXNoID0gTWFzaCgpO1xuXG4gIG1lLm5leHQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgdCA9IDIwOTE2MzkgKiBtZS5zMCArIG1lLmMgKiAyLjMyODMwNjQzNjUzODY5NjNlLTEwOyAvLyAyXi0zMlxuICAgIG1lLnMwID0gbWUuczE7XG4gICAgbWUuczEgPSBtZS5zMjtcbiAgICByZXR1cm4gbWUuczIgPSB0IC0gKG1lLmMgPSB0IHwgMCk7XG4gIH07XG5cbiAgLy8gQXBwbHkgdGhlIHNlZWRpbmcgYWxnb3JpdGhtIGZyb20gQmFhZ29lLlxuICBtZS5jID0gMTtcbiAgbWUuczAgPSBtYXNoKCcgJyk7XG4gIG1lLnMxID0gbWFzaCgnICcpO1xuICBtZS5zMiA9IG1hc2goJyAnKTtcbiAgbWUuczAgLT0gbWFzaChzZWVkKTtcbiAgaWYgKG1lLnMwIDwgMCkgeyBtZS5zMCArPSAxOyB9XG4gIG1lLnMxIC09IG1hc2goc2VlZCk7XG4gIGlmIChtZS5zMSA8IDApIHsgbWUuczEgKz0gMTsgfVxuICBtZS5zMiAtPSBtYXNoKHNlZWQpO1xuICBpZiAobWUuczIgPCAwKSB7IG1lLnMyICs9IDE7IH1cbiAgbWFzaCA9IG51bGw7XG59XG5cbmZ1bmN0aW9uIGNvcHkoZiwgdCkge1xuICB0LmMgPSBmLmM7XG4gIHQuczAgPSBmLnMwO1xuICB0LnMxID0gZi5zMTtcbiAgdC5zMiA9IGYuczI7XG4gIHJldHVybiB0O1xufVxuXG5mdW5jdGlvbiBpbXBsKHNlZWQsIG9wdHMpIHtcbiAgdmFyIHhnID0gbmV3IEFsZWEoc2VlZCksXG4gICAgICBzdGF0ZSA9IG9wdHMgJiYgb3B0cy5zdGF0ZSxcbiAgICAgIHBybmcgPSB4Zy5uZXh0O1xuICBwcm5nLmludDMyID0gZnVuY3Rpb24oKSB7IHJldHVybiAoeGcubmV4dCgpICogMHgxMDAwMDAwMDApIHwgMDsgfVxuICBwcm5nLmRvdWJsZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBwcm5nKCkgKyAocHJuZygpICogMHgyMDAwMDAgfCAwKSAqIDEuMTEwMjIzMDI0NjI1MTU2NWUtMTY7IC8vIDJeLTUzXG4gIH07XG4gIHBybmcucXVpY2sgPSBwcm5nO1xuICBpZiAoc3RhdGUpIHtcbiAgICBpZiAodHlwZW9mKHN0YXRlKSA9PSAnb2JqZWN0JykgY29weShzdGF0ZSwgeGcpO1xuICAgIHBybmcuc3RhdGUgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvcHkoeGcsIHt9KTsgfVxuICB9XG4gIHJldHVybiBwcm5nO1xufVxuXG5mdW5jdGlvbiBNYXNoKCkge1xuICB2YXIgbiA9IDB4ZWZjODI0OWQ7XG5cbiAgdmFyIG1hc2ggPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgZGF0YSA9IFN0cmluZyhkYXRhKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIG4gKz0gZGF0YS5jaGFyQ29kZUF0KGkpO1xuICAgICAgdmFyIGggPSAwLjAyNTE5NjAzMjgyNDE2OTM4ICogbjtcbiAgICAgIG4gPSBoID4+PiAwO1xuICAgICAgaCAtPSBuO1xuICAgICAgaCAqPSBuO1xuICAgICAgbiA9IGggPj4+IDA7XG4gICAgICBoIC09IG47XG4gICAgICBuICs9IGggKiAweDEwMDAwMDAwMDsgLy8gMl4zMlxuICAgIH1cbiAgICByZXR1cm4gKG4gPj4+IDApICogMi4zMjgzMDY0MzY1Mzg2OTYzZS0xMDsgLy8gMl4tMzJcbiAgfTtcblxuICByZXR1cm4gbWFzaDtcbn1cblxuXG5pZiAobW9kdWxlICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gaW1wbDtcbn0gZWxzZSBpZiAoZGVmaW5lICYmIGRlZmluZS5hbWQpIHtcbiAgZGVmaW5lKGZ1bmN0aW9uKCkgeyByZXR1cm4gaW1wbDsgfSk7XG59IGVsc2Uge1xuICB0aGlzLmFsZWEgPSBpbXBsO1xufVxuXG59KShcbiAgdGhpcyxcbiAgKHR5cGVvZiBtb2R1bGUpID09ICdvYmplY3QnICYmIG1vZHVsZSwgICAgLy8gcHJlc2VudCBpbiBub2RlLmpzXG4gICh0eXBlb2YgZGVmaW5lKSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZSAgIC8vIHByZXNlbnQgd2l0aCBhbiBBTUQgbG9hZGVyXG4pO1xuXG5cbiIsIi8vIEEgSmF2YXNjcmlwdCBpbXBsZW1lbnRhaW9uIG9mIHRoZSBcIlR5Y2hlLWlcIiBwcm5nIGFsZ29yaXRobSBieVxuLy8gU2FtdWVsIE5ldmVzIGFuZCBGaWxpcGUgQXJhdWpvLlxuLy8gU2VlIGh0dHBzOi8vZWRlbi5kZWkudWMucHQvfnNuZXZlcy9wdWJzLzIwMTEtc25mYTIucGRmXG5cbihmdW5jdGlvbihnbG9iYWwsIG1vZHVsZSwgZGVmaW5lKSB7XG5cbmZ1bmN0aW9uIFhvckdlbihzZWVkKSB7XG4gIHZhciBtZSA9IHRoaXMsIHN0cnNlZWQgPSAnJztcblxuICAvLyBTZXQgdXAgZ2VuZXJhdG9yIGZ1bmN0aW9uLlxuICBtZS5uZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGIgPSBtZS5iLCBjID0gbWUuYywgZCA9IG1lLmQsIGEgPSBtZS5hO1xuICAgIGIgPSAoYiA8PCAyNSkgXiAoYiA+Pj4gNykgXiBjO1xuICAgIGMgPSAoYyAtIGQpIHwgMDtcbiAgICBkID0gKGQgPDwgMjQpIF4gKGQgPj4+IDgpIF4gYTtcbiAgICBhID0gKGEgLSBiKSB8IDA7XG4gICAgbWUuYiA9IGIgPSAoYiA8PCAyMCkgXiAoYiA+Pj4gMTIpIF4gYztcbiAgICBtZS5jID0gYyA9IChjIC0gZCkgfCAwO1xuICAgIG1lLmQgPSAoZCA8PCAxNikgXiAoYyA+Pj4gMTYpIF4gYTtcbiAgICByZXR1cm4gbWUuYSA9IChhIC0gYikgfCAwO1xuICB9O1xuXG4gIC8qIFRoZSBmb2xsb3dpbmcgaXMgbm9uLWludmVydGVkIHR5Y2hlLCB3aGljaCBoYXMgYmV0dGVyIGludGVybmFsXG4gICAqIGJpdCBkaWZmdXNpb24sIGJ1dCB3aGljaCBpcyBhYm91dCAyNSUgc2xvd2VyIHRoYW4gdHljaGUtaSBpbiBKUy5cbiAgbWUubmV4dCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBhID0gbWUuYSwgYiA9IG1lLmIsIGMgPSBtZS5jLCBkID0gbWUuZDtcbiAgICBhID0gKG1lLmEgKyBtZS5iIHwgMCkgPj4+IDA7XG4gICAgZCA9IG1lLmQgXiBhOyBkID0gZCA8PCAxNiBeIGQgPj4+IDE2O1xuICAgIGMgPSBtZS5jICsgZCB8IDA7XG4gICAgYiA9IG1lLmIgXiBjOyBiID0gYiA8PCAxMiBeIGQgPj4+IDIwO1xuICAgIG1lLmEgPSBhID0gYSArIGIgfCAwO1xuICAgIGQgPSBkIF4gYTsgbWUuZCA9IGQgPSBkIDw8IDggXiBkID4+PiAyNDtcbiAgICBtZS5jID0gYyA9IGMgKyBkIHwgMDtcbiAgICBiID0gYiBeIGM7XG4gICAgcmV0dXJuIG1lLmIgPSAoYiA8PCA3IF4gYiA+Pj4gMjUpO1xuICB9XG4gICovXG5cbiAgbWUuYSA9IDA7XG4gIG1lLmIgPSAwO1xuICBtZS5jID0gMjY1NDQzNTc2OSB8IDA7XG4gIG1lLmQgPSAxMzY3MTMwNTUxO1xuXG4gIGlmIChzZWVkID09PSBNYXRoLmZsb29yKHNlZWQpKSB7XG4gICAgLy8gSW50ZWdlciBzZWVkLlxuICAgIG1lLmEgPSAoc2VlZCAvIDB4MTAwMDAwMDAwKSB8IDA7XG4gICAgbWUuYiA9IHNlZWQgfCAwO1xuICB9IGVsc2Uge1xuICAgIC8vIFN0cmluZyBzZWVkLlxuICAgIHN0cnNlZWQgKz0gc2VlZDtcbiAgfVxuXG4gIC8vIE1peCBpbiBzdHJpbmcgc2VlZCwgdGhlbiBkaXNjYXJkIGFuIGluaXRpYWwgYmF0Y2ggb2YgNjQgdmFsdWVzLlxuICBmb3IgKHZhciBrID0gMDsgayA8IHN0cnNlZWQubGVuZ3RoICsgMjA7IGsrKykge1xuICAgIG1lLmIgXj0gc3Ryc2VlZC5jaGFyQ29kZUF0KGspIHwgMDtcbiAgICBtZS5uZXh0KCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY29weShmLCB0KSB7XG4gIHQuYSA9IGYuYTtcbiAgdC5iID0gZi5iO1xuICB0LmMgPSBmLmM7XG4gIHQuZCA9IGYuZDtcbiAgcmV0dXJuIHQ7XG59O1xuXG5mdW5jdGlvbiBpbXBsKHNlZWQsIG9wdHMpIHtcbiAgdmFyIHhnID0gbmV3IFhvckdlbihzZWVkKSxcbiAgICAgIHN0YXRlID0gb3B0cyAmJiBvcHRzLnN0YXRlLFxuICAgICAgcHJuZyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gKHhnLm5leHQoKSA+Pj4gMCkgLyAweDEwMDAwMDAwMDsgfTtcbiAgcHJuZy5kb3VibGUgPSBmdW5jdGlvbigpIHtcbiAgICBkbyB7XG4gICAgICB2YXIgdG9wID0geGcubmV4dCgpID4+PiAxMSxcbiAgICAgICAgICBib3QgPSAoeGcubmV4dCgpID4+PiAwKSAvIDB4MTAwMDAwMDAwLFxuICAgICAgICAgIHJlc3VsdCA9ICh0b3AgKyBib3QpIC8gKDEgPDwgMjEpO1xuICAgIH0gd2hpbGUgKHJlc3VsdCA9PT0gMCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgcHJuZy5pbnQzMiA9IHhnLm5leHQ7XG4gIHBybmcucXVpY2sgPSBwcm5nO1xuICBpZiAoc3RhdGUpIHtcbiAgICBpZiAodHlwZW9mKHN0YXRlKSA9PSAnb2JqZWN0JykgY29weShzdGF0ZSwgeGcpO1xuICAgIHBybmcuc3RhdGUgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvcHkoeGcsIHt9KTsgfVxuICB9XG4gIHJldHVybiBwcm5nO1xufVxuXG5pZiAobW9kdWxlICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gaW1wbDtcbn0gZWxzZSBpZiAoZGVmaW5lICYmIGRlZmluZS5hbWQpIHtcbiAgZGVmaW5lKGZ1bmN0aW9uKCkgeyByZXR1cm4gaW1wbDsgfSk7XG59IGVsc2Uge1xuICB0aGlzLnR5Y2hlaSA9IGltcGw7XG59XG5cbn0pKFxuICB0aGlzLFxuICAodHlwZW9mIG1vZHVsZSkgPT0gJ29iamVjdCcgJiYgbW9kdWxlLCAgICAvLyBwcmVzZW50IGluIG5vZGUuanNcbiAgKHR5cGVvZiBkZWZpbmUpID09ICdmdW5jdGlvbicgJiYgZGVmaW5lICAgLy8gcHJlc2VudCB3aXRoIGFuIEFNRCBsb2FkZXJcbik7XG5cblxuIiwiLy8gQSBKYXZhc2NyaXB0IGltcGxlbWVudGFpb24gb2YgdGhlIFwieG9yMTI4XCIgcHJuZyBhbGdvcml0aG0gYnlcbi8vIEdlb3JnZSBNYXJzYWdsaWEuICBTZWUgaHR0cDovL3d3dy5qc3RhdHNvZnQub3JnL3YwOC9pMTQvcGFwZXJcblxuKGZ1bmN0aW9uKGdsb2JhbCwgbW9kdWxlLCBkZWZpbmUpIHtcblxuZnVuY3Rpb24gWG9yR2VuKHNlZWQpIHtcbiAgdmFyIG1lID0gdGhpcywgc3Ryc2VlZCA9ICcnO1xuXG4gIG1lLnggPSAwO1xuICBtZS55ID0gMDtcbiAgbWUueiA9IDA7XG4gIG1lLncgPSAwO1xuXG4gIC8vIFNldCB1cCBnZW5lcmF0b3IgZnVuY3Rpb24uXG4gIG1lLm5leHQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgdCA9IG1lLnggXiAobWUueCA8PCAxMSk7XG4gICAgbWUueCA9IG1lLnk7XG4gICAgbWUueSA9IG1lLno7XG4gICAgbWUueiA9IG1lLnc7XG4gICAgcmV0dXJuIG1lLncgXj0gKG1lLncgPj4+IDE5KSBeIHQgXiAodCA+Pj4gOCk7XG4gIH07XG5cbiAgaWYgKHNlZWQgPT09IChzZWVkIHwgMCkpIHtcbiAgICAvLyBJbnRlZ2VyIHNlZWQuXG4gICAgbWUueCA9IHNlZWQ7XG4gIH0gZWxzZSB7XG4gICAgLy8gU3RyaW5nIHNlZWQuXG4gICAgc3Ryc2VlZCArPSBzZWVkO1xuICB9XG5cbiAgLy8gTWl4IGluIHN0cmluZyBzZWVkLCB0aGVuIGRpc2NhcmQgYW4gaW5pdGlhbCBiYXRjaCBvZiA2NCB2YWx1ZXMuXG4gIGZvciAodmFyIGsgPSAwOyBrIDwgc3Ryc2VlZC5sZW5ndGggKyA2NDsgaysrKSB7XG4gICAgbWUueCBePSBzdHJzZWVkLmNoYXJDb2RlQXQoaykgfCAwO1xuICAgIG1lLm5leHQoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb3B5KGYsIHQpIHtcbiAgdC54ID0gZi54O1xuICB0LnkgPSBmLnk7XG4gIHQueiA9IGYuejtcbiAgdC53ID0gZi53O1xuICByZXR1cm4gdDtcbn1cblxuZnVuY3Rpb24gaW1wbChzZWVkLCBvcHRzKSB7XG4gIHZhciB4ZyA9IG5ldyBYb3JHZW4oc2VlZCksXG4gICAgICBzdGF0ZSA9IG9wdHMgJiYgb3B0cy5zdGF0ZSxcbiAgICAgIHBybmcgPSBmdW5jdGlvbigpIHsgcmV0dXJuICh4Zy5uZXh0KCkgPj4+IDApIC8gMHgxMDAwMDAwMDA7IH07XG4gIHBybmcuZG91YmxlID0gZnVuY3Rpb24oKSB7XG4gICAgZG8ge1xuICAgICAgdmFyIHRvcCA9IHhnLm5leHQoKSA+Pj4gMTEsXG4gICAgICAgICAgYm90ID0gKHhnLm5leHQoKSA+Pj4gMCkgLyAweDEwMDAwMDAwMCxcbiAgICAgICAgICByZXN1bHQgPSAodG9wICsgYm90KSAvICgxIDw8IDIxKTtcbiAgICB9IHdoaWxlIChyZXN1bHQgPT09IDApO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIHBybmcuaW50MzIgPSB4Zy5uZXh0O1xuICBwcm5nLnF1aWNrID0gcHJuZztcbiAgaWYgKHN0YXRlKSB7XG4gICAgaWYgKHR5cGVvZihzdGF0ZSkgPT0gJ29iamVjdCcpIGNvcHkoc3RhdGUsIHhnKTtcbiAgICBwcm5nLnN0YXRlID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb3B5KHhnLCB7fSk7IH1cbiAgfVxuICByZXR1cm4gcHJuZztcbn1cblxuaWYgKG1vZHVsZSAmJiBtb2R1bGUuZXhwb3J0cykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGltcGw7XG59IGVsc2UgaWYgKGRlZmluZSAmJiBkZWZpbmUuYW1kKSB7XG4gIGRlZmluZShmdW5jdGlvbigpIHsgcmV0dXJuIGltcGw7IH0pO1xufSBlbHNlIHtcbiAgdGhpcy54b3IxMjggPSBpbXBsO1xufVxuXG59KShcbiAgdGhpcyxcbiAgKHR5cGVvZiBtb2R1bGUpID09ICdvYmplY3QnICYmIG1vZHVsZSwgICAgLy8gcHJlc2VudCBpbiBub2RlLmpzXG4gICh0eXBlb2YgZGVmaW5lKSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZSAgIC8vIHByZXNlbnQgd2l0aCBhbiBBTUQgbG9hZGVyXG4pO1xuXG5cbiIsIi8vIEEgSmF2YXNjcmlwdCBpbXBsZW1lbnRhaW9uIG9mIFJpY2hhcmQgQnJlbnQncyBYb3JnZW5zIHhvcjQwOTYgYWxnb3JpdGhtLlxuLy9cbi8vIFRoaXMgZmFzdCBub24tY3J5cHRvZ3JhcGhpYyByYW5kb20gbnVtYmVyIGdlbmVyYXRvciBpcyBkZXNpZ25lZCBmb3Jcbi8vIHVzZSBpbiBNb250ZS1DYXJsbyBhbGdvcml0aG1zLiBJdCBjb21iaW5lcyBhIGxvbmctcGVyaW9kIHhvcnNoaWZ0XG4vLyBnZW5lcmF0b3Igd2l0aCBhIFdleWwgZ2VuZXJhdG9yLCBhbmQgaXQgcGFzc2VzIGFsbCBjb21tb24gYmF0dGVyaWVzXG4vLyBvZiBzdGFzdGljaWFsIHRlc3RzIGZvciByYW5kb21uZXNzIHdoaWxlIGNvbnN1bWluZyBvbmx5IGEgZmV3IG5hbm9zZWNvbmRzXG4vLyBmb3IgZWFjaCBwcm5nIGdlbmVyYXRlZC4gIEZvciBiYWNrZ3JvdW5kIG9uIHRoZSBnZW5lcmF0b3IsIHNlZSBCcmVudCdzXG4vLyBwYXBlcjogXCJTb21lIGxvbmctcGVyaW9kIHJhbmRvbSBudW1iZXIgZ2VuZXJhdG9ycyB1c2luZyBzaGlmdHMgYW5kIHhvcnMuXCJcbi8vIGh0dHA6Ly9hcnhpdi5vcmcvcGRmLzEwMDQuMzExNXYxLnBkZlxuLy9cbi8vIFVzYWdlOlxuLy9cbi8vIHZhciB4b3I0MDk2ID0gcmVxdWlyZSgneG9yNDA5NicpO1xuLy8gcmFuZG9tID0geG9yNDA5NigxKTsgICAgICAgICAgICAgICAgICAgICAgICAvLyBTZWVkIHdpdGggaW50MzIgb3Igc3RyaW5nLlxuLy8gYXNzZXJ0LmVxdWFsKHJhbmRvbSgpLCAwLjE1MjA0MzY0NTA1Mzg1NDcpOyAvLyAoMCwgMSkgcmFuZ2UsIDUzIGJpdHMuXG4vLyBhc3NlcnQuZXF1YWwocmFuZG9tLmludDMyKCksIDE4MDY1MzQ4OTcpOyAgIC8vIHNpZ25lZCBpbnQzMiwgMzIgYml0cy5cbi8vXG4vLyBGb3Igbm9uemVybyBudW1lcmljIGtleXMsIHRoaXMgaW1wZWxlbWVudGF0aW9uIHByb3ZpZGVzIGEgc2VxdWVuY2Vcbi8vIGlkZW50aWNhbCB0byB0aGF0IGJ5IEJyZW50J3MgeG9yZ2VucyAzIGltcGxlbWVudGFpb24gaW4gQy4gIFRoaXNcbi8vIGltcGxlbWVudGF0aW9uIGFsc28gcHJvdmlkZXMgZm9yIGluaXRhbGl6aW5nIHRoZSBnZW5lcmF0b3Igd2l0aFxuLy8gc3RyaW5nIHNlZWRzLCBvciBmb3Igc2F2aW5nIGFuZCByZXN0b3JpbmcgdGhlIHN0YXRlIG9mIHRoZSBnZW5lcmF0b3IuXG4vL1xuLy8gT24gQ2hyb21lLCB0aGlzIHBybmcgYmVuY2htYXJrcyBhYm91dCAyLjEgdGltZXMgc2xvd2VyIHRoYW5cbi8vIEphdmFzY3JpcHQncyBidWlsdC1pbiBNYXRoLnJhbmRvbSgpLlxuXG4oZnVuY3Rpb24oZ2xvYmFsLCBtb2R1bGUsIGRlZmluZSkge1xuXG5mdW5jdGlvbiBYb3JHZW4oc2VlZCkge1xuICB2YXIgbWUgPSB0aGlzO1xuXG4gIC8vIFNldCB1cCBnZW5lcmF0b3IgZnVuY3Rpb24uXG4gIG1lLm5leHQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgdyA9IG1lLncsXG4gICAgICAgIFggPSBtZS5YLCBpID0gbWUuaSwgdCwgdjtcbiAgICAvLyBVcGRhdGUgV2V5bCBnZW5lcmF0b3IuXG4gICAgbWUudyA9IHcgPSAodyArIDB4NjFjODg2NDcpIHwgMDtcbiAgICAvLyBVcGRhdGUgeG9yIGdlbmVyYXRvci5cbiAgICB2ID0gWFsoaSArIDM0KSAmIDEyN107XG4gICAgdCA9IFhbaSA9ICgoaSArIDEpICYgMTI3KV07XG4gICAgdiBePSB2IDw8IDEzO1xuICAgIHQgXj0gdCA8PCAxNztcbiAgICB2IF49IHYgPj4+IDE1O1xuICAgIHQgXj0gdCA+Pj4gMTI7XG4gICAgLy8gVXBkYXRlIFhvciBnZW5lcmF0b3IgYXJyYXkgc3RhdGUuXG4gICAgdiA9IFhbaV0gPSB2IF4gdDtcbiAgICBtZS5pID0gaTtcbiAgICAvLyBSZXN1bHQgaXMgdGhlIGNvbWJpbmF0aW9uLlxuICAgIHJldHVybiAodiArICh3IF4gKHcgPj4+IDE2KSkpIHwgMDtcbiAgfTtcblxuICBmdW5jdGlvbiBpbml0KG1lLCBzZWVkKSB7XG4gICAgdmFyIHQsIHYsIGksIGosIHcsIFggPSBbXSwgbGltaXQgPSAxMjg7XG4gICAgaWYgKHNlZWQgPT09IChzZWVkIHwgMCkpIHtcbiAgICAgIC8vIE51bWVyaWMgc2VlZHMgaW5pdGlhbGl6ZSB2LCB3aGljaCBpcyB1c2VkIHRvIGdlbmVyYXRlcyBYLlxuICAgICAgdiA9IHNlZWQ7XG4gICAgICBzZWVkID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU3RyaW5nIHNlZWRzIGFyZSBtaXhlZCBpbnRvIHYgYW5kIFggb25lIGNoYXJhY3RlciBhdCBhIHRpbWUuXG4gICAgICBzZWVkID0gc2VlZCArICdcXDAnO1xuICAgICAgdiA9IDA7XG4gICAgICBsaW1pdCA9IE1hdGgubWF4KGxpbWl0LCBzZWVkLmxlbmd0aCk7XG4gICAgfVxuICAgIC8vIEluaXRpYWxpemUgY2lyY3VsYXIgYXJyYXkgYW5kIHdleWwgdmFsdWUuXG4gICAgZm9yIChpID0gMCwgaiA9IC0zMjsgaiA8IGxpbWl0OyArK2opIHtcbiAgICAgIC8vIFB1dCB0aGUgdW5pY29kZSBjaGFyYWN0ZXJzIGludG8gdGhlIGFycmF5LCBhbmQgc2h1ZmZsZSB0aGVtLlxuICAgICAgaWYgKHNlZWQpIHYgXj0gc2VlZC5jaGFyQ29kZUF0KChqICsgMzIpICUgc2VlZC5sZW5ndGgpO1xuICAgICAgLy8gQWZ0ZXIgMzIgc2h1ZmZsZXMsIHRha2UgdiBhcyB0aGUgc3RhcnRpbmcgdyB2YWx1ZS5cbiAgICAgIGlmIChqID09PSAwKSB3ID0gdjtcbiAgICAgIHYgXj0gdiA8PCAxMDtcbiAgICAgIHYgXj0gdiA+Pj4gMTU7XG4gICAgICB2IF49IHYgPDwgNDtcbiAgICAgIHYgXj0gdiA+Pj4gMTM7XG4gICAgICBpZiAoaiA+PSAwKSB7XG4gICAgICAgIHcgPSAodyArIDB4NjFjODg2NDcpIHwgMDsgICAgIC8vIFdleWwuXG4gICAgICAgIHQgPSAoWFtqICYgMTI3XSBePSAodiArIHcpKTsgIC8vIENvbWJpbmUgeG9yIGFuZCB3ZXlsIHRvIGluaXQgYXJyYXkuXG4gICAgICAgIGkgPSAoMCA9PSB0KSA/IGkgKyAxIDogMDsgICAgIC8vIENvdW50IHplcm9lcy5cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gV2UgaGF2ZSBkZXRlY3RlZCBhbGwgemVyb2VzOyBtYWtlIHRoZSBrZXkgbm9uemVyby5cbiAgICBpZiAoaSA+PSAxMjgpIHtcbiAgICAgIFhbKHNlZWQgJiYgc2VlZC5sZW5ndGggfHwgMCkgJiAxMjddID0gLTE7XG4gICAgfVxuICAgIC8vIFJ1biB0aGUgZ2VuZXJhdG9yIDUxMiB0aW1lcyB0byBmdXJ0aGVyIG1peCB0aGUgc3RhdGUgYmVmb3JlIHVzaW5nIGl0LlxuICAgIC8vIEZhY3RvcmluZyB0aGlzIGFzIGEgZnVuY3Rpb24gc2xvd3MgdGhlIG1haW4gZ2VuZXJhdG9yLCBzbyBpdCBpcyBqdXN0XG4gICAgLy8gdW5yb2xsZWQgaGVyZS4gIFRoZSB3ZXlsIGdlbmVyYXRvciBpcyBub3QgYWR2YW5jZWQgd2hpbGUgd2FybWluZyB1cC5cbiAgICBpID0gMTI3O1xuICAgIGZvciAoaiA9IDQgKiAxMjg7IGogPiAwOyAtLWopIHtcbiAgICAgIHYgPSBYWyhpICsgMzQpICYgMTI3XTtcbiAgICAgIHQgPSBYW2kgPSAoKGkgKyAxKSAmIDEyNyldO1xuICAgICAgdiBePSB2IDw8IDEzO1xuICAgICAgdCBePSB0IDw8IDE3O1xuICAgICAgdiBePSB2ID4+PiAxNTtcbiAgICAgIHQgXj0gdCA+Pj4gMTI7XG4gICAgICBYW2ldID0gdiBeIHQ7XG4gICAgfVxuICAgIC8vIFN0b3Jpbmcgc3RhdGUgYXMgb2JqZWN0IG1lbWJlcnMgaXMgZmFzdGVyIHRoYW4gdXNpbmcgY2xvc3VyZSB2YXJpYWJsZXMuXG4gICAgbWUudyA9IHc7XG4gICAgbWUuWCA9IFg7XG4gICAgbWUuaSA9IGk7XG4gIH1cblxuICBpbml0KG1lLCBzZWVkKTtcbn1cblxuZnVuY3Rpb24gY29weShmLCB0KSB7XG4gIHQuaSA9IGYuaTtcbiAgdC53ID0gZi53O1xuICB0LlggPSBmLlguc2xpY2UoKTtcbiAgcmV0dXJuIHQ7XG59O1xuXG5mdW5jdGlvbiBpbXBsKHNlZWQsIG9wdHMpIHtcbiAgaWYgKHNlZWQgPT0gbnVsbCkgc2VlZCA9ICsobmV3IERhdGUpO1xuICB2YXIgeGcgPSBuZXcgWG9yR2VuKHNlZWQpLFxuICAgICAgc3RhdGUgPSBvcHRzICYmIG9wdHMuc3RhdGUsXG4gICAgICBwcm5nID0gZnVuY3Rpb24oKSB7IHJldHVybiAoeGcubmV4dCgpID4+PiAwKSAvIDB4MTAwMDAwMDAwOyB9O1xuICBwcm5nLmRvdWJsZSA9IGZ1bmN0aW9uKCkge1xuICAgIGRvIHtcbiAgICAgIHZhciB0b3AgPSB4Zy5uZXh0KCkgPj4+IDExLFxuICAgICAgICAgIGJvdCA9ICh4Zy5uZXh0KCkgPj4+IDApIC8gMHgxMDAwMDAwMDAsXG4gICAgICAgICAgcmVzdWx0ID0gKHRvcCArIGJvdCkgLyAoMSA8PCAyMSk7XG4gICAgfSB3aGlsZSAocmVzdWx0ID09PSAwKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICBwcm5nLmludDMyID0geGcubmV4dDtcbiAgcHJuZy5xdWljayA9IHBybmc7XG4gIGlmIChzdGF0ZSkge1xuICAgIGlmIChzdGF0ZS5YKSBjb3B5KHN0YXRlLCB4Zyk7XG4gICAgcHJuZy5zdGF0ZSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29weSh4Zywge30pOyB9XG4gIH1cbiAgcmV0dXJuIHBybmc7XG59XG5cbmlmIChtb2R1bGUgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBpbXBsO1xufSBlbHNlIGlmIChkZWZpbmUgJiYgZGVmaW5lLmFtZCkge1xuICBkZWZpbmUoZnVuY3Rpb24oKSB7IHJldHVybiBpbXBsOyB9KTtcbn0gZWxzZSB7XG4gIHRoaXMueG9yNDA5NiA9IGltcGw7XG59XG5cbn0pKFxuICB0aGlzLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3aW5kb3cgb2JqZWN0IG9yIGdsb2JhbFxuICAodHlwZW9mIG1vZHVsZSkgPT0gJ29iamVjdCcgJiYgbW9kdWxlLCAgICAvLyBwcmVzZW50IGluIG5vZGUuanNcbiAgKHR5cGVvZiBkZWZpbmUpID09ICdmdW5jdGlvbicgJiYgZGVmaW5lICAgLy8gcHJlc2VudCB3aXRoIGFuIEFNRCBsb2FkZXJcbik7XG4iLCIvLyBBIEphdmFzY3JpcHQgaW1wbGVtZW50YWlvbiBvZiB0aGUgXCJ4b3JzaGlmdDdcIiBhbGdvcml0aG0gYnlcbi8vIEZyYW7Dp29pcyBQYW5uZXRvbiBhbmQgUGllcnJlIEwnZWN1eWVyOlxuLy8gXCJPbiB0aGUgWG9yZ3NoaWZ0IFJhbmRvbSBOdW1iZXIgR2VuZXJhdG9yc1wiXG4vLyBodHRwOi8vc2FsdWMuZW5nci51Y29ubi5lZHUvcmVmcy9jcnlwdG8vcm5nL3Bhbm5ldG9uMDVvbnRoZXhvcnNoaWZ0LnBkZlxuXG4oZnVuY3Rpb24oZ2xvYmFsLCBtb2R1bGUsIGRlZmluZSkge1xuXG5mdW5jdGlvbiBYb3JHZW4oc2VlZCkge1xuICB2YXIgbWUgPSB0aGlzO1xuXG4gIC8vIFNldCB1cCBnZW5lcmF0b3IgZnVuY3Rpb24uXG4gIG1lLm5leHQgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBVcGRhdGUgeG9yIGdlbmVyYXRvci5cbiAgICB2YXIgWCA9IG1lLngsIGkgPSBtZS5pLCB0LCB2LCB3O1xuICAgIHQgPSBYW2ldOyB0IF49ICh0ID4+PiA3KTsgdiA9IHQgXiAodCA8PCAyNCk7XG4gICAgdCA9IFhbKGkgKyAxKSAmIDddOyB2IF49IHQgXiAodCA+Pj4gMTApO1xuICAgIHQgPSBYWyhpICsgMykgJiA3XTsgdiBePSB0IF4gKHQgPj4+IDMpO1xuICAgIHQgPSBYWyhpICsgNCkgJiA3XTsgdiBePSB0IF4gKHQgPDwgNyk7XG4gICAgdCA9IFhbKGkgKyA3KSAmIDddOyB0ID0gdCBeICh0IDw8IDEzKTsgdiBePSB0IF4gKHQgPDwgOSk7XG4gICAgWFtpXSA9IHY7XG4gICAgbWUuaSA9IChpICsgMSkgJiA3O1xuICAgIHJldHVybiB2O1xuICB9O1xuXG4gIGZ1bmN0aW9uIGluaXQobWUsIHNlZWQpIHtcbiAgICB2YXIgaiwgdywgWCA9IFtdO1xuXG4gICAgaWYgKHNlZWQgPT09IChzZWVkIHwgMCkpIHtcbiAgICAgIC8vIFNlZWQgc3RhdGUgYXJyYXkgdXNpbmcgYSAzMi1iaXQgaW50ZWdlci5cbiAgICAgIHcgPSBYWzBdID0gc2VlZDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU2VlZCBzdGF0ZSB1c2luZyBhIHN0cmluZy5cbiAgICAgIHNlZWQgPSAnJyArIHNlZWQ7XG4gICAgICBmb3IgKGogPSAwOyBqIDwgc2VlZC5sZW5ndGg7ICsraikge1xuICAgICAgICBYW2ogJiA3XSA9IChYW2ogJiA3XSA8PCAxNSkgXlxuICAgICAgICAgICAgKHNlZWQuY2hhckNvZGVBdChqKSArIFhbKGogKyAxKSAmIDddIDw8IDEzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gRW5mb3JjZSBhbiBhcnJheSBsZW5ndGggb2YgOCwgbm90IGFsbCB6ZXJvZXMuXG4gICAgd2hpbGUgKFgubGVuZ3RoIDwgOCkgWC5wdXNoKDApO1xuICAgIGZvciAoaiA9IDA7IGogPCA4ICYmIFhbal0gPT09IDA7ICsraik7XG4gICAgaWYgKGogPT0gOCkgdyA9IFhbN10gPSAtMTsgZWxzZSB3ID0gWFtqXTtcblxuICAgIG1lLnggPSBYO1xuICAgIG1lLmkgPSAwO1xuXG4gICAgLy8gRGlzY2FyZCBhbiBpbml0aWFsIDI1NiB2YWx1ZXMuXG4gICAgZm9yIChqID0gMjU2OyBqID4gMDsgLS1qKSB7XG4gICAgICBtZS5uZXh0KCk7XG4gICAgfVxuICB9XG5cbiAgaW5pdChtZSwgc2VlZCk7XG59XG5cbmZ1bmN0aW9uIGNvcHkoZiwgdCkge1xuICB0LnggPSBmLnguc2xpY2UoKTtcbiAgdC5pID0gZi5pO1xuICByZXR1cm4gdDtcbn1cblxuZnVuY3Rpb24gaW1wbChzZWVkLCBvcHRzKSB7XG4gIGlmIChzZWVkID09IG51bGwpIHNlZWQgPSArKG5ldyBEYXRlKTtcbiAgdmFyIHhnID0gbmV3IFhvckdlbihzZWVkKSxcbiAgICAgIHN0YXRlID0gb3B0cyAmJiBvcHRzLnN0YXRlLFxuICAgICAgcHJuZyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gKHhnLm5leHQoKSA+Pj4gMCkgLyAweDEwMDAwMDAwMDsgfTtcbiAgcHJuZy5kb3VibGUgPSBmdW5jdGlvbigpIHtcbiAgICBkbyB7XG4gICAgICB2YXIgdG9wID0geGcubmV4dCgpID4+PiAxMSxcbiAgICAgICAgICBib3QgPSAoeGcubmV4dCgpID4+PiAwKSAvIDB4MTAwMDAwMDAwLFxuICAgICAgICAgIHJlc3VsdCA9ICh0b3AgKyBib3QpIC8gKDEgPDwgMjEpO1xuICAgIH0gd2hpbGUgKHJlc3VsdCA9PT0gMCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgcHJuZy5pbnQzMiA9IHhnLm5leHQ7XG4gIHBybmcucXVpY2sgPSBwcm5nO1xuICBpZiAoc3RhdGUpIHtcbiAgICBpZiAoc3RhdGUueCkgY29weShzdGF0ZSwgeGcpO1xuICAgIHBybmcuc3RhdGUgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvcHkoeGcsIHt9KTsgfVxuICB9XG4gIHJldHVybiBwcm5nO1xufVxuXG5pZiAobW9kdWxlICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gaW1wbDtcbn0gZWxzZSBpZiAoZGVmaW5lICYmIGRlZmluZS5hbWQpIHtcbiAgZGVmaW5lKGZ1bmN0aW9uKCkgeyByZXR1cm4gaW1wbDsgfSk7XG59IGVsc2Uge1xuICB0aGlzLnhvcnNoaWZ0NyA9IGltcGw7XG59XG5cbn0pKFxuICB0aGlzLFxuICAodHlwZW9mIG1vZHVsZSkgPT0gJ29iamVjdCcgJiYgbW9kdWxlLCAgICAvLyBwcmVzZW50IGluIG5vZGUuanNcbiAgKHR5cGVvZiBkZWZpbmUpID09ICdmdW5jdGlvbicgJiYgZGVmaW5lICAgLy8gcHJlc2VudCB3aXRoIGFuIEFNRCBsb2FkZXJcbik7XG5cbiIsIi8vIEEgSmF2YXNjcmlwdCBpbXBsZW1lbnRhaW9uIG9mIHRoZSBcInhvcndvd1wiIHBybmcgYWxnb3JpdGhtIGJ5XG4vLyBHZW9yZ2UgTWFyc2FnbGlhLiAgU2VlIGh0dHA6Ly93d3cuanN0YXRzb2Z0Lm9yZy92MDgvaTE0L3BhcGVyXG5cbihmdW5jdGlvbihnbG9iYWwsIG1vZHVsZSwgZGVmaW5lKSB7XG5cbmZ1bmN0aW9uIFhvckdlbihzZWVkKSB7XG4gIHZhciBtZSA9IHRoaXMsIHN0cnNlZWQgPSAnJztcblxuICAvLyBTZXQgdXAgZ2VuZXJhdG9yIGZ1bmN0aW9uLlxuICBtZS5uZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHQgPSAobWUueCBeIChtZS54ID4+PiAyKSk7XG4gICAgbWUueCA9IG1lLnk7IG1lLnkgPSBtZS56OyBtZS56ID0gbWUudzsgbWUudyA9IG1lLnY7XG4gICAgcmV0dXJuIChtZS5kID0gKG1lLmQgKyAzNjI0MzcgfCAwKSkgK1xuICAgICAgIChtZS52ID0gKG1lLnYgXiAobWUudiA8PCA0KSkgXiAodCBeICh0IDw8IDEpKSkgfCAwO1xuICB9O1xuXG4gIG1lLnggPSAwO1xuICBtZS55ID0gMDtcbiAgbWUueiA9IDA7XG4gIG1lLncgPSAwO1xuICBtZS52ID0gMDtcblxuICBpZiAoc2VlZCA9PT0gKHNlZWQgfCAwKSkge1xuICAgIC8vIEludGVnZXIgc2VlZC5cbiAgICBtZS54ID0gc2VlZDtcbiAgfSBlbHNlIHtcbiAgICAvLyBTdHJpbmcgc2VlZC5cbiAgICBzdHJzZWVkICs9IHNlZWQ7XG4gIH1cblxuICAvLyBNaXggaW4gc3RyaW5nIHNlZWQsIHRoZW4gZGlzY2FyZCBhbiBpbml0aWFsIGJhdGNoIG9mIDY0IHZhbHVlcy5cbiAgZm9yICh2YXIgayA9IDA7IGsgPCBzdHJzZWVkLmxlbmd0aCArIDY0OyBrKyspIHtcbiAgICBtZS54IF49IHN0cnNlZWQuY2hhckNvZGVBdChrKSB8IDA7XG4gICAgaWYgKGsgPT0gc3Ryc2VlZC5sZW5ndGgpIHtcbiAgICAgIG1lLmQgPSBtZS54IDw8IDEwIF4gbWUueCA+Pj4gNDtcbiAgICB9XG4gICAgbWUubmV4dCgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvcHkoZiwgdCkge1xuICB0LnggPSBmLng7XG4gIHQueSA9IGYueTtcbiAgdC56ID0gZi56O1xuICB0LncgPSBmLnc7XG4gIHQudiA9IGYudjtcbiAgdC5kID0gZi5kO1xuICByZXR1cm4gdDtcbn1cblxuZnVuY3Rpb24gaW1wbChzZWVkLCBvcHRzKSB7XG4gIHZhciB4ZyA9IG5ldyBYb3JHZW4oc2VlZCksXG4gICAgICBzdGF0ZSA9IG9wdHMgJiYgb3B0cy5zdGF0ZSxcbiAgICAgIHBybmcgPSBmdW5jdGlvbigpIHsgcmV0dXJuICh4Zy5uZXh0KCkgPj4+IDApIC8gMHgxMDAwMDAwMDA7IH07XG4gIHBybmcuZG91YmxlID0gZnVuY3Rpb24oKSB7XG4gICAgZG8ge1xuICAgICAgdmFyIHRvcCA9IHhnLm5leHQoKSA+Pj4gMTEsXG4gICAgICAgICAgYm90ID0gKHhnLm5leHQoKSA+Pj4gMCkgLyAweDEwMDAwMDAwMCxcbiAgICAgICAgICByZXN1bHQgPSAodG9wICsgYm90KSAvICgxIDw8IDIxKTtcbiAgICB9IHdoaWxlIChyZXN1bHQgPT09IDApO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIHBybmcuaW50MzIgPSB4Zy5uZXh0O1xuICBwcm5nLnF1aWNrID0gcHJuZztcbiAgaWYgKHN0YXRlKSB7XG4gICAgaWYgKHR5cGVvZihzdGF0ZSkgPT0gJ29iamVjdCcpIGNvcHkoc3RhdGUsIHhnKTtcbiAgICBwcm5nLnN0YXRlID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb3B5KHhnLCB7fSk7IH1cbiAgfVxuICByZXR1cm4gcHJuZztcbn1cblxuaWYgKG1vZHVsZSAmJiBtb2R1bGUuZXhwb3J0cykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGltcGw7XG59IGVsc2UgaWYgKGRlZmluZSAmJiBkZWZpbmUuYW1kKSB7XG4gIGRlZmluZShmdW5jdGlvbigpIHsgcmV0dXJuIGltcGw7IH0pO1xufSBlbHNlIHtcbiAgdGhpcy54b3J3b3cgPSBpbXBsO1xufVxuXG59KShcbiAgdGhpcyxcbiAgKHR5cGVvZiBtb2R1bGUpID09ICdvYmplY3QnICYmIG1vZHVsZSwgICAgLy8gcHJlc2VudCBpbiBub2RlLmpzXG4gICh0eXBlb2YgZGVmaW5lKSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZSAgIC8vIHByZXNlbnQgd2l0aCBhbiBBTUQgbG9hZGVyXG4pO1xuXG5cbiIsIi8qXG5Db3B5cmlnaHQgMjAxOSBEYXZpZCBCYXUuXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZ1xuYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG5cIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbndpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbmRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0b1xucGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvXG50aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlXG5pbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbkVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULlxuSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTllcbkNMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsXG5UT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRVxuU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbiovXG5cbihmdW5jdGlvbiAoZ2xvYmFsLCBwb29sLCBtYXRoKSB7XG4vL1xuLy8gVGhlIGZvbGxvd2luZyBjb25zdGFudHMgYXJlIHJlbGF0ZWQgdG8gSUVFRSA3NTQgbGltaXRzLlxuLy9cblxudmFyIHdpZHRoID0gMjU2LCAgICAgICAgLy8gZWFjaCBSQzQgb3V0cHV0IGlzIDAgPD0geCA8IDI1NlxuICAgIGNodW5rcyA9IDYsICAgICAgICAgLy8gYXQgbGVhc3Qgc2l4IFJDNCBvdXRwdXRzIGZvciBlYWNoIGRvdWJsZVxuICAgIGRpZ2l0cyA9IDUyLCAgICAgICAgLy8gdGhlcmUgYXJlIDUyIHNpZ25pZmljYW50IGRpZ2l0cyBpbiBhIGRvdWJsZVxuICAgIHJuZ25hbWUgPSAncmFuZG9tJywgLy8gcm5nbmFtZTogbmFtZSBmb3IgTWF0aC5yYW5kb20gYW5kIE1hdGguc2VlZHJhbmRvbVxuICAgIHN0YXJ0ZGVub20gPSBtYXRoLnBvdyh3aWR0aCwgY2h1bmtzKSxcbiAgICBzaWduaWZpY2FuY2UgPSBtYXRoLnBvdygyLCBkaWdpdHMpLFxuICAgIG92ZXJmbG93ID0gc2lnbmlmaWNhbmNlICogMixcbiAgICBtYXNrID0gd2lkdGggLSAxLFxuICAgIG5vZGVjcnlwdG87ICAgICAgICAgLy8gbm9kZS5qcyBjcnlwdG8gbW9kdWxlLCBpbml0aWFsaXplZCBhdCB0aGUgYm90dG9tLlxuXG4vL1xuLy8gc2VlZHJhbmRvbSgpXG4vLyBUaGlzIGlzIHRoZSBzZWVkcmFuZG9tIGZ1bmN0aW9uIGRlc2NyaWJlZCBhYm92ZS5cbi8vXG5mdW5jdGlvbiBzZWVkcmFuZG9tKHNlZWQsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gIHZhciBrZXkgPSBbXTtcbiAgb3B0aW9ucyA9IChvcHRpb25zID09IHRydWUpID8geyBlbnRyb3B5OiB0cnVlIH0gOiAob3B0aW9ucyB8fCB7fSk7XG5cbiAgLy8gRmxhdHRlbiB0aGUgc2VlZCBzdHJpbmcgb3IgYnVpbGQgb25lIGZyb20gbG9jYWwgZW50cm9weSBpZiBuZWVkZWQuXG4gIHZhciBzaG9ydHNlZWQgPSBtaXhrZXkoZmxhdHRlbihcbiAgICBvcHRpb25zLmVudHJvcHkgPyBbc2VlZCwgdG9zdHJpbmcocG9vbCldIDpcbiAgICAoc2VlZCA9PSBudWxsKSA/IGF1dG9zZWVkKCkgOiBzZWVkLCAzKSwga2V5KTtcblxuICAvLyBVc2UgdGhlIHNlZWQgdG8gaW5pdGlhbGl6ZSBhbiBBUkM0IGdlbmVyYXRvci5cbiAgdmFyIGFyYzQgPSBuZXcgQVJDNChrZXkpO1xuXG4gIC8vIFRoaXMgZnVuY3Rpb24gcmV0dXJucyBhIHJhbmRvbSBkb3VibGUgaW4gWzAsIDEpIHRoYXQgY29udGFpbnNcbiAgLy8gcmFuZG9tbmVzcyBpbiBldmVyeSBiaXQgb2YgdGhlIG1hbnRpc3NhIG9mIHRoZSBJRUVFIDc1NCB2YWx1ZS5cbiAgdmFyIHBybmcgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgbiA9IGFyYzQuZyhjaHVua3MpLCAgICAgICAgICAgICAvLyBTdGFydCB3aXRoIGEgbnVtZXJhdG9yIG4gPCAyIF4gNDhcbiAgICAgICAgZCA9IHN0YXJ0ZGVub20sICAgICAgICAgICAgICAgICAvLyAgIGFuZCBkZW5vbWluYXRvciBkID0gMiBeIDQ4LlxuICAgICAgICB4ID0gMDsgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgYW5kIG5vICdleHRyYSBsYXN0IGJ5dGUnLlxuICAgIHdoaWxlIChuIDwgc2lnbmlmaWNhbmNlKSB7ICAgICAgICAgIC8vIEZpbGwgdXAgYWxsIHNpZ25pZmljYW50IGRpZ2l0cyBieVxuICAgICAgbiA9IChuICsgeCkgKiB3aWR0aDsgICAgICAgICAgICAgIC8vICAgc2hpZnRpbmcgbnVtZXJhdG9yIGFuZFxuICAgICAgZCAqPSB3aWR0aDsgICAgICAgICAgICAgICAgICAgICAgIC8vICAgZGVub21pbmF0b3IgYW5kIGdlbmVyYXRpbmcgYVxuICAgICAgeCA9IGFyYzQuZygxKTsgICAgICAgICAgICAgICAgICAgIC8vICAgbmV3IGxlYXN0LXNpZ25pZmljYW50LWJ5dGUuXG4gICAgfVxuICAgIHdoaWxlIChuID49IG92ZXJmbG93KSB7ICAgICAgICAgICAgIC8vIFRvIGF2b2lkIHJvdW5kaW5nIHVwLCBiZWZvcmUgYWRkaW5nXG4gICAgICBuIC89IDI7ICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBsYXN0IGJ5dGUsIHNoaWZ0IGV2ZXJ5dGhpbmdcbiAgICAgIGQgLz0gMjsgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIHJpZ2h0IHVzaW5nIGludGVnZXIgbWF0aCB1bnRpbFxuICAgICAgeCA+Pj49IDE7ICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgd2UgaGF2ZSBleGFjdGx5IHRoZSBkZXNpcmVkIGJpdHMuXG4gICAgfVxuICAgIHJldHVybiAobiArIHgpIC8gZDsgICAgICAgICAgICAgICAgIC8vIEZvcm0gdGhlIG51bWJlciB3aXRoaW4gWzAsIDEpLlxuICB9O1xuXG4gIHBybmcuaW50MzIgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGFyYzQuZyg0KSB8IDA7IH1cbiAgcHJuZy5xdWljayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJjNC5nKDQpIC8gMHgxMDAwMDAwMDA7IH1cbiAgcHJuZy5kb3VibGUgPSBwcm5nO1xuXG4gIC8vIE1peCB0aGUgcmFuZG9tbmVzcyBpbnRvIGFjY3VtdWxhdGVkIGVudHJvcHkuXG4gIG1peGtleSh0b3N0cmluZyhhcmM0LlMpLCBwb29sKTtcblxuICAvLyBDYWxsaW5nIGNvbnZlbnRpb246IHdoYXQgdG8gcmV0dXJuIGFzIGEgZnVuY3Rpb24gb2YgcHJuZywgc2VlZCwgaXNfbWF0aC5cbiAgcmV0dXJuIChvcHRpb25zLnBhc3MgfHwgY2FsbGJhY2sgfHxcbiAgICAgIGZ1bmN0aW9uKHBybmcsIHNlZWQsIGlzX21hdGhfY2FsbCwgc3RhdGUpIHtcbiAgICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgICAgLy8gTG9hZCB0aGUgYXJjNCBzdGF0ZSBmcm9tIHRoZSBnaXZlbiBzdGF0ZSBpZiBpdCBoYXMgYW4gUyBhcnJheS5cbiAgICAgICAgICBpZiAoc3RhdGUuUykgeyBjb3B5KHN0YXRlLCBhcmM0KTsgfVxuICAgICAgICAgIC8vIE9ubHkgcHJvdmlkZSB0aGUgLnN0YXRlIG1ldGhvZCBpZiByZXF1ZXN0ZWQgdmlhIG9wdGlvbnMuc3RhdGUuXG4gICAgICAgICAgcHJuZy5zdGF0ZSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29weShhcmM0LCB7fSk7IH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGNhbGxlZCBhcyBhIG1ldGhvZCBvZiBNYXRoIChNYXRoLnNlZWRyYW5kb20oKSksIG11dGF0ZVxuICAgICAgICAvLyBNYXRoLnJhbmRvbSBiZWNhdXNlIHRoYXQgaXMgaG93IHNlZWRyYW5kb20uanMgaGFzIHdvcmtlZCBzaW5jZSB2MS4wLlxuICAgICAgICBpZiAoaXNfbWF0aF9jYWxsKSB7IG1hdGhbcm5nbmFtZV0gPSBwcm5nOyByZXR1cm4gc2VlZDsgfVxuXG4gICAgICAgIC8vIE90aGVyd2lzZSwgaXQgaXMgYSBuZXdlciBjYWxsaW5nIGNvbnZlbnRpb24sIHNvIHJldHVybiB0aGVcbiAgICAgICAgLy8gcHJuZyBkaXJlY3RseS5cbiAgICAgICAgZWxzZSByZXR1cm4gcHJuZztcbiAgICAgIH0pKFxuICBwcm5nLFxuICBzaG9ydHNlZWQsXG4gICdnbG9iYWwnIGluIG9wdGlvbnMgPyBvcHRpb25zLmdsb2JhbCA6ICh0aGlzID09IG1hdGgpLFxuICBvcHRpb25zLnN0YXRlKTtcbn1cblxuLy9cbi8vIEFSQzRcbi8vXG4vLyBBbiBBUkM0IGltcGxlbWVudGF0aW9uLiAgVGhlIGNvbnN0cnVjdG9yIHRha2VzIGEga2V5IGluIHRoZSBmb3JtIG9mXG4vLyBhbiBhcnJheSBvZiBhdCBtb3N0ICh3aWR0aCkgaW50ZWdlcnMgdGhhdCBzaG91bGQgYmUgMCA8PSB4IDwgKHdpZHRoKS5cbi8vXG4vLyBUaGUgZyhjb3VudCkgbWV0aG9kIHJldHVybnMgYSBwc2V1ZG9yYW5kb20gaW50ZWdlciB0aGF0IGNvbmNhdGVuYXRlc1xuLy8gdGhlIG5leHQgKGNvdW50KSBvdXRwdXRzIGZyb20gQVJDNC4gIEl0cyByZXR1cm4gdmFsdWUgaXMgYSBudW1iZXIgeFxuLy8gdGhhdCBpcyBpbiB0aGUgcmFuZ2UgMCA8PSB4IDwgKHdpZHRoIF4gY291bnQpLlxuLy9cbmZ1bmN0aW9uIEFSQzQoa2V5KSB7XG4gIHZhciB0LCBrZXlsZW4gPSBrZXkubGVuZ3RoLFxuICAgICAgbWUgPSB0aGlzLCBpID0gMCwgaiA9IG1lLmkgPSBtZS5qID0gMCwgcyA9IG1lLlMgPSBbXTtcblxuICAvLyBUaGUgZW1wdHkga2V5IFtdIGlzIHRyZWF0ZWQgYXMgWzBdLlxuICBpZiAoIWtleWxlbikgeyBrZXkgPSBba2V5bGVuKytdOyB9XG5cbiAgLy8gU2V0IHVwIFMgdXNpbmcgdGhlIHN0YW5kYXJkIGtleSBzY2hlZHVsaW5nIGFsZ29yaXRobS5cbiAgd2hpbGUgKGkgPCB3aWR0aCkge1xuICAgIHNbaV0gPSBpKys7XG4gIH1cbiAgZm9yIChpID0gMDsgaSA8IHdpZHRoOyBpKyspIHtcbiAgICBzW2ldID0gc1tqID0gbWFzayAmIChqICsga2V5W2kgJSBrZXlsZW5dICsgKHQgPSBzW2ldKSldO1xuICAgIHNbal0gPSB0O1xuICB9XG5cbiAgLy8gVGhlIFwiZ1wiIG1ldGhvZCByZXR1cm5zIHRoZSBuZXh0IChjb3VudCkgb3V0cHV0cyBhcyBvbmUgbnVtYmVyLlxuICAobWUuZyA9IGZ1bmN0aW9uKGNvdW50KSB7XG4gICAgLy8gVXNpbmcgaW5zdGFuY2UgbWVtYmVycyBpbnN0ZWFkIG9mIGNsb3N1cmUgc3RhdGUgbmVhcmx5IGRvdWJsZXMgc3BlZWQuXG4gICAgdmFyIHQsIHIgPSAwLFxuICAgICAgICBpID0gbWUuaSwgaiA9IG1lLmosIHMgPSBtZS5TO1xuICAgIHdoaWxlIChjb3VudC0tKSB7XG4gICAgICB0ID0gc1tpID0gbWFzayAmIChpICsgMSldO1xuICAgICAgciA9IHIgKiB3aWR0aCArIHNbbWFzayAmICgoc1tpXSA9IHNbaiA9IG1hc2sgJiAoaiArIHQpXSkgKyAoc1tqXSA9IHQpKV07XG4gICAgfVxuICAgIG1lLmkgPSBpOyBtZS5qID0gajtcbiAgICByZXR1cm4gcjtcbiAgICAvLyBGb3Igcm9idXN0IHVucHJlZGljdGFiaWxpdHksIHRoZSBmdW5jdGlvbiBjYWxsIGJlbG93IGF1dG9tYXRpY2FsbHlcbiAgICAvLyBkaXNjYXJkcyBhbiBpbml0aWFsIGJhdGNoIG9mIHZhbHVlcy4gIFRoaXMgaXMgY2FsbGVkIFJDNC1kcm9wWzI1Nl0uXG4gICAgLy8gU2VlIGh0dHA6Ly9nb29nbGUuY29tL3NlYXJjaD9xPXJzYStmbHVocmVyK3Jlc3BvbnNlJmJ0bklcbiAgfSkod2lkdGgpO1xufVxuXG4vL1xuLy8gY29weSgpXG4vLyBDb3BpZXMgaW50ZXJuYWwgc3RhdGUgb2YgQVJDNCB0byBvciBmcm9tIGEgcGxhaW4gb2JqZWN0LlxuLy9cbmZ1bmN0aW9uIGNvcHkoZiwgdCkge1xuICB0LmkgPSBmLmk7XG4gIHQuaiA9IGYuajtcbiAgdC5TID0gZi5TLnNsaWNlKCk7XG4gIHJldHVybiB0O1xufTtcblxuLy9cbi8vIGZsYXR0ZW4oKVxuLy8gQ29udmVydHMgYW4gb2JqZWN0IHRyZWUgdG8gbmVzdGVkIGFycmF5cyBvZiBzdHJpbmdzLlxuLy9cbmZ1bmN0aW9uIGZsYXR0ZW4ob2JqLCBkZXB0aCkge1xuICB2YXIgcmVzdWx0ID0gW10sIHR5cCA9ICh0eXBlb2Ygb2JqKSwgcHJvcDtcbiAgaWYgKGRlcHRoICYmIHR5cCA9PSAnb2JqZWN0Jykge1xuICAgIGZvciAocHJvcCBpbiBvYmopIHtcbiAgICAgIHRyeSB7IHJlc3VsdC5wdXNoKGZsYXR0ZW4ob2JqW3Byb3BdLCBkZXB0aCAtIDEpKTsgfSBjYXRjaCAoZSkge31cbiAgICB9XG4gIH1cbiAgcmV0dXJuIChyZXN1bHQubGVuZ3RoID8gcmVzdWx0IDogdHlwID09ICdzdHJpbmcnID8gb2JqIDogb2JqICsgJ1xcMCcpO1xufVxuXG4vL1xuLy8gbWl4a2V5KClcbi8vIE1peGVzIGEgc3RyaW5nIHNlZWQgaW50byBhIGtleSB0aGF0IGlzIGFuIGFycmF5IG9mIGludGVnZXJzLCBhbmRcbi8vIHJldHVybnMgYSBzaG9ydGVuZWQgc3RyaW5nIHNlZWQgdGhhdCBpcyBlcXVpdmFsZW50IHRvIHRoZSByZXN1bHQga2V5LlxuLy9cbmZ1bmN0aW9uIG1peGtleShzZWVkLCBrZXkpIHtcbiAgdmFyIHN0cmluZ3NlZWQgPSBzZWVkICsgJycsIHNtZWFyLCBqID0gMDtcbiAgd2hpbGUgKGogPCBzdHJpbmdzZWVkLmxlbmd0aCkge1xuICAgIGtleVttYXNrICYgal0gPVxuICAgICAgbWFzayAmICgoc21lYXIgXj0ga2V5W21hc2sgJiBqXSAqIDE5KSArIHN0cmluZ3NlZWQuY2hhckNvZGVBdChqKyspKTtcbiAgfVxuICByZXR1cm4gdG9zdHJpbmcoa2V5KTtcbn1cblxuLy9cbi8vIGF1dG9zZWVkKClcbi8vIFJldHVybnMgYW4gb2JqZWN0IGZvciBhdXRvc2VlZGluZywgdXNpbmcgd2luZG93LmNyeXB0byBhbmQgTm9kZSBjcnlwdG9cbi8vIG1vZHVsZSBpZiBhdmFpbGFibGUuXG4vL1xuZnVuY3Rpb24gYXV0b3NlZWQoKSB7XG4gIHRyeSB7XG4gICAgdmFyIG91dDtcbiAgICBpZiAobm9kZWNyeXB0byAmJiAob3V0ID0gbm9kZWNyeXB0by5yYW5kb21CeXRlcykpIHtcbiAgICAgIC8vIFRoZSB1c2Ugb2YgJ291dCcgdG8gcmVtZW1iZXIgcmFuZG9tQnl0ZXMgbWFrZXMgdGlnaHQgbWluaWZpZWQgY29kZS5cbiAgICAgIG91dCA9IG91dCh3aWR0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG91dCA9IG5ldyBVaW50OEFycmF5KHdpZHRoKTtcbiAgICAgIChnbG9iYWwuY3J5cHRvIHx8IGdsb2JhbC5tc0NyeXB0bykuZ2V0UmFuZG9tVmFsdWVzKG91dCk7XG4gICAgfVxuICAgIHJldHVybiB0b3N0cmluZyhvdXQpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgdmFyIGJyb3dzZXIgPSBnbG9iYWwubmF2aWdhdG9yLFxuICAgICAgICBwbHVnaW5zID0gYnJvd3NlciAmJiBicm93c2VyLnBsdWdpbnM7XG4gICAgcmV0dXJuIFsrbmV3IERhdGUsIGdsb2JhbCwgcGx1Z2lucywgZ2xvYmFsLnNjcmVlbiwgdG9zdHJpbmcocG9vbCldO1xuICB9XG59XG5cbi8vXG4vLyB0b3N0cmluZygpXG4vLyBDb252ZXJ0cyBhbiBhcnJheSBvZiBjaGFyY29kZXMgdG8gYSBzdHJpbmdcbi8vXG5mdW5jdGlvbiB0b3N0cmluZyhhKSB7XG4gIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KDAsIGEpO1xufVxuXG4vL1xuLy8gV2hlbiBzZWVkcmFuZG9tLmpzIGlzIGxvYWRlZCwgd2UgaW1tZWRpYXRlbHkgbWl4IGEgZmV3IGJpdHNcbi8vIGZyb20gdGhlIGJ1aWx0LWluIFJORyBpbnRvIHRoZSBlbnRyb3B5IHBvb2wuICBCZWNhdXNlIHdlIGRvXG4vLyBub3Qgd2FudCB0byBpbnRlcmZlcmUgd2l0aCBkZXRlcm1pbmlzdGljIFBSTkcgc3RhdGUgbGF0ZXIsXG4vLyBzZWVkcmFuZG9tIHdpbGwgbm90IGNhbGwgbWF0aC5yYW5kb20gb24gaXRzIG93biBhZ2FpbiBhZnRlclxuLy8gaW5pdGlhbGl6YXRpb24uXG4vL1xubWl4a2V5KG1hdGgucmFuZG9tKCksIHBvb2wpO1xuXG4vL1xuLy8gTm9kZWpzIGFuZCBBTUQgc3VwcG9ydDogZXhwb3J0IHRoZSBpbXBsZW1lbnRhdGlvbiBhcyBhIG1vZHVsZSB1c2luZ1xuLy8gZWl0aGVyIGNvbnZlbnRpb24uXG4vL1xuaWYgKCh0eXBlb2YgbW9kdWxlKSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHNlZWRyYW5kb207XG4gIC8vIFdoZW4gaW4gbm9kZS5qcywgdHJ5IHVzaW5nIGNyeXB0byBwYWNrYWdlIGZvciBhdXRvc2VlZGluZy5cbiAgdHJ5IHtcbiAgICBub2RlY3J5cHRvID0gcmVxdWlyZSgnY3J5cHRvJyk7XG4gIH0gY2F0Y2ggKGV4KSB7fVxufSBlbHNlIGlmICgodHlwZW9mIGRlZmluZSkgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gIGRlZmluZShmdW5jdGlvbigpIHsgcmV0dXJuIHNlZWRyYW5kb207IH0pO1xufSBlbHNlIHtcbiAgLy8gV2hlbiBpbmNsdWRlZCBhcyBhIHBsYWluIHNjcmlwdCwgc2V0IHVwIE1hdGguc2VlZHJhbmRvbSBnbG9iYWwuXG4gIG1hdGhbJ3NlZWQnICsgcm5nbmFtZV0gPSBzZWVkcmFuZG9tO1xufVxuXG5cbi8vIEVuZCBhbm9ueW1vdXMgc2NvcGUsIGFuZCBwYXNzIGluaXRpYWwgdmFsdWVzLlxufSkoXG4gIC8vIGdsb2JhbDogYHNlbGZgIGluIGJyb3dzZXJzIChpbmNsdWRpbmcgc3RyaWN0IG1vZGUgYW5kIHdlYiB3b3JrZXJzKSxcbiAgLy8gb3RoZXJ3aXNlIGB0aGlzYCBpbiBOb2RlIGFuZCBvdGhlciBlbnZpcm9ubWVudHNcbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykgPyBzZWxmIDogdGhpcyxcbiAgW10sICAgICAvLyBwb29sOiBlbnRyb3B5IHBvb2wgc3RhcnRzIGVtcHR5XG4gIE1hdGggICAgLy8gbWF0aDogcGFja2FnZSBjb250YWluaW5nIHJhbmRvbSwgcG93LCBhbmQgc2VlZHJhbmRvbVxuKTtcbiIsImNvbnN0IE1BVEVSSUFMX0FJUiA9IDA7XG5cbmNvbnN0IGNlbGxQcm9jRmFjZU1hc2sgPSBbWzAsIDQsIDBdLCBbMSwgNSwgMF0sIFsyLCA2LCAwXSwgWzMsIDcsIDBdLCBbMCwgMiwgMV0sIFs0LCA2LCAxXSwgWzEsIDMsIDFdLCBbNSwgNywgMV0sIFswLCAxLCAyXSwgWzIsIDMsIDJdLCBbNCwgNSwgMl0sIFs2LCA3LCAyXV07XG5jb25zdCBjZWxsUHJvY0VkZ2VNYXNrID0gW1swLCAxLCAyLCAzLCAwXSwgWzQsIDUsIDYsIDcsIDBdLCBbMCwgNCwgMSwgNSwgMV0sIFsyLCA2LCAzLCA3LCAxXSwgWzAsIDIsIDQsIDYsIDJdLCBbMSwgMywgNSwgNywgMl1dO1xuXG5jb25zdCBmYWNlUHJvY0ZhY2VNYXNrID0gW1xuICBbWzQsIDAsIDBdLCBbNSwgMSwgMF0sIFs2LCAyLCAwXSwgWzcsIDMsIDBdXSxcbiAgW1syLCAwLCAxXSwgWzYsIDQsIDFdLCBbMywgMSwgMV0sIFs3LCA1LCAxXV0sXG4gIFtbMSwgMCwgMl0sIFszLCAyLCAyXSwgWzUsIDQsIDJdLCBbNywgNiwgMl1dXG5dO1xuXG5jb25zdCBmYWNlUHJvY0VkZ2VNYXNrID0gW1xuICBbWzEsIDQsIDAsIDUsIDEsIDFdLCBbMSwgNiwgMiwgNywgMywgMV0sIFswLCA0LCA2LCAwLCAyLCAyXSwgWzAsIDUsIDcsIDEsIDMsIDJdXSxcbiAgW1swLCAyLCAzLCAwLCAxLCAwXSwgWzAsIDYsIDcsIDQsIDUsIDBdLCBbMSwgMiwgMCwgNiwgNCwgMl0sIFsxLCAzLCAxLCA3LCA1LCAyXV0sXG4gIFtbMSwgMSwgMCwgMywgMiwgMF0sIFsxLCA1LCA0LCA3LCA2LCAwXSwgWzAsIDEsIDUsIDAsIDQsIDFdLCBbMCwgMywgNywgMiwgNiwgMV1dXG5dO1xuXG5jb25zdCBlZGdlUHJvY0VkZ2VNYXNrID0gW1xuICBbWzMsIDIsIDEsIDAsIDBdLCBbNywgNiwgNSwgNCwgMF1dLFxuICBbWzUsIDEsIDQsIDAsIDFdLCBbNywgMywgNiwgMiwgMV1dLFxuICBbWzYsIDQsIDIsIDAsIDJdLCBbNywgNSwgMywgMSwgMl1dLFxuXTtcblxuY29uc3QgcHJvY2Vzc0VkZ2VNYXNrID0gW1szLCAyLCAxLCAwXSwgWzcsIDUsIDYsIDRdLCBbMTEsIDEwLCA5LCA4XV07XG5cbmNvbnN0IGVkZ2V2bWFwID0gW1xuICBbMCwgNF0sIFsxLCA1XSwgWzIsIDZdLCBbMywgN10sXHQvLyB4LWF4aXMgXG4gIFswLCAyXSwgWzEsIDNdLCBbNCwgNl0sIFs1LCA3XSxcdC8vIHktYXhpc1xuICBbMCwgMV0sIFsyLCAzXSwgWzQsIDVdLCBbNiwgN11cdFx0Ly8gei1heGlzXG5dO1xuXG5jb25zdCBDb250b3VyUHJvY2Vzc0VkZ2UgPSAobm9kZTogYW55LCBkaXI6IG51bWJlciwgaW5kaWNlczogbnVtYmVyW10pID0+IHtcbiAgbGV0IG1pblNpemUgPSAxMDAwMDAwO1x0XHQvLyBhcmJpdHJhcnkgYmlnIG51bWJlclxuICBsZXQgbWluSW5kZXggPSAwO1xuICBsZXQgaW5kZXhlcyA9IFstMSwgLTEsIC0xLCAtMV07XG4gIGxldCBmbGlwID0gZmFsc2U7XG4gIGxldCBzaWduQ2hhbmdlID0gW2ZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgIGxldCBlZGdlID0gcHJvY2Vzc0VkZ2VNYXNrW2Rpcl1baV07XG4gICAgbGV0IGMxID0gZWRnZXZtYXBbZWRnZV1bMF07XG4gICAgbGV0IGMyID0gZWRnZXZtYXBbZWRnZV1bMV07XG5cbiAgICBsZXQgbTEgPSAobm9kZVtpXS5kcmF3SW5mby5jb3JuZXJzID4+IGMxKSAmIDE7XG4gICAgbGV0IG0yID0gKG5vZGVbaV0uZHJhd0luZm8uY29ybmVycyA+PiBjMikgJiAxO1xuXG4gICAgaWYgKG5vZGVbaV0uc2l6ZSA8IG1pblNpemUpIHtcbiAgICAgIG1pblNpemUgPSBub2RlW2ldLnNpemU7XG4gICAgICBtaW5JbmRleCA9IGk7XG4gICAgICBmbGlwID0gbTEgIT09IE1BVEVSSUFMX0FJUjtcbiAgICB9XG5cbiAgICBpbmRleGVzW2ldID0gbm9kZVtpXS5kcmF3SW5mby5pbmRleDtcblxuICAgIHNpZ25DaGFuZ2VbaV0gPVxuICAgICAgKG0xID09PSBNQVRFUklBTF9BSVIgJiYgbTIgIT09IE1BVEVSSUFMX0FJUikgfHxcbiAgICAgIChtMSAhPT0gTUFURVJJQUxfQUlSICYmIG0yID09PSBNQVRFUklBTF9BSVIpO1xuXG5cbiAgfVxuXG4gIGlmIChzaWduQ2hhbmdlW21pbkluZGV4XSkge1xuXG4gICAgaWYgKCFmbGlwKSB7XG5cbiAgICAgIGluZGljZXMucHVzaChpbmRleGVzWzBdKTtcbiAgICAgIGluZGljZXMucHVzaChpbmRleGVzWzFdKTtcbiAgICAgIGluZGljZXMucHVzaChpbmRleGVzWzNdKTtcblxuICAgICAgaW5kaWNlcy5wdXNoKGluZGV4ZXNbMF0pO1xuICAgICAgaW5kaWNlcy5wdXNoKGluZGV4ZXNbM10pO1xuICAgICAgaW5kaWNlcy5wdXNoKGluZGV4ZXNbMl0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGluZGljZXMucHVzaChpbmRleGVzWzBdKTtcbiAgICAgIGluZGljZXMucHVzaChpbmRleGVzWzNdKTtcbiAgICAgIGluZGljZXMucHVzaChpbmRleGVzWzFdKTtcblxuICAgICAgaW5kaWNlcy5wdXNoKGluZGV4ZXNbMF0pO1xuICAgICAgaW5kaWNlcy5wdXNoKGluZGV4ZXNbMl0pO1xuICAgICAgaW5kaWNlcy5wdXNoKGluZGV4ZXNbM10pO1xuXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IENvbnRvdXJFZGdlUHJvYyA9IChub2RlOiBhbnksIGRpcjogbnVtYmVyLCBpbmRpY2VzOiBudW1iZXJbXSkgPT4ge1xuICBpZiAobm9kZVswXSA9PSBudWxsIHx8IG5vZGVbMV0gPT0gbnVsbCB8fCBub2RlWzJdID09IG51bGwgfHwgbm9kZVszXSA9PSBudWxsKVxuICAgIHJldHVybjtcblxuICBpZiAobm9kZVswXS50eXBlICE9PSAnaW50ZXJuYWwnICYmXG4gICAgbm9kZVsxXS50eXBlICE9PSAnaW50ZXJuYWwnICYmXG4gICAgbm9kZVsyXS50eXBlICE9PSAnaW50ZXJuYWwnICYmXG4gICAgbm9kZVszXS50eXBlICE9PSAnaW50ZXJuYWwnKSB7XG4gICAgQ29udG91clByb2Nlc3NFZGdlKG5vZGUsIGRpciwgaW5kaWNlcyk7XG4gIH1cbiAgZWxzZSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcbiAgICAgIGxldCBlZGdlTm9kZXMgPSBbXTtcbiAgICAgIGxldCBjID0gW1xuICAgICAgICBlZGdlUHJvY0VkZ2VNYXNrW2Rpcl1baV1bMF0sXG4gICAgICAgIGVkZ2VQcm9jRWRnZU1hc2tbZGlyXVtpXVsxXSxcbiAgICAgICAgZWRnZVByb2NFZGdlTWFza1tkaXJdW2ldWzJdLFxuICAgICAgICBlZGdlUHJvY0VkZ2VNYXNrW2Rpcl1baV1bM11cbiAgICAgIF07XG5cbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNDsgaisrKSB7XG4gICAgICAgIGlmIChub2RlW2pdLnR5cGUgPT09ICdsZWFmJyB8fCBub2RlW2pdLnR5cGUgPT09ICdwc2V1ZG8nKSB7XG4gICAgICAgICAgZWRnZU5vZGVzW2pdID0gbm9kZVtqXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBlZGdlTm9kZXNbal0gPSBub2RlW2pdLmNoaWxkcmVuW2Nbal1dO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIENvbnRvdXJFZGdlUHJvYyhlZGdlTm9kZXMsIGVkZ2VQcm9jRWRnZU1hc2tbZGlyXVtpXVs0XSwgaW5kaWNlcyk7XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IENvbnRvdXJGYWNlUHJvYyA9IChub2RlOiBhbnksIGRpcjogbnVtYmVyLCBpbmRpY2VzOiBudW1iZXJbXSkgPT4ge1xuICBpZiAobm9kZVswXSA9PSBudWxsIHx8IG5vZGVbMV0gPT0gbnVsbClcbiAgICByZXR1cm47XG5cbiAgaWYgKG5vZGVbMF0udHlwZSA9PT0gJ2ludGVybmFsJyB8fFxuICAgIG5vZGVbMV0udHlwZSA9PT0gJ2ludGVybmFsJykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICBsZXQgZmFjZU5vZGVzID0gW107XG5cbiAgICAgIGxldCBjID0gW1xuICAgICAgICBmYWNlUHJvY0ZhY2VNYXNrW2Rpcl1baV1bMF0sXG4gICAgICAgIGZhY2VQcm9jRmFjZU1hc2tbZGlyXVtpXVsxXVxuICAgICAgXTtcblxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAyOyBqKyspIHtcbiAgICAgICAgaWYgKG5vZGVbal0udHlwZSAhPT0gJ2ludGVybmFsJykge1xuICAgICAgICAgIGZhY2VOb2Rlc1tqXSA9IG5vZGVbal07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZmFjZU5vZGVzW2pdID0gbm9kZVtqXS5jaGlsZHJlbltjW2pdXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBDb250b3VyRmFjZVByb2MoZmFjZU5vZGVzLCBmYWNlUHJvY0ZhY2VNYXNrW2Rpcl1baV1bMl0sIGluZGljZXMpO1xuICAgIH1cblxuICAgIGxldCBvcmRlcnMgPSBbXG4gICAgICBbMCwgMCwgMSwgMV0sXG4gICAgICBbMCwgMSwgMCwgMV1cbiAgICBdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgIGxldCBlZGdlTm9kZXMgPSBbXTtcbiAgICAgIGxldCBjID0gW1xuICAgICAgICBmYWNlUHJvY0VkZ2VNYXNrW2Rpcl1baV1bMV0sXG4gICAgICAgIGZhY2VQcm9jRWRnZU1hc2tbZGlyXVtpXVsyXSxcbiAgICAgICAgZmFjZVByb2NFZGdlTWFza1tkaXJdW2ldWzNdLFxuICAgICAgICBmYWNlUHJvY0VkZ2VNYXNrW2Rpcl1baV1bNF1cbiAgICAgIF07XG5cbiAgICAgIGxldCBvcmRlciA9IFtcbiAgICAgICAgb3JkZXJzW2ZhY2VQcm9jRWRnZU1hc2tbZGlyXVtpXVswXV1bMF0sXG4gICAgICAgIG9yZGVyc1tmYWNlUHJvY0VkZ2VNYXNrW2Rpcl1baV1bMF1dWzFdLFxuICAgICAgICBvcmRlcnNbZmFjZVByb2NFZGdlTWFza1tkaXJdW2ldWzBdXVsyXSxcbiAgICAgICAgb3JkZXJzW2ZhY2VQcm9jRWRnZU1hc2tbZGlyXVtpXVswXV1bM11cbiAgICAgIF07XG5cbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNDsgaisrKSB7XG4gICAgICAgIGlmIChub2RlW29yZGVyW2pdXS50eXBlID09PSAnbGVhZicgfHxcbiAgICAgICAgICBub2RlW29yZGVyW2pdXS50eXBlID09PSAncHNldWRvJykge1xuICAgICAgICAgIGVkZ2VOb2Rlc1tqXSA9IG5vZGVbb3JkZXJbal1dO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGVkZ2VOb2Rlc1tqXSA9IG5vZGVbb3JkZXJbal1dLmNoaWxkcmVuW2Nbal1dO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIENvbnRvdXJFZGdlUHJvYyhlZGdlTm9kZXMsIGZhY2VQcm9jRWRnZU1hc2tbZGlyXVtpXVs1XSwgaW5kaWNlcyk7XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IENvbnRvdXJDZWxsUHJvYyA9IChub2RlOiBhbnksIGluZGljZXM6IG51bWJlcltdKSA9PiB7XG4gIGlmIChub2RlID09IG51bGwpXG4gICAgcmV0dXJuO1xuXG4gIGlmIChub2RlLnR5cGUgPT09ICdpbnRlcm5hbCcpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgICAgQ29udG91ckNlbGxQcm9jKG5vZGUuY2hpbGRyZW5baV0sIGluZGljZXMpO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTI7IGkrKykge1xuICAgICAgbGV0IGZhY2VOb2RlcyA9IFtdO1xuICAgICAgbGV0IGMgPSBbY2VsbFByb2NGYWNlTWFza1tpXVswXSwgY2VsbFByb2NGYWNlTWFza1tpXVsxXV07XG5cbiAgICAgIGZhY2VOb2Rlc1swXSA9IG5vZGUuY2hpbGRyZW5bY1swXV07XG4gICAgICBmYWNlTm9kZXNbMV0gPSBub2RlLmNoaWxkcmVuW2NbMV1dO1xuXG4gICAgICBDb250b3VyRmFjZVByb2MoZmFjZU5vZGVzLCBjZWxsUHJvY0ZhY2VNYXNrW2ldWzJdLCBpbmRpY2VzKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgbGV0IGVkZ2VOb2RlcyA9IFtdO1xuICAgICAgbGV0IGMgPSBbXG4gICAgICAgIGNlbGxQcm9jRWRnZU1hc2tbaV1bMF0sXG4gICAgICAgIGNlbGxQcm9jRWRnZU1hc2tbaV1bMV0sXG4gICAgICAgIGNlbGxQcm9jRWRnZU1hc2tbaV1bMl0sXG4gICAgICAgIGNlbGxQcm9jRWRnZU1hc2tbaV1bM11cbiAgICAgIF07XG5cbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNDsgaisrKSB7XG4gICAgICAgIGVkZ2VOb2Rlc1tqXSA9IG5vZGUuY2hpbGRyZW5bY1tqXV07XG4gICAgICB9XG5cbiAgICAgIENvbnRvdXJFZGdlUHJvYyhlZGdlTm9kZXMsIGNlbGxQcm9jRWRnZU1hc2tbaV1bNF0sIGluZGljZXMpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250b3VyQ2VsbFByb2M7IiwiaW1wb3J0IHt2ZWMzfSBmcm9tICdnbC1tYXRyaXgnO1xuaW1wb3J0IFZveGVsIGZyb20gJy4vdm94ZWwnO1xuaW1wb3J0IHtRdWV1ZUl0ZW19IGZyb20gXCIuL3F1ZXVlSXRlbVwiO1xuaW1wb3J0IFdvcmxkR2VuZXJhdG9yICBmcm9tIFwiLi93b3JsZC1nZW5lcmF0b3JcIjtcblxuY29uc3QgY3R4OiBXb3JrZXIgPSBzZWxmIGFzIGFueTtcblxuKGFzeW5jIGZ1bmN0aW9uKCkge1xuICBjb25zdCBhZGFwdGVyID0gYXdhaXQgbmF2aWdhdG9yLmdwdS5yZXF1ZXN0QWRhcHRlcigpO1xuICBjb25zdCBkZXZpY2UgPSBhd2FpdCBhZGFwdGVyLnJlcXVlc3REZXZpY2UoKTtcblxuICBjb25zdCB2b3hlbCA9IG5ldyBWb3hlbCgpO1xuICBhd2FpdCB2b3hlbC5pbml0KGRldmljZSk7XG5cbiAgY29uc29sZS5sb2coJ1ZveGVsIGVuZ2luZSBpbml0IGNvbXBsZXRlJyk7XG4gIHBvc3RNZXNzYWdlKHsgdHlwZTogJ2luaXRfY29tcGxldGUnIH0pO1xuXG4gIGNvbnN0IHF1ZXVlID0gKGl0ZW06IFF1ZXVlSXRlbSkgPT4ge1xuICAgIGRldmljZS5xdWV1ZS5vblN1Ym1pdHRlZFdvcmtEb25lKCkudGhlbihfID0+IHtcbiAgICAgIGl0ZW0uY2FsbGJhY2soKTtcbiAgICB9KVxuICAgIFxuICAgIGRldmljZS5xdWV1ZS5zdWJtaXQoaXRlbS5pdGVtcyk7XG4gIH07XG5cblxuICBsZXQgZ2VuZXJhdGluZyA9IGZhbHNlO1xuICBvbm1lc3NhZ2UgPSBhc3luYyBmdW5jdGlvbihlKSB7XG4gICAgaWYgKGdlbmVyYXRpbmcpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdTdGlsbCBnZW5lcmF0aW5nJylcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBnZW5lcmF0aW5nID0gdHJ1ZTtcbiAgICBjb25zdCB7IHBvc2l0aW9uLCBkZXRhaWwgfSA9IGUuZGF0YTtcblxuICAgIGlmIChkZXRhaWwpIHtcblxuICAgICAgY29uc3Qge3gsIHksIHosIHN9ID0gZGV0YWlsO1xuICAgICAgY29uc3QgeyB2ZXJ0aWNlcywgbm9ybWFscywgaW5kaWNlcyB9ID0gYXdhaXQgdm94ZWwuZ2VuZXJhdGUoZGV2aWNlLCBxdWV1ZSwgdmVjMy5mcm9tVmFsdWVzKHgtKDMxKnMqMC41KSwgeS0oMzEqcyowLjUpLCB6LSgzMSpzKjAuNSkpLCBzKTtcbiAgICAgIGlmICh2ZXJ0aWNlcy5sZW5ndGggPiAwKSB7XG4gICAgICB9XG4gICAgICBjdHgucG9zdE1lc3NhZ2UoKHsgdHlwZTogJ3VwZGF0ZScsIGk6IGAke3h9OiR7eX06JHt6fWAsIGl4OiB4LCBpeTogeSwgaXo6IHosIHg6IDAsIHk6IDAsIHo6IDAsIHZlcnRpY2VzOiB2ZXJ0aWNlcy5idWZmZXIsIG5vcm1hbHM6IG5vcm1hbHMuYnVmZmVyLCBpbmRpY2VzOiBpbmRpY2VzLmJ1ZmZlciwgc3RyaWRlOiBzIH0pLCBbdmVydGljZXMuYnVmZmVyLCBub3JtYWxzLmJ1ZmZlciwgaW5kaWNlcy5idWZmZXJdKVxuICAgICAgZ2VuZXJhdGluZyA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHN0cmlkZSA9IDMyO1xuICAgIGNvbnN0IHNpemUgPSAxMjg7XG4gICAgY29uc29sZS5sb2coYFdvcmxkIFNpemU6ICR7c2l6ZX0gKCR7c2l6ZSAqIDMyfSlgKTtcbiAgICBjb25zdCBjaHVua1NpemUgPSAzMTtcbiAgICBjb25zdCB3b3JsZFNpemUgPSAgTWF0aC5jZWlsKHNpemUgLyBzdHJpZGUpO1xuXG4gICAgY29uc29sZS5sb2coYFN0YXJ0aW5nIGdlbmVyYXRpb24uIFN0cmlkZTogJHtzdHJpZGV9ICgke3dvcmxkU2l6ZX0pYCk7XG4gICAgY29uc3QgdDAgPSBwZXJmb3JtYW5jZS5ub3coKTtcblxuICAgIGNvbnN0IHdvcmxkR2VuZXJhdG9yID0gbmV3IFdvcmxkR2VuZXJhdG9yKHN0cmlkZSk7XG4gICAgbGV0IGluZm8gPSB3b3JsZEdlbmVyYXRvci5pbml0KChwb3NpdGlvblswXSAvIGNodW5rU2l6ZSksIChwb3NpdGlvblsxXSAvIGNodW5rU2l6ZSksIChwb3NpdGlvblsyXSAvIGNodW5rU2l6ZSkpO1xuXG4gICAgY29uc29sZS5sb2coYEluaXQgd29ybGQgYXQgJHtpbmZvLnh9OiR7aW5mby55fToke2luZm8uen0gZm9yIHN0cmlkZSAke3N0cmlkZX1gKVxuXG4gICAgZG8ge1xuICAgICAgY29uc3QgciA9IHdvcmxkR2VuZXJhdG9yLm5leHQoaW5mbyk7XG4gICAgICBjb25zdCByZXN1bHQgPSByWzBdO1xuICAgICAgaW5mbyA9IHJbMV07XG5cbiAgICAgIGNvbnN0IHt4LCB5LCB6fSA9IHJlc3VsdDtcbiAgICAgIGNvbnN0IGhhbGZDaHVuayA9IHJlc3VsdC5zdHJpZGUgKiBjaHVua1NpemUgKiAwLjU7XG5cbiAgICAgIGNvbnN0IHsgdmVydGljZXMsIG5vcm1hbHMsIGluZGljZXMsIGNvcm5lcnMgfSA9IGF3YWl0IHZveGVsLmdlbmVyYXRlKGRldmljZSwgcXVldWUsIHZlYzMuZnJvbVZhbHVlcyh4ICogY2h1bmtTaXplIC1oYWxmQ2h1bmssIHkgKiBjaHVua1NpemUgLWhhbGZDaHVuaywgeiAqIGNodW5rU2l6ZSAtaGFsZkNodW5rKSwgcmVzdWx0LnN0cmlkZSk7XG4gICAgICAvLyBpZiAodmVydGljZXMubGVuZ3RoID4gMCkge1xuICAgICAgLy8gICBjb25zb2xlLmxvZyhgR2VuZXJhdGluZyAke3h9OiR7eX06JHt6fSAoJHt4ICogY2h1bmtTaXplIC1oYWxmQ2h1bmt9OiR7eSAqIGNodW5rU2l6ZSAtaGFsZkNodW5rfToke3ogKiBjaHVua1NpemUgLWhhbGZDaHVua30pICgke3Jlc3VsdC5zdHJpZGV9IC8gJHtoYWxmQ2h1bmt9IC8gJHtpbmZvLnByZXZpb3VzT2Zmc2V0fSlgKVxuICAgICAgLy8gfVxuICAgICAgY3R4LnBvc3RNZXNzYWdlKCh7IHR5cGU6ICd1cGRhdGUnLCBpOiBgJHt4fToke3l9OiR7en1gLCBpeDogeCwgaXk6IHksIGl6OiB6LCB4OiAwLCB5OiAwLCB6OiAwLCB2ZXJ0aWNlczogdmVydGljZXMuYnVmZmVyLCBub3JtYWxzOiBub3JtYWxzLmJ1ZmZlciwgaW5kaWNlczogaW5kaWNlcy5idWZmZXIsIGNvcm5lcnM6IGNvcm5lcnMuYnVmZmVyLCBzdHJpZGU6IHJlc3VsdC5zdHJpZGUgfSksIFt2ZXJ0aWNlcy5idWZmZXIsIG5vcm1hbHMuYnVmZmVyLCBpbmRpY2VzLmJ1ZmZlciwgY29ybmVycy5idWZmZXJdKVxuXG4gICAgfSB3aGlsZSAoaW5mby5zdHJpZGUgPD0gMzI3NjgpO1xuXG4gICAgZ2VuZXJhdGluZyA9IGZhbHNlO1xuXG4gICAgY29uc29sZS5sb2coYEdlbmVyYXRpb24gY29tcGxldGUgaW4gJHtwZXJmb3JtYW5jZS5ub3coKSAtIHQwfSBtaWxsaXNlY29uZHNgKTtcbiAgfVxufSkoKTtcbiIsImltcG9ydCB7IHZlYzMgfSBmcm9tICdnbC1tYXRyaXgnO1xuXG5jb25zdCBDSElMRF9NSU5fT0ZGU0VUUyA9IFtcbiAgdmVjMy5mcm9tVmFsdWVzKDAsIDAsIDApLFxuICB2ZWMzLmZyb21WYWx1ZXMoMCwgMCwgMSksXG4gIHZlYzMuZnJvbVZhbHVlcygwLCAxLCAwKSxcbiAgdmVjMy5mcm9tVmFsdWVzKDAsIDEsIDEpLFxuICB2ZWMzLmZyb21WYWx1ZXMoMSwgMCwgMCksXG4gIHZlYzMuZnJvbVZhbHVlcygxLCAwLCAxKSxcbiAgdmVjMy5mcm9tVmFsdWVzKDEsIDEsIDApLFxuICB2ZWMzLmZyb21WYWx1ZXMoMSwgMSwgMSlcbl07XG5cbmNvbnN0IGNvbnN0cnVjdFBhcmVudHMgPSAoY2hpbGRyZW4sIHBvc2l0aW9uLCBwYXJlbnRTaXplKSA9PiB7XG4gIGxldCBwYXJlbnRzSGFzaCA9IHt9O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IG5vZGUgPSBjaGlsZHJlbltpXTtcbiAgICBsZXQgcGFyZW50UG9zID0gdmVjMy5zdWIodmVjMy5jcmVhdGUoKSwgbm9kZS5taW4sIHZlYzMuZnJvbVZhbHVlcygobm9kZS5taW5bMF0gLSBwb3NpdGlvblswXSkgJSBwYXJlbnRTaXplLFxuICAgICAgKG5vZGUubWluWzFdIC0gcG9zaXRpb25bMV0pICUgcGFyZW50U2l6ZSxcbiAgICAgIChub2RlLm1pblsyXSAtIHBvc2l0aW9uWzJdKSAlIHBhcmVudFNpemUpKTtcblxuICAgIGxldCBwYXJlbnQgPSBwYXJlbnRzSGFzaFsoPGFueT5wYXJlbnRQb3MpXTtcbiAgICBpZiAoIXBhcmVudCkge1xuICAgICAgcGFyZW50ID0ge1xuICAgICAgICBtaW46IHBhcmVudFBvcyxcbiAgICAgICAgc2l6ZTogcGFyZW50U2l6ZSxcbiAgICAgICAgdHlwZTogJ2ludGVybmFsJyxcbiAgICAgICAgY2hpbGRyZW46IFtdXG4gICAgICB9O1xuICAgICAgcGFyZW50c0hhc2hbcGFyZW50Lm1pbl0gPSBwYXJlbnQ7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCA4OyBqKyspIHtcbiAgICAgIGxldCBjaGlsZE1pbiA9IHZlYzMuYWRkKHZlYzMuY3JlYXRlKCksIHBhcmVudFBvcywgdmVjMy5mcm9tVmFsdWVzKENISUxEX01JTl9PRkZTRVRTW2pdWzBdICogbm9kZS5zaXplLCBDSElMRF9NSU5fT0ZGU0VUU1tqXVsxXSAqIG5vZGUuc2l6ZSwgQ0hJTERfTUlOX09GRlNFVFNbal1bMl0gKiBub2RlLnNpemUpKTtcblxuICAgICAgaWYgKHZlYzMuZXF1YWxzKGNoaWxkTWluLCBub2RlLm1pbikpIHtcbiAgICAgICAgcGFyZW50LmNoaWxkcmVuW2pdID0gbm9kZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2hpbGRyZW4ubGVuZ3RoID0gMDtcblxuICByZXR1cm4gT2JqZWN0LnZhbHVlcyhwYXJlbnRzSGFzaCk7XG59XG5cblxuY29uc3QgY29uc3RydWN0VHJlZVVwd2FyZHMgPSAobm9kZXMsIHJvb3RNaW4sIHJvb3ROb2RlU2l6ZSkgPT4ge1xuICBpZiAobm9kZXMubGVuZ3RoID09IDApIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIG5vZGVzLnNvcnQoKGxocywgcmhzKSA9PiBsaHMuc2l6ZSAtIHJocy5zaXplKTtcblxuICAvLyB0aGUgaW5wdXQgbm9kZXMgbWF5IGJlIGRpZmZlcmVudCBzaXplcyBpZiBhIHNlYW0gb2N0cmVlIGlzIGJlaW5nIGNvbnN0cnVjdGVkXG4gIC8vIGluIHRoYXQgY2FzZSB3ZSBuZWVkIHRvIHByb2Nlc3MgdGhlIGlucHV0IG5vZGVzIGluIHN0YWdlcyBhbG9uZyB3aXRoIHRoZSBuZXdseVxuICAvLyBjb25zdHJ1Y3RlZCBwYXJlbnQgbm9kZXMgdW50aWwgYWxsIHRoZSBub2RlcyBoYXZlIHRoZSBzYW1lIHNpemVcbiAgd2hpbGUgKG5vZGVzWzBdLnNpemUgIT0gbm9kZXNbbm9kZXMubGVuZ3RoIC0gMV0uc2l6ZSkge1xuICAgIC8vIGZpbmQgdGhlIGVuZCBvZiB0aGlzIHJ1blxuICAgIGxldCBpdGVyID0gMDtcbiAgICBsZXQgc2l6ZSA9IG5vZGVzW2l0ZXJdLnNpemU7XG4gICAgZG8ge1xuICAgICAgKytpdGVyO1xuICAgIH0gd2hpbGUgKG5vZGVzW2l0ZXJdLnNpemUgPT0gc2l6ZSk7XG5cbiAgICAvLyBjb25zdHJ1Y3QgdGhlIG5ldyBwYXJlbnQgbm9kZXMgZm9yIHRoaXMgcnVuXG4gICAgbGV0IG5ld05vZGVzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVyOyBpKyspXG4gICAgICBuZXdOb2Rlcy5wdXNoKG5vZGVzW2ldKTtcbiAgICBuZXdOb2RlcyA9IGNvbnN0cnVjdFBhcmVudHMobmV3Tm9kZXMsIHJvb3RNaW4sIHNpemUgKiAyKTtcblxuICAgIC8vIHNldCB1cCBmb3IgdGhlIG5leHQgaXRlcmF0aW9uOiB0aGUgcGFyZW50cyBwcm9kdWNlZCBwbHVzIGFueSByZW1haW5pbmcgaW5wdXQgbm9kZXNcbiAgICBmb3IgKGxldCBpID0gaXRlcjsgaSA8IG5vZGVzLkNvdW50OyBpKyspXG4gICAgICBuZXdOb2Rlcy5wdXNoKG5vZGVzW2ldKTtcblxuICAgIG5vZGVzLmxlbmd0aCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdOb2Rlcy5sZW5ndGg7IGkrKylcbiAgICAgIG5vZGVzLnB1c2gobmV3Tm9kZXNbaV0pO1xuICB9XG5cbiAgbGV0IHBhcmVudFNpemUgPSBub2Rlc1swXS5zaXplICogMjtcbiAgd2hpbGUgKHBhcmVudFNpemUgPD0gcm9vdE5vZGVTaXplKSB7XG4gICAgbm9kZXMgPSBjb25zdHJ1Y3RQYXJlbnRzKG5vZGVzLCByb290TWluLCBwYXJlbnRTaXplKTtcbiAgICBwYXJlbnRTaXplICo9IDI7XG4gIH1cblxuICBpZiAobm9kZXMubGVuZ3RoICE9IDEpIHtcbiAgICBjb25zb2xlLmxvZyhub2Rlcyk7XG4gICAgY29uc29sZS5lcnJvcihcIlRoZXJlIGNhbiBvbmx5IGJlIG9uZSByb290IG5vZGUhXCIpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIG5vZGVzWzBdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb25zdHJ1Y3RUcmVlVXB3YXJkczsiLCJpbXBvcnQge3ZlYzMsIHZlYzR9IGZyb20gJ2dsLW1hdHJpeCc7XG5pbXBvcnQgQ29tcHV0ZUNvcm5lcnMgZnJvbSAnISFyYXctbG9hZGVyIS4vY29tcHV0ZS1jb3JuZXJzLndnc2wnO1xuaW1wb3J0IENvbXB1dGVQb3NpdGlvbnMgZnJvbSAnISFyYXctbG9hZGVyIS4vY29tcHV0ZS1wb3NpdGlvbnMud2dzbCc7XG5pbXBvcnQgQ29tcHV0ZVZveGVscyBmcm9tICchIXJhdy1sb2FkZXIhLi9jb21wdXRlLXZveGVscy53Z3NsJztcbmltcG9ydCBEZW5zaXR5IGZyb20gJyEhcmF3LWxvYWRlciEuL2RlbnNpdHkud2dzbCc7XG5cbmltcG9ydCBSYW5kb20gZnJvbSAnc2VlZHJhbmRvbSc7XG5pbXBvcnQgQ29udG91ckNlbGxzIGZyb20gJy4vY29udG91cmluZyc7XG5pbXBvcnQgQ29uc3RydWN0T2N0cmVlIGZyb20gJy4vb2N0cmVlJztcblxuY29uc3QgZ2VuZXJhdGVWZXJ0ZXhJbmRpY2VzID0gKG5vZGUsIHZlcnRpY2VzLCBub3JtYWxzLCBub2RlU2l6ZSkgPT4ge1xuICBpZiAobm9kZSA9PSBudWxsKVxuICAgIHJldHVybjtcblxuICBpZiAobm9kZS5zaXplID4gbm9kZVNpemUpIHtcbiAgICBpZiAobm9kZS50eXBlICE9PSAnbGVhZicpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgICAgIGdlbmVyYXRlVmVydGV4SW5kaWNlcyhub2RlLmNoaWxkcmVuW2ldLCB2ZXJ0aWNlcywgbm9ybWFscywgbm9kZVNpemUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChub2RlLnR5cGUgIT09ICdpbnRlcm5hbCcpIHtcbiAgICBjb25zdCBkID0gbm9kZS5kcmF3SW5mbztcbiAgICBpZiAoZCA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBcIkVycm9yISBDb3VsZCBub3QgYWRkIHZlcnRleCFcIjtcbiAgICB9XG5cbiAgICBkLmluZGV4ID0gdmVydGljZXMubGVuZ3RoIC8gMztcbiAgICB2ZXJ0aWNlcy5wdXNoKGQucG9zaXRpb25bMF0sIGQucG9zaXRpb25bMV0sIGQucG9zaXRpb25bMl0pO1xuICAgIG5vcm1hbHMucHVzaChkLmF2ZXJhZ2VOb3JtYWxbMF0sIGQuYXZlcmFnZU5vcm1hbFsxXSwgZC5hdmVyYWdlTm9ybWFsWzJdKTtcbiAgfVxufVxuXG5jb25zdCBjb21wdXRlVm94ZWxzID0gKHBvc2l0aW9uLCBzdHJpZGUsIHZveGVsQ291bnQsIGNvbXB1dGVkVm94ZWxzRGF0YSkgPT4ge1xuICBjb25zdCBjb21wdXRlZFZveGVscyA9IFtdO1xuXG4gIGlmICh2b3hlbENvdW50ID09PSAwKSB7XG4gICAgcmV0dXJuIHsgdmVydGljZXM6IFtdLCBub3JtYWxzOiBbXSwgaW5kaWNlczogW10gfTtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdm94ZWxDb3VudCAqIDEyOyBpICs9IDEyKSB7XG4gICAgaWYgKGNvbXB1dGVkVm94ZWxzRGF0YVtpICsgMTFdICE9PSAwKSB7XG4gICAgICBjb25zdCBsZWFmID0ge1xuICAgICAgICB0eXBlOiAnbGVhZicsXG4gICAgICAgIHNpemU6IHN0cmlkZSxcbiAgICAgICAgbWluOiB2ZWMzLmZyb21WYWx1ZXMoY29tcHV0ZWRWb3hlbHNEYXRhW2ldLCBjb21wdXRlZFZveGVsc0RhdGFbaSArIDFdLCBjb21wdXRlZFZveGVsc0RhdGFbaSArIDJdKSxcbiAgICAgICAgZHJhd0luZm86IHtcbiAgICAgICAgICBwb3NpdGlvbjogdmVjMy5mcm9tVmFsdWVzKGNvbXB1dGVkVm94ZWxzRGF0YVtpICsgNF0sIGNvbXB1dGVkVm94ZWxzRGF0YVtpICsgNV0sIGNvbXB1dGVkVm94ZWxzRGF0YVtpICsgNl0pLFxuICAgICAgICAgIGF2ZXJhZ2VOb3JtYWw6IHZlYzMuZnJvbVZhbHVlcyhjb21wdXRlZFZveGVsc0RhdGFbaSArIDhdLCBjb21wdXRlZFZveGVsc0RhdGFbaSArIDldLCBjb21wdXRlZFZveGVsc0RhdGFbaSArIDEwXSksXG4gICAgICAgICAgY29ybmVyczogY29tcHV0ZWRWb3hlbHNEYXRhW2kgKyAzXVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgY29tcHV0ZWRWb3hlbHMucHVzaChsZWFmKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCB0cmVlID0gQ29uc3RydWN0T2N0cmVlKGNvbXB1dGVkVm94ZWxzLCBwb3NpdGlvbiwgMzIgKiBzdHJpZGUpO1xuXG5cbiAgY29uc3QgdmVydGljZXMgPSBbXTtcbiAgY29uc3Qgbm9ybWFscyA9IFtdO1xuXG4gIGdlbmVyYXRlVmVydGV4SW5kaWNlcyh0cmVlLCB2ZXJ0aWNlcywgbm9ybWFscywgMSk7XG5cbiAgY29uc3QgaW5kaWNlcyA9IFtdO1xuICBDb250b3VyQ2VsbHModHJlZSwgaW5kaWNlcyk7XG5cbiAgcmV0dXJuIHtcbiAgICB2ZXJ0aWNlczogbmV3IEZsb2F0MzJBcnJheSh2ZXJ0aWNlcyksXG4gICAgbm9ybWFsczogbmV3IEZsb2F0MzJBcnJheShub3JtYWxzKSxcbiAgICBpbmRpY2VzOiBuZXcgVWludDE2QXJyYXkoaW5kaWNlcylcbiAgfTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWb3hlbCB7XG4gIHByaXZhdGUgY29tcHV0ZVBpcGVsaW5lOiBHUFVDb21wdXRlUGlwZWxpbmU7XG4gIHByaXZhdGUgY29tcHV0ZUNvcm5lcnNQaXBlbGluZTogR1BVQ29tcHV0ZVBpcGVsaW5lO1xuICBwcml2YXRlIHVuaWZvcm1CdWZmZXI6IEdQVUJ1ZmZlcjtcbiAgcHJpdmF0ZSBjb3JuZXJNYXRlcmlhbHM6IEdQVUJ1ZmZlcjtcbiAgcHJpdmF0ZSBjb3JuZXJNYXRlcmlhbHNSZWFkOiBHUFVCdWZmZXI7XG4gIHByaXZhdGUgdm94ZWxNYXRlcmlhbHNCdWZmZXI6IEdQVUJ1ZmZlcjtcbiAgcHJpdmF0ZSB2b3hlbE1hdGVyaWFsc0J1ZmZlclJlYWQ6IEdQVUJ1ZmZlcjtcbiAgcHJpdmF0ZSBjb3JuZXJJbmRleEJ1ZmZlcjogR1BVQnVmZmVyO1xuICBwcml2YXRlIGdwdVJlYWRCdWZmZXI6IEdQVUJ1ZmZlcjtcbiAgcHJpdmF0ZSBwZXJtdXRhdGlvbnNCdWZmZXI6IEdQVUJ1ZmZlcjtcbiAgcHJpdmF0ZSB2b3hlbHNCdWZmZXI6IEdQVUJ1ZmZlcjtcbiAgcHJpdmF0ZSBhY3RvcnNCdWZmZXI6IEdQVUJ1ZmZlcjtcbiAgcHJpdmF0ZSBjb21wdXRlQmluZEdyb3VwOiBHUFVCaW5kR3JvdXA7XG4gIHByaXZhdGUgY29tcHV0ZUNvcm5lcnNCaW5kR3JvdXA6IEdQVUJpbmRHcm91cDtcbiAgcHJpdmF0ZSBjb21wdXRlUG9zaXRpb25zUGlwZWxpbmU6IEdQVUNvbXB1dGVQaXBlbGluZTtcbiAgcHJpdmF0ZSBjb21wdXRlUG9zaXRpb25zQmluZEdyb3VwOiBHUFVCaW5kR3JvdXA7XG4gIHByaXZhdGUgY29tcHV0ZVZveGVsc1BpcGVsaW5lOiBHUFVDb21wdXRlUGlwZWxpbmU7XG4gIHByaXZhdGUgY29tcHV0ZVZveGVsc0JpbmRHcm91cDogR1BVQmluZEdyb3VwO1xuICBwcml2YXRlIHZveGVsUmVhZEJ1ZmZlcjogR1BVQnVmZmVyO1xuXG4gIGFzeW5jIGluaXQoZGV2aWNlOiBHUFVEZXZpY2UpIHtcbiAgICBjb25zdCBjb21wdXRlVm94ZWxzQ29kZSA9IENvbXB1dGVWb3hlbHMucmVwbGFjZShcIiNpbXBvcnQgZGVuc2l0eVwiLCBEZW5zaXR5KTtcbiAgICBjb25zdCBzdGFydCA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIGNvbnNvbGUubG9nKCdTdGFydCBsb2FkaW5nIHZveGVsIGVuZ2luZScsIHBlcmZvcm1hbmNlLm5vdygpIC0gc3RhcnQpO1xuXG4gICAgY29uc3QgbW9kdWxlID0gZGV2aWNlLmNyZWF0ZVNoYWRlck1vZHVsZSh7XG4gICAgICBjb2RlOiBjb21wdXRlVm94ZWxzQ29kZSxcbiAgICB9KTtcblxuICAgIHRoaXMuY29tcHV0ZVBpcGVsaW5lID0gYXdhaXQgZGV2aWNlLmNyZWF0ZUNvbXB1dGVQaXBlbGluZUFzeW5jKHtcbiAgICAgIGxheW91dDogJ2F1dG8nLFxuICAgICAgY29tcHV0ZToge1xuICAgICAgICBtb2R1bGUsXG4gICAgICAgIGVudHJ5UG9pbnQ6ICdjb21wdXRlTWF0ZXJpYWxzJyxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICAvL2NvbnNvbGUubG9nKCcxMCcsIHBlcmZvcm1hbmNlLm5vdygpIC0gc3RhcnQpO1xuXG4gICAgdGhpcy5jb21wdXRlQ29ybmVyc1BpcGVsaW5lID0gYXdhaXQgZGV2aWNlLmNyZWF0ZUNvbXB1dGVQaXBlbGluZUFzeW5jKHtcbiAgICAgIGxheW91dDogJ2F1dG8nLFxuICAgICAgY29tcHV0ZToge1xuICAgICAgICBtb2R1bGU6IGRldmljZS5jcmVhdGVTaGFkZXJNb2R1bGUoe1xuICAgICAgICAgIGNvZGU6IENvbXB1dGVDb3JuZXJzXG4gICAgICAgIH0pLFxuICAgICAgICBlbnRyeVBvaW50OiAnbWFpbicsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgY29uc3QgdW5pZm9ybUJ1ZmZlclNpemUgPSA0ICogNTtcbiAgICB0aGlzLnVuaWZvcm1CdWZmZXIgPSBkZXZpY2UuY3JlYXRlQnVmZmVyKHtcbiAgICAgIHNpemU6IHVuaWZvcm1CdWZmZXJTaXplLFxuICAgICAgdXNhZ2U6IEdQVUJ1ZmZlclVzYWdlLlVOSUZPUk0gfCBHUFVCdWZmZXJVc2FnZS5DT1BZX0RTVCxcbiAgICB9KTtcblxuICAgIHRoaXMuY29ybmVyTWF0ZXJpYWxzID0gZGV2aWNlLmNyZWF0ZUJ1ZmZlcih7XG4gICAgICBzaXplOiBVaW50MzJBcnJheS5CWVRFU19QRVJfRUxFTUVOVCAqIDMzICogMzMgKiAzMyxcbiAgICAgIHVzYWdlOiBHUFVCdWZmZXJVc2FnZS5TVE9SQUdFIHwgR1BVQnVmZmVyVXNhZ2UuQ09QWV9TUkMsXG4gICAgICBtYXBwZWRBdENyZWF0aW9uOiBmYWxzZSxcbiAgICB9KTtcblxuXG5cbiAgICB0aGlzLmNvcm5lck1hdGVyaWFsc1JlYWQgPSBkZXZpY2UuY3JlYXRlQnVmZmVyKHtcbiAgICAgIHNpemU6IFVpbnQzMkFycmF5LkJZVEVTX1BFUl9FTEVNRU5UICogMzMgKiAzMyAqIDMzLFxuICAgICAgdXNhZ2U6IEdQVUJ1ZmZlclVzYWdlLkNPUFlfRFNUIHwgR1BVQnVmZmVyVXNhZ2UuTUFQX1JFQUQsXG4gICAgfSk7XG5cbiAgICB0aGlzLnZveGVsTWF0ZXJpYWxzQnVmZmVyID0gZGV2aWNlLmNyZWF0ZUJ1ZmZlcih7XG4gICAgICBzaXplOiBVaW50MzJBcnJheS5CWVRFU19QRVJfRUxFTUVOVCAqIDMyICogMzIgKiAzMixcbiAgICAgIHVzYWdlOiBHUFVCdWZmZXJVc2FnZS5TVE9SQUdFIHwgR1BVQnVmZmVyVXNhZ2UuQ09QWV9TUkMsXG4gICAgICBtYXBwZWRBdENyZWF0aW9uOiBmYWxzZSxcbiAgICB9KTtcblxuXG5cbiAgICB0aGlzLnZveGVsTWF0ZXJpYWxzQnVmZmVyUmVhZCA9IGRldmljZS5jcmVhdGVCdWZmZXIoe1xuICAgICAgc2l6ZTogVWludDMyQXJyYXkuQllURVNfUEVSX0VMRU1FTlQgKiAzMiAqIDMyICogMzIsXG4gICAgICB1c2FnZTogR1BVQnVmZmVyVXNhZ2UuQ09QWV9EU1QgfCBHUFVCdWZmZXJVc2FnZS5NQVBfUkVBRCxcbiAgICB9KTtcblxuICAgIHRoaXMuY29ybmVySW5kZXhCdWZmZXIgPSBkZXZpY2UuY3JlYXRlQnVmZmVyKHtcbiAgICAgIHNpemU6IFVpbnQzMkFycmF5LkJZVEVTX1BFUl9FTEVNRU5UICsgVWludDMyQXJyYXkuQllURVNfUEVSX0VMRU1FTlQgKiAzMiAqIDMyICogMzIsXG4gICAgICB1c2FnZTogR1BVQnVmZmVyVXNhZ2UuU1RPUkFHRSB8IEdQVUJ1ZmZlclVzYWdlLkNPUFlfU1JDLFxuICAgICAgbWFwcGVkQXRDcmVhdGlvbjogZmFsc2UsXG4gICAgfSk7XG5cbiAgICB0aGlzLmdwdVJlYWRCdWZmZXIgPSBkZXZpY2UuY3JlYXRlQnVmZmVyKHtcbiAgICAgIHNpemU6IFVpbnQzMkFycmF5LkJZVEVTX1BFUl9FTEVNRU5ULFxuICAgICAgdXNhZ2U6IEdQVUJ1ZmZlclVzYWdlLkNPUFlfRFNUIHwgR1BVQnVmZmVyVXNhZ2UuTUFQX1JFQURcbiAgICB9KTtcblxuICAgIGNvbnN0IHBlcm11dGF0aW9ucyA9IG5ldyBJbnQzMkFycmF5KDUxMik7XG5cbiAgICBjb25zdCByYW5kb20gPSBuZXcgUmFuZG9tKDY0NTIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjU2OyBpKyspXG4gICAgICBwZXJtdXRhdGlvbnNbaV0gPSAoMjU2ICogKHJhbmRvbSgpKSk7XG5cbiAgICBmb3IgKGxldCBpID0gMjU2OyBpIDwgNTEyOyBpKyspXG4gICAgICBwZXJtdXRhdGlvbnNbaV0gPSBwZXJtdXRhdGlvbnNbaSAtIDI1Nl07XG5cbiAgICB0aGlzLnBlcm11dGF0aW9uc0J1ZmZlciA9IGRldmljZS5jcmVhdGVCdWZmZXIoe1xuICAgICAgc2l6ZTogcGVybXV0YXRpb25zLmJ5dGVMZW5ndGgsXG4gICAgICB1c2FnZTogR1BVQnVmZmVyVXNhZ2UuU1RPUkFHRSB8IEdQVUJ1ZmZlclVzYWdlLkNPUFlfRFNULFxuICAgICAgbWFwcGVkQXRDcmVhdGlvbjogdHJ1ZSxcbiAgICB9KTtcblxuICAgIG5ldyBJbnQzMkFycmF5KHRoaXMucGVybXV0YXRpb25zQnVmZmVyLmdldE1hcHBlZFJhbmdlKCkpLnNldChcbiAgICAgIHBlcm11dGF0aW9uc1xuICAgICk7XG4gICAgdGhpcy5wZXJtdXRhdGlvbnNCdWZmZXIudW5tYXAoKTtcblxuXG5cbiAgICB0aGlzLnZveGVsc0J1ZmZlciA9IGRldmljZS5jcmVhdGVCdWZmZXIoe1xuICAgICAgc2l6ZTogRmxvYXQzMkFycmF5LkJZVEVTX1BFUl9FTEVNRU5UICogMTIgKiAzMiAqIDMyICogMzIsXG4gICAgICB1c2FnZTogR1BVQnVmZmVyVXNhZ2UuU1RPUkFHRSB8IEdQVUJ1ZmZlclVzYWdlLkNPUFlfU1JDLFxuICAgICAgbWFwcGVkQXRDcmVhdGlvbjogZmFsc2UsXG4gICAgfSk7XG5cblxuICAgIHRoaXMuYWN0b3JzQnVmZmVyID0gZGV2aWNlLmNyZWF0ZUJ1ZmZlcih7XG4gICAgICBzaXplOiBGbG9hdDMyQXJyYXkuQllURVNfUEVSX0VMRU1FTlQgKiA4LFxuICAgICAgdXNhZ2U6IEdQVUJ1ZmZlclVzYWdlLlNUT1JBR0UgfCBHUFVCdWZmZXJVc2FnZS5DT1BZX1NSQyxcbiAgICAgIG1hcHBlZEF0Q3JlYXRpb246IGZhbHNlLFxuICAgIH0pO1xuXG4gICAgLy9jb25zb2xlLmxvZygnMjAnLCBwZXJmb3JtYW5jZS5ub3coKSAtIHN0YXJ0KTtcblxuICAgIHRoaXMuY29tcHV0ZUJpbmRHcm91cCA9IGRldmljZS5jcmVhdGVCaW5kR3JvdXAoe1xuICAgICAgbGF5b3V0OiB0aGlzLmNvbXB1dGVQaXBlbGluZS5nZXRCaW5kR3JvdXBMYXlvdXQoMCksXG4gICAgICBlbnRyaWVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBiaW5kaW5nOiAxLFxuICAgICAgICAgIHJlc291cmNlOiB7XG4gICAgICAgICAgICBidWZmZXI6IHRoaXMuY29ybmVyTWF0ZXJpYWxzXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICB7XG4gICAgICAgICAgYmluZGluZzogNSxcbiAgICAgICAgICByZXNvdXJjZToge1xuICAgICAgICAgICAgYnVmZmVyOiB0aGlzLnVuaWZvcm1CdWZmZXJcbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSk7XG5cbiAgICAvL2NvbnNvbGUubG9nKCcyMScsIHBlcmZvcm1hbmNlLm5vdygpIC0gc3RhcnQpO1xuXG4gICAgdGhpcy5jb21wdXRlQ29ybmVyc0JpbmRHcm91cCA9IGRldmljZS5jcmVhdGVCaW5kR3JvdXAoe1xuICAgICAgbGF5b3V0OiB0aGlzLmNvbXB1dGVDb3JuZXJzUGlwZWxpbmUuZ2V0QmluZEdyb3VwTGF5b3V0KDApLFxuICAgICAgZW50cmllczogW1xuICAgICAgICB7XG4gICAgICAgICAgYmluZGluZzogMSxcbiAgICAgICAgICByZXNvdXJjZToge1xuICAgICAgICAgICAgYnVmZmVyOiB0aGlzLmNvcm5lck1hdGVyaWFsc1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBiaW5kaW5nOiAyLFxuICAgICAgICAgIHJlc291cmNlOiB7XG4gICAgICAgICAgICBidWZmZXI6IHRoaXMudm94ZWxNYXRlcmlhbHNCdWZmZXJcbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSk7XG5cbiAgICB0aGlzLmNvbXB1dGVQb3NpdGlvbnNQaXBlbGluZSA9IGF3YWl0IGRldmljZS5jcmVhdGVDb21wdXRlUGlwZWxpbmVBc3luYyh7XG4gICAgICBsYXlvdXQ6ICdhdXRvJyxcbiAgICAgIGNvbXB1dGU6IHtcbiAgICAgICAgbW9kdWxlOiBkZXZpY2UuY3JlYXRlU2hhZGVyTW9kdWxlKHtcbiAgICAgICAgICBjb2RlOiBDb21wdXRlUG9zaXRpb25zLFxuICAgICAgICB9KSxcbiAgICAgICAgZW50cnlQb2ludDogJ21haW4nLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIC8vY29uc29sZS5sb2coJzMwJywgcGVyZm9ybWFuY2Uubm93KCkgLSBzdGFydCk7XG5cblxuICAgIHRoaXMuY29tcHV0ZVBvc2l0aW9uc0JpbmRHcm91cCA9IGRldmljZS5jcmVhdGVCaW5kR3JvdXAoe1xuICAgICAgbGF5b3V0OiB0aGlzLmNvbXB1dGVQb3NpdGlvbnNQaXBlbGluZS5nZXRCaW5kR3JvdXBMYXlvdXQoMCksXG4gICAgICBlbnRyaWVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBiaW5kaW5nOiAyLFxuICAgICAgICAgIHJlc291cmNlOiB7XG4gICAgICAgICAgICBidWZmZXI6IHRoaXMudm94ZWxNYXRlcmlhbHNCdWZmZXJcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYmluZGluZzogMyxcbiAgICAgICAgICByZXNvdXJjZToge1xuICAgICAgICAgICAgYnVmZmVyOiB0aGlzLmNvcm5lckluZGV4QnVmZmVyXG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0pO1xuXG4gICAgLy9jb25zb2xlLmxvZygnMzEnLCBwZXJmb3JtYW5jZS5ub3coKSAtIHN0YXJ0KTtcblxuICAgIC8vY29uc29sZS5sb2coJzMxLjUnLCBwZXJmb3JtYW5jZS5ub3coKSAtIHN0YXJ0KTtcbiAgICB0aGlzLmNvbXB1dGVWb3hlbHNQaXBlbGluZSA9IGF3YWl0IGRldmljZS5jcmVhdGVDb21wdXRlUGlwZWxpbmVBc3luYyh7XG4gICAgICBsYXlvdXQ6ICdhdXRvJyxcbiAgICAgIGNvbXB1dGU6IHtcbiAgICAgICAgbW9kdWxlLFxuICAgICAgICBlbnRyeVBvaW50OiAnbWFpbicsXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvL2NvbnNvbGUubG9nKCczMicsIHBlcmZvcm1hbmNlLm5vdygpIC0gc3RhcnQpO1xuXG5cbiAgICB0aGlzLmNvbXB1dGVWb3hlbHNCaW5kR3JvdXAgPSBkZXZpY2UuY3JlYXRlQmluZEdyb3VwKHtcbiAgICAgIGxheW91dDogdGhpcy5jb21wdXRlVm94ZWxzUGlwZWxpbmUuZ2V0QmluZEdyb3VwTGF5b3V0KDApLFxuICAgICAgZW50cmllczogW1xuICAgICAgICB7XG4gICAgICAgICAgYmluZGluZzogMixcbiAgICAgICAgICByZXNvdXJjZToge1xuICAgICAgICAgICAgYnVmZmVyOiB0aGlzLnZveGVsTWF0ZXJpYWxzQnVmZmVyXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGJpbmRpbmc6IDMsXG4gICAgICAgICAgcmVzb3VyY2U6IHtcbiAgICAgICAgICAgIGJ1ZmZlcjogdGhpcy5jb3JuZXJJbmRleEJ1ZmZlclxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBiaW5kaW5nOiA0LFxuICAgICAgICAgIHJlc291cmNlOiB7XG4gICAgICAgICAgICBidWZmZXI6IHRoaXMudm94ZWxzQnVmZmVyXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGJpbmRpbmc6IDUsXG4gICAgICAgICAgcmVzb3VyY2U6IHtcbiAgICAgICAgICAgIGJ1ZmZlcjogdGhpcy51bmlmb3JtQnVmZmVyXG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0pO1xuXG4gICAgLy9jb25zb2xlLmxvZygnNDAnLCBwZXJmb3JtYW5jZS5ub3coKSAtIHN0YXJ0KTtcblxuXG4gICAgdGhpcy52b3hlbFJlYWRCdWZmZXIgPSBkZXZpY2UuY3JlYXRlQnVmZmVyKHtcbiAgICAgIHNpemU6IEZsb2F0MzJBcnJheS5CWVRFU19QRVJfRUxFTUVOVCAqIDEyICogMzIgKiAzMiAqIDMyLFxuICAgICAgdXNhZ2U6IEdQVUJ1ZmZlclVzYWdlLkNPUFlfRFNUIHwgR1BVQnVmZmVyVXNhZ2UuTUFQX1JFQURcbiAgICB9KTtcblxuICAgIGNvbnNvbGUubG9nKCdEb25lJywgcGVyZm9ybWFuY2Uubm93KCkgLSBzdGFydCk7XG4gIH1cblxuICBnZW5lcmF0ZShkZXZpY2UsIHF1ZXVlLCBwb3NpdGlvbiwgc3RyaWRlKSA6IFByb21pc2U8YW55PiB7XG4gICAgaWYgKCFzdHJpZGUpIHN0cmlkZSA9IDE7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIF8pID0+IHtcblxuICAgICAgY29uc3QgcGVybXV0YXRpb25zID0gbmV3IEludDMyQXJyYXkoNTEyKTtcblxuICAgICAgY29uc3QgcmFuZG9tID0gbmV3IFJhbmRvbSgnSmFtZXMnKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjU2OyBpKyspXG4gICAgICAgIHBlcm11dGF0aW9uc1tpXSA9ICgyNTYgKiAocmFuZG9tKCkpKTtcblxuICAgICAgZm9yIChsZXQgaSA9IDI1NjsgaSA8IDUxMjsgaSsrKVxuICAgICAgICBwZXJtdXRhdGlvbnNbaV0gPSBwZXJtdXRhdGlvbnNbaSAtIDI1Nl07XG5cbiAgICAgIGRldmljZS5xdWV1ZS53cml0ZUJ1ZmZlcihcbiAgICAgICAgICB0aGlzLnBlcm11dGF0aW9uc0J1ZmZlcixcbiAgICAgICAgICAwLFxuICAgICAgICAgIHBlcm11dGF0aW9ucy5idWZmZXIsXG4gICAgICAgICAgcGVybXV0YXRpb25zLmJ5dGVPZmZzZXQsXG4gICAgICAgICAgcGVybXV0YXRpb25zLmJ5dGVMZW5ndGhcbiAgICAgICk7XG5cbiAgICAgIHZhciBidWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoNCAqIDUpO1xuICAgICAgY29uc3QgdW5pZm9ybSA9IG5ldyBGbG9hdDMyQXJyYXkoYnVmZmVyLCAwLCA0KTtcbiAgICAgIHVuaWZvcm0uc2V0KHBvc2l0aW9uLCAwKTtcbiAgICAgIHVuaWZvcm1bM10gPSBzdHJpZGU7XG5cbiAgICAgIG5ldyBVaW50MzJBcnJheShidWZmZXIsIDE2LCAxKVswXSA9IDMzO1xuXG4gICAgICBkZXZpY2UucXVldWUud3JpdGVCdWZmZXIoXG4gICAgICAgICAgdGhpcy51bmlmb3JtQnVmZmVyLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgYnVmZmVyLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgYnVmZmVyLmJ5dGVMZW5ndGhcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IGNvbXB1dGVFbmNvZGVyID0gZGV2aWNlLmNyZWF0ZUNvbW1hbmRFbmNvZGVyKCk7XG4gICAgICBjb25zdCBvY3RyZWVTaXplID0gMzI7XG4gICAgICBjb25zdCBjb21wdXRlUGFzc0VuY29kZXIgPSBjb21wdXRlRW5jb2Rlci5iZWdpbkNvbXB1dGVQYXNzKCk7XG4gICAgICBjb21wdXRlUGFzc0VuY29kZXIuc2V0UGlwZWxpbmUodGhpcy5jb21wdXRlUGlwZWxpbmUpO1xuICAgICAgY29tcHV0ZVBhc3NFbmNvZGVyLnNldEJpbmRHcm91cCgwLCB0aGlzLmNvbXB1dGVCaW5kR3JvdXApO1xuICAgICAgY29tcHV0ZVBhc3NFbmNvZGVyLmRpc3BhdGNoV29ya2dyb3VwcyhvY3RyZWVTaXplICsgMSwgb2N0cmVlU2l6ZSArIDEsIG9jdHJlZVNpemUgKyAxKTtcbiAgICAgIGNvbXB1dGVQYXNzRW5jb2Rlci5lbmQoKTtcblxuICAgICAgY29uc3QgY29tcHV0ZUNvcm5lcnNQYXNzID0gY29tcHV0ZUVuY29kZXIuYmVnaW5Db21wdXRlUGFzcygpO1xuICAgICAgY29tcHV0ZUNvcm5lcnNQYXNzLnNldFBpcGVsaW5lKHRoaXMuY29tcHV0ZUNvcm5lcnNQaXBlbGluZSk7XG4gICAgICBjb21wdXRlQ29ybmVyc1Bhc3Muc2V0QmluZEdyb3VwKDAsIHRoaXMuY29tcHV0ZUNvcm5lcnNCaW5kR3JvdXApO1xuICAgICAgY29tcHV0ZUNvcm5lcnNQYXNzLmRpc3BhdGNoV29ya2dyb3VwcyhvY3RyZWVTaXplLCBvY3RyZWVTaXplLCBvY3RyZWVTaXplKTtcbiAgICAgIGNvbXB1dGVDb3JuZXJzUGFzcy5lbmQoKTtcblxuICAgICAgY29uc3QgY29tcHV0ZVBvc2l0aW9uc1Bhc3MgPSBjb21wdXRlRW5jb2Rlci5iZWdpbkNvbXB1dGVQYXNzKCk7XG4gICAgICBjb21wdXRlUG9zaXRpb25zUGFzcy5zZXRQaXBlbGluZSh0aGlzLmNvbXB1dGVQb3NpdGlvbnNQaXBlbGluZSk7XG4gICAgICBjb21wdXRlUG9zaXRpb25zUGFzcy5zZXRCaW5kR3JvdXAoMCwgdGhpcy5jb21wdXRlUG9zaXRpb25zQmluZEdyb3VwKTtcbiAgICAgIGNvbXB1dGVQb3NpdGlvbnNQYXNzLmRpc3BhdGNoV29ya2dyb3VwcygxKTtcbiAgICAgIGNvbXB1dGVQb3NpdGlvbnNQYXNzLmVuZCgpO1xuXG4gICAgICBjb25zdCBjb3B5RW5jb2RlciA9IGRldmljZS5jcmVhdGVDb21tYW5kRW5jb2RlcigpO1xuICAgICAgY29weUVuY29kZXIuY29weUJ1ZmZlclRvQnVmZmVyKFxuICAgICAgICAgIHRoaXMuY29ybmVySW5kZXhCdWZmZXIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICB0aGlzLmdwdVJlYWRCdWZmZXIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICBVaW50MzJBcnJheS5CWVRFU19QRVJfRUxFTUVOVFxuICAgICAgKTtcblxuICAgICAgY29weUVuY29kZXIuY29weUJ1ZmZlclRvQnVmZmVyKFxuICAgICAgICAgIHRoaXMuY29ybmVyTWF0ZXJpYWxzLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgdGhpcy5jb3JuZXJNYXRlcmlhbHNSZWFkLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgVWludDMyQXJyYXkuQllURVNfUEVSX0VMRU1FTlQgKiAzMyAqIDMzICogMzNcbiAgICAgICk7XG5cbiAgICAgIGNvcHlFbmNvZGVyLmNvcHlCdWZmZXJUb0J1ZmZlcihcbiAgICAgICAgICB0aGlzLnZveGVsTWF0ZXJpYWxzQnVmZmVyLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgdGhpcy52b3hlbE1hdGVyaWFsc0J1ZmZlclJlYWQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICBVaW50MzJBcnJheS5CWVRFU19QRVJfRUxFTUVOVCAqIDMyICogMzIgKiAzMlxuICAgICAgKTtcblxuICAgICAgcXVldWUoe1xuICAgICAgICBpdGVtczogW2NvbXB1dGVFbmNvZGVyLmZpbmlzaCgpLCBjb3B5RW5jb2Rlci5maW5pc2goKV0sXG4gICAgICAgIGNhbGxiYWNrOiBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgYXdhaXQgdGhpcy5jb3JuZXJNYXRlcmlhbHNSZWFkLm1hcEFzeW5jKEdQVU1hcE1vZGUuUkVBRCk7XG4gICAgICAgICAgY29uc3QgY29ybmVycyA9IG5ldyBVaW50MzJBcnJheSh0aGlzLmNvcm5lck1hdGVyaWFsc1JlYWQuZ2V0TWFwcGVkUmFuZ2UoKSkuc2xpY2UoKTtcbiAgICAgICAgICB0aGlzLmNvcm5lck1hdGVyaWFsc1JlYWQudW5tYXAoKTtcblxuICAgICAgICAgIHRoaXMuZ3B1UmVhZEJ1ZmZlci5tYXBBc3luYyhHUFVNYXBNb2RlLlJFQUQpLnRoZW4oKCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBhcnJheUJ1ZmZlciA9IHRoaXMuZ3B1UmVhZEJ1ZmZlci5nZXRNYXBwZWRSYW5nZSgpO1xuICAgICAgICAgICAgY29uc3Qgdm94ZWxDb3VudCA9IG5ldyBVaW50MzJBcnJheShhcnJheUJ1ZmZlcilbMF07XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdWb3hlbCBjb3VudCcsIHZveGVsQ291bnQpO1xuICAgICAgICAgICAgdGhpcy5ncHVSZWFkQnVmZmVyLnVubWFwKCk7XG5cbiAgICAgICAgICAgIGlmICh2b3hlbENvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgIHJlc29sdmUoe3ZlcnRpY2VzOiBuZXcgRmxvYXQzMkFycmF5KCksIG5vcm1hbHM6IG5ldyBGbG9hdDMyQXJyYXkoKSwgaW5kaWNlczogbmV3IFVpbnQxNkFycmF5KCksIGNvcm5lcnM6IG5ldyBVaW50MzJBcnJheSgpfSk7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgZGlzcGF0Y2hDb3VudCA9IE1hdGguY2VpbCh2b3hlbENvdW50IC8gMTI4KTtcbiAgICAgICAgICAgIGNvbnN0IGNvbXB1dGVFbmNvZGVyID0gZGV2aWNlLmNyZWF0ZUNvbW1hbmRFbmNvZGVyKCk7XG4gICAgICAgICAgICBjb25zdCBjb21wdXRlUGFzc0VuY29kZXIgPSBjb21wdXRlRW5jb2Rlci5iZWdpbkNvbXB1dGVQYXNzKCk7XG4gICAgICAgICAgICBjb21wdXRlUGFzc0VuY29kZXIuc2V0UGlwZWxpbmUodGhpcy5jb21wdXRlVm94ZWxzUGlwZWxpbmUpO1xuICAgICAgICAgICAgY29tcHV0ZVBhc3NFbmNvZGVyLnNldEJpbmRHcm91cCgwLCB0aGlzLmNvbXB1dGVWb3hlbHNCaW5kR3JvdXApO1xuICAgICAgICAgICAgY29tcHV0ZVBhc3NFbmNvZGVyLmRpc3BhdGNoV29ya2dyb3VwcyhkaXNwYXRjaENvdW50KTtcbiAgICAgICAgICAgIGNvbXB1dGVQYXNzRW5jb2Rlci5lbmQoKTtcblxuICAgICAgICAgICAgY29uc3QgY29weUVuY29kZXIgPSBkZXZpY2UuY3JlYXRlQ29tbWFuZEVuY29kZXIoKTtcbiAgICAgICAgICAgIGNvcHlFbmNvZGVyLmNvcHlCdWZmZXJUb0J1ZmZlcihcbiAgICAgICAgICAgICAgICB0aGlzLnZveGVsc0J1ZmZlcixcbiAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgIHRoaXMudm94ZWxSZWFkQnVmZmVyLFxuICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgRmxvYXQzMkFycmF5LkJZVEVTX1BFUl9FTEVNRU5UICogdm94ZWxDb3VudCAqIDEyXG4gICAgICAgICAgICApO1xuXG5cbiAgICAgICAgICAgIHF1ZXVlKHtcbiAgICAgICAgICAgICAgaXRlbXM6IFtjb21wdXRlRW5jb2Rlci5maW5pc2goKSwgY29weUVuY29kZXIuZmluaXNoKCldLFxuICAgICAgICAgICAgICBjYWxsYmFjazogKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgdGhpcy52b3hlbFJlYWRCdWZmZXIubWFwQXN5bmMoR1BVTWFwTW9kZS5SRUFEKS50aGVuKCgpID0+IHtcblxuICAgICAgICAgICAgICAgICAgY29uc3QgYXJyYXlCdWZmZXIgPSB0aGlzLnZveGVsUmVhZEJ1ZmZlci5nZXRNYXBwZWRSYW5nZSgpO1xuICAgICAgICAgICAgICAgICAgY29uc3QgY29tcHV0ZWRWb3hlbHNEYXRhID0gbmV3IEZsb2F0MzJBcnJheShhcnJheUJ1ZmZlcik7XG4gICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBjb21wdXRlVm94ZWxzKHBvc2l0aW9uLCBzdHJpZGUsIHZveGVsQ291bnQsIGNvbXB1dGVkVm94ZWxzRGF0YSk7XG5cbiAgICAgICAgICAgICAgICAgIHRoaXMudm94ZWxSZWFkQnVmZmVyLnVubWFwKCk7XG5cbiAgICAgICAgICAgICAgICAgIHJlc29sdmUoey4uLnJlc3VsdCwgY29ybmVyc30pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn0iLCJleHBvcnQgaW50ZXJmYWNlIFdvcmxkR2VuZXJhdG9ySW5mbyB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICB6OiBudW1iZXI7XG4gIHN0cmlkZTogbnVtYmVyO1xuICBpdGVyYXRpb246IG51bWJlcjtcbiAgbGF5ZXI6IG51bWJlcjtcbiAgcHJldmlvdXNPZmZzZXQ6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIFdvcmxkUG9zaXRpb24ge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgejogbnVtYmVyO1xuICBzdHJpZGU6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIFBvaW50IHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHo6IG51bWJlcjtcbn1cblxuZnVuY3Rpb24gZml4UG9pbnQoaTogbnVtYmVyKTogbnVtYmVyIHtcbiAgaWYgKGkgPj0gMCkgcmV0dXJuIGkgKyAxO1xuICByZXR1cm4gaTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUG9pbnRzKHJhZGl1czogbnVtYmVyKTogUG9pbnRbXSB7XG4gIGxldCBwb2ludHM6IFBvaW50W10gPSBbXTtcblxuICBsZXQgZGlhbWV0ZXIgPSByYWRpdXMgKiAyO1xuXG4gIGZvciAobGV0IHggPSAwOyB4IDwgZGlhbWV0ZXI7IHgrKylcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGRpYW1ldGVyOyB5KyspXG4gICAgICBmb3IgKGxldCB6ID0gMDsgeiA8IGRpYW1ldGVyOyB6KyspIHtcbiAgICAgICAgaWYgKCEoeCA9PT0gMCB8fCB4ID09PSBkaWFtZXRlciAtIDEgfHwgeSA9PT0gMCB8fCB5ID09PSBkaWFtZXRlciAtIDEgfHwgeiA9PT0gMCB8fCB6ID09PSBkaWFtZXRlciAtIDEpKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHBvaW50ID0ge1xuICAgICAgICAgIHg6IGZpeFBvaW50KHggLSByYWRpdXMpLFxuICAgICAgICAgIHk6IGZpeFBvaW50KHkgLSByYWRpdXMpLFxuICAgICAgICAgIHo6IGZpeFBvaW50KHogLSByYWRpdXMpXG4gICAgICAgIH07XG5cbiAgICAgICAgcG9pbnRzLnB1c2gocG9pbnQpO1xuICAgICAgfVxuXG4gIHJldHVybiBwb2ludHM7XG59XG5cbmNvbnN0IHBvaW50cyA9IFtdO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8PSA2OyBpKyspIHtcbiAgcG9pbnRzW2ldID0gZ2VuZXJhdGVQb2ludHMoaSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdvcmxkR2VuZXJhdG9yIHtcbiAgcHJpdmF0ZSByZWFkb25seSBtaW5TdHJpZGU6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihtaW5TdHJpZGU6IG51bWJlcikge1xuICAgIHRoaXMubWluU3RyaWRlID0gbWluU3RyaWRlO1xuICB9XG5cbiAgaW5pdCh4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyKTogV29ybGRHZW5lcmF0b3JJbmZvIHtcbiAgICByZXR1cm4ge1xuICAgICAgeDogTWF0aC5yb3VuZCh4IC8gdGhpcy5taW5TdHJpZGUpICogdGhpcy5taW5TdHJpZGUsXG4gICAgICB5OiBNYXRoLnJvdW5kKHkgLyB0aGlzLm1pblN0cmlkZSkgKiB0aGlzLm1pblN0cmlkZSxcbiAgICAgIHo6IE1hdGgucm91bmQoeiAvIHRoaXMubWluU3RyaWRlKSAqIHRoaXMubWluU3RyaWRlLFxuICAgICAgc3RyaWRlOiB0aGlzLm1pblN0cmlkZSxcbiAgICAgIGl0ZXJhdGlvbjogMCxcbiAgICAgIGxheWVyOiAxLFxuICAgICAgcHJldmlvdXNPZmZzZXQ6IC0xICogdGhpcy5taW5TdHJpZGUgLyAyXG4gICAgfTtcbiAgfVxuXG4gIGxheWVyUmFkaXVzKGxheWVyOiBudW1iZXIsIHN0cmlkZTogbnVtYmVyKSB7XG4gICAgaWYgKHN0cmlkZSA9PT0gdGhpcy5taW5TdHJpZGUpIHtcbiAgICAgIHJldHVybiBsYXllcjtcbiAgICB9XG4gICAgaWYgKHN0cmlkZSA9PT0gdGhpcy5taW5TdHJpZGUgKiAyKSB7XG4gICAgICByZXR1cm4gbGF5ZXIgKyAxO1xuICAgIH1cbiAgICByZXR1cm4gbGF5ZXIgKyAyO1xuICB9XG5cbiAgcmFkaXVzKGxheWVyOiBudW1iZXIsIHN0cmlkZTogbnVtYmVyLCBwcmV2aW91c09mZnNldDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5zaWduKGxheWVyKSAqIChwcmV2aW91c09mZnNldCArIChNYXRoLmFicyhsYXllcikgKiBzdHJpZGUpKTtcbiAgfVxuXG4gIGxheWVyQ291bnQoc3RyaWRlOiBudW1iZXIpOiBudW1iZXIge1xuICAgIGlmIChzdHJpZGUgPT0gdGhpcy5taW5TdHJpZGUgKiAyKVxuICAgICAgcmV0dXJuIDM7XG4gICAgcmV0dXJuIDI7XG4gIH1cblxuICBuZXh0KGluZm86IFdvcmxkR2VuZXJhdG9ySW5mbyk6IFtXb3JsZFBvc2l0aW9uLCBXb3JsZEdlbmVyYXRvckluZm9dIHtcbiAgICBjb25zdCBvZmZzZXRzID0gcG9pbnRzW3RoaXMubGF5ZXJSYWRpdXMoaW5mby5sYXllciwgaW5mby5zdHJpZGUpXTtcblxuICAgIGNvbnN0IG9mZnNldCA9IG9mZnNldHNbaW5mby5pdGVyYXRpb25dO1xuICAgIGNvbnN0IGhhbGZTdHJpZGUgPSBpbmZvLnN0cmlkZSAvIDI7XG5cbiAgICBsZXQgaXRlcmF0aW9uID0gaW5mby5pdGVyYXRpb24gKyAxO1xuICAgIGxldCBsYXllciA9IGluZm8ubGF5ZXI7XG4gICAgbGV0IHN0cmlkZSA9IGluZm8uc3RyaWRlO1xuICAgIGxldCBwcmV2aW91c09mZnNldCA9IGluZm8ucHJldmlvdXNPZmZzZXQ7XG5cbiAgICBpZiAoaXRlcmF0aW9uID49IG9mZnNldHMubGVuZ3RoKSB7XG4gICAgICBpdGVyYXRpb24gPSAwO1xuICAgICAgbGF5ZXIrKztcblxuICAgICAgY29uc3QgbGF5ZXJDb3VudCA9IHRoaXMubGF5ZXJDb3VudChpbmZvLnN0cmlkZSk7XG4gICAgICBpZiAobGF5ZXIgPiBsYXllckNvdW50KSB7XG4gICAgICAgIGxheWVyID0gMTtcbiAgICAgICAgc3RyaWRlICo9IDI7XG4gICAgICAgIHByZXZpb3VzT2Zmc2V0ID0gdGhpcy5yYWRpdXMoaW5mby5sYXllciwgaW5mby5zdHJpZGUsIGluZm8ucHJldmlvdXNPZmZzZXQpIC0gaW5mby5zdHJpZGUgLyAyO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gW1xuICAgICAge1xuICAgICAgICB4OiBpbmZvLnN0cmlkZSAqIG9mZnNldC54ICsgaW5mby54IC0gTWF0aC5zaWduKG9mZnNldC54KSAqIGhhbGZTdHJpZGUsXG4gICAgICAgIHk6IGluZm8uc3RyaWRlICogb2Zmc2V0LnkgKyBpbmZvLnkgLSBNYXRoLnNpZ24ob2Zmc2V0LnkpICogaGFsZlN0cmlkZSxcbiAgICAgICAgejogaW5mby5zdHJpZGUgKiBvZmZzZXQueiArIGluZm8ueiAtIE1hdGguc2lnbihvZmZzZXQueikgKiBoYWxmU3RyaWRlLFxuICAgICAgICBzdHJpZGU6IGluZm8uc3RyaWRlXG4gICAgICB9LFxuICAgICAgeyAuLi5pbmZvLCBpdGVyYXRpb24sIGxheWVyLCBzdHJpZGUsIHByZXZpb3VzT2Zmc2V0IH1cbiAgICBdO1xuICB9XG59IiwiLyogKGlnbm9yZWQpICovIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uYW1kRCA9IGZ1bmN0aW9uICgpIHtcblx0dGhyb3cgbmV3IEVycm9yKCdkZWZpbmUgY2Fubm90IGJlIHVzZWQgaW5kaXJlY3QnKTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5hbWRPID0ge307IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ubWQgPSAobW9kdWxlKSA9PiB7XG5cdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdHJldHVybiBtb2R1bGU7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzIS4vc3JjL2NvbnRvdXJpbmcud29ya2VyLnRzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==