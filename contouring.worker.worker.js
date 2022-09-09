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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("let OctreeSize = 32u;\n\nstruct CornerMaterials {\n  cornerMaterials : array<u32>,\n};\n@binding(1) @group(0) var<storage, read> cornerMaterials: CornerMaterials;\n\nstruct VoxelMaterials {\n  voxelMaterials : array<u32>,\n};\n@binding(2) @group(0) var<storage, read_write> voxelMaterials: VoxelMaterials;\n\nlet CHILD_MIN_OFFSETS = array<vec3<u32>, 8>\n(\n  vec3<u32>(0u, 0u, 0u),\n  vec3<u32>(0u, 0u, 1u),\n  vec3<u32>(0u, 1u, 0u),\n  vec3<u32>(0u, 1u, 1u),\n  vec3<u32>(1u, 0u, 0u),\n  vec3<u32>(1u, 0u, 1u),\n  vec3<u32>(1u, 1u, 0u),\n  vec3<u32>(1u, 1u, 1u)\n);\n\n@compute @workgroup_size(1)\nfn main(@builtin(global_invocation_id) GlobalInvocationID : vec3<u32>) {\n  let index: u32 = GlobalInvocationID.z * 32u * 32u + GlobalInvocationID.y * 32u + GlobalInvocationID.x;\n\n  let nodePos: vec3<u32> = vec3<u32>(GlobalInvocationID.x, GlobalInvocationID.y, GlobalInvocationID.z);\n  var corners: u32 = 0u;\n\n  var j: u32 = 0u;\n  loop {\n    if (j >= 8u) { break; }\n\n    let cornerPos: vec3<u32> = vec3<u32>(GlobalInvocationID.x + CHILD_MIN_OFFSETS[j].x, GlobalInvocationID.y + CHILD_MIN_OFFSETS[j].y, GlobalInvocationID.z + CHILD_MIN_OFFSETS[j].z);\n    let material: u32 = min(1, cornerMaterials.cornerMaterials[cornerPos.z * 33u * 33u + cornerPos.y * 33u + cornerPos.x]);\n    corners = corners | (material << j);\n\n    continuing {\n      j = j + 1u;\n    }\n  }\n  \n  voxelMaterials.voxelMaterials[index] = corners;\n}");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("struct VoxelMaterials {\n  voxelMaterials : array<u32>,\n};\n@binding(2) @group(0) var<storage, read> voxelMaterials: VoxelMaterials;\n\nstruct CornerIndex {\n  cornerCount : u32,\n  cornerIndexes : array<u32>,\n};\n@binding(3) @group(0) var<storage, read_write> cornerIndex: CornerIndex;\n\n\n@stage(compute) @workgroup_size(1)\nfn main(@builtin(global_invocation_id) GlobalInvocationID : vec3<u32>) {\n\tvar position: u32 = 0u;\n\n\tvar i : u32 = 0u;\n\tloop {\n\t\tif (i >= 32u * 32u * 32u) { break; }\n\t\t\n\t\tif (voxelMaterials.voxelMaterials[i] != 0u && voxelMaterials.voxelMaterials[i] != 255u) {\n\t\t\tcornerIndex.cornerIndexes[position] = i;\n\t\t\tposition = position + 1u;  \n\t\t}\n\t\t\t\n\t\tcontinuing {  \n\t\t\ti = i + 1u;\n\t\t}\n\t}\n\n\tcornerIndex.cornerCount = position;\n}");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("struct Permutations {\n  Perm : array<i32, 512>,\n};\n\n@binding(0) @group(0)\nvar<storage, read> perm : Permutations;\n\nstruct CornerMaterials {\n  cornerMaterials : array<u32>,\n};\n\n@binding(1) @group(0)\nvar<storage, read_write> cornerMaterials: CornerMaterials;\n\nstruct VoxelMaterials {\n  voxelMaterials : array<u32>,\n};\n\n@binding(2) @group(0)\nvar<storage, read_write> voxelMaterials: VoxelMaterials;\n\nstruct CornerIndex {\n  cornerCount : u32,\n  cornerIndexes : array<u32>\n};\n\n@binding(3) @group(0)\nvar<storage, read_write> cornerIndex: CornerIndex;\n\nstruct GPUVOX\n{\n\tvoxMin: vec3<f32>,\n\tcorners: f32,\n\tvertPoint: vec3<f32>,\n\tavgNormal: vec3<f32>,\n\tnumPoints: f32\n};\nstruct GPUVOXS {\n  voxels : array<GPUVOX>,\n};\n\n@binding(4) @group(0)\nvar<storage, read_write> voxels: GPUVOXS;\n\nstruct UniformBufferObject {\n  chunkPosition : vec3<f32>,\n  stride : f32,\n\twidth: u32\n};\n\n@binding(5) @group(0)\nvar<uniform> uniforms : UniformBufferObject;\n\nlet CHILD_MIN_OFFSETS: array<vec3<u32>, 8> = array<vec3<u32>, 8>\n(\n  vec3<u32>(0u, 0u, 0u),\n  vec3<u32>(0u, 0u, 1u),\n  vec3<u32>(0u, 1u, 0u),\n  vec3<u32>(0u, 1u, 1u),\n  vec3<u32>(1u, 0u, 0u),\n  vec3<u32>(1u, 0u, 1u),\n  vec3<u32>(1u, 1u, 0u),\n  vec3<u32>(1u, 1u, 1u)\n);\n\nlet edgevmap: array<vec2<i32>, 12> = array<vec2<i32>, 12>\n(\n\tvec2<i32>(0,4), vec2<i32>(1,5), vec2<i32>(2,6), vec2<i32>(3,7),\n\tvec2<i32>(0,2), vec2<i32>(1,3), vec2<i32>(4,6), vec2<i32>(5,7),\n\tvec2<i32>(0,1), vec2<i32>(2,3), vec2<i32>(4,5), vec2<i32>(6,7)\n);\n\nfn random(i: vec2<f32>) -> f32 {\n  return fract(sin(dot(i,vec2(12.9898,78.233)))*43758.5453123);\n}\n\nfn Vec3Dot(a: vec3<f32>, b: vec3<f32>) -> f32\n{\n\treturn (a.x * b.x) + (a.y * b.y) + (a.z * b.z);\n}\n\nlet Grad3: array<vec3<f32>, 12> = array<vec3<f32>, 12>(\n\tvec3<f32>(1.0,1.0,0.0), vec3<f32>(-1.0,1.0,0.0), vec3<f32>(1.0,-1.0,0.0), vec3<f32>(-1.0,-1.0,0.0),\n\tvec3<f32>(1.0,0.0,1.0), vec3<f32>(-1.0,0.0,1.0), vec3<f32>(1.0,0.0,-1.0), vec3<f32>(-1.0,0.0,-1.0),\n\tvec3<f32>(0.0,1.0,1.0), vec3<f32>(0.0,-1.0,1.0), vec3<f32>(0.0,1.0,-1.0), vec3<f32>(0.0,-1.0,-1.0)\n);\n\nfn Perlin(x1: f32, y1: f32, z1: f32) -> f32\n{\n\tvar X: i32 = 0;\n\tif (x1 > 0.0) {\n\t\tX = i32(x1);\n\t} else {\n\t\tX = i32(x1) - 1;\n\t}\n\n\tvar Y: i32 = 0;\n\tif (y1 > 0.0) {\n\t\tY = i32(y1);\n\t} else {\n\t\tY = i32(y1) - 1;\n\t}\n\n\tvar Z: i32 = 0;\n\tif (z1 > 0.0) {\n\t\tZ = i32(z1);\n\t} else {\n\t\tZ = i32(z1) - 1;\n\t}\n\t\n\tlet x: f32 = x1 - f32(X);\n\tlet y: f32 = y1 - f32(Y);\n\tlet z: f32 = z1 - f32(Z);\n\t\n\tX = X & 255;\n\tY = Y & 255;\n\tZ = Z & 255;\n\t\n\tlet gi000: i32 = (perm.Perm[X + perm.Perm[Y + perm.Perm[Z] ] ] % 12);\n\tlet gi001: i32 = (perm.Perm[X + perm.Perm[Y + perm.Perm[Z + 1] ] ] % 12);\n\tlet gi010: i32 = (perm.Perm[X + perm.Perm[Y + 1 + perm.Perm[Z] ] ] % 12);\n\tlet gi011: i32 = (perm.Perm[X + perm.Perm[Y + 1 + perm.Perm[Z + 1] ] ] % 12);\n\tlet gi100: i32 = (perm.Perm[X + 1 + perm.Perm[Y + perm.Perm[Z] ] ] % 12);\n\tlet gi101: i32 = (perm.Perm[X + 1 + perm.Perm[Y + perm.Perm[Z + 1] ] ] % 12);\n\tlet gi110: i32 = (perm.Perm[X + 1 + perm.Perm[Y + 1 + perm.Perm[Z] ] ] % 12);\n\tlet gi111: i32 = (perm.Perm[X + 1 + perm.Perm[Y + 1 + perm.Perm[Z + 1] ] ] % 12);\n\n\tlet n000: f32 = dot(Grad3[gi000], vec3<f32>(x, y, z));\n\tlet n100: f32 = dot(Grad3[gi100], vec3<f32>(x - 1.0, y, z));\n\tlet n010: f32 = dot(Grad3[gi010], vec3<f32>(x, y - 1.0, z));\n\tlet n110: f32 = dot(Grad3[gi110], vec3<f32>(x - 1.0, y - 1.0, z));\n\tlet n001: f32 = dot(Grad3[gi001], vec3<f32>(x, y, z - 1.0));\n\tlet n101: f32 = dot(Grad3[gi101], vec3<f32>(x - 1.0, y, z - 1.0));\n\tlet n011: f32 = dot(Grad3[gi011], vec3<f32>(x, y - 1.0, z - 1.0));\n\tlet n111: f32 = dot(Grad3[gi111], vec3<f32>(x - 1.0, y - 1.0, z - 1.0));\n\t\n\tlet u: f32 = f32(x * x * x * (x * (x * 6.0 - 15.0) + 10.0));\n\tlet v: f32 = f32(y * y * y * (y * (y * 6.0 - 15.0) + 10.0));\n\tlet w: f32 = f32(z * z * z * (z * (z * 6.0 - 15.0) + 10.0));\n\tlet nx00: f32 = mix(n000, n100, u);\n\tlet nx01: f32 = mix(n001, n101, u);\n\tlet nx10: f32 = mix(n010, n110, u);\n\tlet nx11: f32 = mix(n011, n111, u);\n\tlet nxy0: f32 = mix(nx00, nx10, v);\n\tlet nxy1: f32 = mix(nx01, nx11, v);\n\tlet nxyz: f32 = mix(nxy0, nxy1, w);\n\t\n\treturn nxyz;\n}\n\nfn FractalNoise(octaves: i32, frequency: f32, lacunarity: f32, persistence: f32, position: vec3<f32>) -> f32\n{\n\tlet SCALE: f32 = 1.0 / 128.0;\n\tvar p: vec3<f32> = position * SCALE;\n\tvar nois: f32 = 0.0;\n\n\tvar amplitude: f32 = 1.0;\n\tp = p * frequency;\n\n\tvar i: i32 = 0;\n\tloop {\n\t\tif (i >= octaves) { break; }\n\n\t\tnois = nois + Perlin(p.x, p.y, p.z) * amplitude;\n\t\tp = p * lacunarity;\n\t\tamplitude = amplitude * persistence;\n\n\t\tcontinuing {\n\t\t\ti = i + 1;\n\t\t}\n\t}\n\t\n\treturn nois;\n}\n\nfn FractalNoise1(frequency: f32, lacunarity: f32, persistence: f32, position: vec3<f32>) -> f32\n{\n\tlet SCALE: f32 = 1.0 / 128.0;\n\tvar p: vec3<f32> = position * SCALE;\n\tvar nois: f32 = 0.0;\n\n\tvar amplitude: f32 = 1.0;\n\tp = p * frequency;\n\t\n\tnois = nois + Perlin(p.x, p.y, p.z) * amplitude;\n\tp = p * lacunarity;\n\tamplitude = amplitude * persistence;\n\t\n\treturn nois;\n}\n\nfn CalculateNoiseValue(pos: vec3<f32>, scale: f32) -> f32\n{\n\treturn FractalNoise(4, 0.5343, 2.2324, 0.68324, pos * scale);\n}\n\nfn CLerp(a: f32, b: f32, t: f32) -> f32\n{\n\treturn (1.0 - t) * a + t * b;\n}\n\n// SVD\n\nlet SVD_NUM_SWEEPS: i32 = 4;\nlet PSUEDO_INVERSE_THRESHOLD: f32 = 0.00000001;\n\nfn svd_mul_matrix_vec(m: mat3x3<f32>, b: vec4<f32>) -> vec4<f32>\n{\n\tvar a: mat3x3<f32> = m;\n\t\n\treturn vec4<f32>(\n\t\tdot(vec4<f32>(a[0][0], a[0][1], a[0][2], 0.0), b),\n\t\tdot(vec4<f32>(a[1][0], a[1][1], a[1][2], 0.0), b),\n\t\tdot(vec4<f32>(a[2][0], a[2][1], a[2][2], 0.0), b),\n\t\t0.0\n\t);\n}\n\nfn givens_coeffs_sym(a_pp: f32, a_pq: f32, a_qq: f32) -> vec2<f32>\n{\n\tif (a_pq == 0.0) {\n\t\treturn vec2<f32>(1.0, 0.0);\n\t}\n\t\n\tlet tau: f32 = (a_qq - a_pp) / (2.0 * a_pq);\n\tlet stt: f32 = sqrt(1.0 + tau * tau);\n\tvar tan: f32;\n\tif ((tau >= 0.0)) {\n\t\ttan = (tau + stt);\n\t} else {\n\t\ttan = (tau - stt);\n\t}\n\ttan = 1.0 / tan;\n\n\tlet c: f32 = inverseSqrt(1.0 + tan * tan);\n\tlet s: f32 = tan * c;\n\n\treturn vec2<f32>(c, s);\n}\n\nfn svd_rotate_xy(x: f32, y: f32, c: f32, s: f32) -> vec2<f32>\n{\n\treturn vec2<f32>(c * x - s * y, s * x + c * y);\n}\n\nfn svd_rotateq_xy(x: f32, y: f32, z: f32, c: f32, s: f32) -> vec2<f32>\n{\n\tlet cc: f32 = c * c;\n\tlet ss: f32 = s * s;\n\tlet mx: f32 = 2.0 * c * s * z;\n\n\treturn vec2<f32>(\n\t\tcc * x - mx + ss * y,\n\t\tss * x + mx + cc * z\n\t);\n}\n\nvar<private> vtav: mat3x3<f32>;\nvar<private> v: mat3x3<f32>;\nvar<private> ATA: array<f32, 6>;\nvar<private> Atb: vec4<f32>;\nvar<private> pointaccum: vec4<f32>;\nvar<private> btb: f32;\n\nfn svd_rotate(a: i32, b: i32)\n{\n\tif (vtav[a][b] == 0.0) { return; }\n\n\n\t\n\tlet coeffs: vec2<f32> = givens_coeffs_sym(vtav[a][a], vtav[a][b], vtav[b][b]);\n\tlet c: f32 = coeffs.x;\n\tlet s: f32 = coeffs.y;\n\t\n\tlet rot1: vec2<f32> = svd_rotateq_xy(vtav[a][a], vtav[b][b], vtav[a][b], c, s);\n\tvtav[a][a] = rot1.x;\n\tvtav[b][b] = rot1.y;\n\t\n\tlet rot2: vec2<f32> = svd_rotate_xy(vtav[0][3-b], vtav[1-a][2], c, s);\n\tvtav[0][3-b] = rot2.x; \n\tvtav[1-a][2] = rot2.y;\n\t\n\tvtav[a][b] = 0.0;\n\t\n\tlet rot3: vec2<f32> = svd_rotate_xy(v[0][a], v[0][b], c, s);\n\tv[0][a] = rot3.x; v[0][b] = rot3.y;\n\t\n\tlet rot4: vec2<f32> = svd_rotate_xy(v[1][a], v[1][b], c, s);\n\tv[1][a] = rot4.x; v[1][b] = rot4.y;\n\t\n\tlet rot5: vec2<f32> = svd_rotate_xy(v[2][a], v[2][b], c, s);\n\tv[2][a] = rot5.x; v[2][b] = rot5.y;\n}\n\nfn svd_solve_sym(b: array<f32, 6>) -> vec4<f32>\n{\n\tvar a: array<f32, 6> = b;\n\t\n\tvtav = mat3x3<f32>( \n\t\tvec3<f32>(a[0], a[1], a[2]), \n\t\tvec3<f32>(0.0, a[3], a[4]), \n\t\tvec3<f32>(0.0, 0.0, a[5])\n\t);\n\n\tvar i: i32;\n\tloop {\n\t\tif (i >= SVD_NUM_SWEEPS) { break; }\n\n\t\tsvd_rotate(0, 1);\n\t\tsvd_rotate(0, 2);\n\t\tsvd_rotate(1, 2);\n\n\t\tcontinuing {\n\t\t\ti = i + 1;\n\t\t}\n\t}\n\n\tvar copy: mat3x3<f32> = vtav;\n\treturn vec4<f32>(copy[0][0], copy[1][1], copy[2][2], 0.0);\n}\n\n\nfn svd_invdet(x: f32, tol: f32) -> f32\n{\n\tif (abs(x) < tol || abs(1.0 / x) < tol) {\n\t\treturn 0.0;\n\t}\n\treturn (1.0 / x);\n}\n\nfn svd_pseudoinverse(sigma: vec4<f32>, c: mat3x3<f32>) -> mat3x3<f32>\n{\n\tlet d0: f32 = svd_invdet(sigma.x, PSUEDO_INVERSE_THRESHOLD);\n\tlet d1: f32 = svd_invdet(sigma.y, PSUEDO_INVERSE_THRESHOLD);\n\tlet d2: f32 = svd_invdet(sigma.z, PSUEDO_INVERSE_THRESHOLD);\n\n\tvar copy: mat3x3<f32> = c;\n\n\treturn mat3x3<f32> (\n\t\tvec3<f32>(\n\t\t\tcopy[0][0] * d0 * copy[0][0] + copy[0][1] * d1 * copy[0][1] + copy[0][2] * d2 * copy[0][2],\n\t\t\tcopy[0][0] * d0 * copy[1][0] + copy[0][1] * d1 * copy[1][1] + copy[0][2] * d2 * copy[1][2],\n\t\t\tcopy[0][0] * d0 * copy[2][0] + copy[0][1] * d1 * copy[2][1] + copy[0][2] * d2 * copy[2][2]\n\t\t),\n\t\tvec3<f32>(\n\t\t\tcopy[1][0] * d0 * copy[0][0] + copy[1][1] * d1 * copy[0][1] + copy[1][2] * d2 * copy[0][2],\n\t\t\tcopy[1][0] * d0 * copy[1][0] + copy[1][1] * d1 * copy[1][1] + copy[1][2] * d2 * copy[1][2],\n\t\t\tcopy[1][0] * d0 * copy[2][0] + copy[1][1] * d1 * copy[2][1] + copy[1][2] * d2 * copy[2][2]\n\t\t),\n\t\tvec3<f32>(\n\t\t\tcopy[2][0] * d0 * copy[0][0] + copy[2][1] * d1 * copy[0][1] + copy[2][2] * d2 * copy[0][2],\n\t\t\tcopy[2][0] * d0 * copy[1][0] + copy[2][1] * d1 * copy[1][1] + copy[2][2] * d2 * copy[1][2],\n\t\t\tcopy[2][0] * d0 * copy[2][0] + copy[2][1] * d1 * copy[2][1] + copy[2][2] * d2 * copy[2][2]\n\t\t),\n\t);\n}\n\nfn svd_solve_ATA_Atb(a: vec4<f32>) -> vec4<f32>\n{\n\tv = mat3x3<f32>(vec3<f32>(1.0, 0.0, 0.0), vec3<f32>(0.0, 1.0, 0.0), vec3<f32>(0.0, 0.0, 1.0));\n\t\n\tlet sigma: vec4<f32> = svd_solve_sym(ATA);\n\t\n\tlet Vinv: mat3x3<f32> = svd_pseudoinverse(sigma, v);\n\treturn svd_mul_matrix_vec(Vinv, a);\n}\n\nfn svd_vmul_sym(v: vec4<f32>) -> vec4<f32>\n{\n\tlet A_row_x: vec4<f32> = vec4<f32>(ATA[0], ATA[1], ATA[2], 0.0);\n\treturn vec4<f32> (\n\t\tdot(A_row_x, v),\n\t\tATA[1] * v.x + ATA[3] * v.y + ATA[4] * v.z,\n\t\tATA[2] * v.x + ATA[4] * v.y + ATA[5] * v.z,\n\t\t0.0\n\t);\n}\n\n\n// // QEF\n\nfn qef_add(n: vec4<f32>, p: vec4<f32>)\n{\n\tATA[0] = ATA[0] + n.x * n.x;\n\tATA[1] = ATA[1] + n.x * n.y;\n\tATA[2] = ATA[2] + n.x * n.z;\n\tATA[3] = ATA[3] + n.y * n.y;\n\tATA[4] = ATA[4] + n.y * n.z;\n\tATA[5] = ATA[5] + n.z * n.z;\n\t\n\tlet b: f32 = dot(p, n);\n\tAtb.x = Atb.x +n.x * b;\n\tAtb.y = Atb.y +n.y * b;\n\tAtb.z = Atb.z +n.z * b;\n\tbtb = btb + b * b;\n\t\n\tpointaccum.x = pointaccum.x +p.x;\n\tpointaccum.y = pointaccum.y +p.y;\n\tpointaccum.z = pointaccum.z +p.z;\n\tpointaccum.w = pointaccum.w +1.0;\n}\n\nfn qef_calc_error(x: vec4<f32>) -> f32\n{\n\tvar tmp: vec4<f32> = svd_vmul_sym(x);\n\ttmp = Atb - tmp;\n\t\n\treturn dot(tmp, tmp);\n}\n\nfn qef_solve() -> vec4<f32>\n{\n\tlet masspoint: vec4<f32> = vec4<f32>(pointaccum.x / pointaccum.w, pointaccum.y / pointaccum.w, pointaccum.z / pointaccum.w, pointaccum.w / pointaccum.w);\n\t\n\tvar A_mp: vec4<f32> = svd_vmul_sym(masspoint);\n\tA_mp = Atb - A_mp;\n\t\n\tlet x: vec4<f32> = svd_solve_ATA_Atb(A_mp);\n\t\n\tlet error: f32 = qef_calc_error(x);\n\tlet r: vec4<f32> = x + masspoint;\n\t\n\treturn vec4<f32>(r.x, r.y, r.z, error);\n}\n\n#import density\n\nfn ApproximateZeroCrossingPosition(p0: vec3<f32>, p1: vec3<f32>) -> vec3<f32>\n{\n\tvar minValue: f32 = 100000.0;\n\tvar t: f32 = 0.0;\n\tvar currentT: f32 = 0.0;\n\tlet steps: f32 = 8.0;\n\tlet increment: f32 = 1.0 / steps;\n\tloop {\n\t\tif (currentT > 1.0) { break; }\n\n\t\tlet p: vec3<f32> = p0 + ((p1 - p0) * currentT);\n\t\tlet density: f32 = abs(getDensity(p));\n\t\tif (density < minValue)\n\t\t{\n\t\t\tminValue = density;\n\t\t\tt = currentT;\n\t\t}\n\n\t\tcontinuing {\n\t\t\tcurrentT = currentT + increment;\n\t\t}\n\t}\n\n\treturn p0 + ((p1 - p0) * t);\n}\n\nfn CalculateSurfaceNormal(p: vec3<f32>) -> vec3<f32>\n{\n\tlet H: f32 = uniforms.stride; // This needs to scale based on something...\n\tlet dx: f32 = getDensity(p + vec3<f32>(H, 0.0, 0.0)) - getDensity(p - vec3<f32>(H, 0.0, 0.0));\n\tlet dy: f32 = getDensity(p + vec3<f32>(0.0, H, 0.0)) - getDensity(p - vec3<f32>(0.0, H, 0.0));\n\tlet dz: f32 = getDensity(p + vec3<f32>(0.0, 0.0, H)) - getDensity(p - vec3<f32>(0.0, 0.0, H));\n\n\treturn normalize(vec3<f32>(dx, dy, dz));\n}\n\n@compute @workgroup_size(128)\nfn main(@builtin(global_invocation_id) GlobalInvocationID : vec3<u32>) {\n\tlet trueIndex: u32 = GlobalInvocationID.x;\n\n\tif (trueIndex < cornerIndex.cornerCount)\n\t{\n\t\tlet ures: u32 = 32u;\n\n\t\tlet nodeSize: u32 = u32(uniforms.stride);\n\n\t\tlet voxelIndex: u32 = cornerIndex.cornerIndexes[trueIndex];\n\t\tlet z: u32 = voxelIndex / (ures * ures);\n\t\tlet y: u32 = (voxelIndex - (z * ures * ures)) / ures;\n\t\tlet x: u32 = voxelIndex - (z * ures * ures) - (y * ures);\n\n\t\tlet corners: u32 = voxelMaterials.voxelMaterials[voxelIndex];\n\n\t\tlet nodePos: vec3<f32> = (vec3<f32>(f32(x), f32(y), f32 (z)) * uniforms.stride) + uniforms.chunkPosition;\n\t\tvoxels.voxels[trueIndex].voxMin = nodePos;\n\t\tlet MAX_CROSSINGS: i32 = 6;\n\t\tvar edgeCount: i32 = 0;\n\n\t\tpointaccum = vec4<f32>(0.0, 0.0, 0.0, 0.0);\n\t\tATA = array<f32, 6>(0.0, 0.0, 0.0, 0.0, 0.0, 0.0);\n\t\tAtb = vec4<f32>(0.0, 0.0, 0.0, 0.0);\n\t\tvar averageNormal: vec3<f32> = vec3<f32>(0.0, 0.0, 0.0);\n\t\tbtb = 0.0;\n\n\t\tvar j: i32 = 0;\n\t\tloop {\n\t\t\tif (!(j < 12 && edgeCount <= MAX_CROSSINGS)) {\n\t\t\t\tbreak;\n\t\t\t}\n\n\t\t\tlet c1: i32 = edgevmap[j].x;\n\t\t\tlet c2: i32 = edgevmap[j].y;\n\n\t\t\tlet m1: u32 = (corners >> u32(c1)) & 1u;\n\t\t\tlet m2: u32 = (corners >> u32(c2)) & 1u;\n\n\t\t\tif (!((m1 == 0u && m2 == 0u) || (m1 == 1u && m2 == 1u)))\n\t\t\t{\n\t\t\t\tlet p1: vec3<f32> = nodePos + vec3<f32>(f32(CHILD_MIN_OFFSETS[c1].x * nodeSize), f32(CHILD_MIN_OFFSETS[c1].y * nodeSize), f32(CHILD_MIN_OFFSETS[c1].z * nodeSize));\n\t\t\t\tlet p2: vec3<f32> = nodePos + vec3<f32>(f32(CHILD_MIN_OFFSETS[c2].x * nodeSize), f32(CHILD_MIN_OFFSETS[c2].y * nodeSize), f32(CHILD_MIN_OFFSETS[c2].z * nodeSize));\n\t\t\t\tlet p: vec3<f32> = ApproximateZeroCrossingPosition(p1, p2);\n\t\t\t\tlet n: vec3<f32> = CalculateSurfaceNormal(p);\n\n\t\t\t\tqef_add(vec4<f32>(n.x, n.y, n.z, 0.0), vec4<f32>(p.x, p.y, p.z, 0.0));\n\n\t\t\t\taverageNormal = averageNormal + n;\n\n\t\t\t\tedgeCount = edgeCount + 1;\n\t\t\t}\n\n\t\t\tcontinuing {\n\t\t\t\tj = j + 1;\n\t\t\t}\n\t\t}\n\n\n\t\taverageNormal = normalize(averageNormal / vec3<f32>(f32(edgeCount), f32(edgeCount), f32(edgeCount)));\n\n\t\tlet com: vec3<f32> = vec3<f32>(pointaccum.x / pointaccum.w, pointaccum.y / pointaccum.w, pointaccum.z / pointaccum.w);\n\n\t\tlet result: vec4<f32> = qef_solve();\n\t\tvar solved_position: vec3<f32> = result.xyz;\n\t\tlet error: f32 = result.w;\n\n\n\t\tlet Min: vec3<f32> = nodePos;\n\t\tlet Max: vec3<f32> = nodePos + vec3<f32>(1.0, 1.0, 1.0);\n\t\tif (solved_position.x < Min.x || solved_position.x > Max.x ||\n\t\t\t\tsolved_position.y < Min.y || solved_position.y > Max.y ||\n\t\t\t\tsolved_position.z < Min.z || solved_position.z > Max.z)\n\t\t{\n\t\t\tsolved_position = com;\n\t\t}\n\n\t\tvoxels.voxels[trueIndex].vertPoint = solved_position;\n\t\tvoxels.voxels[trueIndex].avgNormal = averageNormal;\n\t\tvoxels.voxels[trueIndex].numPoints = f32(edgeCount);\n\t\tvoxels.voxels[trueIndex].corners = f32(voxelMaterials.voxelMaterials[voxelIndex]);\n\t}\n}\n\n@compute @workgroup_size(1)\nfn computeMaterials(@builtin(global_invocation_id) GlobalInvocationID : vec3<u32>) {\n\t\tlet width = uniforms.width;\n    let index: u32 = GlobalInvocationID.z * width * width + GlobalInvocationID.y * width + GlobalInvocationID.x;\n    let cornerPos: vec3<f32> = vec3<f32>(f32(GlobalInvocationID.x) * uniforms.stride, f32(GlobalInvocationID.y) * uniforms.stride, f32(GlobalInvocationID.z) * uniforms.stride);\n\n    let density: f32 = getDensity(cornerPos + uniforms.chunkPosition);\n\n\t\tif (density < 0.0) {\n\t\t\tif (length(cornerPos + uniforms.chunkPosition) < 2000.0) {\n        //cornerMaterials.cornerMaterials[index] = u32(random(vec2(f32(index))) * 255.0) + 1;\n\t\t\t  cornerMaterials.cornerMaterials[index] = 256u;\n\t\t\t} else {\n        cornerMaterials.cornerMaterials[index] = u32(length(cornerPos) / uniforms.stride * 256.0);\n\t\t\t}\n\t\t} else {\n\t\t\tcornerMaterials.cornerMaterials[index] = 0u;\n\t\t}\n}");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("let freq = 0.001;\n\nlet MATERIAL_AIR = 0u;\nlet MATERIAL_ROCK = 1u;\nlet MATERIAL_WOOD = 2u;\nlet MATERIAL_FIRE = 3u;\n\nstruct Density {\n  density: f32,\n  material: u32\n}\n\nfn subtract(base: Density, sub: f32) -> Density {\n  return Density(max(base.density, sub), base.material);\n}\n\nfn add(base: Density, add: f32, material: u32) -> Density {\n  if (add <= 0) {\n    return Density(add, material);\n  }\n  return base;\n}\n\nfn Box(worldPosition: vec3<f32>, origin: vec3<f32>, halfDimensions: vec3<f32>) -> f32\n{\n\tlet local_pos: vec3<f32> = worldPosition - origin;\n\tlet pos: vec3<f32> = local_pos;\n\n\tlet d: vec3<f32> = vec3<f32>(abs(pos.x), abs(pos.y), abs(pos.z)) - halfDimensions;\n\tlet m: f32 = max(d.x, max(d.y, d.z));\n\treturn clamp(min(m, length(max(d, vec3<f32>(0.0, 0.0, 0.0)))), -100.0, 100.0);\n}\n\nfn Torus(worldPosition: vec3<f32>, origin: vec3<f32>, t: vec3<f32>) -> f32\n{\n\tlet p: vec3<f32> = worldPosition - origin;\n\n  let q: vec2<f32> = vec2<f32>(length(p.xz)-t.x,p.y);\n  return length(q)-t.y;\n}\n\nfn Sphere(worldPosition: vec3<f32>, origin: vec3<f32>, radius: f32) -> f32\n{\n\treturn clamp(length(worldPosition - origin) - radius, -100.0, 100.0);\n}\n\nfn FractalNoise21(octaves: i32, frequency: f32, lacunarity: f32, persistence: f32, position: vec3<f32>) -> f32\n{\n\tlet SCALE: f32 = 1.0 / 128.0;\n\tvar p: vec3<f32> = position * SCALE;\n\tvar nois: f32 = 0.0;\n\n\tvar amplitude: f32 = 1.0;\n\tp = p * frequency;\n\n\tvar i: i32 = 0;\n\tloop {\n\t\tif (i >= octaves) { break; }\n\n\t\tnois = nois + perlinNoise3(p) * amplitude;\n\t\tp = p * lacunarity;\n\t\tamplitude = amplitude * persistence;\n\n\t\tcontinuing {\n\t\t\ti = i + 1;\n\t\t}\n\t}\n\n\treturn nois;\n}\n\nfn FractalNoise2(frequency: f32, lacunarity: f32, persistence: f32, position: vec3<f32>) -> f32\n{\n\tlet SCALE: f32 = 1.0 / 128.0;\n\tvar p: vec3<f32> = position * SCALE;\n\tvar nois: f32 = 0.0;\n\n\tvar amplitude: f32 = 1.0;\n\tp = p * frequency;\n\n\tnois = nois + perlinNoise3(p) * amplitude;\n\tp = p * lacunarity;\n\tamplitude = amplitude * persistence;\n\n\treturn nois;\n}\n\nfn permute41(x: vec4<f32>) -> vec4<f32> { return ((x * 34. + 1.) * x) % vec4<f32>(289.); }\nfn taylorInvSqrt4(r: vec4<f32>) -> vec4<f32> { return 1.79284291400159 - 0.85373472095314 * r; }\nfn fade3(t: vec3<f32>) -> vec3<f32> { return t * t * t * (t * (t * 6. - 15.) + 10.); }\n\nfn perlinNoise3(P: vec3<f32>) -> f32 {\n  var Pi0 : vec3<f32> = floor(P); // Integer part for indexing\n  var Pi1 : vec3<f32> = Pi0 + vec3<f32>(1.); // Integer part + 1\n  Pi0 = Pi0 % vec3<f32>(289.);\n  Pi1 = Pi1 % vec3<f32>(289.);\n  let Pf0 = fract(P); // Fractional part for interpolation\n  let Pf1 = Pf0 - vec3<f32>(1.); // Fractional part - 1.\n  let ix = vec4<f32>(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  let iy = vec4<f32>(Pi0.yy, Pi1.yy);\n  let iz0 = Pi0.zzzz;\n  let iz1 = Pi1.zzzz;\n\n  let ixy = permute41(permute41(ix) + iy);\n  let ixy0 = permute41(ixy + iz0);\n  let ixy1 = permute41(ixy + iz1);\n\n  var gx0: vec4<f32> = ixy0 / 7.;\n  var gy0: vec4<f32> = fract(floor(gx0) / 7.) - 0.5;\n  gx0 = fract(gx0);\n  var gz0: vec4<f32> = vec4<f32>(0.5) - abs(gx0) - abs(gy0);\n  var sz0: vec4<f32> = step(gz0, vec4<f32>(0.));\n  gx0 = gx0 + sz0 * (step(vec4<f32>(0.), gx0) - 0.5);\n  gy0 = gy0 + sz0 * (step(vec4<f32>(0.), gy0) - 0.5);\n\n  var gx1: vec4<f32> = ixy1 / 7.;\n  var gy1: vec4<f32> = fract(floor(gx1) / 7.) - 0.5;\n  gx1 = fract(gx1);\n  var gz1: vec4<f32> = vec4<f32>(0.5) - abs(gx1) - abs(gy1);\n  var sz1: vec4<f32> = step(gz1, vec4<f32>(0.));\n  gx1 = gx1 - sz1 * (step(vec4<f32>(0.), gx1) - 0.5);\n  gy1 = gy1 - sz1 * (step(vec4<f32>(0.), gy1) - 0.5);\n\n  var g000: vec3<f32> = vec3<f32>(gx0.x, gy0.x, gz0.x);\n  var g100: vec3<f32> = vec3<f32>(gx0.y, gy0.y, gz0.y);\n  var g010: vec3<f32> = vec3<f32>(gx0.z, gy0.z, gz0.z);\n  var g110: vec3<f32> = vec3<f32>(gx0.w, gy0.w, gz0.w);\n  var g001: vec3<f32> = vec3<f32>(gx1.x, gy1.x, gz1.x);\n  var g101: vec3<f32> = vec3<f32>(gx1.y, gy1.y, gz1.y);\n  var g011: vec3<f32> = vec3<f32>(gx1.z, gy1.z, gz1.z);\n  var g111: vec3<f32> = vec3<f32>(gx1.w, gy1.w, gz1.w);\n\n  let norm0 = taylorInvSqrt4(\n      vec4<f32>(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 = g000 * norm0.x;\n  g010 = g010 * norm0.y;\n  g100 = g100 * norm0.z;\n  g110 = g110 * norm0.w;\n  let norm1 = taylorInvSqrt4(\n      vec4<f32>(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 = g001 * norm1.x;\n  g011 = g011 * norm1.y;\n  g101 = g101 * norm1.z;\n  g111 = g111 * norm1.w;\n\n  let n000 = dot(g000, Pf0);\n  let n100 = dot(g100, vec3<f32>(Pf1.x, Pf0.yz));\n  let n010 = dot(g010, vec3<f32>(Pf0.x, Pf1.y, Pf0.z));\n  let n110 = dot(g110, vec3<f32>(Pf1.xy, Pf0.z));\n  let n001 = dot(g001, vec3<f32>(Pf0.xy, Pf1.z));\n  let n101 = dot(g101, vec3<f32>(Pf1.x, Pf0.y, Pf1.z));\n  let n011 = dot(g011, vec3<f32>(Pf0.x, Pf1.yz));\n  let n111 = dot(g111, Pf1);\n\n  var fade_xyz: vec3<f32> = fade3(Pf0);\n  let temp = vec4<f32>(f32(fade_xyz.z)); // simplify after chrome bug fix\n  let n_z = mix(vec4<f32>(n000, n100, n010, n110), vec4<f32>(n001, n101, n011, n111), temp);\n  let n_yz = mix(n_z.xy, n_z.zw, vec2<f32>(f32(fade_xyz.y))); // simplify after chrome bug fix\n  let n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\n  return 2.2 * n_xyz;\n}\n\nfn CalculateNoiseValue2(pos: vec3<f32>, scale: f32) -> f32\n{\n\treturn FractalNoise21(4, 0.5343, 2.2324, 0.68324, pos * scale);\n}\n\nfn CLerp2(a: f32, b: f32, t: f32) -> f32\n{\n\treturn (1.0 - t) * a + t * b;\n}\n\nfn calculateDensity(worldPosition: vec3<f32>) -> Density {\n\tvar worldRadius: f32 = 10000.0;\n\tvar world: vec3<f32> = worldPosition - vec3<f32>(worldRadius);\n\tvar worldDist: f32 = clamp(-worldRadius + length(world), -1000.0, 1000.0);\n\n\tlet flatlandNoiseScale: f32 = 3.0;\n\tlet flatlandLerpAmount: f32 = 0.07;\n\tlet flatlandYPercent: f32 = 1.2;\n\n\tlet rockyNoiseScale: f32 = 3.0;\n\tlet rockyLerpAmount: f32 = 0.05;\n\tlet rockyYPercent: f32 = 0.7;\n\n\tlet maxMountainMixLerpAmount: f32 = 0.075;\n\tlet minMountainMixLerpAmount: f32 = 1.0;\n\n\tlet rockyBlend: f32 = 1.0;\n\n\tlet mountainBlend: f32 = clamp(abs(FractalNoise2(0.5343, 2.2324, 0.68324, world)) * 4.0, 0.0, 1.0);\n\t//let mountainBlend: f32 = 0.0;\n\n\tlet mountain: f32 = CalculateNoiseValue2(world, 0.07);\n\t//let mountain: f32 = 0.0;\n\n\tvar blob: f32 = CalculateNoiseValue2(world, flatlandNoiseScale + ((rockyNoiseScale - flatlandNoiseScale) * rockyBlend));\n\t//var blob: f32 = 0.0;\n\tblob = CLerp2(blob, (worldDist) * (flatlandYPercent + ((rockyYPercent - flatlandYPercent) * rockyBlend)),\n\t\t\t\tflatlandLerpAmount + ((rockyLerpAmount - flatlandLerpAmount) * rockyBlend));\n\t\t\t\t//+ CLerp2(mountain, blob, minMountainMixLerpAmount + ((maxMountainMixLerpAmount - minMountainMixLerpAmount) * mountainBlend));\n\n  var result = Density(1.0, MATERIAL_AIR);\n\n\tresult = add(result, blob, MATERIAL_ROCK);\n\n  result = add(result, Box(worldPosition, vec3<f32>(2000000.0, 150.0, 5000.0), vec3<f32>(5000.0, 1000.0, 5000.0)), MATERIAL_WOOD);\n  result = add(result, Sphere(worldPosition, vec3<f32>(5000.0, 100.0, 100.0), 5000.0), MATERIAL_ROCK);\n  result = add(result, Sphere(worldPosition, vec3<f32>(10000.0, 100.0, 100.0), 5000.0), MATERIAL_ROCK);\n  result = add(result, Sphere(worldPosition, vec3<f32>(2000000.0, 100.0, 100.0), 5000.0), MATERIAL_ROCK);\n\n  result = add(result, Sphere(worldPosition, vec3<f32>(0.0, 0.0, 0.0), 200000.0), MATERIAL_FIRE);\n\n  result = subtract(result, -Sphere(worldPosition, vec3<f32>(2000000.0, 0.0, 0.0), 1000.0));\n  result = subtract(result, -Box(worldPosition, vec3<f32>(2000000.0, 0.0, 0.0), vec3<f32>(6000.0, 500.0, 500.0)));\n  result = subtract(result, -Box(worldPosition, vec3<f32>(2000000.0, 0.0, 0.0), vec3<f32>(500.0, 500.0, 5000.0)));\n\n  return result;\n}\n\nfn getDensity(worldPosition: vec3<f32>) -> f32 {\n\treturn calculateDensity(worldPosition).density;\n}");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJncHUtY29tcHV0ZS8uL25vZGVfbW9kdWxlcy9nbC1tYXRyaXgvZXNtL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly93ZWJncHUtY29tcHV0ZS8uL25vZGVfbW9kdWxlcy9nbC1tYXRyaXgvZXNtL3ZlYzMuanMiLCJ3ZWJwYWNrOi8vd2ViZ3B1LWNvbXB1dGUvLi9zcmMvY29tcHV0ZS1jb3JuZXJzLndnc2wiLCJ3ZWJwYWNrOi8vd2ViZ3B1LWNvbXB1dGUvLi9zcmMvY29tcHV0ZS1wb3NpdGlvbnMud2dzbCIsIndlYnBhY2s6Ly93ZWJncHUtY29tcHV0ZS8uL3NyYy9jb21wdXRlLXZveGVscy53Z3NsIiwid2VicGFjazovL3dlYmdwdS1jb21wdXRlLy4vc3JjL2RlbnNpdHkud2dzbCIsIndlYnBhY2s6Ly93ZWJncHUtY29tcHV0ZS8uL25vZGVfbW9kdWxlcy9zZWVkcmFuZG9tL2luZGV4LmpzIiwid2VicGFjazovL3dlYmdwdS1jb21wdXRlLy4vbm9kZV9tb2R1bGVzL3NlZWRyYW5kb20vbGliL2FsZWEuanMiLCJ3ZWJwYWNrOi8vd2ViZ3B1LWNvbXB1dGUvLi9ub2RlX21vZHVsZXMvc2VlZHJhbmRvbS9saWIvdHljaGVpLmpzIiwid2VicGFjazovL3dlYmdwdS1jb21wdXRlLy4vbm9kZV9tb2R1bGVzL3NlZWRyYW5kb20vbGliL3hvcjEyOC5qcyIsIndlYnBhY2s6Ly93ZWJncHUtY29tcHV0ZS8uL25vZGVfbW9kdWxlcy9zZWVkcmFuZG9tL2xpYi94b3I0MDk2LmpzIiwid2VicGFjazovL3dlYmdwdS1jb21wdXRlLy4vbm9kZV9tb2R1bGVzL3NlZWRyYW5kb20vbGliL3hvcnNoaWZ0Ny5qcyIsIndlYnBhY2s6Ly93ZWJncHUtY29tcHV0ZS8uL25vZGVfbW9kdWxlcy9zZWVkcmFuZG9tL2xpYi94b3J3b3cuanMiLCJ3ZWJwYWNrOi8vd2ViZ3B1LWNvbXB1dGUvLi9ub2RlX21vZHVsZXMvc2VlZHJhbmRvbS9zZWVkcmFuZG9tLmpzIiwid2VicGFjazovL3dlYmdwdS1jb21wdXRlLy4vc3JjL2NvbnRvdXJpbmcudHMiLCJ3ZWJwYWNrOi8vd2ViZ3B1LWNvbXB1dGUvLi9zcmMvY29udG91cmluZy53b3JrZXIudHMiLCJ3ZWJwYWNrOi8vd2ViZ3B1LWNvbXB1dGUvLi9zcmMvb2N0cmVlLnRzIiwid2VicGFjazovL3dlYmdwdS1jb21wdXRlLy4vc3JjL3ZveGVsLnRzIiwid2VicGFjazovL3dlYmdwdS1jb21wdXRlLy4vc3JjL3dvcmxkLWdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly93ZWJncHUtY29tcHV0ZS9pZ25vcmVkfGNyeXB0byIsIndlYnBhY2s6Ly93ZWJncHUtY29tcHV0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJncHUtY29tcHV0ZS93ZWJwYWNrL3J1bnRpbWUvYW1kIGRlZmluZSIsIndlYnBhY2s6Ly93ZWJncHUtY29tcHV0ZS93ZWJwYWNrL3J1bnRpbWUvYW1kIG9wdGlvbnMiLCJ3ZWJwYWNrOi8vd2ViZ3B1LWNvbXB1dGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2ViZ3B1LWNvbXB1dGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYmdwdS1jb21wdXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2ViZ3B1LWNvbXB1dGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJncHUtY29tcHV0ZS93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL3dlYmdwdS1jb21wdXRlL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ0E7QUFDQTtBQUNQO0FBQ0E7QUFDQTtBQUNBLFdBQVcsMkNBQTJDO0FBQ3REOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakR3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLEtBQUs7QUFDbEI7O0FBRU87QUFDUCxnQkFBZ0Isa0RBQW1COztBQUVuQyxNQUFNLGtEQUFtQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLGFBQWEsS0FBSztBQUNsQjs7QUFFTztBQUNQLGdCQUFnQixrREFBbUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixhQUFhLE9BQU87QUFDcEI7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCOztBQUVPO0FBQ1AsZ0JBQWdCLGtEQUFtQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsYUFBYTtBQUN4QixhQUFhLEtBQUs7QUFDbEI7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsS0FBSztBQUNsQjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsYUFBYTtBQUN4QixhQUFhLEtBQUs7QUFDbEI7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsYUFBYTtBQUN4QixXQUFXLGFBQWE7QUFDeEIsYUFBYSxLQUFLO0FBQ2xCOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLGFBQWE7QUFDeEIsV0FBVyxhQUFhO0FBQ3hCLGFBQWEsS0FBSztBQUNsQjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsYUFBYTtBQUN4QixhQUFhLEtBQUs7QUFDbEI7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsYUFBYTtBQUN4QixhQUFhLEtBQUs7QUFDbEI7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsYUFBYTtBQUN4QixhQUFhLEtBQUs7QUFDbEI7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsYUFBYTtBQUN4QixXQUFXLGFBQWE7QUFDeEIsYUFBYSxLQUFLO0FBQ2xCOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLGFBQWE7QUFDeEIsV0FBVyxhQUFhO0FBQ3hCLGFBQWEsS0FBSztBQUNsQjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxhQUFhO0FBQ3hCLGFBQWEsS0FBSztBQUNsQjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsT0FBTztBQUNsQixhQUFhLEtBQUs7QUFDbEI7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsYUFBYTtBQUN4QixXQUFXLGFBQWE7QUFDeEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsS0FBSztBQUNsQjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsV0FBVyxhQUFhO0FBQ3hCLGFBQWEsT0FBTztBQUNwQjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsV0FBVyxhQUFhO0FBQ3hCLGFBQWEsT0FBTztBQUNwQjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsYUFBYSxPQUFPO0FBQ3BCOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLGFBQWE7QUFDeEIsYUFBYSxLQUFLO0FBQ2xCOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLGFBQWE7QUFDeEIsYUFBYSxLQUFLO0FBQ2xCOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLGFBQWE7QUFDeEIsYUFBYSxLQUFLO0FBQ2xCOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLGFBQWE7QUFDeEIsYUFBYSxPQUFPO0FBQ3BCOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLGFBQWE7QUFDeEIsV0FBVyxhQUFhO0FBQ3hCLGFBQWEsS0FBSztBQUNsQjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsYUFBYTtBQUN4QixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLGFBQWE7QUFDeEIsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsYUFBYTtBQUN4QixXQUFXLGFBQWE7QUFDeEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsS0FBSztBQUNsQjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsYUFBYTtBQUN4QixXQUFXLGFBQWE7QUFDeEIsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsYUFBYTtBQUN4QixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsT0FBTztBQUNsQixhQUFhLEtBQUs7QUFDbEI7O0FBRU87QUFDUDtBQUNBLFVBQVUsOENBQWU7QUFDekIsVUFBVSw4Q0FBZTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLGFBQWE7QUFDeEIsV0FBVyxhQUFhO0FBQ3hCLGFBQWEsS0FBSztBQUNsQjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsYUFBYTtBQUN4QixXQUFXLGFBQWE7QUFDeEIsYUFBYSxLQUFLO0FBQ2xCOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsYUFBYTtBQUN4QixXQUFXLGFBQWE7QUFDeEIsYUFBYSxLQUFLO0FBQ2xCOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBLDRCQUE0Qjs7QUFFNUI7QUFDQTtBQUNBLGlDQUFpQzs7QUFFakM7QUFDQTtBQUNBO0FBQ0EsWUFBWTs7QUFFWjtBQUNBO0FBQ0EsWUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLGFBQWE7QUFDeEIsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsT0FBTztBQUNsQixhQUFhLEtBQUs7QUFDbEI7O0FBRU87QUFDUDtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBLHFCQUFxQjs7QUFFckI7QUFDQTtBQUNBLHFEQUFxRDs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsYUFBYTtBQUN4QixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCOztBQUVPO0FBQ1A7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQSxxQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQSxxREFBcUQ7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsYUFBYTtBQUN4QixXQUFXLGFBQWE7QUFDeEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsS0FBSztBQUNsQjs7QUFFTztBQUNQO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0EscUJBQXFCOztBQUVyQjtBQUNBO0FBQ0EsY0FBYzs7QUFFZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLGFBQWE7QUFDeEIsYUFBYSxPQUFPO0FBQ3BCOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsYUFBYSxPQUFPO0FBQ3BCOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLGFBQWE7QUFDeEIsYUFBYSxRQUFRO0FBQ3JCOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLGFBQWE7QUFDeEIsYUFBYSxRQUFRO0FBQ3JCOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLCtDQUFnQixxRUFBcUUsK0NBQWdCLHFFQUFxRSwrQ0FBZ0I7QUFDeE47QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVPO0FBQ1A7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFTztBQUNQO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRU87QUFDUDtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVPO0FBQ1A7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFTztBQUNQO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRU87QUFDUDtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsU0FBUztBQUNwQixXQUFXLE9BQU87QUFDbEIsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUEsb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxHOzs7Ozs7Ozs7Ozs7Ozs7QUNseEJELGlFQUFlLHNCQUFzQiw0QkFBNEIscUNBQXFDLDRFQUE0RSwyQkFBMkIsb0NBQW9DLGdGQUFnRixxUUFBcVEseUdBQXlHLDBHQUEwRywyR0FBMkcsMEJBQTBCLHNCQUFzQixVQUFVLG9CQUFvQixPQUFPLEVBQUUsMExBQTBMLDZIQUE2SCwwQ0FBMEMsb0JBQW9CLG1CQUFtQixPQUFPLEtBQUssdURBQXVELEdBQUcsQ0FBQyxFOzs7Ozs7Ozs7Ozs7Ozs7QUNBMTZDLGlFQUFlLHdCQUF3QixvQ0FBb0MsMEVBQTBFLHdCQUF3Qix5REFBeUQsMEVBQTBFLGtIQUFrSCwyQkFBMkIsdUJBQXVCLFVBQVUsaUNBQWlDLE9BQU8sRUFBRSxxR0FBcUcsZ0RBQWdELGlDQUFpQyxTQUFTLDBCQUEwQixxQkFBcUIsT0FBTyxLQUFLLHlDQUF5QyxHQUFHLENBQUMsRTs7Ozs7Ozs7Ozs7Ozs7O0FDQS95QixpRUFBZSxzQkFBc0IsK0JBQStCLGtFQUFrRSw0QkFBNEIscUNBQXFDLHFGQUFxRiwyQkFBMkIsb0NBQW9DLG1GQUFtRix3QkFBd0Isd0RBQXdELDZFQUE2RSxvQkFBb0IsK0dBQStHLGtCQUFrQiwrQkFBK0Isb0VBQW9FLGdDQUFnQyxpRUFBaUUsdUVBQXVFLDBSQUEwUiw0UUFBNFEsb0NBQW9DLGlFQUFpRSxHQUFHLG9EQUFvRCxtREFBbUQsR0FBRyxtWEFBbVgsa0RBQWtELG1CQUFtQixtQkFBbUIsa0JBQWtCLEtBQUssT0FBTyxzQkFBc0IsS0FBSyxxQkFBcUIsbUJBQW1CLGtCQUFrQixLQUFLLE9BQU8sc0JBQXNCLEtBQUsscUJBQXFCLG1CQUFtQixrQkFBa0IsS0FBSyxPQUFPLHNCQUFzQixLQUFLLGlDQUFpQyw2QkFBNkIsNkJBQTZCLG9CQUFvQixnQkFBZ0IsZ0JBQWdCLDZFQUE2RSw2RUFBNkUsNkVBQTZFLGlGQUFpRiw2RUFBNkUsaUZBQWlGLGlGQUFpRixxRkFBcUYsNERBQTRELGdFQUFnRSxnRUFBZ0Usc0VBQXNFLGdFQUFnRSxzRUFBc0Usc0VBQXNFLDRFQUE0RSxvRUFBb0UsZ0VBQWdFLGdFQUFnRSx1Q0FBdUMsdUNBQXVDLHVDQUF1Qyx1Q0FBdUMsdUNBQXVDLHVDQUF1Qyx1Q0FBdUMsb0JBQW9CLEdBQUcsbUhBQW1ILGlDQUFpQyx3Q0FBd0Msd0JBQXdCLCtCQUErQixzQkFBc0IscUJBQXFCLFVBQVUseUJBQXlCLE9BQU8sRUFBRSx3REFBd0QseUJBQXlCLDBDQUEwQyxvQkFBb0Isa0JBQWtCLE9BQU8sS0FBSyxvQkFBb0IsR0FBRyxzR0FBc0csaUNBQWlDLHdDQUF3Qyx3QkFBd0IsK0JBQStCLHNCQUFzQix3REFBd0QsdUJBQXVCLHdDQUF3QyxvQkFBb0IsR0FBRyxnRUFBZ0UsaUVBQWlFLEdBQUcsOENBQThDLGlDQUFpQyxHQUFHLDBDQUEwQyxpREFBaUQsdUVBQXVFLDJCQUEyQixnTkFBZ04sR0FBRyx5RUFBeUUsc0JBQXNCLGlDQUFpQyxLQUFLLG9EQUFvRCx5Q0FBeUMsaUJBQWlCLHVCQUF1Qix3QkFBd0IsS0FBSyxPQUFPLHdCQUF3QixLQUFLLG9CQUFvQixnREFBZ0QseUJBQXlCLDZCQUE2QixHQUFHLG9FQUFvRSxtREFBbUQsR0FBRyw2RUFBNkUsd0JBQXdCLHdCQUF3QixrQ0FBa0Msa0ZBQWtGLEdBQUcsbUNBQW1DLDhCQUE4QixrQ0FBa0MsOEJBQThCLHFDQUFxQyx3QkFBd0Isb0NBQW9DLDRCQUE0QixRQUFRLEVBQUUsMEZBQTBGLDBCQUEwQiwwQkFBMEIsdUZBQXVGLHdCQUF3Qix3QkFBd0IsOEVBQThFLDBCQUEwQiwyQkFBMkIseUJBQXlCLG9FQUFvRSxxQkFBcUIsa0JBQWtCLG9FQUFvRSxxQkFBcUIsa0JBQWtCLG9FQUFvRSxxQkFBcUIsa0JBQWtCLEdBQUcsc0RBQXNELDZCQUE2QixzSUFBc0ksaUJBQWlCLFVBQVUsZ0NBQWdDLE9BQU8sRUFBRSx5QkFBeUIsdUJBQXVCLHVCQUF1QixvQkFBb0Isa0JBQWtCLE9BQU8sS0FBSyxtQ0FBbUMsOERBQThELEdBQUcsK0NBQStDLDZDQUE2QyxpQkFBaUIsS0FBSyxxQkFBcUIsR0FBRyw0RUFBNEUsZ0VBQWdFLGdFQUFnRSxnRUFBZ0UsZ0NBQWdDLGcrQkFBZytCLEdBQUcsc0RBQXNELGtHQUFrRyxrREFBa0QsNERBQTRELHVDQUF1QyxHQUFHLGlEQUFpRCxvRUFBb0UsNkpBQTZKLEdBQUcsNERBQTRELGdDQUFnQyxnQ0FBZ0MsZ0NBQWdDLGdDQUFnQyxnQ0FBZ0MsZ0NBQWdDLCtCQUErQiwyQkFBMkIsMkJBQTJCLDJCQUEyQixzQkFBc0IseUNBQXlDLHFDQUFxQyxxQ0FBcUMscUNBQXFDLEdBQUcsNkNBQTZDLHlDQUF5QyxvQkFBb0IsNkJBQTZCLEdBQUcsa0NBQWtDLDZKQUE2SixzREFBc0Qsc0JBQXNCLG1EQUFtRCwyQ0FBMkMscUNBQXFDLCtDQUErQyxHQUFHLHVHQUF1RyxpQ0FBaUMscUJBQXFCLDRCQUE0Qix5QkFBeUIscUNBQXFDLFVBQVUsMkJBQTJCLE9BQU8sRUFBRSx1REFBdUQsNENBQTRDLG9DQUFvQywyQkFBMkIscUJBQXFCLE9BQU8sb0JBQW9CLHdDQUF3QyxPQUFPLEtBQUssa0NBQWtDLEdBQUcsMkRBQTJELGlDQUFpQywrSUFBK0ksa0dBQWtHLGtHQUFrRyw4Q0FBOEMsR0FBRywyR0FBMkcsOENBQThDLG1EQUFtRCwwQkFBMEIsaURBQWlELG1FQUFtRSw4Q0FBOEMsMkRBQTJELCtEQUErRCxxRUFBcUUsaUhBQWlILGdEQUFnRCxpQ0FBaUMsNkJBQTZCLG1EQUFtRCx3REFBd0QsMENBQTBDLDhEQUE4RCxnQkFBZ0IsdUJBQXVCLFlBQVksc0RBQXNELGdCQUFnQixTQUFTLHNDQUFzQyxvQ0FBb0Msa0RBQWtELGdEQUFnRCwyRUFBMkUsNktBQTZLLDZLQUE2SyxxRUFBcUUsdURBQXVELGtGQUFrRiw4Q0FBOEMsc0NBQXNDLFNBQVMsc0JBQXNCLG9CQUFvQixTQUFTLE9BQU8sK0dBQStHLDhIQUE4SCw0Q0FBNEMsa0RBQWtELGdDQUFnQyx1Q0FBdUMsOERBQThELDhNQUE4TSw4QkFBOEIsT0FBTyw2REFBNkQseURBQXlELDBEQUEwRCx3RkFBd0YsS0FBSyxHQUFHLHFIQUFxSCxpQ0FBaUMsa0hBQWtILGtMQUFrTCwwRUFBMEUsNEJBQTRCLGtFQUFrRSwrRkFBK0Ysd0RBQXdELFNBQVMsT0FBTyxvR0FBb0csU0FBUyxPQUFPLE9BQU8sb0RBQW9ELE9BQU8sR0FBRyxDQUFDLEU7Ozs7Ozs7Ozs7Ozs7OztBQ0FqaWdCLGlFQUFlLGtCQUFrQiwwQkFBMEIseUJBQXlCLHlCQUF5Qix5QkFBeUIsb0JBQW9CLHFDQUFxQyxxREFBcUQsMERBQTBELEdBQUcsK0RBQStELG1CQUFtQixvQ0FBb0MsS0FBSyxnQkFBZ0IsR0FBRyw0RkFBNEYsc0RBQXNELG1DQUFtQyx3RkFBd0YseUNBQXlDLGtGQUFrRixHQUFHLGlGQUFpRiw4Q0FBOEMseURBQXlELHlCQUF5QixHQUFHLGlGQUFpRix5RUFBeUUsR0FBRyxxSEFBcUgsaUNBQWlDLHdDQUF3Qyx3QkFBd0IsK0JBQStCLHNCQUFzQixxQkFBcUIsVUFBVSx5QkFBeUIsT0FBTyxFQUFFLGtEQUFrRCx5QkFBeUIsMENBQTBDLG9CQUFvQixrQkFBa0IsT0FBTyxLQUFLLGtCQUFrQixHQUFHLHNHQUFzRyxpQ0FBaUMsd0NBQXdDLHdCQUF3QiwrQkFBK0Isc0JBQXNCLGdEQUFnRCx1QkFBdUIsd0NBQXdDLGtCQUFrQixHQUFHLDZDQUE2QywrQ0FBK0MsRUFBRSxnREFBZ0QsZ0RBQWdELEVBQUUsdUNBQXVDLCtDQUErQyxFQUFFLDBDQUEwQyxtQ0FBbUMsMkVBQTJFLG9EQUFvRCxnQ0FBZ0MsdUJBQXVCLHVFQUF1RSwyRUFBMkUsdUNBQXVDLHVCQUF1Qix1QkFBdUIsOENBQThDLG9DQUFvQyxvQ0FBb0MscUNBQXFDLHNEQUFzRCxxQkFBcUIsOERBQThELGtEQUFrRCx1REFBdUQsdURBQXVELHFDQUFxQyxzREFBc0QscUJBQXFCLDhEQUE4RCxrREFBa0QsdURBQXVELHVEQUF1RCwyREFBMkQseURBQXlELHlEQUF5RCx5REFBeUQseURBQXlELHlEQUF5RCx5REFBeUQseURBQXlELHdIQUF3SCwwQkFBMEIsMEJBQTBCLDBCQUEwQiwwQkFBMEIsc0hBQXNILDBCQUEwQiwwQkFBMEIsMEJBQTBCLDBCQUEwQixnQ0FBZ0MsbURBQW1ELHlEQUF5RCxtREFBbUQsbURBQW1ELHlEQUF5RCxtREFBbUQsOEJBQThCLDJDQUEyQywwQ0FBMEMsK0hBQStILCtEQUErRCxpRkFBaUYsdUJBQXVCLEdBQUcsaUVBQWlFLG1FQUFtRSxHQUFHLCtDQUErQyxpQ0FBaUMsR0FBRyw4REFBOEQsbUNBQW1DLGtFQUFrRSw4RUFBOEUsd0NBQXdDLHVDQUF1QyxvQ0FBb0MscUNBQXFDLG9DQUFvQyxpQ0FBaUMsZ0RBQWdELDRDQUE0QyxnQ0FBZ0MseUdBQXlHLG1DQUFtQyw0REFBNEQsOEJBQThCLDhIQUE4SCwwQkFBMEIsbU1BQW1NLHlJQUF5SSw4Q0FBOEMsZ0RBQWdELHNJQUFzSSx3R0FBd0cseUdBQXlHLDJHQUEyRyxxR0FBcUcsZ0dBQWdHLG9IQUFvSCxvSEFBb0gsb0JBQW9CLEdBQUcsb0RBQW9ELG1EQUFtRCxHQUFHLENBQUMsRTs7Ozs7Ozs7OztBQ0F0eFA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QixvQkFBb0I7QUFDcEIsMEJBQTBCOztBQUUxQjtBQUNBO0FBQ0E7QUFDQSxXQUFXLG1CQUFPLENBQUMseURBQVk7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUJBQU8sQ0FBQyw2REFBYzs7QUFFbkM7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQkFBTyxDQUFDLDZEQUFjOztBQUVuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsbUJBQU8sQ0FBQyxtRUFBaUI7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxtQkFBTyxDQUFDLCtEQUFlOztBQUVyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQkFBTyxDQUFDLDZEQUFjOztBQUVuQztBQUNBO0FBQ0EsU0FBUyxtQkFBTyxDQUFDLDZEQUFjOztBQUUvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQzNEQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw0REFBNEQ7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFlBQVk7QUFDOUI7QUFDQSxrQkFBa0IsWUFBWTtBQUM5QjtBQUNBLGtCQUFrQixZQUFZO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsc0NBQXNDO0FBQ2pFO0FBQ0EscUVBQXFFO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLG1CQUFtQixFQUFFO0FBQ2xEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0EsOENBQThDO0FBQzlDOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxDQUFDLFVBQVUsd0JBQU0sSUFBSSx3QkFBVTtBQUMvQixFQUFFLG1DQUFPLFlBQVksYUFBYSxFQUFFO0FBQUEsa0dBQUM7QUFDckMsQ0FBQztBQUNEO0FBQ0E7O0FBRUEsQ0FBQztBQUNEO0FBQ0EsRUFBRSxLQUEyQjtBQUM3QixFQUFFLHdCQUF1QztBQUN6Qzs7Ozs7Ozs7Ozs7Ozs7QUMvR0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIseUJBQXlCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qix3Q0FBd0M7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsbUJBQW1CLEVBQUU7QUFDbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLFVBQVUsd0JBQU0sSUFBSSx3QkFBVTtBQUMvQixFQUFFLG1DQUFPLFlBQVksYUFBYSxFQUFFO0FBQUEsa0dBQUM7QUFDckMsQ0FBQztBQUNEO0FBQ0E7O0FBRUEsQ0FBQztBQUNEO0FBQ0EsRUFBRSxLQUEyQjtBQUM3QixFQUFFLHdCQUF1QztBQUN6Qzs7Ozs7Ozs7Ozs7Ozs7QUNwR0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQix5QkFBeUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHdDQUF3QztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixtQkFBbUIsRUFBRTtBQUNsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsVUFBVSx3QkFBTSxJQUFJLHdCQUFVO0FBQy9CLEVBQUUsbUNBQU8sWUFBWSxhQUFhLEVBQUU7QUFBQSxrR0FBQztBQUNyQyxDQUFDO0FBQ0Q7QUFDQTs7QUFFQSxDQUFDO0FBQ0Q7QUFDQSxFQUFFLEtBQTJCO0FBQzdCLEVBQUUsd0JBQXVDO0FBQ3pDOzs7Ozs7Ozs7Ozs7OztBQzlFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2Qiw4Q0FBOEM7QUFDOUMsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFdBQVc7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDLG9DQUFvQztBQUNwQyxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixPQUFPO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHdDQUF3QztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixtQkFBbUIsRUFBRTtBQUNsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsVUFBVSx3QkFBTSxJQUFJLHdCQUFVO0FBQy9CLEVBQUUsbUNBQU8sWUFBWSxhQUFhLEVBQUU7QUFBQSxrR0FBQztBQUNyQyxDQUFDO0FBQ0Q7QUFDQTs7QUFFQSxDQUFDO0FBQ0Q7QUFDQSxFQUFFLEtBQTJCO0FBQzdCLEVBQUUsd0JBQXVDO0FBQ3pDOzs7Ozs7Ozs7Ozs7QUNqSkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsZ0JBQWdCO0FBQzdCLHVCQUF1QjtBQUN2Qix1QkFBdUI7QUFDdkIsdUJBQXVCO0FBQ3ZCLHVCQUF1QixtQkFBbUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxxQkFBcUI7QUFDcEMsOEJBQThCOztBQUU5QjtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qix3Q0FBd0M7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsbUJBQW1CLEVBQUU7QUFDbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLFVBQVUsd0JBQU0sSUFBSSx3QkFBVTtBQUMvQixFQUFFLG1DQUFPLFlBQVksYUFBYSxFQUFFO0FBQUEsa0dBQUM7QUFDckMsQ0FBQztBQUNEO0FBQ0E7O0FBRUEsQ0FBQztBQUNEO0FBQ0EsRUFBRSxLQUEyQjtBQUM3QixFQUFFLHdCQUF1QztBQUN6Qzs7Ozs7Ozs7Ozs7OztBQy9GQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGFBQWEsYUFBYTtBQUMxQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLHlCQUF5QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHdDQUF3QztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixtQkFBbUIsRUFBRTtBQUNsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsVUFBVSx3QkFBTSxJQUFJLHdCQUFVO0FBQy9CLEVBQUUsbUNBQU8sWUFBWSxhQUFhLEVBQUU7QUFBQSxrR0FBQztBQUNyQyxDQUFDO0FBQ0Q7QUFDQTs7QUFFQSxDQUFDO0FBQ0Q7QUFDQSxFQUFFLEtBQTJCO0FBQzdCLEVBQUUsd0JBQXVDO0FBQ3pDOzs7Ozs7Ozs7Ozs7O0FDbkZBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsZ0JBQWdCLGlCQUFpQjs7QUFFbEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLDhCQUE4QjtBQUM5QiwwQkFBMEI7QUFDMUIsaUJBQWlCO0FBQ2pCLG9CQUFvQjtBQUNwQjtBQUNBLDJCQUEyQjtBQUMzQixhQUFhO0FBQ2IsYUFBYTtBQUNiLGVBQWU7QUFDZjtBQUNBLHVCQUF1QjtBQUN2Qjs7QUFFQSwyQkFBMkIsc0JBQXNCO0FBQ2pELDJCQUEyQixnQ0FBZ0M7QUFDM0Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG1CQUFtQjtBQUMzQztBQUNBLG1DQUFtQyxxQkFBcUIsRUFBRTtBQUMxRDs7QUFFQTtBQUNBO0FBQ0EsMkJBQTJCLHNCQUFzQixhQUFhOztBQUU5RDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixrQkFBa0I7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxXQUFXO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsNENBQTRDLEVBQUU7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLEtBQTJCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixtQkFBTyxDQUFDLHFCQUFRO0FBQ2pDLEdBQUc7QUFDSCxDQUFDLFVBQVUsSUFBMkM7QUFDdEQsRUFBRSxtQ0FBTyxZQUFZLG1CQUFtQixFQUFFO0FBQUEsa0dBQUM7QUFDM0MsQ0FBQyxNQUFNLEVBR047OztBQUdEO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzVQQSxJQUFNLFlBQVksR0FBRyxDQUFDLENBQUM7QUFFdkIsSUFBTSxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDOUosSUFBTSxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFaEksSUFBTSxnQkFBZ0IsR0FBRztJQUN2QixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM1QyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM1QyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztDQUM3QyxDQUFDO0FBRUYsSUFBTSxnQkFBZ0IsR0FBRztJQUN2QixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoRixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoRixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztDQUNqRixDQUFDO0FBRUYsSUFBTSxnQkFBZ0IsR0FBRztJQUN2QixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbEMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztDQUNuQyxDQUFDO0FBRUYsSUFBTSxlQUFlLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVB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LENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVO2dCQUNyRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07YUFDcEI7a0NBQ0ksSUFBSSxLQUFFLFNBQVMsYUFBRSxLQUFLLFNBQUUsTUFBTSxVQUFFLGNBQWM7U0FDcEQsQ0FBQztJQUNKLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7OztBQ2hJRCxlOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3hCQTtXQUNBO1dBQ0EsRTs7Ozs7V0NGQSw4Qjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEU7Ozs7VUNKQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJjb250b3VyaW5nLndvcmtlci53b3JrZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ29tbW9uIHV0aWxpdGllc1xyXG4gKiBAbW9kdWxlIGdsTWF0cml4XHJcbiAqL1xuLy8gQ29uZmlndXJhdGlvbiBDb25zdGFudHNcbmV4cG9ydCB2YXIgRVBTSUxPTiA9IDAuMDAwMDAxO1xuZXhwb3J0IHZhciBBUlJBWV9UWVBFID0gdHlwZW9mIEZsb2F0MzJBcnJheSAhPT0gJ3VuZGVmaW5lZCcgPyBGbG9hdDMyQXJyYXkgOiBBcnJheTtcbmV4cG9ydCB2YXIgUkFORE9NID0gTWF0aC5yYW5kb207XG4vKipcclxuICogU2V0cyB0aGUgdHlwZSBvZiBhcnJheSB1c2VkIHdoZW4gY3JlYXRpbmcgbmV3IHZlY3RvcnMgYW5kIG1hdHJpY2VzXHJcbiAqXHJcbiAqIEBwYXJhbSB7RmxvYXQzMkFycmF5Q29uc3RydWN0b3IgfCBBcnJheUNvbnN0cnVjdG9yfSB0eXBlIEFycmF5IHR5cGUsIHN1Y2ggYXMgRmxvYXQzMkFycmF5IG9yIEFycmF5XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0TWF0cml4QXJyYXlUeXBlKHR5cGUpIHtcbiAgQVJSQVlfVFlQRSA9IHR5cGU7XG59XG52YXIgZGVncmVlID0gTWF0aC5QSSAvIDE4MDtcbi8qKlxyXG4gKiBDb252ZXJ0IERlZ3JlZSBUbyBSYWRpYW5cclxuICpcclxuICogQHBhcmFtIHtOdW1iZXJ9IGEgQW5nbGUgaW4gRGVncmVlc1xyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHRvUmFkaWFuKGEpIHtcbiAgcmV0dXJuIGEgKiBkZWdyZWU7XG59XG4vKipcclxuICogVGVzdHMgd2hldGhlciBvciBub3QgdGhlIGFyZ3VtZW50cyBoYXZlIGFwcHJveGltYXRlbHkgdGhlIHNhbWUgdmFsdWUsIHdpdGhpbiBhbiBhYnNvbHV0ZVxyXG4gKiBvciByZWxhdGl2ZSB0b2xlcmFuY2Ugb2YgZ2xNYXRyaXguRVBTSUxPTiAoYW4gYWJzb2x1dGUgdG9sZXJhbmNlIGlzIHVzZWQgZm9yIHZhbHVlcyBsZXNzXHJcbiAqIHRoYW4gb3IgZXF1YWwgdG8gMS4wLCBhbmQgYSByZWxhdGl2ZSB0b2xlcmFuY2UgaXMgdXNlZCBmb3IgbGFyZ2VyIHZhbHVlcylcclxuICpcclxuICogQHBhcmFtIHtOdW1iZXJ9IGEgVGhlIGZpcnN0IG51bWJlciB0byB0ZXN0LlxyXG4gKiBAcGFyYW0ge051bWJlcn0gYiBUaGUgc2Vjb25kIG51bWJlciB0byB0ZXN0LlxyXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gVHJ1ZSBpZiB0aGUgbnVtYmVycyBhcmUgYXBwcm94aW1hdGVseSBlcXVhbCwgZmFsc2Ugb3RoZXJ3aXNlLlxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGVxdWFscyhhLCBiKSB7XG4gIHJldHVybiBNYXRoLmFicyhhIC0gYikgPD0gRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYSksIE1hdGguYWJzKGIpKTtcbn1cbmlmICghTWF0aC5oeXBvdCkgTWF0aC5oeXBvdCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHkgPSAwLFxuICAgICAgaSA9IGFyZ3VtZW50cy5sZW5ndGg7XG5cbiAgd2hpbGUgKGktLSkge1xuICAgIHkgKz0gYXJndW1lbnRzW2ldICogYXJndW1lbnRzW2ldO1xuICB9XG5cbiAgcmV0dXJuIE1hdGguc3FydCh5KTtcbn07IiwiaW1wb3J0ICogYXMgZ2xNYXRyaXggZnJvbSBcIi4vY29tbW9uLmpzXCI7XG4vKipcclxuICogMyBEaW1lbnNpb25hbCBWZWN0b3JcclxuICogQG1vZHVsZSB2ZWMzXHJcbiAqL1xuXG4vKipcclxuICogQ3JlYXRlcyBhIG5ldywgZW1wdHkgdmVjM1xyXG4gKlxyXG4gKiBAcmV0dXJucyB7dmVjM30gYSBuZXcgM0QgdmVjdG9yXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlKCkge1xuICB2YXIgb3V0ID0gbmV3IGdsTWF0cml4LkFSUkFZX1RZUEUoMyk7XG5cbiAgaWYgKGdsTWF0cml4LkFSUkFZX1RZUEUgIT0gRmxvYXQzMkFycmF5KSB7XG4gICAgb3V0WzBdID0gMDtcbiAgICBvdXRbMV0gPSAwO1xuICAgIG91dFsyXSA9IDA7XG4gIH1cblxuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENyZWF0ZXMgYSBuZXcgdmVjMyBpbml0aWFsaXplZCB3aXRoIHZhbHVlcyBmcm9tIGFuIGV4aXN0aW5nIHZlY3RvclxyXG4gKlxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB2ZWN0b3IgdG8gY2xvbmVcclxuICogQHJldHVybnMge3ZlYzN9IGEgbmV3IDNEIHZlY3RvclxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lKGEpIHtcbiAgdmFyIG91dCA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDMpO1xuICBvdXRbMF0gPSBhWzBdO1xuICBvdXRbMV0gPSBhWzFdO1xuICBvdXRbMl0gPSBhWzJdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENhbGN1bGF0ZXMgdGhlIGxlbmd0aCBvZiBhIHZlYzNcclxuICpcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdmVjdG9yIHRvIGNhbGN1bGF0ZSBsZW5ndGggb2ZcclxuICogQHJldHVybnMge051bWJlcn0gbGVuZ3RoIG9mIGFcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBsZW5ndGgoYSkge1xuICB2YXIgeCA9IGFbMF07XG4gIHZhciB5ID0gYVsxXTtcbiAgdmFyIHogPSBhWzJdO1xuICByZXR1cm4gTWF0aC5oeXBvdCh4LCB5LCB6KTtcbn1cbi8qKlxyXG4gKiBDcmVhdGVzIGEgbmV3IHZlYzMgaW5pdGlhbGl6ZWQgd2l0aCB0aGUgZ2l2ZW4gdmFsdWVzXHJcbiAqXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB4IFggY29tcG9uZW50XHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB5IFkgY29tcG9uZW50XHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB6IFogY29tcG9uZW50XHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBhIG5ldyAzRCB2ZWN0b3JcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tVmFsdWVzKHgsIHksIHopIHtcbiAgdmFyIG91dCA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDMpO1xuICBvdXRbMF0gPSB4O1xuICBvdXRbMV0gPSB5O1xuICBvdXRbMl0gPSB6O1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENvcHkgdGhlIHZhbHVlcyBmcm9tIG9uZSB2ZWMzIHRvIGFub3RoZXJcclxuICpcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdGhlIHNvdXJjZSB2ZWN0b3JcclxuICogQHJldHVybnMge3ZlYzN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNvcHkob3V0LCBhKSB7XG4gIG91dFswXSA9IGFbMF07XG4gIG91dFsxXSA9IGFbMV07XG4gIG91dFsyXSA9IGFbMl07XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogU2V0IHRoZSBjb21wb25lbnRzIG9mIGEgdmVjMyB0byB0aGUgZ2l2ZW4gdmFsdWVzXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB4IFggY29tcG9uZW50XHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB5IFkgY29tcG9uZW50XHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB6IFogY29tcG9uZW50XHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzZXQob3V0LCB4LCB5LCB6KSB7XG4gIG91dFswXSA9IHg7XG4gIG91dFsxXSA9IHk7XG4gIG91dFsyXSA9IHo7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQWRkcyB0d28gdmVjMydzXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkKG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdICsgYlswXTtcbiAgb3V0WzFdID0gYVsxXSArIGJbMV07XG4gIG91dFsyXSA9IGFbMl0gKyBiWzJdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFN1YnRyYWN0cyB2ZWN0b3IgYiBmcm9tIHZlY3RvciBhXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc3VidHJhY3Qob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gLSBiWzBdO1xuICBvdXRbMV0gPSBhWzFdIC0gYlsxXTtcbiAgb3V0WzJdID0gYVsyXSAtIGJbMl07XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogTXVsdGlwbGllcyB0d28gdmVjMydzXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHkob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gKiBiWzBdO1xuICBvdXRbMV0gPSBhWzFdICogYlsxXTtcbiAgb3V0WzJdID0gYVsyXSAqIGJbMl07XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogRGl2aWRlcyB0d28gdmVjMydzXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZGl2aWRlKG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdIC8gYlswXTtcbiAgb3V0WzFdID0gYVsxXSAvIGJbMV07XG4gIG91dFsyXSA9IGFbMl0gLyBiWzJdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIE1hdGguY2VpbCB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzNcclxuICpcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdmVjdG9yIHRvIGNlaWxcclxuICogQHJldHVybnMge3ZlYzN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNlaWwob3V0LCBhKSB7XG4gIG91dFswXSA9IE1hdGguY2VpbChhWzBdKTtcbiAgb3V0WzFdID0gTWF0aC5jZWlsKGFbMV0pO1xuICBvdXRbMl0gPSBNYXRoLmNlaWwoYVsyXSk7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogTWF0aC5mbG9vciB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzNcclxuICpcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdmVjdG9yIHRvIGZsb29yXHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmbG9vcihvdXQsIGEpIHtcbiAgb3V0WzBdID0gTWF0aC5mbG9vcihhWzBdKTtcbiAgb3V0WzFdID0gTWF0aC5mbG9vcihhWzFdKTtcbiAgb3V0WzJdID0gTWF0aC5mbG9vcihhWzJdKTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBtaW5pbXVtIG9mIHR3byB2ZWMzJ3NcclxuICpcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBtaW4ob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IE1hdGgubWluKGFbMF0sIGJbMF0pO1xuICBvdXRbMV0gPSBNYXRoLm1pbihhWzFdLCBiWzFdKTtcbiAgb3V0WzJdID0gTWF0aC5taW4oYVsyXSwgYlsyXSk7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogUmV0dXJucyB0aGUgbWF4aW11bSBvZiB0d28gdmVjMydzXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbWF4KG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBNYXRoLm1heChhWzBdLCBiWzBdKTtcbiAgb3V0WzFdID0gTWF0aC5tYXgoYVsxXSwgYlsxXSk7XG4gIG91dFsyXSA9IE1hdGgubWF4KGFbMl0sIGJbMl0pO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIE1hdGgucm91bmQgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWMzXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHZlY3RvciB0byByb3VuZFxyXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcm91bmQob3V0LCBhKSB7XG4gIG91dFswXSA9IE1hdGgucm91bmQoYVswXSk7XG4gIG91dFsxXSA9IE1hdGgucm91bmQoYVsxXSk7XG4gIG91dFsyXSA9IE1hdGgucm91bmQoYVsyXSk7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogU2NhbGVzIGEgdmVjMyBieSBhIHNjYWxhciBudW1iZXJcclxuICpcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdGhlIHZlY3RvciB0byBzY2FsZVxyXG4gKiBAcGFyYW0ge051bWJlcn0gYiBhbW91bnQgdG8gc2NhbGUgdGhlIHZlY3RvciBieVxyXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc2NhbGUob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gKiBiO1xuICBvdXRbMV0gPSBhWzFdICogYjtcbiAgb3V0WzJdID0gYVsyXSAqIGI7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQWRkcyB0d28gdmVjMydzIGFmdGVyIHNjYWxpbmcgdGhlIHNlY29uZCBvcGVyYW5kIGJ5IGEgc2NhbGFyIHZhbHVlXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge051bWJlcn0gc2NhbGUgdGhlIGFtb3VudCB0byBzY2FsZSBiIGJ5IGJlZm9yZSBhZGRpbmdcclxuICogQHJldHVybnMge3ZlYzN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlQW5kQWRkKG91dCwgYSwgYiwgc2NhbGUpIHtcbiAgb3V0WzBdID0gYVswXSArIGJbMF0gKiBzY2FsZTtcbiAgb3V0WzFdID0gYVsxXSArIGJbMV0gKiBzY2FsZTtcbiAgb3V0WzJdID0gYVsyXSArIGJbMl0gKiBzY2FsZTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDYWxjdWxhdGVzIHRoZSBldWNsaWRpYW4gZGlzdGFuY2UgYmV0d2VlbiB0d28gdmVjMydzXHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBkaXN0YW5jZSBiZXR3ZWVuIGEgYW5kIGJcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBkaXN0YW5jZShhLCBiKSB7XG4gIHZhciB4ID0gYlswXSAtIGFbMF07XG4gIHZhciB5ID0gYlsxXSAtIGFbMV07XG4gIHZhciB6ID0gYlsyXSAtIGFbMl07XG4gIHJldHVybiBNYXRoLmh5cG90KHgsIHksIHopO1xufVxuLyoqXHJcbiAqIENhbGN1bGF0ZXMgdGhlIHNxdWFyZWQgZXVjbGlkaWFuIGRpc3RhbmNlIGJldHdlZW4gdHdvIHZlYzMnc1xyXG4gKlxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHJldHVybnMge051bWJlcn0gc3F1YXJlZCBkaXN0YW5jZSBiZXR3ZWVuIGEgYW5kIGJcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzcXVhcmVkRGlzdGFuY2UoYSwgYikge1xuICB2YXIgeCA9IGJbMF0gLSBhWzBdO1xuICB2YXIgeSA9IGJbMV0gLSBhWzFdO1xuICB2YXIgeiA9IGJbMl0gLSBhWzJdO1xuICByZXR1cm4geCAqIHggKyB5ICogeSArIHogKiB6O1xufVxuLyoqXHJcbiAqIENhbGN1bGF0ZXMgdGhlIHNxdWFyZWQgbGVuZ3RoIG9mIGEgdmVjM1xyXG4gKlxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB2ZWN0b3IgdG8gY2FsY3VsYXRlIHNxdWFyZWQgbGVuZ3RoIG9mXHJcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHNxdWFyZWQgbGVuZ3RoIG9mIGFcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzcXVhcmVkTGVuZ3RoKGEpIHtcbiAgdmFyIHggPSBhWzBdO1xuICB2YXIgeSA9IGFbMV07XG4gIHZhciB6ID0gYVsyXTtcbiAgcmV0dXJuIHggKiB4ICsgeSAqIHkgKyB6ICogejtcbn1cbi8qKlxyXG4gKiBOZWdhdGVzIHRoZSBjb21wb25lbnRzIG9mIGEgdmVjM1xyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB2ZWN0b3IgdG8gbmVnYXRlXHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBuZWdhdGUob3V0LCBhKSB7XG4gIG91dFswXSA9IC1hWzBdO1xuICBvdXRbMV0gPSAtYVsxXTtcbiAgb3V0WzJdID0gLWFbMl07XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogUmV0dXJucyB0aGUgaW52ZXJzZSBvZiB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzNcclxuICpcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdmVjdG9yIHRvIGludmVydFxyXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gaW52ZXJzZShvdXQsIGEpIHtcbiAgb3V0WzBdID0gMS4wIC8gYVswXTtcbiAgb3V0WzFdID0gMS4wIC8gYVsxXTtcbiAgb3V0WzJdID0gMS4wIC8gYVsyXTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBOb3JtYWxpemUgYSB2ZWMzXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHZlY3RvciB0byBub3JtYWxpemVcclxuICogQHJldHVybnMge3ZlYzN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZShvdXQsIGEpIHtcbiAgdmFyIHggPSBhWzBdO1xuICB2YXIgeSA9IGFbMV07XG4gIHZhciB6ID0gYVsyXTtcbiAgdmFyIGxlbiA9IHggKiB4ICsgeSAqIHkgKyB6ICogejtcblxuICBpZiAobGVuID4gMCkge1xuICAgIC8vVE9ETzogZXZhbHVhdGUgdXNlIG9mIGdsbV9pbnZzcXJ0IGhlcmU/XG4gICAgbGVuID0gMSAvIE1hdGguc3FydChsZW4pO1xuICB9XG5cbiAgb3V0WzBdID0gYVswXSAqIGxlbjtcbiAgb3V0WzFdID0gYVsxXSAqIGxlbjtcbiAgb3V0WzJdID0gYVsyXSAqIGxlbjtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDYWxjdWxhdGVzIHRoZSBkb3QgcHJvZHVjdCBvZiB0d28gdmVjMydzXHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBkb3QgcHJvZHVjdCBvZiBhIGFuZCBiXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZG90KGEsIGIpIHtcbiAgcmV0dXJuIGFbMF0gKiBiWzBdICsgYVsxXSAqIGJbMV0gKyBhWzJdICogYlsyXTtcbn1cbi8qKlxyXG4gKiBDb21wdXRlcyB0aGUgY3Jvc3MgcHJvZHVjdCBvZiB0d28gdmVjMydzXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY3Jvc3Mob3V0LCBhLCBiKSB7XG4gIHZhciBheCA9IGFbMF0sXG4gICAgICBheSA9IGFbMV0sXG4gICAgICBheiA9IGFbMl07XG4gIHZhciBieCA9IGJbMF0sXG4gICAgICBieSA9IGJbMV0sXG4gICAgICBieiA9IGJbMl07XG4gIG91dFswXSA9IGF5ICogYnogLSBheiAqIGJ5O1xuICBvdXRbMV0gPSBheiAqIGJ4IC0gYXggKiBiejtcbiAgb3V0WzJdID0gYXggKiBieSAtIGF5ICogYng7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogUGVyZm9ybXMgYSBsaW5lYXIgaW50ZXJwb2xhdGlvbiBiZXR3ZWVuIHR3byB2ZWMzJ3NcclxuICpcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB0IGludGVycG9sYXRpb24gYW1vdW50LCBpbiB0aGUgcmFuZ2UgWzAtMV0sIGJldHdlZW4gdGhlIHR3byBpbnB1dHNcclxuICogQHJldHVybnMge3ZlYzN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGxlcnAob3V0LCBhLCBiLCB0KSB7XG4gIHZhciBheCA9IGFbMF07XG4gIHZhciBheSA9IGFbMV07XG4gIHZhciBheiA9IGFbMl07XG4gIG91dFswXSA9IGF4ICsgdCAqIChiWzBdIC0gYXgpO1xuICBvdXRbMV0gPSBheSArIHQgKiAoYlsxXSAtIGF5KTtcbiAgb3V0WzJdID0gYXogKyB0ICogKGJbMl0gLSBheik7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogUGVyZm9ybXMgYSBoZXJtaXRlIGludGVycG9sYXRpb24gd2l0aCB0d28gY29udHJvbCBwb2ludHNcclxuICpcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBjIHRoZSB0aGlyZCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBkIHRoZSBmb3VydGggb3BlcmFuZFxyXG4gKiBAcGFyYW0ge051bWJlcn0gdCBpbnRlcnBvbGF0aW9uIGFtb3VudCwgaW4gdGhlIHJhbmdlIFswLTFdLCBiZXR3ZWVuIHRoZSB0d28gaW5wdXRzXHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBoZXJtaXRlKG91dCwgYSwgYiwgYywgZCwgdCkge1xuICB2YXIgZmFjdG9yVGltZXMyID0gdCAqIHQ7XG4gIHZhciBmYWN0b3IxID0gZmFjdG9yVGltZXMyICogKDIgKiB0IC0gMykgKyAxO1xuICB2YXIgZmFjdG9yMiA9IGZhY3RvclRpbWVzMiAqICh0IC0gMikgKyB0O1xuICB2YXIgZmFjdG9yMyA9IGZhY3RvclRpbWVzMiAqICh0IC0gMSk7XG4gIHZhciBmYWN0b3I0ID0gZmFjdG9yVGltZXMyICogKDMgLSAyICogdCk7XG4gIG91dFswXSA9IGFbMF0gKiBmYWN0b3IxICsgYlswXSAqIGZhY3RvcjIgKyBjWzBdICogZmFjdG9yMyArIGRbMF0gKiBmYWN0b3I0O1xuICBvdXRbMV0gPSBhWzFdICogZmFjdG9yMSArIGJbMV0gKiBmYWN0b3IyICsgY1sxXSAqIGZhY3RvcjMgKyBkWzFdICogZmFjdG9yNDtcbiAgb3V0WzJdID0gYVsyXSAqIGZhY3RvcjEgKyBiWzJdICogZmFjdG9yMiArIGNbMl0gKiBmYWN0b3IzICsgZFsyXSAqIGZhY3RvcjQ7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogUGVyZm9ybXMgYSBiZXppZXIgaW50ZXJwb2xhdGlvbiB3aXRoIHR3byBjb250cm9sIHBvaW50c1xyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGMgdGhlIHRoaXJkIG9wZXJhbmRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGQgdGhlIGZvdXJ0aCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB0IGludGVycG9sYXRpb24gYW1vdW50LCBpbiB0aGUgcmFuZ2UgWzAtMV0sIGJldHdlZW4gdGhlIHR3byBpbnB1dHNcclxuICogQHJldHVybnMge3ZlYzN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGJlemllcihvdXQsIGEsIGIsIGMsIGQsIHQpIHtcbiAgdmFyIGludmVyc2VGYWN0b3IgPSAxIC0gdDtcbiAgdmFyIGludmVyc2VGYWN0b3JUaW1lc1R3byA9IGludmVyc2VGYWN0b3IgKiBpbnZlcnNlRmFjdG9yO1xuICB2YXIgZmFjdG9yVGltZXMyID0gdCAqIHQ7XG4gIHZhciBmYWN0b3IxID0gaW52ZXJzZUZhY3RvclRpbWVzVHdvICogaW52ZXJzZUZhY3RvcjtcbiAgdmFyIGZhY3RvcjIgPSAzICogdCAqIGludmVyc2VGYWN0b3JUaW1lc1R3bztcbiAgdmFyIGZhY3RvcjMgPSAzICogZmFjdG9yVGltZXMyICogaW52ZXJzZUZhY3RvcjtcbiAgdmFyIGZhY3RvcjQgPSBmYWN0b3JUaW1lczIgKiB0O1xuICBvdXRbMF0gPSBhWzBdICogZmFjdG9yMSArIGJbMF0gKiBmYWN0b3IyICsgY1swXSAqIGZhY3RvcjMgKyBkWzBdICogZmFjdG9yNDtcbiAgb3V0WzFdID0gYVsxXSAqIGZhY3RvcjEgKyBiWzFdICogZmFjdG9yMiArIGNbMV0gKiBmYWN0b3IzICsgZFsxXSAqIGZhY3RvcjQ7XG4gIG91dFsyXSA9IGFbMl0gKiBmYWN0b3IxICsgYlsyXSAqIGZhY3RvcjIgKyBjWzJdICogZmFjdG9yMyArIGRbMl0gKiBmYWN0b3I0O1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIEdlbmVyYXRlcyBhIHJhbmRvbSB2ZWN0b3Igd2l0aCB0aGUgZ2l2ZW4gc2NhbGVcclxuICpcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtOdW1iZXJ9IFtzY2FsZV0gTGVuZ3RoIG9mIHRoZSByZXN1bHRpbmcgdmVjdG9yLiBJZiBvbW1pdHRlZCwgYSB1bml0IHZlY3RvciB3aWxsIGJlIHJldHVybmVkXHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByYW5kb20ob3V0LCBzY2FsZSkge1xuICBzY2FsZSA9IHNjYWxlIHx8IDEuMDtcbiAgdmFyIHIgPSBnbE1hdHJpeC5SQU5ET00oKSAqIDIuMCAqIE1hdGguUEk7XG4gIHZhciB6ID0gZ2xNYXRyaXguUkFORE9NKCkgKiAyLjAgLSAxLjA7XG4gIHZhciB6U2NhbGUgPSBNYXRoLnNxcnQoMS4wIC0geiAqIHopICogc2NhbGU7XG4gIG91dFswXSA9IE1hdGguY29zKHIpICogelNjYWxlO1xuICBvdXRbMV0gPSBNYXRoLnNpbihyKSAqIHpTY2FsZTtcbiAgb3V0WzJdID0geiAqIHNjYWxlO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFRyYW5zZm9ybXMgdGhlIHZlYzMgd2l0aCBhIG1hdDQuXHJcbiAqIDR0aCB2ZWN0b3IgY29tcG9uZW50IGlzIGltcGxpY2l0bHkgJzEnXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHRoZSB2ZWN0b3IgdG8gdHJhbnNmb3JtXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBtIG1hdHJpeCB0byB0cmFuc2Zvcm0gd2l0aFxyXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtTWF0NChvdXQsIGEsIG0pIHtcbiAgdmFyIHggPSBhWzBdLFxuICAgICAgeSA9IGFbMV0sXG4gICAgICB6ID0gYVsyXTtcbiAgdmFyIHcgPSBtWzNdICogeCArIG1bN10gKiB5ICsgbVsxMV0gKiB6ICsgbVsxNV07XG4gIHcgPSB3IHx8IDEuMDtcbiAgb3V0WzBdID0gKG1bMF0gKiB4ICsgbVs0XSAqIHkgKyBtWzhdICogeiArIG1bMTJdKSAvIHc7XG4gIG91dFsxXSA9IChtWzFdICogeCArIG1bNV0gKiB5ICsgbVs5XSAqIHogKyBtWzEzXSkgLyB3O1xuICBvdXRbMl0gPSAobVsyXSAqIHggKyBtWzZdICogeSArIG1bMTBdICogeiArIG1bMTRdKSAvIHc7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogVHJhbnNmb3JtcyB0aGUgdmVjMyB3aXRoIGEgbWF0My5cclxuICpcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdGhlIHZlY3RvciB0byB0cmFuc2Zvcm1cclxuICogQHBhcmFtIHtSZWFkb25seU1hdDN9IG0gdGhlIDN4MyBtYXRyaXggdG8gdHJhbnNmb3JtIHdpdGhcclxuICogQHJldHVybnMge3ZlYzN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybU1hdDMob3V0LCBhLCBtKSB7XG4gIHZhciB4ID0gYVswXSxcbiAgICAgIHkgPSBhWzFdLFxuICAgICAgeiA9IGFbMl07XG4gIG91dFswXSA9IHggKiBtWzBdICsgeSAqIG1bM10gKyB6ICogbVs2XTtcbiAgb3V0WzFdID0geCAqIG1bMV0gKyB5ICogbVs0XSArIHogKiBtWzddO1xuICBvdXRbMl0gPSB4ICogbVsyXSArIHkgKiBtWzVdICsgeiAqIG1bOF07XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogVHJhbnNmb3JtcyB0aGUgdmVjMyB3aXRoIGEgcXVhdFxyXG4gKiBDYW4gYWxzbyBiZSB1c2VkIGZvciBkdWFsIHF1YXRlcm5pb25zLiAoTXVsdGlwbHkgaXQgd2l0aCB0aGUgcmVhbCBwYXJ0KVxyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB0aGUgdmVjdG9yIHRvIHRyYW5zZm9ybVxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gcSBxdWF0ZXJuaW9uIHRvIHRyYW5zZm9ybSB3aXRoXHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1RdWF0KG91dCwgYSwgcSkge1xuICAvLyBiZW5jaG1hcmtzOiBodHRwczovL2pzcGVyZi5jb20vcXVhdGVybmlvbi10cmFuc2Zvcm0tdmVjMy1pbXBsZW1lbnRhdGlvbnMtZml4ZWRcbiAgdmFyIHF4ID0gcVswXSxcbiAgICAgIHF5ID0gcVsxXSxcbiAgICAgIHF6ID0gcVsyXSxcbiAgICAgIHF3ID0gcVszXTtcbiAgdmFyIHggPSBhWzBdLFxuICAgICAgeSA9IGFbMV0sXG4gICAgICB6ID0gYVsyXTsgLy8gdmFyIHF2ZWMgPSBbcXgsIHF5LCBxel07XG4gIC8vIHZhciB1diA9IHZlYzMuY3Jvc3MoW10sIHF2ZWMsIGEpO1xuXG4gIHZhciB1dnggPSBxeSAqIHogLSBxeiAqIHksXG4gICAgICB1dnkgPSBxeiAqIHggLSBxeCAqIHosXG4gICAgICB1dnogPSBxeCAqIHkgLSBxeSAqIHg7IC8vIHZhciB1dXYgPSB2ZWMzLmNyb3NzKFtdLCBxdmVjLCB1dik7XG5cbiAgdmFyIHV1dnggPSBxeSAqIHV2eiAtIHF6ICogdXZ5LFxuICAgICAgdXV2eSA9IHF6ICogdXZ4IC0gcXggKiB1dnosXG4gICAgICB1dXZ6ID0gcXggKiB1dnkgLSBxeSAqIHV2eDsgLy8gdmVjMy5zY2FsZSh1diwgdXYsIDIgKiB3KTtcblxuICB2YXIgdzIgPSBxdyAqIDI7XG4gIHV2eCAqPSB3MjtcbiAgdXZ5ICo9IHcyO1xuICB1dnogKj0gdzI7IC8vIHZlYzMuc2NhbGUodXV2LCB1dXYsIDIpO1xuXG4gIHV1dnggKj0gMjtcbiAgdXV2eSAqPSAyO1xuICB1dXZ6ICo9IDI7IC8vIHJldHVybiB2ZWMzLmFkZChvdXQsIGEsIHZlYzMuYWRkKG91dCwgdXYsIHV1dikpO1xuXG4gIG91dFswXSA9IHggKyB1dnggKyB1dXZ4O1xuICBvdXRbMV0gPSB5ICsgdXZ5ICsgdXV2eTtcbiAgb3V0WzJdID0geiArIHV2eiArIHV1dno7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogUm90YXRlIGEgM0QgdmVjdG9yIGFyb3VuZCB0aGUgeC1heGlzXHJcbiAqIEBwYXJhbSB7dmVjM30gb3V0IFRoZSByZWNlaXZpbmcgdmVjM1xyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSBUaGUgdmVjMyBwb2ludCB0byByb3RhdGVcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGIgVGhlIG9yaWdpbiBvZiB0aGUgcm90YXRpb25cclxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCBUaGUgYW5nbGUgb2Ygcm90YXRpb24gaW4gcmFkaWFuc1xyXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlWChvdXQsIGEsIGIsIHJhZCkge1xuICB2YXIgcCA9IFtdLFxuICAgICAgciA9IFtdOyAvL1RyYW5zbGF0ZSBwb2ludCB0byB0aGUgb3JpZ2luXG5cbiAgcFswXSA9IGFbMF0gLSBiWzBdO1xuICBwWzFdID0gYVsxXSAtIGJbMV07XG4gIHBbMl0gPSBhWzJdIC0gYlsyXTsgLy9wZXJmb3JtIHJvdGF0aW9uXG5cbiAgclswXSA9IHBbMF07XG4gIHJbMV0gPSBwWzFdICogTWF0aC5jb3MocmFkKSAtIHBbMl0gKiBNYXRoLnNpbihyYWQpO1xuICByWzJdID0gcFsxXSAqIE1hdGguc2luKHJhZCkgKyBwWzJdICogTWF0aC5jb3MocmFkKTsgLy90cmFuc2xhdGUgdG8gY29ycmVjdCBwb3NpdGlvblxuXG4gIG91dFswXSA9IHJbMF0gKyBiWzBdO1xuICBvdXRbMV0gPSByWzFdICsgYlsxXTtcbiAgb3V0WzJdID0gclsyXSArIGJbMl07XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogUm90YXRlIGEgM0QgdmVjdG9yIGFyb3VuZCB0aGUgeS1heGlzXHJcbiAqIEBwYXJhbSB7dmVjM30gb3V0IFRoZSByZWNlaXZpbmcgdmVjM1xyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSBUaGUgdmVjMyBwb2ludCB0byByb3RhdGVcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGIgVGhlIG9yaWdpbiBvZiB0aGUgcm90YXRpb25cclxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCBUaGUgYW5nbGUgb2Ygcm90YXRpb24gaW4gcmFkaWFuc1xyXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlWShvdXQsIGEsIGIsIHJhZCkge1xuICB2YXIgcCA9IFtdLFxuICAgICAgciA9IFtdOyAvL1RyYW5zbGF0ZSBwb2ludCB0byB0aGUgb3JpZ2luXG5cbiAgcFswXSA9IGFbMF0gLSBiWzBdO1xuICBwWzFdID0gYVsxXSAtIGJbMV07XG4gIHBbMl0gPSBhWzJdIC0gYlsyXTsgLy9wZXJmb3JtIHJvdGF0aW9uXG5cbiAgclswXSA9IHBbMl0gKiBNYXRoLnNpbihyYWQpICsgcFswXSAqIE1hdGguY29zKHJhZCk7XG4gIHJbMV0gPSBwWzFdO1xuICByWzJdID0gcFsyXSAqIE1hdGguY29zKHJhZCkgLSBwWzBdICogTWF0aC5zaW4ocmFkKTsgLy90cmFuc2xhdGUgdG8gY29ycmVjdCBwb3NpdGlvblxuXG4gIG91dFswXSA9IHJbMF0gKyBiWzBdO1xuICBvdXRbMV0gPSByWzFdICsgYlsxXTtcbiAgb3V0WzJdID0gclsyXSArIGJbMl07XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogUm90YXRlIGEgM0QgdmVjdG9yIGFyb3VuZCB0aGUgei1heGlzXHJcbiAqIEBwYXJhbSB7dmVjM30gb3V0IFRoZSByZWNlaXZpbmcgdmVjM1xyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSBUaGUgdmVjMyBwb2ludCB0byByb3RhdGVcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGIgVGhlIG9yaWdpbiBvZiB0aGUgcm90YXRpb25cclxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCBUaGUgYW5nbGUgb2Ygcm90YXRpb24gaW4gcmFkaWFuc1xyXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlWihvdXQsIGEsIGIsIHJhZCkge1xuICB2YXIgcCA9IFtdLFxuICAgICAgciA9IFtdOyAvL1RyYW5zbGF0ZSBwb2ludCB0byB0aGUgb3JpZ2luXG5cbiAgcFswXSA9IGFbMF0gLSBiWzBdO1xuICBwWzFdID0gYVsxXSAtIGJbMV07XG4gIHBbMl0gPSBhWzJdIC0gYlsyXTsgLy9wZXJmb3JtIHJvdGF0aW9uXG5cbiAgclswXSA9IHBbMF0gKiBNYXRoLmNvcyhyYWQpIC0gcFsxXSAqIE1hdGguc2luKHJhZCk7XG4gIHJbMV0gPSBwWzBdICogTWF0aC5zaW4ocmFkKSArIHBbMV0gKiBNYXRoLmNvcyhyYWQpO1xuICByWzJdID0gcFsyXTsgLy90cmFuc2xhdGUgdG8gY29ycmVjdCBwb3NpdGlvblxuXG4gIG91dFswXSA9IHJbMF0gKyBiWzBdO1xuICBvdXRbMV0gPSByWzFdICsgYlsxXTtcbiAgb3V0WzJdID0gclsyXSArIGJbMl07XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogR2V0IHRoZSBhbmdsZSBiZXR3ZWVuIHR3byAzRCB2ZWN0b3JzXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIFRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBiIFRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBUaGUgYW5nbGUgaW4gcmFkaWFuc1xyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGFuZ2xlKGEsIGIpIHtcbiAgdmFyIGF4ID0gYVswXSxcbiAgICAgIGF5ID0gYVsxXSxcbiAgICAgIGF6ID0gYVsyXSxcbiAgICAgIGJ4ID0gYlswXSxcbiAgICAgIGJ5ID0gYlsxXSxcbiAgICAgIGJ6ID0gYlsyXSxcbiAgICAgIG1hZzEgPSBNYXRoLnNxcnQoYXggKiBheCArIGF5ICogYXkgKyBheiAqIGF6KSxcbiAgICAgIG1hZzIgPSBNYXRoLnNxcnQoYnggKiBieCArIGJ5ICogYnkgKyBieiAqIGJ6KSxcbiAgICAgIG1hZyA9IG1hZzEgKiBtYWcyLFxuICAgICAgY29zaW5lID0gbWFnICYmIGRvdChhLCBiKSAvIG1hZztcbiAgcmV0dXJuIE1hdGguYWNvcyhNYXRoLm1pbihNYXRoLm1heChjb3NpbmUsIC0xKSwgMSkpO1xufVxuLyoqXHJcbiAqIFNldCB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzMgdG8gemVyb1xyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gemVybyhvdXQpIHtcbiAgb3V0WzBdID0gMC4wO1xuICBvdXRbMV0gPSAwLjA7XG4gIG91dFsyXSA9IDAuMDtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgdmVjdG9yXHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHZlY3RvciB0byByZXByZXNlbnQgYXMgYSBzdHJpbmdcclxuICogQHJldHVybnMge1N0cmluZ30gc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2ZWN0b3JcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzdHIoYSkge1xuICByZXR1cm4gXCJ2ZWMzKFwiICsgYVswXSArIFwiLCBcIiArIGFbMV0gKyBcIiwgXCIgKyBhWzJdICsgXCIpXCI7XG59XG4vKipcclxuICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgdmVjdG9ycyBoYXZlIGV4YWN0bHkgdGhlIHNhbWUgZWxlbWVudHMgaW4gdGhlIHNhbWUgcG9zaXRpb24gKHdoZW4gY29tcGFyZWQgd2l0aCA9PT0pXHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIFRoZSBmaXJzdCB2ZWN0b3IuXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBiIFRoZSBzZWNvbmQgdmVjdG9yLlxyXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmVjdG9ycyBhcmUgZXF1YWwsIGZhbHNlIG90aGVyd2lzZS5cclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBleGFjdEVxdWFscyhhLCBiKSB7XG4gIHJldHVybiBhWzBdID09PSBiWzBdICYmIGFbMV0gPT09IGJbMV0gJiYgYVsyXSA9PT0gYlsyXTtcbn1cbi8qKlxyXG4gKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSB2ZWN0b3JzIGhhdmUgYXBwcm94aW1hdGVseSB0aGUgc2FtZSBlbGVtZW50cyBpbiB0aGUgc2FtZSBwb3NpdGlvbi5cclxuICpcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgVGhlIGZpcnN0IHZlY3Rvci5cclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGIgVGhlIHNlY29uZCB2ZWN0b3IuXHJcbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmIHRoZSB2ZWN0b3JzIGFyZSBlcXVhbCwgZmFsc2Ugb3RoZXJ3aXNlLlxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGVxdWFscyhhLCBiKSB7XG4gIHZhciBhMCA9IGFbMF0sXG4gICAgICBhMSA9IGFbMV0sXG4gICAgICBhMiA9IGFbMl07XG4gIHZhciBiMCA9IGJbMF0sXG4gICAgICBiMSA9IGJbMV0sXG4gICAgICBiMiA9IGJbMl07XG4gIHJldHVybiBNYXRoLmFicyhhMCAtIGIwKSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMCksIE1hdGguYWJzKGIwKSkgJiYgTWF0aC5hYnMoYTEgLSBiMSkgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTEpLCBNYXRoLmFicyhiMSkpICYmIE1hdGguYWJzKGEyIC0gYjIpIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGEyKSwgTWF0aC5hYnMoYjIpKTtcbn1cbi8qKlxyXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzMuc3VidHJhY3R9XHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBzdWIgPSBzdWJ0cmFjdDtcbi8qKlxyXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzMubXVsdGlwbHl9XHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBtdWwgPSBtdWx0aXBseTtcbi8qKlxyXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzMuZGl2aWRlfVxyXG4gKiBAZnVuY3Rpb25cclxuICovXG5cbmV4cG9ydCB2YXIgZGl2ID0gZGl2aWRlO1xuLyoqXHJcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjMy5kaXN0YW5jZX1cclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgdmFyIGRpc3QgPSBkaXN0YW5jZTtcbi8qKlxyXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzMuc3F1YXJlZERpc3RhbmNlfVxyXG4gKiBAZnVuY3Rpb25cclxuICovXG5cbmV4cG9ydCB2YXIgc3FyRGlzdCA9IHNxdWFyZWREaXN0YW5jZTtcbi8qKlxyXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzMubGVuZ3RofVxyXG4gKiBAZnVuY3Rpb25cclxuICovXG5cbmV4cG9ydCB2YXIgbGVuID0gbGVuZ3RoO1xuLyoqXHJcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjMy5zcXVhcmVkTGVuZ3RofVxyXG4gKiBAZnVuY3Rpb25cclxuICovXG5cbmV4cG9ydCB2YXIgc3FyTGVuID0gc3F1YXJlZExlbmd0aDtcbi8qKlxyXG4gKiBQZXJmb3JtIHNvbWUgb3BlcmF0aW9uIG92ZXIgYW4gYXJyYXkgb2YgdmVjM3MuXHJcbiAqXHJcbiAqIEBwYXJhbSB7QXJyYXl9IGEgdGhlIGFycmF5IG9mIHZlY3RvcnMgdG8gaXRlcmF0ZSBvdmVyXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBzdHJpZGUgTnVtYmVyIG9mIGVsZW1lbnRzIGJldHdlZW4gdGhlIHN0YXJ0IG9mIGVhY2ggdmVjMy4gSWYgMCBhc3N1bWVzIHRpZ2h0bHkgcGFja2VkXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBvZmZzZXQgTnVtYmVyIG9mIGVsZW1lbnRzIHRvIHNraXAgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgYXJyYXlcclxuICogQHBhcmFtIHtOdW1iZXJ9IGNvdW50IE51bWJlciBvZiB2ZWMzcyB0byBpdGVyYXRlIG92ZXIuIElmIDAgaXRlcmF0ZXMgb3ZlciBlbnRpcmUgYXJyYXlcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gRnVuY3Rpb24gdG8gY2FsbCBmb3IgZWFjaCB2ZWN0b3IgaW4gdGhlIGFycmF5XHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbYXJnXSBhZGRpdGlvbmFsIGFyZ3VtZW50IHRvIHBhc3MgdG8gZm5cclxuICogQHJldHVybnMge0FycmF5fSBhXHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBmb3JFYWNoID0gZnVuY3Rpb24gKCkge1xuICB2YXIgdmVjID0gY3JlYXRlKCk7XG4gIHJldHVybiBmdW5jdGlvbiAoYSwgc3RyaWRlLCBvZmZzZXQsIGNvdW50LCBmbiwgYXJnKSB7XG4gICAgdmFyIGksIGw7XG5cbiAgICBpZiAoIXN0cmlkZSkge1xuICAgICAgc3RyaWRlID0gMztcbiAgICB9XG5cbiAgICBpZiAoIW9mZnNldCkge1xuICAgICAgb2Zmc2V0ID0gMDtcbiAgICB9XG5cbiAgICBpZiAoY291bnQpIHtcbiAgICAgIGwgPSBNYXRoLm1pbihjb3VudCAqIHN0cmlkZSArIG9mZnNldCwgYS5sZW5ndGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsID0gYS5sZW5ndGg7XG4gICAgfVxuXG4gICAgZm9yIChpID0gb2Zmc2V0OyBpIDwgbDsgaSArPSBzdHJpZGUpIHtcbiAgICAgIHZlY1swXSA9IGFbaV07XG4gICAgICB2ZWNbMV0gPSBhW2kgKyAxXTtcbiAgICAgIHZlY1syXSA9IGFbaSArIDJdO1xuICAgICAgZm4odmVjLCB2ZWMsIGFyZyk7XG4gICAgICBhW2ldID0gdmVjWzBdO1xuICAgICAgYVtpICsgMV0gPSB2ZWNbMV07XG4gICAgICBhW2kgKyAyXSA9IHZlY1syXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYTtcbiAgfTtcbn0oKTsiLCJleHBvcnQgZGVmYXVsdCBcImxldCBPY3RyZWVTaXplID0gMzJ1O1xcblxcbnN0cnVjdCBDb3JuZXJNYXRlcmlhbHMge1xcbiAgY29ybmVyTWF0ZXJpYWxzIDogYXJyYXk8dTMyPixcXG59O1xcbkBiaW5kaW5nKDEpIEBncm91cCgwKSB2YXI8c3RvcmFnZSwgcmVhZD4gY29ybmVyTWF0ZXJpYWxzOiBDb3JuZXJNYXRlcmlhbHM7XFxuXFxuc3RydWN0IFZveGVsTWF0ZXJpYWxzIHtcXG4gIHZveGVsTWF0ZXJpYWxzIDogYXJyYXk8dTMyPixcXG59O1xcbkBiaW5kaW5nKDIpIEBncm91cCgwKSB2YXI8c3RvcmFnZSwgcmVhZF93cml0ZT4gdm94ZWxNYXRlcmlhbHM6IFZveGVsTWF0ZXJpYWxzO1xcblxcbmxldCBDSElMRF9NSU5fT0ZGU0VUUyA9IGFycmF5PHZlYzM8dTMyPiwgOD5cXG4oXFxuICB2ZWMzPHUzMj4oMHUsIDB1LCAwdSksXFxuICB2ZWMzPHUzMj4oMHUsIDB1LCAxdSksXFxuICB2ZWMzPHUzMj4oMHUsIDF1LCAwdSksXFxuICB2ZWMzPHUzMj4oMHUsIDF1LCAxdSksXFxuICB2ZWMzPHUzMj4oMXUsIDB1LCAwdSksXFxuICB2ZWMzPHUzMj4oMXUsIDB1LCAxdSksXFxuICB2ZWMzPHUzMj4oMXUsIDF1LCAwdSksXFxuICB2ZWMzPHUzMj4oMXUsIDF1LCAxdSlcXG4pO1xcblxcbkBjb21wdXRlIEB3b3JrZ3JvdXBfc2l6ZSgxKVxcbmZuIG1haW4oQGJ1aWx0aW4oZ2xvYmFsX2ludm9jYXRpb25faWQpIEdsb2JhbEludm9jYXRpb25JRCA6IHZlYzM8dTMyPikge1xcbiAgbGV0IGluZGV4OiB1MzIgPSBHbG9iYWxJbnZvY2F0aW9uSUQueiAqIDMydSAqIDMydSArIEdsb2JhbEludm9jYXRpb25JRC55ICogMzJ1ICsgR2xvYmFsSW52b2NhdGlvbklELng7XFxuXFxuICBsZXQgbm9kZVBvczogdmVjMzx1MzI+ID0gdmVjMzx1MzI+KEdsb2JhbEludm9jYXRpb25JRC54LCBHbG9iYWxJbnZvY2F0aW9uSUQueSwgR2xvYmFsSW52b2NhdGlvbklELnopO1xcbiAgdmFyIGNvcm5lcnM6IHUzMiA9IDB1O1xcblxcbiAgdmFyIGo6IHUzMiA9IDB1O1xcbiAgbG9vcCB7XFxuICAgIGlmIChqID49IDh1KSB7IGJyZWFrOyB9XFxuXFxuICAgIGxldCBjb3JuZXJQb3M6IHZlYzM8dTMyPiA9IHZlYzM8dTMyPihHbG9iYWxJbnZvY2F0aW9uSUQueCArIENISUxEX01JTl9PRkZTRVRTW2pdLngsIEdsb2JhbEludm9jYXRpb25JRC55ICsgQ0hJTERfTUlOX09GRlNFVFNbal0ueSwgR2xvYmFsSW52b2NhdGlvbklELnogKyBDSElMRF9NSU5fT0ZGU0VUU1tqXS56KTtcXG4gICAgbGV0IG1hdGVyaWFsOiB1MzIgPSBtaW4oMSwgY29ybmVyTWF0ZXJpYWxzLmNvcm5lck1hdGVyaWFsc1tjb3JuZXJQb3MueiAqIDMzdSAqIDMzdSArIGNvcm5lclBvcy55ICogMzN1ICsgY29ybmVyUG9zLnhdKTtcXG4gICAgY29ybmVycyA9IGNvcm5lcnMgfCAobWF0ZXJpYWwgPDwgaik7XFxuXFxuICAgIGNvbnRpbnVpbmcge1xcbiAgICAgIGogPSBqICsgMXU7XFxuICAgIH1cXG4gIH1cXG4gIFxcbiAgdm94ZWxNYXRlcmlhbHMudm94ZWxNYXRlcmlhbHNbaW5kZXhdID0gY29ybmVycztcXG59XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJzdHJ1Y3QgVm94ZWxNYXRlcmlhbHMge1xcbiAgdm94ZWxNYXRlcmlhbHMgOiBhcnJheTx1MzI+LFxcbn07XFxuQGJpbmRpbmcoMikgQGdyb3VwKDApIHZhcjxzdG9yYWdlLCByZWFkPiB2b3hlbE1hdGVyaWFsczogVm94ZWxNYXRlcmlhbHM7XFxuXFxuc3RydWN0IENvcm5lckluZGV4IHtcXG4gIGNvcm5lckNvdW50IDogdTMyLFxcbiAgY29ybmVySW5kZXhlcyA6IGFycmF5PHUzMj4sXFxufTtcXG5AYmluZGluZygzKSBAZ3JvdXAoMCkgdmFyPHN0b3JhZ2UsIHJlYWRfd3JpdGU+IGNvcm5lckluZGV4OiBDb3JuZXJJbmRleDtcXG5cXG5cXG5Ac3RhZ2UoY29tcHV0ZSkgQHdvcmtncm91cF9zaXplKDEpXFxuZm4gbWFpbihAYnVpbHRpbihnbG9iYWxfaW52b2NhdGlvbl9pZCkgR2xvYmFsSW52b2NhdGlvbklEIDogdmVjMzx1MzI+KSB7XFxuXFx0dmFyIHBvc2l0aW9uOiB1MzIgPSAwdTtcXG5cXG5cXHR2YXIgaSA6IHUzMiA9IDB1O1xcblxcdGxvb3Age1xcblxcdFxcdGlmIChpID49IDMydSAqIDMydSAqIDMydSkgeyBicmVhazsgfVxcblxcdFxcdFxcblxcdFxcdGlmICh2b3hlbE1hdGVyaWFscy52b3hlbE1hdGVyaWFsc1tpXSAhPSAwdSAmJiB2b3hlbE1hdGVyaWFscy52b3hlbE1hdGVyaWFsc1tpXSAhPSAyNTV1KSB7XFxuXFx0XFx0XFx0Y29ybmVySW5kZXguY29ybmVySW5kZXhlc1twb3NpdGlvbl0gPSBpO1xcblxcdFxcdFxcdHBvc2l0aW9uID0gcG9zaXRpb24gKyAxdTsgIFxcblxcdFxcdH1cXG5cXHRcXHRcXHRcXG5cXHRcXHRjb250aW51aW5nIHsgIFxcblxcdFxcdFxcdGkgPSBpICsgMXU7XFxuXFx0XFx0fVxcblxcdH1cXG5cXG5cXHRjb3JuZXJJbmRleC5jb3JuZXJDb3VudCA9IHBvc2l0aW9uO1xcbn1cIjsiLCJleHBvcnQgZGVmYXVsdCBcInN0cnVjdCBQZXJtdXRhdGlvbnMge1xcbiAgUGVybSA6IGFycmF5PGkzMiwgNTEyPixcXG59O1xcblxcbkBiaW5kaW5nKDApIEBncm91cCgwKVxcbnZhcjxzdG9yYWdlLCByZWFkPiBwZXJtIDogUGVybXV0YXRpb25zO1xcblxcbnN0cnVjdCBDb3JuZXJNYXRlcmlhbHMge1xcbiAgY29ybmVyTWF0ZXJpYWxzIDogYXJyYXk8dTMyPixcXG59O1xcblxcbkBiaW5kaW5nKDEpIEBncm91cCgwKVxcbnZhcjxzdG9yYWdlLCByZWFkX3dyaXRlPiBjb3JuZXJNYXRlcmlhbHM6IENvcm5lck1hdGVyaWFscztcXG5cXG5zdHJ1Y3QgVm94ZWxNYXRlcmlhbHMge1xcbiAgdm94ZWxNYXRlcmlhbHMgOiBhcnJheTx1MzI+LFxcbn07XFxuXFxuQGJpbmRpbmcoMikgQGdyb3VwKDApXFxudmFyPHN0b3JhZ2UsIHJlYWRfd3JpdGU+IHZveGVsTWF0ZXJpYWxzOiBWb3hlbE1hdGVyaWFscztcXG5cXG5zdHJ1Y3QgQ29ybmVySW5kZXgge1xcbiAgY29ybmVyQ291bnQgOiB1MzIsXFxuICBjb3JuZXJJbmRleGVzIDogYXJyYXk8dTMyPlxcbn07XFxuXFxuQGJpbmRpbmcoMykgQGdyb3VwKDApXFxudmFyPHN0b3JhZ2UsIHJlYWRfd3JpdGU+IGNvcm5lckluZGV4OiBDb3JuZXJJbmRleDtcXG5cXG5zdHJ1Y3QgR1BVVk9YXFxue1xcblxcdHZveE1pbjogdmVjMzxmMzI+LFxcblxcdGNvcm5lcnM6IGYzMixcXG5cXHR2ZXJ0UG9pbnQ6IHZlYzM8ZjMyPixcXG5cXHRhdmdOb3JtYWw6IHZlYzM8ZjMyPixcXG5cXHRudW1Qb2ludHM6IGYzMlxcbn07XFxuc3RydWN0IEdQVVZPWFMge1xcbiAgdm94ZWxzIDogYXJyYXk8R1BVVk9YPixcXG59O1xcblxcbkBiaW5kaW5nKDQpIEBncm91cCgwKVxcbnZhcjxzdG9yYWdlLCByZWFkX3dyaXRlPiB2b3hlbHM6IEdQVVZPWFM7XFxuXFxuc3RydWN0IFVuaWZvcm1CdWZmZXJPYmplY3Qge1xcbiAgY2h1bmtQb3NpdGlvbiA6IHZlYzM8ZjMyPixcXG4gIHN0cmlkZSA6IGYzMixcXG5cXHR3aWR0aDogdTMyXFxufTtcXG5cXG5AYmluZGluZyg1KSBAZ3JvdXAoMClcXG52YXI8dW5pZm9ybT4gdW5pZm9ybXMgOiBVbmlmb3JtQnVmZmVyT2JqZWN0O1xcblxcbmxldCBDSElMRF9NSU5fT0ZGU0VUUzogYXJyYXk8dmVjMzx1MzI+LCA4PiA9IGFycmF5PHZlYzM8dTMyPiwgOD5cXG4oXFxuICB2ZWMzPHUzMj4oMHUsIDB1LCAwdSksXFxuICB2ZWMzPHUzMj4oMHUsIDB1LCAxdSksXFxuICB2ZWMzPHUzMj4oMHUsIDF1LCAwdSksXFxuICB2ZWMzPHUzMj4oMHUsIDF1LCAxdSksXFxuICB2ZWMzPHUzMj4oMXUsIDB1LCAwdSksXFxuICB2ZWMzPHUzMj4oMXUsIDB1LCAxdSksXFxuICB2ZWMzPHUzMj4oMXUsIDF1LCAwdSksXFxuICB2ZWMzPHUzMj4oMXUsIDF1LCAxdSlcXG4pO1xcblxcbmxldCBlZGdldm1hcDogYXJyYXk8dmVjMjxpMzI+LCAxMj4gPSBhcnJheTx2ZWMyPGkzMj4sIDEyPlxcbihcXG5cXHR2ZWMyPGkzMj4oMCw0KSwgdmVjMjxpMzI+KDEsNSksIHZlYzI8aTMyPigyLDYpLCB2ZWMyPGkzMj4oMyw3KSxcXG5cXHR2ZWMyPGkzMj4oMCwyKSwgdmVjMjxpMzI+KDEsMyksIHZlYzI8aTMyPig0LDYpLCB2ZWMyPGkzMj4oNSw3KSxcXG5cXHR2ZWMyPGkzMj4oMCwxKSwgdmVjMjxpMzI+KDIsMyksIHZlYzI8aTMyPig0LDUpLCB2ZWMyPGkzMj4oNiw3KVxcbik7XFxuXFxuZm4gcmFuZG9tKGk6IHZlYzI8ZjMyPikgLT4gZjMyIHtcXG4gIHJldHVybiBmcmFjdChzaW4oZG90KGksdmVjMigxMi45ODk4LDc4LjIzMykpKSo0Mzc1OC41NDUzMTIzKTtcXG59XFxuXFxuZm4gVmVjM0RvdChhOiB2ZWMzPGYzMj4sIGI6IHZlYzM8ZjMyPikgLT4gZjMyXFxue1xcblxcdHJldHVybiAoYS54ICogYi54KSArIChhLnkgKiBiLnkpICsgKGEueiAqIGIueik7XFxufVxcblxcbmxldCBHcmFkMzogYXJyYXk8dmVjMzxmMzI+LCAxMj4gPSBhcnJheTx2ZWMzPGYzMj4sIDEyPihcXG5cXHR2ZWMzPGYzMj4oMS4wLDEuMCwwLjApLCB2ZWMzPGYzMj4oLTEuMCwxLjAsMC4wKSwgdmVjMzxmMzI+KDEuMCwtMS4wLDAuMCksIHZlYzM8ZjMyPigtMS4wLC0xLjAsMC4wKSxcXG5cXHR2ZWMzPGYzMj4oMS4wLDAuMCwxLjApLCB2ZWMzPGYzMj4oLTEuMCwwLjAsMS4wKSwgdmVjMzxmMzI+KDEuMCwwLjAsLTEuMCksIHZlYzM8ZjMyPigtMS4wLDAuMCwtMS4wKSxcXG5cXHR2ZWMzPGYzMj4oMC4wLDEuMCwxLjApLCB2ZWMzPGYzMj4oMC4wLC0xLjAsMS4wKSwgdmVjMzxmMzI+KDAuMCwxLjAsLTEuMCksIHZlYzM8ZjMyPigwLjAsLTEuMCwtMS4wKVxcbik7XFxuXFxuZm4gUGVybGluKHgxOiBmMzIsIHkxOiBmMzIsIHoxOiBmMzIpIC0+IGYzMlxcbntcXG5cXHR2YXIgWDogaTMyID0gMDtcXG5cXHRpZiAoeDEgPiAwLjApIHtcXG5cXHRcXHRYID0gaTMyKHgxKTtcXG5cXHR9IGVsc2Uge1xcblxcdFxcdFggPSBpMzIoeDEpIC0gMTtcXG5cXHR9XFxuXFxuXFx0dmFyIFk6IGkzMiA9IDA7XFxuXFx0aWYgKHkxID4gMC4wKSB7XFxuXFx0XFx0WSA9IGkzMih5MSk7XFxuXFx0fSBlbHNlIHtcXG5cXHRcXHRZID0gaTMyKHkxKSAtIDE7XFxuXFx0fVxcblxcblxcdHZhciBaOiBpMzIgPSAwO1xcblxcdGlmICh6MSA+IDAuMCkge1xcblxcdFxcdFogPSBpMzIoejEpO1xcblxcdH0gZWxzZSB7XFxuXFx0XFx0WiA9IGkzMih6MSkgLSAxO1xcblxcdH1cXG5cXHRcXG5cXHRsZXQgeDogZjMyID0geDEgLSBmMzIoWCk7XFxuXFx0bGV0IHk6IGYzMiA9IHkxIC0gZjMyKFkpO1xcblxcdGxldCB6OiBmMzIgPSB6MSAtIGYzMihaKTtcXG5cXHRcXG5cXHRYID0gWCAmIDI1NTtcXG5cXHRZID0gWSAmIDI1NTtcXG5cXHRaID0gWiAmIDI1NTtcXG5cXHRcXG5cXHRsZXQgZ2kwMDA6IGkzMiA9IChwZXJtLlBlcm1bWCArIHBlcm0uUGVybVtZICsgcGVybS5QZXJtW1pdIF0gXSAlIDEyKTtcXG5cXHRsZXQgZ2kwMDE6IGkzMiA9IChwZXJtLlBlcm1bWCArIHBlcm0uUGVybVtZICsgcGVybS5QZXJtW1ogKyAxXSBdIF0gJSAxMik7XFxuXFx0bGV0IGdpMDEwOiBpMzIgPSAocGVybS5QZXJtW1ggKyBwZXJtLlBlcm1bWSArIDEgKyBwZXJtLlBlcm1bWl0gXSBdICUgMTIpO1xcblxcdGxldCBnaTAxMTogaTMyID0gKHBlcm0uUGVybVtYICsgcGVybS5QZXJtW1kgKyAxICsgcGVybS5QZXJtW1ogKyAxXSBdIF0gJSAxMik7XFxuXFx0bGV0IGdpMTAwOiBpMzIgPSAocGVybS5QZXJtW1ggKyAxICsgcGVybS5QZXJtW1kgKyBwZXJtLlBlcm1bWl0gXSBdICUgMTIpO1xcblxcdGxldCBnaTEwMTogaTMyID0gKHBlcm0uUGVybVtYICsgMSArIHBlcm0uUGVybVtZICsgcGVybS5QZXJtW1ogKyAxXSBdIF0gJSAxMik7XFxuXFx0bGV0IGdpMTEwOiBpMzIgPSAocGVybS5QZXJtW1ggKyAxICsgcGVybS5QZXJtW1kgKyAxICsgcGVybS5QZXJtW1pdIF0gXSAlIDEyKTtcXG5cXHRsZXQgZ2kxMTE6IGkzMiA9IChwZXJtLlBlcm1bWCArIDEgKyBwZXJtLlBlcm1bWSArIDEgKyBwZXJtLlBlcm1bWiArIDFdIF0gXSAlIDEyKTtcXG5cXG5cXHRsZXQgbjAwMDogZjMyID0gZG90KEdyYWQzW2dpMDAwXSwgdmVjMzxmMzI+KHgsIHksIHopKTtcXG5cXHRsZXQgbjEwMDogZjMyID0gZG90KEdyYWQzW2dpMTAwXSwgdmVjMzxmMzI+KHggLSAxLjAsIHksIHopKTtcXG5cXHRsZXQgbjAxMDogZjMyID0gZG90KEdyYWQzW2dpMDEwXSwgdmVjMzxmMzI+KHgsIHkgLSAxLjAsIHopKTtcXG5cXHRsZXQgbjExMDogZjMyID0gZG90KEdyYWQzW2dpMTEwXSwgdmVjMzxmMzI+KHggLSAxLjAsIHkgLSAxLjAsIHopKTtcXG5cXHRsZXQgbjAwMTogZjMyID0gZG90KEdyYWQzW2dpMDAxXSwgdmVjMzxmMzI+KHgsIHksIHogLSAxLjApKTtcXG5cXHRsZXQgbjEwMTogZjMyID0gZG90KEdyYWQzW2dpMTAxXSwgdmVjMzxmMzI+KHggLSAxLjAsIHksIHogLSAxLjApKTtcXG5cXHRsZXQgbjAxMTogZjMyID0gZG90KEdyYWQzW2dpMDExXSwgdmVjMzxmMzI+KHgsIHkgLSAxLjAsIHogLSAxLjApKTtcXG5cXHRsZXQgbjExMTogZjMyID0gZG90KEdyYWQzW2dpMTExXSwgdmVjMzxmMzI+KHggLSAxLjAsIHkgLSAxLjAsIHogLSAxLjApKTtcXG5cXHRcXG5cXHRsZXQgdTogZjMyID0gZjMyKHggKiB4ICogeCAqICh4ICogKHggKiA2LjAgLSAxNS4wKSArIDEwLjApKTtcXG5cXHRsZXQgdjogZjMyID0gZjMyKHkgKiB5ICogeSAqICh5ICogKHkgKiA2LjAgLSAxNS4wKSArIDEwLjApKTtcXG5cXHRsZXQgdzogZjMyID0gZjMyKHogKiB6ICogeiAqICh6ICogKHogKiA2LjAgLSAxNS4wKSArIDEwLjApKTtcXG5cXHRsZXQgbngwMDogZjMyID0gbWl4KG4wMDAsIG4xMDAsIHUpO1xcblxcdGxldCBueDAxOiBmMzIgPSBtaXgobjAwMSwgbjEwMSwgdSk7XFxuXFx0bGV0IG54MTA6IGYzMiA9IG1peChuMDEwLCBuMTEwLCB1KTtcXG5cXHRsZXQgbngxMTogZjMyID0gbWl4KG4wMTEsIG4xMTEsIHUpO1xcblxcdGxldCBueHkwOiBmMzIgPSBtaXgobngwMCwgbngxMCwgdik7XFxuXFx0bGV0IG54eTE6IGYzMiA9IG1peChueDAxLCBueDExLCB2KTtcXG5cXHRsZXQgbnh5ejogZjMyID0gbWl4KG54eTAsIG54eTEsIHcpO1xcblxcdFxcblxcdHJldHVybiBueHl6O1xcbn1cXG5cXG5mbiBGcmFjdGFsTm9pc2Uob2N0YXZlczogaTMyLCBmcmVxdWVuY3k6IGYzMiwgbGFjdW5hcml0eTogZjMyLCBwZXJzaXN0ZW5jZTogZjMyLCBwb3NpdGlvbjogdmVjMzxmMzI+KSAtPiBmMzJcXG57XFxuXFx0bGV0IFNDQUxFOiBmMzIgPSAxLjAgLyAxMjguMDtcXG5cXHR2YXIgcDogdmVjMzxmMzI+ID0gcG9zaXRpb24gKiBTQ0FMRTtcXG5cXHR2YXIgbm9pczogZjMyID0gMC4wO1xcblxcblxcdHZhciBhbXBsaXR1ZGU6IGYzMiA9IDEuMDtcXG5cXHRwID0gcCAqIGZyZXF1ZW5jeTtcXG5cXG5cXHR2YXIgaTogaTMyID0gMDtcXG5cXHRsb29wIHtcXG5cXHRcXHRpZiAoaSA+PSBvY3RhdmVzKSB7IGJyZWFrOyB9XFxuXFxuXFx0XFx0bm9pcyA9IG5vaXMgKyBQZXJsaW4ocC54LCBwLnksIHAueikgKiBhbXBsaXR1ZGU7XFxuXFx0XFx0cCA9IHAgKiBsYWN1bmFyaXR5O1xcblxcdFxcdGFtcGxpdHVkZSA9IGFtcGxpdHVkZSAqIHBlcnNpc3RlbmNlO1xcblxcblxcdFxcdGNvbnRpbnVpbmcge1xcblxcdFxcdFxcdGkgPSBpICsgMTtcXG5cXHRcXHR9XFxuXFx0fVxcblxcdFxcblxcdHJldHVybiBub2lzO1xcbn1cXG5cXG5mbiBGcmFjdGFsTm9pc2UxKGZyZXF1ZW5jeTogZjMyLCBsYWN1bmFyaXR5OiBmMzIsIHBlcnNpc3RlbmNlOiBmMzIsIHBvc2l0aW9uOiB2ZWMzPGYzMj4pIC0+IGYzMlxcbntcXG5cXHRsZXQgU0NBTEU6IGYzMiA9IDEuMCAvIDEyOC4wO1xcblxcdHZhciBwOiB2ZWMzPGYzMj4gPSBwb3NpdGlvbiAqIFNDQUxFO1xcblxcdHZhciBub2lzOiBmMzIgPSAwLjA7XFxuXFxuXFx0dmFyIGFtcGxpdHVkZTogZjMyID0gMS4wO1xcblxcdHAgPSBwICogZnJlcXVlbmN5O1xcblxcdFxcblxcdG5vaXMgPSBub2lzICsgUGVybGluKHAueCwgcC55LCBwLnopICogYW1wbGl0dWRlO1xcblxcdHAgPSBwICogbGFjdW5hcml0eTtcXG5cXHRhbXBsaXR1ZGUgPSBhbXBsaXR1ZGUgKiBwZXJzaXN0ZW5jZTtcXG5cXHRcXG5cXHRyZXR1cm4gbm9pcztcXG59XFxuXFxuZm4gQ2FsY3VsYXRlTm9pc2VWYWx1ZShwb3M6IHZlYzM8ZjMyPiwgc2NhbGU6IGYzMikgLT4gZjMyXFxue1xcblxcdHJldHVybiBGcmFjdGFsTm9pc2UoNCwgMC41MzQzLCAyLjIzMjQsIDAuNjgzMjQsIHBvcyAqIHNjYWxlKTtcXG59XFxuXFxuZm4gQ0xlcnAoYTogZjMyLCBiOiBmMzIsIHQ6IGYzMikgLT4gZjMyXFxue1xcblxcdHJldHVybiAoMS4wIC0gdCkgKiBhICsgdCAqIGI7XFxufVxcblxcbi8vIFNWRFxcblxcbmxldCBTVkRfTlVNX1NXRUVQUzogaTMyID0gNDtcXG5sZXQgUFNVRURPX0lOVkVSU0VfVEhSRVNIT0xEOiBmMzIgPSAwLjAwMDAwMDAxO1xcblxcbmZuIHN2ZF9tdWxfbWF0cml4X3ZlYyhtOiBtYXQzeDM8ZjMyPiwgYjogdmVjNDxmMzI+KSAtPiB2ZWM0PGYzMj5cXG57XFxuXFx0dmFyIGE6IG1hdDN4MzxmMzI+ID0gbTtcXG5cXHRcXG5cXHRyZXR1cm4gdmVjNDxmMzI+KFxcblxcdFxcdGRvdCh2ZWM0PGYzMj4oYVswXVswXSwgYVswXVsxXSwgYVswXVsyXSwgMC4wKSwgYiksXFxuXFx0XFx0ZG90KHZlYzQ8ZjMyPihhWzFdWzBdLCBhWzFdWzFdLCBhWzFdWzJdLCAwLjApLCBiKSxcXG5cXHRcXHRkb3QodmVjNDxmMzI+KGFbMl1bMF0sIGFbMl1bMV0sIGFbMl1bMl0sIDAuMCksIGIpLFxcblxcdFxcdDAuMFxcblxcdCk7XFxufVxcblxcbmZuIGdpdmVuc19jb2VmZnNfc3ltKGFfcHA6IGYzMiwgYV9wcTogZjMyLCBhX3FxOiBmMzIpIC0+IHZlYzI8ZjMyPlxcbntcXG5cXHRpZiAoYV9wcSA9PSAwLjApIHtcXG5cXHRcXHRyZXR1cm4gdmVjMjxmMzI+KDEuMCwgMC4wKTtcXG5cXHR9XFxuXFx0XFxuXFx0bGV0IHRhdTogZjMyID0gKGFfcXEgLSBhX3BwKSAvICgyLjAgKiBhX3BxKTtcXG5cXHRsZXQgc3R0OiBmMzIgPSBzcXJ0KDEuMCArIHRhdSAqIHRhdSk7XFxuXFx0dmFyIHRhbjogZjMyO1xcblxcdGlmICgodGF1ID49IDAuMCkpIHtcXG5cXHRcXHR0YW4gPSAodGF1ICsgc3R0KTtcXG5cXHR9IGVsc2Uge1xcblxcdFxcdHRhbiA9ICh0YXUgLSBzdHQpO1xcblxcdH1cXG5cXHR0YW4gPSAxLjAgLyB0YW47XFxuXFxuXFx0bGV0IGM6IGYzMiA9IGludmVyc2VTcXJ0KDEuMCArIHRhbiAqIHRhbik7XFxuXFx0bGV0IHM6IGYzMiA9IHRhbiAqIGM7XFxuXFxuXFx0cmV0dXJuIHZlYzI8ZjMyPihjLCBzKTtcXG59XFxuXFxuZm4gc3ZkX3JvdGF0ZV94eSh4OiBmMzIsIHk6IGYzMiwgYzogZjMyLCBzOiBmMzIpIC0+IHZlYzI8ZjMyPlxcbntcXG5cXHRyZXR1cm4gdmVjMjxmMzI+KGMgKiB4IC0gcyAqIHksIHMgKiB4ICsgYyAqIHkpO1xcbn1cXG5cXG5mbiBzdmRfcm90YXRlcV94eSh4OiBmMzIsIHk6IGYzMiwgejogZjMyLCBjOiBmMzIsIHM6IGYzMikgLT4gdmVjMjxmMzI+XFxue1xcblxcdGxldCBjYzogZjMyID0gYyAqIGM7XFxuXFx0bGV0IHNzOiBmMzIgPSBzICogcztcXG5cXHRsZXQgbXg6IGYzMiA9IDIuMCAqIGMgKiBzICogejtcXG5cXG5cXHRyZXR1cm4gdmVjMjxmMzI+KFxcblxcdFxcdGNjICogeCAtIG14ICsgc3MgKiB5LFxcblxcdFxcdHNzICogeCArIG14ICsgY2MgKiB6XFxuXFx0KTtcXG59XFxuXFxudmFyPHByaXZhdGU+IHZ0YXY6IG1hdDN4MzxmMzI+O1xcbnZhcjxwcml2YXRlPiB2OiBtYXQzeDM8ZjMyPjtcXG52YXI8cHJpdmF0ZT4gQVRBOiBhcnJheTxmMzIsIDY+O1xcbnZhcjxwcml2YXRlPiBBdGI6IHZlYzQ8ZjMyPjtcXG52YXI8cHJpdmF0ZT4gcG9pbnRhY2N1bTogdmVjNDxmMzI+O1xcbnZhcjxwcml2YXRlPiBidGI6IGYzMjtcXG5cXG5mbiBzdmRfcm90YXRlKGE6IGkzMiwgYjogaTMyKVxcbntcXG5cXHRpZiAodnRhdlthXVtiXSA9PSAwLjApIHsgcmV0dXJuOyB9XFxuXFxuXFxuXFx0XFxuXFx0bGV0IGNvZWZmczogdmVjMjxmMzI+ID0gZ2l2ZW5zX2NvZWZmc19zeW0odnRhdlthXVthXSwgdnRhdlthXVtiXSwgdnRhdltiXVtiXSk7XFxuXFx0bGV0IGM6IGYzMiA9IGNvZWZmcy54O1xcblxcdGxldCBzOiBmMzIgPSBjb2VmZnMueTtcXG5cXHRcXG5cXHRsZXQgcm90MTogdmVjMjxmMzI+ID0gc3ZkX3JvdGF0ZXFfeHkodnRhdlthXVthXSwgdnRhdltiXVtiXSwgdnRhdlthXVtiXSwgYywgcyk7XFxuXFx0dnRhdlthXVthXSA9IHJvdDEueDtcXG5cXHR2dGF2W2JdW2JdID0gcm90MS55O1xcblxcdFxcblxcdGxldCByb3QyOiB2ZWMyPGYzMj4gPSBzdmRfcm90YXRlX3h5KHZ0YXZbMF1bMy1iXSwgdnRhdlsxLWFdWzJdLCBjLCBzKTtcXG5cXHR2dGF2WzBdWzMtYl0gPSByb3QyLng7IFxcblxcdHZ0YXZbMS1hXVsyXSA9IHJvdDIueTtcXG5cXHRcXG5cXHR2dGF2W2FdW2JdID0gMC4wO1xcblxcdFxcblxcdGxldCByb3QzOiB2ZWMyPGYzMj4gPSBzdmRfcm90YXRlX3h5KHZbMF1bYV0sIHZbMF1bYl0sIGMsIHMpO1xcblxcdHZbMF1bYV0gPSByb3QzLng7IHZbMF1bYl0gPSByb3QzLnk7XFxuXFx0XFxuXFx0bGV0IHJvdDQ6IHZlYzI8ZjMyPiA9IHN2ZF9yb3RhdGVfeHkodlsxXVthXSwgdlsxXVtiXSwgYywgcyk7XFxuXFx0dlsxXVthXSA9IHJvdDQueDsgdlsxXVtiXSA9IHJvdDQueTtcXG5cXHRcXG5cXHRsZXQgcm90NTogdmVjMjxmMzI+ID0gc3ZkX3JvdGF0ZV94eSh2WzJdW2FdLCB2WzJdW2JdLCBjLCBzKTtcXG5cXHR2WzJdW2FdID0gcm90NS54OyB2WzJdW2JdID0gcm90NS55O1xcbn1cXG5cXG5mbiBzdmRfc29sdmVfc3ltKGI6IGFycmF5PGYzMiwgNj4pIC0+IHZlYzQ8ZjMyPlxcbntcXG5cXHR2YXIgYTogYXJyYXk8ZjMyLCA2PiA9IGI7XFxuXFx0XFxuXFx0dnRhdiA9IG1hdDN4MzxmMzI+KCBcXG5cXHRcXHR2ZWMzPGYzMj4oYVswXSwgYVsxXSwgYVsyXSksIFxcblxcdFxcdHZlYzM8ZjMyPigwLjAsIGFbM10sIGFbNF0pLCBcXG5cXHRcXHR2ZWMzPGYzMj4oMC4wLCAwLjAsIGFbNV0pXFxuXFx0KTtcXG5cXG5cXHR2YXIgaTogaTMyO1xcblxcdGxvb3Age1xcblxcdFxcdGlmIChpID49IFNWRF9OVU1fU1dFRVBTKSB7IGJyZWFrOyB9XFxuXFxuXFx0XFx0c3ZkX3JvdGF0ZSgwLCAxKTtcXG5cXHRcXHRzdmRfcm90YXRlKDAsIDIpO1xcblxcdFxcdHN2ZF9yb3RhdGUoMSwgMik7XFxuXFxuXFx0XFx0Y29udGludWluZyB7XFxuXFx0XFx0XFx0aSA9IGkgKyAxO1xcblxcdFxcdH1cXG5cXHR9XFxuXFxuXFx0dmFyIGNvcHk6IG1hdDN4MzxmMzI+ID0gdnRhdjtcXG5cXHRyZXR1cm4gdmVjNDxmMzI+KGNvcHlbMF1bMF0sIGNvcHlbMV1bMV0sIGNvcHlbMl1bMl0sIDAuMCk7XFxufVxcblxcblxcbmZuIHN2ZF9pbnZkZXQoeDogZjMyLCB0b2w6IGYzMikgLT4gZjMyXFxue1xcblxcdGlmIChhYnMoeCkgPCB0b2wgfHwgYWJzKDEuMCAvIHgpIDwgdG9sKSB7XFxuXFx0XFx0cmV0dXJuIDAuMDtcXG5cXHR9XFxuXFx0cmV0dXJuICgxLjAgLyB4KTtcXG59XFxuXFxuZm4gc3ZkX3BzZXVkb2ludmVyc2Uoc2lnbWE6IHZlYzQ8ZjMyPiwgYzogbWF0M3gzPGYzMj4pIC0+IG1hdDN4MzxmMzI+XFxue1xcblxcdGxldCBkMDogZjMyID0gc3ZkX2ludmRldChzaWdtYS54LCBQU1VFRE9fSU5WRVJTRV9USFJFU0hPTEQpO1xcblxcdGxldCBkMTogZjMyID0gc3ZkX2ludmRldChzaWdtYS55LCBQU1VFRE9fSU5WRVJTRV9USFJFU0hPTEQpO1xcblxcdGxldCBkMjogZjMyID0gc3ZkX2ludmRldChzaWdtYS56LCBQU1VFRE9fSU5WRVJTRV9USFJFU0hPTEQpO1xcblxcblxcdHZhciBjb3B5OiBtYXQzeDM8ZjMyPiA9IGM7XFxuXFxuXFx0cmV0dXJuIG1hdDN4MzxmMzI+IChcXG5cXHRcXHR2ZWMzPGYzMj4oXFxuXFx0XFx0XFx0Y29weVswXVswXSAqIGQwICogY29weVswXVswXSArIGNvcHlbMF1bMV0gKiBkMSAqIGNvcHlbMF1bMV0gKyBjb3B5WzBdWzJdICogZDIgKiBjb3B5WzBdWzJdLFxcblxcdFxcdFxcdGNvcHlbMF1bMF0gKiBkMCAqIGNvcHlbMV1bMF0gKyBjb3B5WzBdWzFdICogZDEgKiBjb3B5WzFdWzFdICsgY29weVswXVsyXSAqIGQyICogY29weVsxXVsyXSxcXG5cXHRcXHRcXHRjb3B5WzBdWzBdICogZDAgKiBjb3B5WzJdWzBdICsgY29weVswXVsxXSAqIGQxICogY29weVsyXVsxXSArIGNvcHlbMF1bMl0gKiBkMiAqIGNvcHlbMl1bMl1cXG5cXHRcXHQpLFxcblxcdFxcdHZlYzM8ZjMyPihcXG5cXHRcXHRcXHRjb3B5WzFdWzBdICogZDAgKiBjb3B5WzBdWzBdICsgY29weVsxXVsxXSAqIGQxICogY29weVswXVsxXSArIGNvcHlbMV1bMl0gKiBkMiAqIGNvcHlbMF1bMl0sXFxuXFx0XFx0XFx0Y29weVsxXVswXSAqIGQwICogY29weVsxXVswXSArIGNvcHlbMV1bMV0gKiBkMSAqIGNvcHlbMV1bMV0gKyBjb3B5WzFdWzJdICogZDIgKiBjb3B5WzFdWzJdLFxcblxcdFxcdFxcdGNvcHlbMV1bMF0gKiBkMCAqIGNvcHlbMl1bMF0gKyBjb3B5WzFdWzFdICogZDEgKiBjb3B5WzJdWzFdICsgY29weVsxXVsyXSAqIGQyICogY29weVsyXVsyXVxcblxcdFxcdCksXFxuXFx0XFx0dmVjMzxmMzI+KFxcblxcdFxcdFxcdGNvcHlbMl1bMF0gKiBkMCAqIGNvcHlbMF1bMF0gKyBjb3B5WzJdWzFdICogZDEgKiBjb3B5WzBdWzFdICsgY29weVsyXVsyXSAqIGQyICogY29weVswXVsyXSxcXG5cXHRcXHRcXHRjb3B5WzJdWzBdICogZDAgKiBjb3B5WzFdWzBdICsgY29weVsyXVsxXSAqIGQxICogY29weVsxXVsxXSArIGNvcHlbMl1bMl0gKiBkMiAqIGNvcHlbMV1bMl0sXFxuXFx0XFx0XFx0Y29weVsyXVswXSAqIGQwICogY29weVsyXVswXSArIGNvcHlbMl1bMV0gKiBkMSAqIGNvcHlbMl1bMV0gKyBjb3B5WzJdWzJdICogZDIgKiBjb3B5WzJdWzJdXFxuXFx0XFx0KSxcXG5cXHQpO1xcbn1cXG5cXG5mbiBzdmRfc29sdmVfQVRBX0F0YihhOiB2ZWM0PGYzMj4pIC0+IHZlYzQ8ZjMyPlxcbntcXG5cXHR2ID0gbWF0M3gzPGYzMj4odmVjMzxmMzI+KDEuMCwgMC4wLCAwLjApLCB2ZWMzPGYzMj4oMC4wLCAxLjAsIDAuMCksIHZlYzM8ZjMyPigwLjAsIDAuMCwgMS4wKSk7XFxuXFx0XFxuXFx0bGV0IHNpZ21hOiB2ZWM0PGYzMj4gPSBzdmRfc29sdmVfc3ltKEFUQSk7XFxuXFx0XFxuXFx0bGV0IFZpbnY6IG1hdDN4MzxmMzI+ID0gc3ZkX3BzZXVkb2ludmVyc2Uoc2lnbWEsIHYpO1xcblxcdHJldHVybiBzdmRfbXVsX21hdHJpeF92ZWMoVmludiwgYSk7XFxufVxcblxcbmZuIHN2ZF92bXVsX3N5bSh2OiB2ZWM0PGYzMj4pIC0+IHZlYzQ8ZjMyPlxcbntcXG5cXHRsZXQgQV9yb3dfeDogdmVjNDxmMzI+ID0gdmVjNDxmMzI+KEFUQVswXSwgQVRBWzFdLCBBVEFbMl0sIDAuMCk7XFxuXFx0cmV0dXJuIHZlYzQ8ZjMyPiAoXFxuXFx0XFx0ZG90KEFfcm93X3gsIHYpLFxcblxcdFxcdEFUQVsxXSAqIHYueCArIEFUQVszXSAqIHYueSArIEFUQVs0XSAqIHYueixcXG5cXHRcXHRBVEFbMl0gKiB2LnggKyBBVEFbNF0gKiB2LnkgKyBBVEFbNV0gKiB2LnosXFxuXFx0XFx0MC4wXFxuXFx0KTtcXG59XFxuXFxuXFxuLy8gLy8gUUVGXFxuXFxuZm4gcWVmX2FkZChuOiB2ZWM0PGYzMj4sIHA6IHZlYzQ8ZjMyPilcXG57XFxuXFx0QVRBWzBdID0gQVRBWzBdICsgbi54ICogbi54O1xcblxcdEFUQVsxXSA9IEFUQVsxXSArIG4ueCAqIG4ueTtcXG5cXHRBVEFbMl0gPSBBVEFbMl0gKyBuLnggKiBuLno7XFxuXFx0QVRBWzNdID0gQVRBWzNdICsgbi55ICogbi55O1xcblxcdEFUQVs0XSA9IEFUQVs0XSArIG4ueSAqIG4uejtcXG5cXHRBVEFbNV0gPSBBVEFbNV0gKyBuLnogKiBuLno7XFxuXFx0XFxuXFx0bGV0IGI6IGYzMiA9IGRvdChwLCBuKTtcXG5cXHRBdGIueCA9IEF0Yi54ICtuLnggKiBiO1xcblxcdEF0Yi55ID0gQXRiLnkgK24ueSAqIGI7XFxuXFx0QXRiLnogPSBBdGIueiArbi56ICogYjtcXG5cXHRidGIgPSBidGIgKyBiICogYjtcXG5cXHRcXG5cXHRwb2ludGFjY3VtLnggPSBwb2ludGFjY3VtLnggK3AueDtcXG5cXHRwb2ludGFjY3VtLnkgPSBwb2ludGFjY3VtLnkgK3AueTtcXG5cXHRwb2ludGFjY3VtLnogPSBwb2ludGFjY3VtLnogK3AuejtcXG5cXHRwb2ludGFjY3VtLncgPSBwb2ludGFjY3VtLncgKzEuMDtcXG59XFxuXFxuZm4gcWVmX2NhbGNfZXJyb3IoeDogdmVjNDxmMzI+KSAtPiBmMzJcXG57XFxuXFx0dmFyIHRtcDogdmVjNDxmMzI+ID0gc3ZkX3ZtdWxfc3ltKHgpO1xcblxcdHRtcCA9IEF0YiAtIHRtcDtcXG5cXHRcXG5cXHRyZXR1cm4gZG90KHRtcCwgdG1wKTtcXG59XFxuXFxuZm4gcWVmX3NvbHZlKCkgLT4gdmVjNDxmMzI+XFxue1xcblxcdGxldCBtYXNzcG9pbnQ6IHZlYzQ8ZjMyPiA9IHZlYzQ8ZjMyPihwb2ludGFjY3VtLnggLyBwb2ludGFjY3VtLncsIHBvaW50YWNjdW0ueSAvIHBvaW50YWNjdW0udywgcG9pbnRhY2N1bS56IC8gcG9pbnRhY2N1bS53LCBwb2ludGFjY3VtLncgLyBwb2ludGFjY3VtLncpO1xcblxcdFxcblxcdHZhciBBX21wOiB2ZWM0PGYzMj4gPSBzdmRfdm11bF9zeW0obWFzc3BvaW50KTtcXG5cXHRBX21wID0gQXRiIC0gQV9tcDtcXG5cXHRcXG5cXHRsZXQgeDogdmVjNDxmMzI+ID0gc3ZkX3NvbHZlX0FUQV9BdGIoQV9tcCk7XFxuXFx0XFxuXFx0bGV0IGVycm9yOiBmMzIgPSBxZWZfY2FsY19lcnJvcih4KTtcXG5cXHRsZXQgcjogdmVjNDxmMzI+ID0geCArIG1hc3Nwb2ludDtcXG5cXHRcXG5cXHRyZXR1cm4gdmVjNDxmMzI+KHIueCwgci55LCByLnosIGVycm9yKTtcXG59XFxuXFxuI2ltcG9ydCBkZW5zaXR5XFxuXFxuZm4gQXBwcm94aW1hdGVaZXJvQ3Jvc3NpbmdQb3NpdGlvbihwMDogdmVjMzxmMzI+LCBwMTogdmVjMzxmMzI+KSAtPiB2ZWMzPGYzMj5cXG57XFxuXFx0dmFyIG1pblZhbHVlOiBmMzIgPSAxMDAwMDAuMDtcXG5cXHR2YXIgdDogZjMyID0gMC4wO1xcblxcdHZhciBjdXJyZW50VDogZjMyID0gMC4wO1xcblxcdGxldCBzdGVwczogZjMyID0gOC4wO1xcblxcdGxldCBpbmNyZW1lbnQ6IGYzMiA9IDEuMCAvIHN0ZXBzO1xcblxcdGxvb3Age1xcblxcdFxcdGlmIChjdXJyZW50VCA+IDEuMCkgeyBicmVhazsgfVxcblxcblxcdFxcdGxldCBwOiB2ZWMzPGYzMj4gPSBwMCArICgocDEgLSBwMCkgKiBjdXJyZW50VCk7XFxuXFx0XFx0bGV0IGRlbnNpdHk6IGYzMiA9IGFicyhnZXREZW5zaXR5KHApKTtcXG5cXHRcXHRpZiAoZGVuc2l0eSA8IG1pblZhbHVlKVxcblxcdFxcdHtcXG5cXHRcXHRcXHRtaW5WYWx1ZSA9IGRlbnNpdHk7XFxuXFx0XFx0XFx0dCA9IGN1cnJlbnRUO1xcblxcdFxcdH1cXG5cXG5cXHRcXHRjb250aW51aW5nIHtcXG5cXHRcXHRcXHRjdXJyZW50VCA9IGN1cnJlbnRUICsgaW5jcmVtZW50O1xcblxcdFxcdH1cXG5cXHR9XFxuXFxuXFx0cmV0dXJuIHAwICsgKChwMSAtIHAwKSAqIHQpO1xcbn1cXG5cXG5mbiBDYWxjdWxhdGVTdXJmYWNlTm9ybWFsKHA6IHZlYzM8ZjMyPikgLT4gdmVjMzxmMzI+XFxue1xcblxcdGxldCBIOiBmMzIgPSB1bmlmb3Jtcy5zdHJpZGU7IC8vIFRoaXMgbmVlZHMgdG8gc2NhbGUgYmFzZWQgb24gc29tZXRoaW5nLi4uXFxuXFx0bGV0IGR4OiBmMzIgPSBnZXREZW5zaXR5KHAgKyB2ZWMzPGYzMj4oSCwgMC4wLCAwLjApKSAtIGdldERlbnNpdHkocCAtIHZlYzM8ZjMyPihILCAwLjAsIDAuMCkpO1xcblxcdGxldCBkeTogZjMyID0gZ2V0RGVuc2l0eShwICsgdmVjMzxmMzI+KDAuMCwgSCwgMC4wKSkgLSBnZXREZW5zaXR5KHAgLSB2ZWMzPGYzMj4oMC4wLCBILCAwLjApKTtcXG5cXHRsZXQgZHo6IGYzMiA9IGdldERlbnNpdHkocCArIHZlYzM8ZjMyPigwLjAsIDAuMCwgSCkpIC0gZ2V0RGVuc2l0eShwIC0gdmVjMzxmMzI+KDAuMCwgMC4wLCBIKSk7XFxuXFxuXFx0cmV0dXJuIG5vcm1hbGl6ZSh2ZWMzPGYzMj4oZHgsIGR5LCBkeikpO1xcbn1cXG5cXG5AY29tcHV0ZSBAd29ya2dyb3VwX3NpemUoMTI4KVxcbmZuIG1haW4oQGJ1aWx0aW4oZ2xvYmFsX2ludm9jYXRpb25faWQpIEdsb2JhbEludm9jYXRpb25JRCA6IHZlYzM8dTMyPikge1xcblxcdGxldCB0cnVlSW5kZXg6IHUzMiA9IEdsb2JhbEludm9jYXRpb25JRC54O1xcblxcblxcdGlmICh0cnVlSW5kZXggPCBjb3JuZXJJbmRleC5jb3JuZXJDb3VudClcXG5cXHR7XFxuXFx0XFx0bGV0IHVyZXM6IHUzMiA9IDMydTtcXG5cXG5cXHRcXHRsZXQgbm9kZVNpemU6IHUzMiA9IHUzMih1bmlmb3Jtcy5zdHJpZGUpO1xcblxcblxcdFxcdGxldCB2b3hlbEluZGV4OiB1MzIgPSBjb3JuZXJJbmRleC5jb3JuZXJJbmRleGVzW3RydWVJbmRleF07XFxuXFx0XFx0bGV0IHo6IHUzMiA9IHZveGVsSW5kZXggLyAodXJlcyAqIHVyZXMpO1xcblxcdFxcdGxldCB5OiB1MzIgPSAodm94ZWxJbmRleCAtICh6ICogdXJlcyAqIHVyZXMpKSAvIHVyZXM7XFxuXFx0XFx0bGV0IHg6IHUzMiA9IHZveGVsSW5kZXggLSAoeiAqIHVyZXMgKiB1cmVzKSAtICh5ICogdXJlcyk7XFxuXFxuXFx0XFx0bGV0IGNvcm5lcnM6IHUzMiA9IHZveGVsTWF0ZXJpYWxzLnZveGVsTWF0ZXJpYWxzW3ZveGVsSW5kZXhdO1xcblxcblxcdFxcdGxldCBub2RlUG9zOiB2ZWMzPGYzMj4gPSAodmVjMzxmMzI+KGYzMih4KSwgZjMyKHkpLCBmMzIgKHopKSAqIHVuaWZvcm1zLnN0cmlkZSkgKyB1bmlmb3Jtcy5jaHVua1Bvc2l0aW9uO1xcblxcdFxcdHZveGVscy52b3hlbHNbdHJ1ZUluZGV4XS52b3hNaW4gPSBub2RlUG9zO1xcblxcdFxcdGxldCBNQVhfQ1JPU1NJTkdTOiBpMzIgPSA2O1xcblxcdFxcdHZhciBlZGdlQ291bnQ6IGkzMiA9IDA7XFxuXFxuXFx0XFx0cG9pbnRhY2N1bSA9IHZlYzQ8ZjMyPigwLjAsIDAuMCwgMC4wLCAwLjApO1xcblxcdFxcdEFUQSA9IGFycmF5PGYzMiwgNj4oMC4wLCAwLjAsIDAuMCwgMC4wLCAwLjAsIDAuMCk7XFxuXFx0XFx0QXRiID0gdmVjNDxmMzI+KDAuMCwgMC4wLCAwLjAsIDAuMCk7XFxuXFx0XFx0dmFyIGF2ZXJhZ2VOb3JtYWw6IHZlYzM8ZjMyPiA9IHZlYzM8ZjMyPigwLjAsIDAuMCwgMC4wKTtcXG5cXHRcXHRidGIgPSAwLjA7XFxuXFxuXFx0XFx0dmFyIGo6IGkzMiA9IDA7XFxuXFx0XFx0bG9vcCB7XFxuXFx0XFx0XFx0aWYgKCEoaiA8IDEyICYmIGVkZ2VDb3VudCA8PSBNQVhfQ1JPU1NJTkdTKSkge1xcblxcdFxcdFxcdFxcdGJyZWFrO1xcblxcdFxcdFxcdH1cXG5cXG5cXHRcXHRcXHRsZXQgYzE6IGkzMiA9IGVkZ2V2bWFwW2pdLng7XFxuXFx0XFx0XFx0bGV0IGMyOiBpMzIgPSBlZGdldm1hcFtqXS55O1xcblxcblxcdFxcdFxcdGxldCBtMTogdTMyID0gKGNvcm5lcnMgPj4gdTMyKGMxKSkgJiAxdTtcXG5cXHRcXHRcXHRsZXQgbTI6IHUzMiA9IChjb3JuZXJzID4+IHUzMihjMikpICYgMXU7XFxuXFxuXFx0XFx0XFx0aWYgKCEoKG0xID09IDB1ICYmIG0yID09IDB1KSB8fCAobTEgPT0gMXUgJiYgbTIgPT0gMXUpKSlcXG5cXHRcXHRcXHR7XFxuXFx0XFx0XFx0XFx0bGV0IHAxOiB2ZWMzPGYzMj4gPSBub2RlUG9zICsgdmVjMzxmMzI+KGYzMihDSElMRF9NSU5fT0ZGU0VUU1tjMV0ueCAqIG5vZGVTaXplKSwgZjMyKENISUxEX01JTl9PRkZTRVRTW2MxXS55ICogbm9kZVNpemUpLCBmMzIoQ0hJTERfTUlOX09GRlNFVFNbYzFdLnogKiBub2RlU2l6ZSkpO1xcblxcdFxcdFxcdFxcdGxldCBwMjogdmVjMzxmMzI+ID0gbm9kZVBvcyArIHZlYzM8ZjMyPihmMzIoQ0hJTERfTUlOX09GRlNFVFNbYzJdLnggKiBub2RlU2l6ZSksIGYzMihDSElMRF9NSU5fT0ZGU0VUU1tjMl0ueSAqIG5vZGVTaXplKSwgZjMyKENISUxEX01JTl9PRkZTRVRTW2MyXS56ICogbm9kZVNpemUpKTtcXG5cXHRcXHRcXHRcXHRsZXQgcDogdmVjMzxmMzI+ID0gQXBwcm94aW1hdGVaZXJvQ3Jvc3NpbmdQb3NpdGlvbihwMSwgcDIpO1xcblxcdFxcdFxcdFxcdGxldCBuOiB2ZWMzPGYzMj4gPSBDYWxjdWxhdGVTdXJmYWNlTm9ybWFsKHApO1xcblxcblxcdFxcdFxcdFxcdHFlZl9hZGQodmVjNDxmMzI+KG4ueCwgbi55LCBuLnosIDAuMCksIHZlYzQ8ZjMyPihwLngsIHAueSwgcC56LCAwLjApKTtcXG5cXG5cXHRcXHRcXHRcXHRhdmVyYWdlTm9ybWFsID0gYXZlcmFnZU5vcm1hbCArIG47XFxuXFxuXFx0XFx0XFx0XFx0ZWRnZUNvdW50ID0gZWRnZUNvdW50ICsgMTtcXG5cXHRcXHRcXHR9XFxuXFxuXFx0XFx0XFx0Y29udGludWluZyB7XFxuXFx0XFx0XFx0XFx0aiA9IGogKyAxO1xcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFxuXFxuXFx0XFx0YXZlcmFnZU5vcm1hbCA9IG5vcm1hbGl6ZShhdmVyYWdlTm9ybWFsIC8gdmVjMzxmMzI+KGYzMihlZGdlQ291bnQpLCBmMzIoZWRnZUNvdW50KSwgZjMyKGVkZ2VDb3VudCkpKTtcXG5cXG5cXHRcXHRsZXQgY29tOiB2ZWMzPGYzMj4gPSB2ZWMzPGYzMj4ocG9pbnRhY2N1bS54IC8gcG9pbnRhY2N1bS53LCBwb2ludGFjY3VtLnkgLyBwb2ludGFjY3VtLncsIHBvaW50YWNjdW0ueiAvIHBvaW50YWNjdW0udyk7XFxuXFxuXFx0XFx0bGV0IHJlc3VsdDogdmVjNDxmMzI+ID0gcWVmX3NvbHZlKCk7XFxuXFx0XFx0dmFyIHNvbHZlZF9wb3NpdGlvbjogdmVjMzxmMzI+ID0gcmVzdWx0Lnh5ejtcXG5cXHRcXHRsZXQgZXJyb3I6IGYzMiA9IHJlc3VsdC53O1xcblxcblxcblxcdFxcdGxldCBNaW46IHZlYzM8ZjMyPiA9IG5vZGVQb3M7XFxuXFx0XFx0bGV0IE1heDogdmVjMzxmMzI+ID0gbm9kZVBvcyArIHZlYzM8ZjMyPigxLjAsIDEuMCwgMS4wKTtcXG5cXHRcXHRpZiAoc29sdmVkX3Bvc2l0aW9uLnggPCBNaW4ueCB8fCBzb2x2ZWRfcG9zaXRpb24ueCA+IE1heC54IHx8XFxuXFx0XFx0XFx0XFx0c29sdmVkX3Bvc2l0aW9uLnkgPCBNaW4ueSB8fCBzb2x2ZWRfcG9zaXRpb24ueSA+IE1heC55IHx8XFxuXFx0XFx0XFx0XFx0c29sdmVkX3Bvc2l0aW9uLnogPCBNaW4ueiB8fCBzb2x2ZWRfcG9zaXRpb24ueiA+IE1heC56KVxcblxcdFxcdHtcXG5cXHRcXHRcXHRzb2x2ZWRfcG9zaXRpb24gPSBjb207XFxuXFx0XFx0fVxcblxcblxcdFxcdHZveGVscy52b3hlbHNbdHJ1ZUluZGV4XS52ZXJ0UG9pbnQgPSBzb2x2ZWRfcG9zaXRpb247XFxuXFx0XFx0dm94ZWxzLnZveGVsc1t0cnVlSW5kZXhdLmF2Z05vcm1hbCA9IGF2ZXJhZ2VOb3JtYWw7XFxuXFx0XFx0dm94ZWxzLnZveGVsc1t0cnVlSW5kZXhdLm51bVBvaW50cyA9IGYzMihlZGdlQ291bnQpO1xcblxcdFxcdHZveGVscy52b3hlbHNbdHJ1ZUluZGV4XS5jb3JuZXJzID0gZjMyKHZveGVsTWF0ZXJpYWxzLnZveGVsTWF0ZXJpYWxzW3ZveGVsSW5kZXhdKTtcXG5cXHR9XFxufVxcblxcbkBjb21wdXRlIEB3b3JrZ3JvdXBfc2l6ZSgxKVxcbmZuIGNvbXB1dGVNYXRlcmlhbHMoQGJ1aWx0aW4oZ2xvYmFsX2ludm9jYXRpb25faWQpIEdsb2JhbEludm9jYXRpb25JRCA6IHZlYzM8dTMyPikge1xcblxcdFxcdGxldCB3aWR0aCA9IHVuaWZvcm1zLndpZHRoO1xcbiAgICBsZXQgaW5kZXg6IHUzMiA9IEdsb2JhbEludm9jYXRpb25JRC56ICogd2lkdGggKiB3aWR0aCArIEdsb2JhbEludm9jYXRpb25JRC55ICogd2lkdGggKyBHbG9iYWxJbnZvY2F0aW9uSUQueDtcXG4gICAgbGV0IGNvcm5lclBvczogdmVjMzxmMzI+ID0gdmVjMzxmMzI+KGYzMihHbG9iYWxJbnZvY2F0aW9uSUQueCkgKiB1bmlmb3Jtcy5zdHJpZGUsIGYzMihHbG9iYWxJbnZvY2F0aW9uSUQueSkgKiB1bmlmb3Jtcy5zdHJpZGUsIGYzMihHbG9iYWxJbnZvY2F0aW9uSUQueikgKiB1bmlmb3Jtcy5zdHJpZGUpO1xcblxcbiAgICBsZXQgZGVuc2l0eTogZjMyID0gZ2V0RGVuc2l0eShjb3JuZXJQb3MgKyB1bmlmb3Jtcy5jaHVua1Bvc2l0aW9uKTtcXG5cXG5cXHRcXHRpZiAoZGVuc2l0eSA8IDAuMCkge1xcblxcdFxcdFxcdGlmIChsZW5ndGgoY29ybmVyUG9zICsgdW5pZm9ybXMuY2h1bmtQb3NpdGlvbikgPCAyMDAwLjApIHtcXG4gICAgICAgIC8vY29ybmVyTWF0ZXJpYWxzLmNvcm5lck1hdGVyaWFsc1tpbmRleF0gPSB1MzIocmFuZG9tKHZlYzIoZjMyKGluZGV4KSkpICogMjU1LjApICsgMTtcXG5cXHRcXHRcXHQgIGNvcm5lck1hdGVyaWFscy5jb3JuZXJNYXRlcmlhbHNbaW5kZXhdID0gMjU2dTtcXG5cXHRcXHRcXHR9IGVsc2Uge1xcbiAgICAgICAgY29ybmVyTWF0ZXJpYWxzLmNvcm5lck1hdGVyaWFsc1tpbmRleF0gPSB1MzIobGVuZ3RoKGNvcm5lclBvcykgLyB1bmlmb3Jtcy5zdHJpZGUgKiAyNTYuMCk7XFxuXFx0XFx0XFx0fVxcblxcdFxcdH0gZWxzZSB7XFxuXFx0XFx0XFx0Y29ybmVyTWF0ZXJpYWxzLmNvcm5lck1hdGVyaWFsc1tpbmRleF0gPSAwdTtcXG5cXHRcXHR9XFxufVwiOyIsImV4cG9ydCBkZWZhdWx0IFwibGV0IGZyZXEgPSAwLjAwMTtcXG5cXG5sZXQgTUFURVJJQUxfQUlSID0gMHU7XFxubGV0IE1BVEVSSUFMX1JPQ0sgPSAxdTtcXG5sZXQgTUFURVJJQUxfV09PRCA9IDJ1O1xcbmxldCBNQVRFUklBTF9GSVJFID0gM3U7XFxuXFxuc3RydWN0IERlbnNpdHkge1xcbiAgZGVuc2l0eTogZjMyLFxcbiAgbWF0ZXJpYWw6IHUzMlxcbn1cXG5cXG5mbiBzdWJ0cmFjdChiYXNlOiBEZW5zaXR5LCBzdWI6IGYzMikgLT4gRGVuc2l0eSB7XFxuICByZXR1cm4gRGVuc2l0eShtYXgoYmFzZS5kZW5zaXR5LCBzdWIpLCBiYXNlLm1hdGVyaWFsKTtcXG59XFxuXFxuZm4gYWRkKGJhc2U6IERlbnNpdHksIGFkZDogZjMyLCBtYXRlcmlhbDogdTMyKSAtPiBEZW5zaXR5IHtcXG4gIGlmIChhZGQgPD0gMCkge1xcbiAgICByZXR1cm4gRGVuc2l0eShhZGQsIG1hdGVyaWFsKTtcXG4gIH1cXG4gIHJldHVybiBiYXNlO1xcbn1cXG5cXG5mbiBCb3god29ybGRQb3NpdGlvbjogdmVjMzxmMzI+LCBvcmlnaW46IHZlYzM8ZjMyPiwgaGFsZkRpbWVuc2lvbnM6IHZlYzM8ZjMyPikgLT4gZjMyXFxue1xcblxcdGxldCBsb2NhbF9wb3M6IHZlYzM8ZjMyPiA9IHdvcmxkUG9zaXRpb24gLSBvcmlnaW47XFxuXFx0bGV0IHBvczogdmVjMzxmMzI+ID0gbG9jYWxfcG9zO1xcblxcblxcdGxldCBkOiB2ZWMzPGYzMj4gPSB2ZWMzPGYzMj4oYWJzKHBvcy54KSwgYWJzKHBvcy55KSwgYWJzKHBvcy56KSkgLSBoYWxmRGltZW5zaW9ucztcXG5cXHRsZXQgbTogZjMyID0gbWF4KGQueCwgbWF4KGQueSwgZC56KSk7XFxuXFx0cmV0dXJuIGNsYW1wKG1pbihtLCBsZW5ndGgobWF4KGQsIHZlYzM8ZjMyPigwLjAsIDAuMCwgMC4wKSkpKSwgLTEwMC4wLCAxMDAuMCk7XFxufVxcblxcbmZuIFRvcnVzKHdvcmxkUG9zaXRpb246IHZlYzM8ZjMyPiwgb3JpZ2luOiB2ZWMzPGYzMj4sIHQ6IHZlYzM8ZjMyPikgLT4gZjMyXFxue1xcblxcdGxldCBwOiB2ZWMzPGYzMj4gPSB3b3JsZFBvc2l0aW9uIC0gb3JpZ2luO1xcblxcbiAgbGV0IHE6IHZlYzI8ZjMyPiA9IHZlYzI8ZjMyPihsZW5ndGgocC54eiktdC54LHAueSk7XFxuICByZXR1cm4gbGVuZ3RoKHEpLXQueTtcXG59XFxuXFxuZm4gU3BoZXJlKHdvcmxkUG9zaXRpb246IHZlYzM8ZjMyPiwgb3JpZ2luOiB2ZWMzPGYzMj4sIHJhZGl1czogZjMyKSAtPiBmMzJcXG57XFxuXFx0cmV0dXJuIGNsYW1wKGxlbmd0aCh3b3JsZFBvc2l0aW9uIC0gb3JpZ2luKSAtIHJhZGl1cywgLTEwMC4wLCAxMDAuMCk7XFxufVxcblxcbmZuIEZyYWN0YWxOb2lzZTIxKG9jdGF2ZXM6IGkzMiwgZnJlcXVlbmN5OiBmMzIsIGxhY3VuYXJpdHk6IGYzMiwgcGVyc2lzdGVuY2U6IGYzMiwgcG9zaXRpb246IHZlYzM8ZjMyPikgLT4gZjMyXFxue1xcblxcdGxldCBTQ0FMRTogZjMyID0gMS4wIC8gMTI4LjA7XFxuXFx0dmFyIHA6IHZlYzM8ZjMyPiA9IHBvc2l0aW9uICogU0NBTEU7XFxuXFx0dmFyIG5vaXM6IGYzMiA9IDAuMDtcXG5cXG5cXHR2YXIgYW1wbGl0dWRlOiBmMzIgPSAxLjA7XFxuXFx0cCA9IHAgKiBmcmVxdWVuY3k7XFxuXFxuXFx0dmFyIGk6IGkzMiA9IDA7XFxuXFx0bG9vcCB7XFxuXFx0XFx0aWYgKGkgPj0gb2N0YXZlcykgeyBicmVhazsgfVxcblxcblxcdFxcdG5vaXMgPSBub2lzICsgcGVybGluTm9pc2UzKHApICogYW1wbGl0dWRlO1xcblxcdFxcdHAgPSBwICogbGFjdW5hcml0eTtcXG5cXHRcXHRhbXBsaXR1ZGUgPSBhbXBsaXR1ZGUgKiBwZXJzaXN0ZW5jZTtcXG5cXG5cXHRcXHRjb250aW51aW5nIHtcXG5cXHRcXHRcXHRpID0gaSArIDE7XFxuXFx0XFx0fVxcblxcdH1cXG5cXG5cXHRyZXR1cm4gbm9pcztcXG59XFxuXFxuZm4gRnJhY3RhbE5vaXNlMihmcmVxdWVuY3k6IGYzMiwgbGFjdW5hcml0eTogZjMyLCBwZXJzaXN0ZW5jZTogZjMyLCBwb3NpdGlvbjogdmVjMzxmMzI+KSAtPiBmMzJcXG57XFxuXFx0bGV0IFNDQUxFOiBmMzIgPSAxLjAgLyAxMjguMDtcXG5cXHR2YXIgcDogdmVjMzxmMzI+ID0gcG9zaXRpb24gKiBTQ0FMRTtcXG5cXHR2YXIgbm9pczogZjMyID0gMC4wO1xcblxcblxcdHZhciBhbXBsaXR1ZGU6IGYzMiA9IDEuMDtcXG5cXHRwID0gcCAqIGZyZXF1ZW5jeTtcXG5cXG5cXHRub2lzID0gbm9pcyArIHBlcmxpbk5vaXNlMyhwKSAqIGFtcGxpdHVkZTtcXG5cXHRwID0gcCAqIGxhY3VuYXJpdHk7XFxuXFx0YW1wbGl0dWRlID0gYW1wbGl0dWRlICogcGVyc2lzdGVuY2U7XFxuXFxuXFx0cmV0dXJuIG5vaXM7XFxufVxcblxcbmZuIHBlcm11dGU0MSh4OiB2ZWM0PGYzMj4pIC0+IHZlYzQ8ZjMyPiB7IHJldHVybiAoKHggKiAzNC4gKyAxLikgKiB4KSAlIHZlYzQ8ZjMyPigyODkuKTsgfVxcbmZuIHRheWxvckludlNxcnQ0KHI6IHZlYzQ8ZjMyPikgLT4gdmVjNDxmMzI+IHsgcmV0dXJuIDEuNzkyODQyOTE0MDAxNTkgLSAwLjg1MzczNDcyMDk1MzE0ICogcjsgfVxcbmZuIGZhZGUzKHQ6IHZlYzM8ZjMyPikgLT4gdmVjMzxmMzI+IHsgcmV0dXJuIHQgKiB0ICogdCAqICh0ICogKHQgKiA2LiAtIDE1LikgKyAxMC4pOyB9XFxuXFxuZm4gcGVybGluTm9pc2UzKFA6IHZlYzM8ZjMyPikgLT4gZjMyIHtcXG4gIHZhciBQaTAgOiB2ZWMzPGYzMj4gPSBmbG9vcihQKTsgLy8gSW50ZWdlciBwYXJ0IGZvciBpbmRleGluZ1xcbiAgdmFyIFBpMSA6IHZlYzM8ZjMyPiA9IFBpMCArIHZlYzM8ZjMyPigxLik7IC8vIEludGVnZXIgcGFydCArIDFcXG4gIFBpMCA9IFBpMCAlIHZlYzM8ZjMyPigyODkuKTtcXG4gIFBpMSA9IFBpMSAlIHZlYzM8ZjMyPigyODkuKTtcXG4gIGxldCBQZjAgPSBmcmFjdChQKTsgLy8gRnJhY3Rpb25hbCBwYXJ0IGZvciBpbnRlcnBvbGF0aW9uXFxuICBsZXQgUGYxID0gUGYwIC0gdmVjMzxmMzI+KDEuKTsgLy8gRnJhY3Rpb25hbCBwYXJ0IC0gMS5cXG4gIGxldCBpeCA9IHZlYzQ8ZjMyPihQaTAueCwgUGkxLngsIFBpMC54LCBQaTEueCk7XFxuICBsZXQgaXkgPSB2ZWM0PGYzMj4oUGkwLnl5LCBQaTEueXkpO1xcbiAgbGV0IGl6MCA9IFBpMC56enp6O1xcbiAgbGV0IGl6MSA9IFBpMS56enp6O1xcblxcbiAgbGV0IGl4eSA9IHBlcm11dGU0MShwZXJtdXRlNDEoaXgpICsgaXkpO1xcbiAgbGV0IGl4eTAgPSBwZXJtdXRlNDEoaXh5ICsgaXowKTtcXG4gIGxldCBpeHkxID0gcGVybXV0ZTQxKGl4eSArIGl6MSk7XFxuXFxuICB2YXIgZ3gwOiB2ZWM0PGYzMj4gPSBpeHkwIC8gNy47XFxuICB2YXIgZ3kwOiB2ZWM0PGYzMj4gPSBmcmFjdChmbG9vcihneDApIC8gNy4pIC0gMC41O1xcbiAgZ3gwID0gZnJhY3QoZ3gwKTtcXG4gIHZhciBnejA6IHZlYzQ8ZjMyPiA9IHZlYzQ8ZjMyPigwLjUpIC0gYWJzKGd4MCkgLSBhYnMoZ3kwKTtcXG4gIHZhciBzejA6IHZlYzQ8ZjMyPiA9IHN0ZXAoZ3owLCB2ZWM0PGYzMj4oMC4pKTtcXG4gIGd4MCA9IGd4MCArIHN6MCAqIChzdGVwKHZlYzQ8ZjMyPigwLiksIGd4MCkgLSAwLjUpO1xcbiAgZ3kwID0gZ3kwICsgc3owICogKHN0ZXAodmVjNDxmMzI+KDAuKSwgZ3kwKSAtIDAuNSk7XFxuXFxuICB2YXIgZ3gxOiB2ZWM0PGYzMj4gPSBpeHkxIC8gNy47XFxuICB2YXIgZ3kxOiB2ZWM0PGYzMj4gPSBmcmFjdChmbG9vcihneDEpIC8gNy4pIC0gMC41O1xcbiAgZ3gxID0gZnJhY3QoZ3gxKTtcXG4gIHZhciBnejE6IHZlYzQ8ZjMyPiA9IHZlYzQ8ZjMyPigwLjUpIC0gYWJzKGd4MSkgLSBhYnMoZ3kxKTtcXG4gIHZhciBzejE6IHZlYzQ8ZjMyPiA9IHN0ZXAoZ3oxLCB2ZWM0PGYzMj4oMC4pKTtcXG4gIGd4MSA9IGd4MSAtIHN6MSAqIChzdGVwKHZlYzQ8ZjMyPigwLiksIGd4MSkgLSAwLjUpO1xcbiAgZ3kxID0gZ3kxIC0gc3oxICogKHN0ZXAodmVjNDxmMzI+KDAuKSwgZ3kxKSAtIDAuNSk7XFxuXFxuICB2YXIgZzAwMDogdmVjMzxmMzI+ID0gdmVjMzxmMzI+KGd4MC54LCBneTAueCwgZ3owLngpO1xcbiAgdmFyIGcxMDA6IHZlYzM8ZjMyPiA9IHZlYzM8ZjMyPihneDAueSwgZ3kwLnksIGd6MC55KTtcXG4gIHZhciBnMDEwOiB2ZWMzPGYzMj4gPSB2ZWMzPGYzMj4oZ3gwLnosIGd5MC56LCBnejAueik7XFxuICB2YXIgZzExMDogdmVjMzxmMzI+ID0gdmVjMzxmMzI+KGd4MC53LCBneTAudywgZ3owLncpO1xcbiAgdmFyIGcwMDE6IHZlYzM8ZjMyPiA9IHZlYzM8ZjMyPihneDEueCwgZ3kxLngsIGd6MS54KTtcXG4gIHZhciBnMTAxOiB2ZWMzPGYzMj4gPSB2ZWMzPGYzMj4oZ3gxLnksIGd5MS55LCBnejEueSk7XFxuICB2YXIgZzAxMTogdmVjMzxmMzI+ID0gdmVjMzxmMzI+KGd4MS56LCBneTEueiwgZ3oxLnopO1xcbiAgdmFyIGcxMTE6IHZlYzM8ZjMyPiA9IHZlYzM8ZjMyPihneDEudywgZ3kxLncsIGd6MS53KTtcXG5cXG4gIGxldCBub3JtMCA9IHRheWxvckludlNxcnQ0KFxcbiAgICAgIHZlYzQ8ZjMyPihkb3QoZzAwMCwgZzAwMCksIGRvdChnMDEwLCBnMDEwKSwgZG90KGcxMDAsIGcxMDApLCBkb3QoZzExMCwgZzExMCkpKTtcXG4gIGcwMDAgPSBnMDAwICogbm9ybTAueDtcXG4gIGcwMTAgPSBnMDEwICogbm9ybTAueTtcXG4gIGcxMDAgPSBnMTAwICogbm9ybTAuejtcXG4gIGcxMTAgPSBnMTEwICogbm9ybTAudztcXG4gIGxldCBub3JtMSA9IHRheWxvckludlNxcnQ0KFxcbiAgICAgIHZlYzQ8ZjMyPihkb3QoZzAwMSwgZzAwMSksIGRvdChnMDExLCBnMDExKSwgZG90KGcxMDEsIGcxMDEpLCBkb3QoZzExMSwgZzExMSkpKTtcXG4gIGcwMDEgPSBnMDAxICogbm9ybTEueDtcXG4gIGcwMTEgPSBnMDExICogbm9ybTEueTtcXG4gIGcxMDEgPSBnMTAxICogbm9ybTEuejtcXG4gIGcxMTEgPSBnMTExICogbm9ybTEudztcXG5cXG4gIGxldCBuMDAwID0gZG90KGcwMDAsIFBmMCk7XFxuICBsZXQgbjEwMCA9IGRvdChnMTAwLCB2ZWMzPGYzMj4oUGYxLngsIFBmMC55eikpO1xcbiAgbGV0IG4wMTAgPSBkb3QoZzAxMCwgdmVjMzxmMzI+KFBmMC54LCBQZjEueSwgUGYwLnopKTtcXG4gIGxldCBuMTEwID0gZG90KGcxMTAsIHZlYzM8ZjMyPihQZjEueHksIFBmMC56KSk7XFxuICBsZXQgbjAwMSA9IGRvdChnMDAxLCB2ZWMzPGYzMj4oUGYwLnh5LCBQZjEueikpO1xcbiAgbGV0IG4xMDEgPSBkb3QoZzEwMSwgdmVjMzxmMzI+KFBmMS54LCBQZjAueSwgUGYxLnopKTtcXG4gIGxldCBuMDExID0gZG90KGcwMTEsIHZlYzM8ZjMyPihQZjAueCwgUGYxLnl6KSk7XFxuICBsZXQgbjExMSA9IGRvdChnMTExLCBQZjEpO1xcblxcbiAgdmFyIGZhZGVfeHl6OiB2ZWMzPGYzMj4gPSBmYWRlMyhQZjApO1xcbiAgbGV0IHRlbXAgPSB2ZWM0PGYzMj4oZjMyKGZhZGVfeHl6LnopKTsgLy8gc2ltcGxpZnkgYWZ0ZXIgY2hyb21lIGJ1ZyBmaXhcXG4gIGxldCBuX3ogPSBtaXgodmVjNDxmMzI+KG4wMDAsIG4xMDAsIG4wMTAsIG4xMTApLCB2ZWM0PGYzMj4objAwMSwgbjEwMSwgbjAxMSwgbjExMSksIHRlbXApO1xcbiAgbGV0IG5feXogPSBtaXgobl96Lnh5LCBuX3ouencsIHZlYzI8ZjMyPihmMzIoZmFkZV94eXoueSkpKTsgLy8gc2ltcGxpZnkgYWZ0ZXIgY2hyb21lIGJ1ZyBmaXhcXG4gIGxldCBuX3h5eiA9IG1peChuX3l6LngsIG5feXoueSwgZmFkZV94eXoueCk7XFxuICByZXR1cm4gMi4yICogbl94eXo7XFxufVxcblxcbmZuIENhbGN1bGF0ZU5vaXNlVmFsdWUyKHBvczogdmVjMzxmMzI+LCBzY2FsZTogZjMyKSAtPiBmMzJcXG57XFxuXFx0cmV0dXJuIEZyYWN0YWxOb2lzZTIxKDQsIDAuNTM0MywgMi4yMzI0LCAwLjY4MzI0LCBwb3MgKiBzY2FsZSk7XFxufVxcblxcbmZuIENMZXJwMihhOiBmMzIsIGI6IGYzMiwgdDogZjMyKSAtPiBmMzJcXG57XFxuXFx0cmV0dXJuICgxLjAgLSB0KSAqIGEgKyB0ICogYjtcXG59XFxuXFxuZm4gY2FsY3VsYXRlRGVuc2l0eSh3b3JsZFBvc2l0aW9uOiB2ZWMzPGYzMj4pIC0+IERlbnNpdHkge1xcblxcdHZhciB3b3JsZFJhZGl1czogZjMyID0gMTAwMDAuMDtcXG5cXHR2YXIgd29ybGQ6IHZlYzM8ZjMyPiA9IHdvcmxkUG9zaXRpb24gLSB2ZWMzPGYzMj4od29ybGRSYWRpdXMpO1xcblxcdHZhciB3b3JsZERpc3Q6IGYzMiA9IGNsYW1wKC13b3JsZFJhZGl1cyArIGxlbmd0aCh3b3JsZCksIC0xMDAwLjAsIDEwMDAuMCk7XFxuXFxuXFx0bGV0IGZsYXRsYW5kTm9pc2VTY2FsZTogZjMyID0gMy4wO1xcblxcdGxldCBmbGF0bGFuZExlcnBBbW91bnQ6IGYzMiA9IDAuMDc7XFxuXFx0bGV0IGZsYXRsYW5kWVBlcmNlbnQ6IGYzMiA9IDEuMjtcXG5cXG5cXHRsZXQgcm9ja3lOb2lzZVNjYWxlOiBmMzIgPSAzLjA7XFxuXFx0bGV0IHJvY2t5TGVycEFtb3VudDogZjMyID0gMC4wNTtcXG5cXHRsZXQgcm9ja3lZUGVyY2VudDogZjMyID0gMC43O1xcblxcblxcdGxldCBtYXhNb3VudGFpbk1peExlcnBBbW91bnQ6IGYzMiA9IDAuMDc1O1xcblxcdGxldCBtaW5Nb3VudGFpbk1peExlcnBBbW91bnQ6IGYzMiA9IDEuMDtcXG5cXG5cXHRsZXQgcm9ja3lCbGVuZDogZjMyID0gMS4wO1xcblxcblxcdGxldCBtb3VudGFpbkJsZW5kOiBmMzIgPSBjbGFtcChhYnMoRnJhY3RhbE5vaXNlMigwLjUzNDMsIDIuMjMyNCwgMC42ODMyNCwgd29ybGQpKSAqIDQuMCwgMC4wLCAxLjApO1xcblxcdC8vbGV0IG1vdW50YWluQmxlbmQ6IGYzMiA9IDAuMDtcXG5cXG5cXHRsZXQgbW91bnRhaW46IGYzMiA9IENhbGN1bGF0ZU5vaXNlVmFsdWUyKHdvcmxkLCAwLjA3KTtcXG5cXHQvL2xldCBtb3VudGFpbjogZjMyID0gMC4wO1xcblxcblxcdHZhciBibG9iOiBmMzIgPSBDYWxjdWxhdGVOb2lzZVZhbHVlMih3b3JsZCwgZmxhdGxhbmROb2lzZVNjYWxlICsgKChyb2NreU5vaXNlU2NhbGUgLSBmbGF0bGFuZE5vaXNlU2NhbGUpICogcm9ja3lCbGVuZCkpO1xcblxcdC8vdmFyIGJsb2I6IGYzMiA9IDAuMDtcXG5cXHRibG9iID0gQ0xlcnAyKGJsb2IsICh3b3JsZERpc3QpICogKGZsYXRsYW5kWVBlcmNlbnQgKyAoKHJvY2t5WVBlcmNlbnQgLSBmbGF0bGFuZFlQZXJjZW50KSAqIHJvY2t5QmxlbmQpKSxcXG5cXHRcXHRcXHRcXHRmbGF0bGFuZExlcnBBbW91bnQgKyAoKHJvY2t5TGVycEFtb3VudCAtIGZsYXRsYW5kTGVycEFtb3VudCkgKiByb2NreUJsZW5kKSk7XFxuXFx0XFx0XFx0XFx0Ly8rIENMZXJwMihtb3VudGFpbiwgYmxvYiwgbWluTW91bnRhaW5NaXhMZXJwQW1vdW50ICsgKChtYXhNb3VudGFpbk1peExlcnBBbW91bnQgLSBtaW5Nb3VudGFpbk1peExlcnBBbW91bnQpICogbW91bnRhaW5CbGVuZCkpO1xcblxcbiAgdmFyIHJlc3VsdCA9IERlbnNpdHkoMS4wLCBNQVRFUklBTF9BSVIpO1xcblxcblxcdHJlc3VsdCA9IGFkZChyZXN1bHQsIGJsb2IsIE1BVEVSSUFMX1JPQ0spO1xcblxcbiAgcmVzdWx0ID0gYWRkKHJlc3VsdCwgQm94KHdvcmxkUG9zaXRpb24sIHZlYzM8ZjMyPigyMDAwMDAwLjAsIDE1MC4wLCA1MDAwLjApLCB2ZWMzPGYzMj4oNTAwMC4wLCAxMDAwLjAsIDUwMDAuMCkpLCBNQVRFUklBTF9XT09EKTtcXG4gIHJlc3VsdCA9IGFkZChyZXN1bHQsIFNwaGVyZSh3b3JsZFBvc2l0aW9uLCB2ZWMzPGYzMj4oNTAwMC4wLCAxMDAuMCwgMTAwLjApLCA1MDAwLjApLCBNQVRFUklBTF9ST0NLKTtcXG4gIHJlc3VsdCA9IGFkZChyZXN1bHQsIFNwaGVyZSh3b3JsZFBvc2l0aW9uLCB2ZWMzPGYzMj4oMTAwMDAuMCwgMTAwLjAsIDEwMC4wKSwgNTAwMC4wKSwgTUFURVJJQUxfUk9DSyk7XFxuICByZXN1bHQgPSBhZGQocmVzdWx0LCBTcGhlcmUod29ybGRQb3NpdGlvbiwgdmVjMzxmMzI+KDIwMDAwMDAuMCwgMTAwLjAsIDEwMC4wKSwgNTAwMC4wKSwgTUFURVJJQUxfUk9DSyk7XFxuXFxuICByZXN1bHQgPSBhZGQocmVzdWx0LCBTcGhlcmUod29ybGRQb3NpdGlvbiwgdmVjMzxmMzI+KDAuMCwgMC4wLCAwLjApLCAyMDAwMDAuMCksIE1BVEVSSUFMX0ZJUkUpO1xcblxcbiAgcmVzdWx0ID0gc3VidHJhY3QocmVzdWx0LCAtU3BoZXJlKHdvcmxkUG9zaXRpb24sIHZlYzM8ZjMyPigyMDAwMDAwLjAsIDAuMCwgMC4wKSwgMTAwMC4wKSk7XFxuICByZXN1bHQgPSBzdWJ0cmFjdChyZXN1bHQsIC1Cb3god29ybGRQb3NpdGlvbiwgdmVjMzxmMzI+KDIwMDAwMDAuMCwgMC4wLCAwLjApLCB2ZWMzPGYzMj4oNjAwMC4wLCA1MDAuMCwgNTAwLjApKSk7XFxuICByZXN1bHQgPSBzdWJ0cmFjdChyZXN1bHQsIC1Cb3god29ybGRQb3NpdGlvbiwgdmVjMzxmMzI+KDIwMDAwMDAuMCwgMC4wLCAwLjApLCB2ZWMzPGYzMj4oNTAwLjAsIDUwMC4wLCA1MDAwLjApKSk7XFxuXFxuICByZXR1cm4gcmVzdWx0O1xcbn1cXG5cXG5mbiBnZXREZW5zaXR5KHdvcmxkUG9zaXRpb246IHZlYzM8ZjMyPikgLT4gZjMyIHtcXG5cXHRyZXR1cm4gY2FsY3VsYXRlRGVuc2l0eSh3b3JsZFBvc2l0aW9uKS5kZW5zaXR5O1xcbn1cIjsiLCIvLyBBIGxpYnJhcnkgb2Ygc2VlZGFibGUgUk5HcyBpbXBsZW1lbnRlZCBpbiBKYXZhc2NyaXB0LlxuLy9cbi8vIFVzYWdlOlxuLy9cbi8vIHZhciBzZWVkcmFuZG9tID0gcmVxdWlyZSgnc2VlZHJhbmRvbScpO1xuLy8gdmFyIHJhbmRvbSA9IHNlZWRyYW5kb20oMSk7IC8vIG9yIGFueSBzZWVkLlxuLy8gdmFyIHggPSByYW5kb20oKTsgICAgICAgLy8gMCA8PSB4IDwgMS4gIEV2ZXJ5IGJpdCBpcyByYW5kb20uXG4vLyB2YXIgeCA9IHJhbmRvbS5xdWljaygpOyAvLyAwIDw9IHggPCAxLiAgMzIgYml0cyBvZiByYW5kb21uZXNzLlxuXG4vLyBhbGVhLCBhIDUzLWJpdCBtdWx0aXBseS13aXRoLWNhcnJ5IGdlbmVyYXRvciBieSBKb2hhbm5lcyBCYWFnw7hlLlxuLy8gUGVyaW9kOiB+Ml4xMTZcbi8vIFJlcG9ydGVkIHRvIHBhc3MgYWxsIEJpZ0NydXNoIHRlc3RzLlxudmFyIGFsZWEgPSByZXF1aXJlKCcuL2xpYi9hbGVhJyk7XG5cbi8vIHhvcjEyOCwgYSBwdXJlIHhvci1zaGlmdCBnZW5lcmF0b3IgYnkgR2VvcmdlIE1hcnNhZ2xpYS5cbi8vIFBlcmlvZDogMl4xMjgtMS5cbi8vIFJlcG9ydGVkIHRvIGZhaWw6IE1hdHJpeFJhbmsgYW5kIExpbmVhckNvbXAuXG52YXIgeG9yMTI4ID0gcmVxdWlyZSgnLi9saWIveG9yMTI4Jyk7XG5cbi8vIHhvcndvdywgR2VvcmdlIE1hcnNhZ2xpYSdzIDE2MC1iaXQgeG9yLXNoaWZ0IGNvbWJpbmVkIHBsdXMgd2V5bC5cbi8vIFBlcmlvZDogMl4xOTItMl4zMlxuLy8gUmVwb3J0ZWQgdG8gZmFpbDogQ29sbGlzaW9uT3ZlciwgU2ltcFBva2VyLCBhbmQgTGluZWFyQ29tcC5cbnZhciB4b3J3b3cgPSByZXF1aXJlKCcuL2xpYi94b3J3b3cnKTtcblxuLy8geG9yc2hpZnQ3LCBieSBGcmFuw6dvaXMgUGFubmV0b24gYW5kIFBpZXJyZSBMJ2VjdXllciwgdGFrZXNcbi8vIGEgZGlmZmVyZW50IGFwcHJvYWNoOiBpdCBhZGRzIHJvYnVzdG5lc3MgYnkgYWxsb3dpbmcgbW9yZSBzaGlmdHNcbi8vIHRoYW4gTWFyc2FnbGlhJ3Mgb3JpZ2luYWwgdGhyZWUuICBJdCBpcyBhIDctc2hpZnQgZ2VuZXJhdG9yXG4vLyB3aXRoIDI1NiBiaXRzLCB0aGF0IHBhc3NlcyBCaWdDcnVzaCB3aXRoIG5vIHN5c3RtYXRpYyBmYWlsdXJlcy5cbi8vIFBlcmlvZCAyXjI1Ni0xLlxuLy8gTm8gc3lzdGVtYXRpYyBCaWdDcnVzaCBmYWlsdXJlcyByZXBvcnRlZC5cbnZhciB4b3JzaGlmdDcgPSByZXF1aXJlKCcuL2xpYi94b3JzaGlmdDcnKTtcblxuLy8geG9yNDA5NiwgYnkgUmljaGFyZCBCcmVudCwgaXMgYSA0MDk2LWJpdCB4b3Itc2hpZnQgd2l0aCBhXG4vLyB2ZXJ5IGxvbmcgcGVyaW9kIHRoYXQgYWxzbyBhZGRzIGEgV2V5bCBnZW5lcmF0b3IuIEl0IGFsc28gcGFzc2VzXG4vLyBCaWdDcnVzaCB3aXRoIG5vIHN5c3RlbWF0aWMgZmFpbHVyZXMuICBJdHMgbG9uZyBwZXJpb2QgbWF5XG4vLyBiZSB1c2VmdWwgaWYgeW91IGhhdmUgbWFueSBnZW5lcmF0b3JzIGFuZCBuZWVkIHRvIGF2b2lkXG4vLyBjb2xsaXNpb25zLlxuLy8gUGVyaW9kOiAyXjQxMjgtMl4zMi5cbi8vIE5vIHN5c3RlbWF0aWMgQmlnQ3J1c2ggZmFpbHVyZXMgcmVwb3J0ZWQuXG52YXIgeG9yNDA5NiA9IHJlcXVpcmUoJy4vbGliL3hvcjQwOTYnKTtcblxuLy8gVHljaGUtaSwgYnkgU2FtdWVsIE5ldmVzIGFuZCBGaWxpcGUgQXJhdWpvLCBpcyBhIGJpdC1zaGlmdGluZyByYW5kb21cbi8vIG51bWJlciBnZW5lcmF0b3IgZGVyaXZlZCBmcm9tIENoYUNoYSwgYSBtb2Rlcm4gc3RyZWFtIGNpcGhlci5cbi8vIGh0dHBzOi8vZWRlbi5kZWkudWMucHQvfnNuZXZlcy9wdWJzLzIwMTEtc25mYTIucGRmXG4vLyBQZXJpb2Q6IH4yXjEyN1xuLy8gTm8gc3lzdGVtYXRpYyBCaWdDcnVzaCBmYWlsdXJlcyByZXBvcnRlZC5cbnZhciB0eWNoZWkgPSByZXF1aXJlKCcuL2xpYi90eWNoZWknKTtcblxuLy8gVGhlIG9yaWdpbmFsIEFSQzQtYmFzZWQgcHJuZyBpbmNsdWRlZCBpbiB0aGlzIGxpYnJhcnkuXG4vLyBQZXJpb2Q6IH4yXjE2MDBcbnZhciBzciA9IHJlcXVpcmUoJy4vc2VlZHJhbmRvbScpO1xuXG5zci5hbGVhID0gYWxlYTtcbnNyLnhvcjEyOCA9IHhvcjEyODtcbnNyLnhvcndvdyA9IHhvcndvdztcbnNyLnhvcnNoaWZ0NyA9IHhvcnNoaWZ0NztcbnNyLnhvcjQwOTYgPSB4b3I0MDk2O1xuc3IudHljaGVpID0gdHljaGVpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNyO1xuIiwiLy8gQSBwb3J0IG9mIGFuIGFsZ29yaXRobSBieSBKb2hhbm5lcyBCYWFnw7hlIDxiYWFnb2VAYmFhZ29lLmNvbT4sIDIwMTBcbi8vIGh0dHA6Ly9iYWFnb2UuY29tL2VuL1JhbmRvbU11c2luZ3MvamF2YXNjcmlwdC9cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ucXVpbmxhbi9iZXR0ZXItcmFuZG9tLW51bWJlcnMtZm9yLWphdmFzY3JpcHQtbWlycm9yXG4vLyBPcmlnaW5hbCB3b3JrIGlzIHVuZGVyIE1JVCBsaWNlbnNlIC1cblxuLy8gQ29weXJpZ2h0IChDKSAyMDEwIGJ5IEpvaGFubmVzIEJhYWfDuGUgPGJhYWdvZUBiYWFnb2Uub3JnPlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cblxuXG4oZnVuY3Rpb24oZ2xvYmFsLCBtb2R1bGUsIGRlZmluZSkge1xuXG5mdW5jdGlvbiBBbGVhKHNlZWQpIHtcbiAgdmFyIG1lID0gdGhpcywgbWFzaCA9IE1hc2goKTtcblxuICBtZS5uZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHQgPSAyMDkxNjM5ICogbWUuczAgKyBtZS5jICogMi4zMjgzMDY0MzY1Mzg2OTYzZS0xMDsgLy8gMl4tMzJcbiAgICBtZS5zMCA9IG1lLnMxO1xuICAgIG1lLnMxID0gbWUuczI7XG4gICAgcmV0dXJuIG1lLnMyID0gdCAtIChtZS5jID0gdCB8IDApO1xuICB9O1xuXG4gIC8vIEFwcGx5IHRoZSBzZWVkaW5nIGFsZ29yaXRobSBmcm9tIEJhYWdvZS5cbiAgbWUuYyA9IDE7XG4gIG1lLnMwID0gbWFzaCgnICcpO1xuICBtZS5zMSA9IG1hc2goJyAnKTtcbiAgbWUuczIgPSBtYXNoKCcgJyk7XG4gIG1lLnMwIC09IG1hc2goc2VlZCk7XG4gIGlmIChtZS5zMCA8IDApIHsgbWUuczAgKz0gMTsgfVxuICBtZS5zMSAtPSBtYXNoKHNlZWQpO1xuICBpZiAobWUuczEgPCAwKSB7IG1lLnMxICs9IDE7IH1cbiAgbWUuczIgLT0gbWFzaChzZWVkKTtcbiAgaWYgKG1lLnMyIDwgMCkgeyBtZS5zMiArPSAxOyB9XG4gIG1hc2ggPSBudWxsO1xufVxuXG5mdW5jdGlvbiBjb3B5KGYsIHQpIHtcbiAgdC5jID0gZi5jO1xuICB0LnMwID0gZi5zMDtcbiAgdC5zMSA9IGYuczE7XG4gIHQuczIgPSBmLnMyO1xuICByZXR1cm4gdDtcbn1cblxuZnVuY3Rpb24gaW1wbChzZWVkLCBvcHRzKSB7XG4gIHZhciB4ZyA9IG5ldyBBbGVhKHNlZWQpLFxuICAgICAgc3RhdGUgPSBvcHRzICYmIG9wdHMuc3RhdGUsXG4gICAgICBwcm5nID0geGcubmV4dDtcbiAgcHJuZy5pbnQzMiA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gKHhnLm5leHQoKSAqIDB4MTAwMDAwMDAwKSB8IDA7IH1cbiAgcHJuZy5kb3VibGUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gcHJuZygpICsgKHBybmcoKSAqIDB4MjAwMDAwIHwgMCkgKiAxLjExMDIyMzAyNDYyNTE1NjVlLTE2OyAvLyAyXi01M1xuICB9O1xuICBwcm5nLnF1aWNrID0gcHJuZztcbiAgaWYgKHN0YXRlKSB7XG4gICAgaWYgKHR5cGVvZihzdGF0ZSkgPT0gJ29iamVjdCcpIGNvcHkoc3RhdGUsIHhnKTtcbiAgICBwcm5nLnN0YXRlID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb3B5KHhnLCB7fSk7IH1cbiAgfVxuICByZXR1cm4gcHJuZztcbn1cblxuZnVuY3Rpb24gTWFzaCgpIHtcbiAgdmFyIG4gPSAweGVmYzgyNDlkO1xuXG4gIHZhciBtYXNoID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIGRhdGEgPSBTdHJpbmcoZGF0YSk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBuICs9IGRhdGEuY2hhckNvZGVBdChpKTtcbiAgICAgIHZhciBoID0gMC4wMjUxOTYwMzI4MjQxNjkzOCAqIG47XG4gICAgICBuID0gaCA+Pj4gMDtcbiAgICAgIGggLT0gbjtcbiAgICAgIGggKj0gbjtcbiAgICAgIG4gPSBoID4+PiAwO1xuICAgICAgaCAtPSBuO1xuICAgICAgbiArPSBoICogMHgxMDAwMDAwMDA7IC8vIDJeMzJcbiAgICB9XG4gICAgcmV0dXJuIChuID4+PiAwKSAqIDIuMzI4MzA2NDM2NTM4Njk2M2UtMTA7IC8vIDJeLTMyXG4gIH07XG5cbiAgcmV0dXJuIG1hc2g7XG59XG5cblxuaWYgKG1vZHVsZSAmJiBtb2R1bGUuZXhwb3J0cykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGltcGw7XG59IGVsc2UgaWYgKGRlZmluZSAmJiBkZWZpbmUuYW1kKSB7XG4gIGRlZmluZShmdW5jdGlvbigpIHsgcmV0dXJuIGltcGw7IH0pO1xufSBlbHNlIHtcbiAgdGhpcy5hbGVhID0gaW1wbDtcbn1cblxufSkoXG4gIHRoaXMsXG4gICh0eXBlb2YgbW9kdWxlKSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUsICAgIC8vIHByZXNlbnQgaW4gbm9kZS5qc1xuICAodHlwZW9mIGRlZmluZSkgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUgICAvLyBwcmVzZW50IHdpdGggYW4gQU1EIGxvYWRlclxuKTtcblxuXG4iLCIvLyBBIEphdmFzY3JpcHQgaW1wbGVtZW50YWlvbiBvZiB0aGUgXCJUeWNoZS1pXCIgcHJuZyBhbGdvcml0aG0gYnlcbi8vIFNhbXVlbCBOZXZlcyBhbmQgRmlsaXBlIEFyYXVqby5cbi8vIFNlZSBodHRwczovL2VkZW4uZGVpLnVjLnB0L35zbmV2ZXMvcHVicy8yMDExLXNuZmEyLnBkZlxuXG4oZnVuY3Rpb24oZ2xvYmFsLCBtb2R1bGUsIGRlZmluZSkge1xuXG5mdW5jdGlvbiBYb3JHZW4oc2VlZCkge1xuICB2YXIgbWUgPSB0aGlzLCBzdHJzZWVkID0gJyc7XG5cbiAgLy8gU2V0IHVwIGdlbmVyYXRvciBmdW5jdGlvbi5cbiAgbWUubmV4dCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBiID0gbWUuYiwgYyA9IG1lLmMsIGQgPSBtZS5kLCBhID0gbWUuYTtcbiAgICBiID0gKGIgPDwgMjUpIF4gKGIgPj4+IDcpIF4gYztcbiAgICBjID0gKGMgLSBkKSB8IDA7XG4gICAgZCA9IChkIDw8IDI0KSBeIChkID4+PiA4KSBeIGE7XG4gICAgYSA9IChhIC0gYikgfCAwO1xuICAgIG1lLmIgPSBiID0gKGIgPDwgMjApIF4gKGIgPj4+IDEyKSBeIGM7XG4gICAgbWUuYyA9IGMgPSAoYyAtIGQpIHwgMDtcbiAgICBtZS5kID0gKGQgPDwgMTYpIF4gKGMgPj4+IDE2KSBeIGE7XG4gICAgcmV0dXJuIG1lLmEgPSAoYSAtIGIpIHwgMDtcbiAgfTtcblxuICAvKiBUaGUgZm9sbG93aW5nIGlzIG5vbi1pbnZlcnRlZCB0eWNoZSwgd2hpY2ggaGFzIGJldHRlciBpbnRlcm5hbFxuICAgKiBiaXQgZGlmZnVzaW9uLCBidXQgd2hpY2ggaXMgYWJvdXQgMjUlIHNsb3dlciB0aGFuIHR5Y2hlLWkgaW4gSlMuXG4gIG1lLm5leHQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYSA9IG1lLmEsIGIgPSBtZS5iLCBjID0gbWUuYywgZCA9IG1lLmQ7XG4gICAgYSA9IChtZS5hICsgbWUuYiB8IDApID4+PiAwO1xuICAgIGQgPSBtZS5kIF4gYTsgZCA9IGQgPDwgMTYgXiBkID4+PiAxNjtcbiAgICBjID0gbWUuYyArIGQgfCAwO1xuICAgIGIgPSBtZS5iIF4gYzsgYiA9IGIgPDwgMTIgXiBkID4+PiAyMDtcbiAgICBtZS5hID0gYSA9IGEgKyBiIHwgMDtcbiAgICBkID0gZCBeIGE7IG1lLmQgPSBkID0gZCA8PCA4IF4gZCA+Pj4gMjQ7XG4gICAgbWUuYyA9IGMgPSBjICsgZCB8IDA7XG4gICAgYiA9IGIgXiBjO1xuICAgIHJldHVybiBtZS5iID0gKGIgPDwgNyBeIGIgPj4+IDI1KTtcbiAgfVxuICAqL1xuXG4gIG1lLmEgPSAwO1xuICBtZS5iID0gMDtcbiAgbWUuYyA9IDI2NTQ0MzU3NjkgfCAwO1xuICBtZS5kID0gMTM2NzEzMDU1MTtcblxuICBpZiAoc2VlZCA9PT0gTWF0aC5mbG9vcihzZWVkKSkge1xuICAgIC8vIEludGVnZXIgc2VlZC5cbiAgICBtZS5hID0gKHNlZWQgLyAweDEwMDAwMDAwMCkgfCAwO1xuICAgIG1lLmIgPSBzZWVkIHwgMDtcbiAgfSBlbHNlIHtcbiAgICAvLyBTdHJpbmcgc2VlZC5cbiAgICBzdHJzZWVkICs9IHNlZWQ7XG4gIH1cblxuICAvLyBNaXggaW4gc3RyaW5nIHNlZWQsIHRoZW4gZGlzY2FyZCBhbiBpbml0aWFsIGJhdGNoIG9mIDY0IHZhbHVlcy5cbiAgZm9yICh2YXIgayA9IDA7IGsgPCBzdHJzZWVkLmxlbmd0aCArIDIwOyBrKyspIHtcbiAgICBtZS5iIF49IHN0cnNlZWQuY2hhckNvZGVBdChrKSB8IDA7XG4gICAgbWUubmV4dCgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvcHkoZiwgdCkge1xuICB0LmEgPSBmLmE7XG4gIHQuYiA9IGYuYjtcbiAgdC5jID0gZi5jO1xuICB0LmQgPSBmLmQ7XG4gIHJldHVybiB0O1xufTtcblxuZnVuY3Rpb24gaW1wbChzZWVkLCBvcHRzKSB7XG4gIHZhciB4ZyA9IG5ldyBYb3JHZW4oc2VlZCksXG4gICAgICBzdGF0ZSA9IG9wdHMgJiYgb3B0cy5zdGF0ZSxcbiAgICAgIHBybmcgPSBmdW5jdGlvbigpIHsgcmV0dXJuICh4Zy5uZXh0KCkgPj4+IDApIC8gMHgxMDAwMDAwMDA7IH07XG4gIHBybmcuZG91YmxlID0gZnVuY3Rpb24oKSB7XG4gICAgZG8ge1xuICAgICAgdmFyIHRvcCA9IHhnLm5leHQoKSA+Pj4gMTEsXG4gICAgICAgICAgYm90ID0gKHhnLm5leHQoKSA+Pj4gMCkgLyAweDEwMDAwMDAwMCxcbiAgICAgICAgICByZXN1bHQgPSAodG9wICsgYm90KSAvICgxIDw8IDIxKTtcbiAgICB9IHdoaWxlIChyZXN1bHQgPT09IDApO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIHBybmcuaW50MzIgPSB4Zy5uZXh0O1xuICBwcm5nLnF1aWNrID0gcHJuZztcbiAgaWYgKHN0YXRlKSB7XG4gICAgaWYgKHR5cGVvZihzdGF0ZSkgPT0gJ29iamVjdCcpIGNvcHkoc3RhdGUsIHhnKTtcbiAgICBwcm5nLnN0YXRlID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb3B5KHhnLCB7fSk7IH1cbiAgfVxuICByZXR1cm4gcHJuZztcbn1cblxuaWYgKG1vZHVsZSAmJiBtb2R1bGUuZXhwb3J0cykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGltcGw7XG59IGVsc2UgaWYgKGRlZmluZSAmJiBkZWZpbmUuYW1kKSB7XG4gIGRlZmluZShmdW5jdGlvbigpIHsgcmV0dXJuIGltcGw7IH0pO1xufSBlbHNlIHtcbiAgdGhpcy50eWNoZWkgPSBpbXBsO1xufVxuXG59KShcbiAgdGhpcyxcbiAgKHR5cGVvZiBtb2R1bGUpID09ICdvYmplY3QnICYmIG1vZHVsZSwgICAgLy8gcHJlc2VudCBpbiBub2RlLmpzXG4gICh0eXBlb2YgZGVmaW5lKSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZSAgIC8vIHByZXNlbnQgd2l0aCBhbiBBTUQgbG9hZGVyXG4pO1xuXG5cbiIsIi8vIEEgSmF2YXNjcmlwdCBpbXBsZW1lbnRhaW9uIG9mIHRoZSBcInhvcjEyOFwiIHBybmcgYWxnb3JpdGhtIGJ5XG4vLyBHZW9yZ2UgTWFyc2FnbGlhLiAgU2VlIGh0dHA6Ly93d3cuanN0YXRzb2Z0Lm9yZy92MDgvaTE0L3BhcGVyXG5cbihmdW5jdGlvbihnbG9iYWwsIG1vZHVsZSwgZGVmaW5lKSB7XG5cbmZ1bmN0aW9uIFhvckdlbihzZWVkKSB7XG4gIHZhciBtZSA9IHRoaXMsIHN0cnNlZWQgPSAnJztcblxuICBtZS54ID0gMDtcbiAgbWUueSA9IDA7XG4gIG1lLnogPSAwO1xuICBtZS53ID0gMDtcblxuICAvLyBTZXQgdXAgZ2VuZXJhdG9yIGZ1bmN0aW9uLlxuICBtZS5uZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHQgPSBtZS54IF4gKG1lLnggPDwgMTEpO1xuICAgIG1lLnggPSBtZS55O1xuICAgIG1lLnkgPSBtZS56O1xuICAgIG1lLnogPSBtZS53O1xuICAgIHJldHVybiBtZS53IF49IChtZS53ID4+PiAxOSkgXiB0IF4gKHQgPj4+IDgpO1xuICB9O1xuXG4gIGlmIChzZWVkID09PSAoc2VlZCB8IDApKSB7XG4gICAgLy8gSW50ZWdlciBzZWVkLlxuICAgIG1lLnggPSBzZWVkO1xuICB9IGVsc2Uge1xuICAgIC8vIFN0cmluZyBzZWVkLlxuICAgIHN0cnNlZWQgKz0gc2VlZDtcbiAgfVxuXG4gIC8vIE1peCBpbiBzdHJpbmcgc2VlZCwgdGhlbiBkaXNjYXJkIGFuIGluaXRpYWwgYmF0Y2ggb2YgNjQgdmFsdWVzLlxuICBmb3IgKHZhciBrID0gMDsgayA8IHN0cnNlZWQubGVuZ3RoICsgNjQ7IGsrKykge1xuICAgIG1lLnggXj0gc3Ryc2VlZC5jaGFyQ29kZUF0KGspIHwgMDtcbiAgICBtZS5uZXh0KCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY29weShmLCB0KSB7XG4gIHQueCA9IGYueDtcbiAgdC55ID0gZi55O1xuICB0LnogPSBmLno7XG4gIHQudyA9IGYudztcbiAgcmV0dXJuIHQ7XG59XG5cbmZ1bmN0aW9uIGltcGwoc2VlZCwgb3B0cykge1xuICB2YXIgeGcgPSBuZXcgWG9yR2VuKHNlZWQpLFxuICAgICAgc3RhdGUgPSBvcHRzICYmIG9wdHMuc3RhdGUsXG4gICAgICBwcm5nID0gZnVuY3Rpb24oKSB7IHJldHVybiAoeGcubmV4dCgpID4+PiAwKSAvIDB4MTAwMDAwMDAwOyB9O1xuICBwcm5nLmRvdWJsZSA9IGZ1bmN0aW9uKCkge1xuICAgIGRvIHtcbiAgICAgIHZhciB0b3AgPSB4Zy5uZXh0KCkgPj4+IDExLFxuICAgICAgICAgIGJvdCA9ICh4Zy5uZXh0KCkgPj4+IDApIC8gMHgxMDAwMDAwMDAsXG4gICAgICAgICAgcmVzdWx0ID0gKHRvcCArIGJvdCkgLyAoMSA8PCAyMSk7XG4gICAgfSB3aGlsZSAocmVzdWx0ID09PSAwKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICBwcm5nLmludDMyID0geGcubmV4dDtcbiAgcHJuZy5xdWljayA9IHBybmc7XG4gIGlmIChzdGF0ZSkge1xuICAgIGlmICh0eXBlb2Yoc3RhdGUpID09ICdvYmplY3QnKSBjb3B5KHN0YXRlLCB4Zyk7XG4gICAgcHJuZy5zdGF0ZSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29weSh4Zywge30pOyB9XG4gIH1cbiAgcmV0dXJuIHBybmc7XG59XG5cbmlmIChtb2R1bGUgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBpbXBsO1xufSBlbHNlIGlmIChkZWZpbmUgJiYgZGVmaW5lLmFtZCkge1xuICBkZWZpbmUoZnVuY3Rpb24oKSB7IHJldHVybiBpbXBsOyB9KTtcbn0gZWxzZSB7XG4gIHRoaXMueG9yMTI4ID0gaW1wbDtcbn1cblxufSkoXG4gIHRoaXMsXG4gICh0eXBlb2YgbW9kdWxlKSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUsICAgIC8vIHByZXNlbnQgaW4gbm9kZS5qc1xuICAodHlwZW9mIGRlZmluZSkgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUgICAvLyBwcmVzZW50IHdpdGggYW4gQU1EIGxvYWRlclxuKTtcblxuXG4iLCIvLyBBIEphdmFzY3JpcHQgaW1wbGVtZW50YWlvbiBvZiBSaWNoYXJkIEJyZW50J3MgWG9yZ2VucyB4b3I0MDk2IGFsZ29yaXRobS5cbi8vXG4vLyBUaGlzIGZhc3Qgbm9uLWNyeXB0b2dyYXBoaWMgcmFuZG9tIG51bWJlciBnZW5lcmF0b3IgaXMgZGVzaWduZWQgZm9yXG4vLyB1c2UgaW4gTW9udGUtQ2FybG8gYWxnb3JpdGhtcy4gSXQgY29tYmluZXMgYSBsb25nLXBlcmlvZCB4b3JzaGlmdFxuLy8gZ2VuZXJhdG9yIHdpdGggYSBXZXlsIGdlbmVyYXRvciwgYW5kIGl0IHBhc3NlcyBhbGwgY29tbW9uIGJhdHRlcmllc1xuLy8gb2Ygc3Rhc3RpY2lhbCB0ZXN0cyBmb3IgcmFuZG9tbmVzcyB3aGlsZSBjb25zdW1pbmcgb25seSBhIGZldyBuYW5vc2Vjb25kc1xuLy8gZm9yIGVhY2ggcHJuZyBnZW5lcmF0ZWQuICBGb3IgYmFja2dyb3VuZCBvbiB0aGUgZ2VuZXJhdG9yLCBzZWUgQnJlbnQnc1xuLy8gcGFwZXI6IFwiU29tZSBsb25nLXBlcmlvZCByYW5kb20gbnVtYmVyIGdlbmVyYXRvcnMgdXNpbmcgc2hpZnRzIGFuZCB4b3JzLlwiXG4vLyBodHRwOi8vYXJ4aXYub3JnL3BkZi8xMDA0LjMxMTV2MS5wZGZcbi8vXG4vLyBVc2FnZTpcbi8vXG4vLyB2YXIgeG9yNDA5NiA9IHJlcXVpcmUoJ3hvcjQwOTYnKTtcbi8vIHJhbmRvbSA9IHhvcjQwOTYoMSk7ICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2VlZCB3aXRoIGludDMyIG9yIHN0cmluZy5cbi8vIGFzc2VydC5lcXVhbChyYW5kb20oKSwgMC4xNTIwNDM2NDUwNTM4NTQ3KTsgLy8gKDAsIDEpIHJhbmdlLCA1MyBiaXRzLlxuLy8gYXNzZXJ0LmVxdWFsKHJhbmRvbS5pbnQzMigpLCAxODA2NTM0ODk3KTsgICAvLyBzaWduZWQgaW50MzIsIDMyIGJpdHMuXG4vL1xuLy8gRm9yIG5vbnplcm8gbnVtZXJpYyBrZXlzLCB0aGlzIGltcGVsZW1lbnRhdGlvbiBwcm92aWRlcyBhIHNlcXVlbmNlXG4vLyBpZGVudGljYWwgdG8gdGhhdCBieSBCcmVudCdzIHhvcmdlbnMgMyBpbXBsZW1lbnRhaW9uIGluIEMuICBUaGlzXG4vLyBpbXBsZW1lbnRhdGlvbiBhbHNvIHByb3ZpZGVzIGZvciBpbml0YWxpemluZyB0aGUgZ2VuZXJhdG9yIHdpdGhcbi8vIHN0cmluZyBzZWVkcywgb3IgZm9yIHNhdmluZyBhbmQgcmVzdG9yaW5nIHRoZSBzdGF0ZSBvZiB0aGUgZ2VuZXJhdG9yLlxuLy9cbi8vIE9uIENocm9tZSwgdGhpcyBwcm5nIGJlbmNobWFya3MgYWJvdXQgMi4xIHRpbWVzIHNsb3dlciB0aGFuXG4vLyBKYXZhc2NyaXB0J3MgYnVpbHQtaW4gTWF0aC5yYW5kb20oKS5cblxuKGZ1bmN0aW9uKGdsb2JhbCwgbW9kdWxlLCBkZWZpbmUpIHtcblxuZnVuY3Rpb24gWG9yR2VuKHNlZWQpIHtcbiAgdmFyIG1lID0gdGhpcztcblxuICAvLyBTZXQgdXAgZ2VuZXJhdG9yIGZ1bmN0aW9uLlxuICBtZS5uZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHcgPSBtZS53LFxuICAgICAgICBYID0gbWUuWCwgaSA9IG1lLmksIHQsIHY7XG4gICAgLy8gVXBkYXRlIFdleWwgZ2VuZXJhdG9yLlxuICAgIG1lLncgPSB3ID0gKHcgKyAweDYxYzg4NjQ3KSB8IDA7XG4gICAgLy8gVXBkYXRlIHhvciBnZW5lcmF0b3IuXG4gICAgdiA9IFhbKGkgKyAzNCkgJiAxMjddO1xuICAgIHQgPSBYW2kgPSAoKGkgKyAxKSAmIDEyNyldO1xuICAgIHYgXj0gdiA8PCAxMztcbiAgICB0IF49IHQgPDwgMTc7XG4gICAgdiBePSB2ID4+PiAxNTtcbiAgICB0IF49IHQgPj4+IDEyO1xuICAgIC8vIFVwZGF0ZSBYb3IgZ2VuZXJhdG9yIGFycmF5IHN0YXRlLlxuICAgIHYgPSBYW2ldID0gdiBeIHQ7XG4gICAgbWUuaSA9IGk7XG4gICAgLy8gUmVzdWx0IGlzIHRoZSBjb21iaW5hdGlvbi5cbiAgICByZXR1cm4gKHYgKyAodyBeICh3ID4+PiAxNikpKSB8IDA7XG4gIH07XG5cbiAgZnVuY3Rpb24gaW5pdChtZSwgc2VlZCkge1xuICAgIHZhciB0LCB2LCBpLCBqLCB3LCBYID0gW10sIGxpbWl0ID0gMTI4O1xuICAgIGlmIChzZWVkID09PSAoc2VlZCB8IDApKSB7XG4gICAgICAvLyBOdW1lcmljIHNlZWRzIGluaXRpYWxpemUgdiwgd2hpY2ggaXMgdXNlZCB0byBnZW5lcmF0ZXMgWC5cbiAgICAgIHYgPSBzZWVkO1xuICAgICAgc2VlZCA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFN0cmluZyBzZWVkcyBhcmUgbWl4ZWQgaW50byB2IGFuZCBYIG9uZSBjaGFyYWN0ZXIgYXQgYSB0aW1lLlxuICAgICAgc2VlZCA9IHNlZWQgKyAnXFwwJztcbiAgICAgIHYgPSAwO1xuICAgICAgbGltaXQgPSBNYXRoLm1heChsaW1pdCwgc2VlZC5sZW5ndGgpO1xuICAgIH1cbiAgICAvLyBJbml0aWFsaXplIGNpcmN1bGFyIGFycmF5IGFuZCB3ZXlsIHZhbHVlLlxuICAgIGZvciAoaSA9IDAsIGogPSAtMzI7IGogPCBsaW1pdDsgKytqKSB7XG4gICAgICAvLyBQdXQgdGhlIHVuaWNvZGUgY2hhcmFjdGVycyBpbnRvIHRoZSBhcnJheSwgYW5kIHNodWZmbGUgdGhlbS5cbiAgICAgIGlmIChzZWVkKSB2IF49IHNlZWQuY2hhckNvZGVBdCgoaiArIDMyKSAlIHNlZWQubGVuZ3RoKTtcbiAgICAgIC8vIEFmdGVyIDMyIHNodWZmbGVzLCB0YWtlIHYgYXMgdGhlIHN0YXJ0aW5nIHcgdmFsdWUuXG4gICAgICBpZiAoaiA9PT0gMCkgdyA9IHY7XG4gICAgICB2IF49IHYgPDwgMTA7XG4gICAgICB2IF49IHYgPj4+IDE1O1xuICAgICAgdiBePSB2IDw8IDQ7XG4gICAgICB2IF49IHYgPj4+IDEzO1xuICAgICAgaWYgKGogPj0gMCkge1xuICAgICAgICB3ID0gKHcgKyAweDYxYzg4NjQ3KSB8IDA7ICAgICAvLyBXZXlsLlxuICAgICAgICB0ID0gKFhbaiAmIDEyN10gXj0gKHYgKyB3KSk7ICAvLyBDb21iaW5lIHhvciBhbmQgd2V5bCB0byBpbml0IGFycmF5LlxuICAgICAgICBpID0gKDAgPT0gdCkgPyBpICsgMSA6IDA7ICAgICAvLyBDb3VudCB6ZXJvZXMuXG4gICAgICB9XG4gICAgfVxuICAgIC8vIFdlIGhhdmUgZGV0ZWN0ZWQgYWxsIHplcm9lczsgbWFrZSB0aGUga2V5IG5vbnplcm8uXG4gICAgaWYgKGkgPj0gMTI4KSB7XG4gICAgICBYWyhzZWVkICYmIHNlZWQubGVuZ3RoIHx8IDApICYgMTI3XSA9IC0xO1xuICAgIH1cbiAgICAvLyBSdW4gdGhlIGdlbmVyYXRvciA1MTIgdGltZXMgdG8gZnVydGhlciBtaXggdGhlIHN0YXRlIGJlZm9yZSB1c2luZyBpdC5cbiAgICAvLyBGYWN0b3JpbmcgdGhpcyBhcyBhIGZ1bmN0aW9uIHNsb3dzIHRoZSBtYWluIGdlbmVyYXRvciwgc28gaXQgaXMganVzdFxuICAgIC8vIHVucm9sbGVkIGhlcmUuICBUaGUgd2V5bCBnZW5lcmF0b3IgaXMgbm90IGFkdmFuY2VkIHdoaWxlIHdhcm1pbmcgdXAuXG4gICAgaSA9IDEyNztcbiAgICBmb3IgKGogPSA0ICogMTI4OyBqID4gMDsgLS1qKSB7XG4gICAgICB2ID0gWFsoaSArIDM0KSAmIDEyN107XG4gICAgICB0ID0gWFtpID0gKChpICsgMSkgJiAxMjcpXTtcbiAgICAgIHYgXj0gdiA8PCAxMztcbiAgICAgIHQgXj0gdCA8PCAxNztcbiAgICAgIHYgXj0gdiA+Pj4gMTU7XG4gICAgICB0IF49IHQgPj4+IDEyO1xuICAgICAgWFtpXSA9IHYgXiB0O1xuICAgIH1cbiAgICAvLyBTdG9yaW5nIHN0YXRlIGFzIG9iamVjdCBtZW1iZXJzIGlzIGZhc3RlciB0aGFuIHVzaW5nIGNsb3N1cmUgdmFyaWFibGVzLlxuICAgIG1lLncgPSB3O1xuICAgIG1lLlggPSBYO1xuICAgIG1lLmkgPSBpO1xuICB9XG5cbiAgaW5pdChtZSwgc2VlZCk7XG59XG5cbmZ1bmN0aW9uIGNvcHkoZiwgdCkge1xuICB0LmkgPSBmLmk7XG4gIHQudyA9IGYudztcbiAgdC5YID0gZi5YLnNsaWNlKCk7XG4gIHJldHVybiB0O1xufTtcblxuZnVuY3Rpb24gaW1wbChzZWVkLCBvcHRzKSB7XG4gIGlmIChzZWVkID09IG51bGwpIHNlZWQgPSArKG5ldyBEYXRlKTtcbiAgdmFyIHhnID0gbmV3IFhvckdlbihzZWVkKSxcbiAgICAgIHN0YXRlID0gb3B0cyAmJiBvcHRzLnN0YXRlLFxuICAgICAgcHJuZyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gKHhnLm5leHQoKSA+Pj4gMCkgLyAweDEwMDAwMDAwMDsgfTtcbiAgcHJuZy5kb3VibGUgPSBmdW5jdGlvbigpIHtcbiAgICBkbyB7XG4gICAgICB2YXIgdG9wID0geGcubmV4dCgpID4+PiAxMSxcbiAgICAgICAgICBib3QgPSAoeGcubmV4dCgpID4+PiAwKSAvIDB4MTAwMDAwMDAwLFxuICAgICAgICAgIHJlc3VsdCA9ICh0b3AgKyBib3QpIC8gKDEgPDwgMjEpO1xuICAgIH0gd2hpbGUgKHJlc3VsdCA9PT0gMCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgcHJuZy5pbnQzMiA9IHhnLm5leHQ7XG4gIHBybmcucXVpY2sgPSBwcm5nO1xuICBpZiAoc3RhdGUpIHtcbiAgICBpZiAoc3RhdGUuWCkgY29weShzdGF0ZSwgeGcpO1xuICAgIHBybmcuc3RhdGUgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvcHkoeGcsIHt9KTsgfVxuICB9XG4gIHJldHVybiBwcm5nO1xufVxuXG5pZiAobW9kdWxlICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gaW1wbDtcbn0gZWxzZSBpZiAoZGVmaW5lICYmIGRlZmluZS5hbWQpIHtcbiAgZGVmaW5lKGZ1bmN0aW9uKCkgeyByZXR1cm4gaW1wbDsgfSk7XG59IGVsc2Uge1xuICB0aGlzLnhvcjQwOTYgPSBpbXBsO1xufVxuXG59KShcbiAgdGhpcywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2luZG93IG9iamVjdCBvciBnbG9iYWxcbiAgKHR5cGVvZiBtb2R1bGUpID09ICdvYmplY3QnICYmIG1vZHVsZSwgICAgLy8gcHJlc2VudCBpbiBub2RlLmpzXG4gICh0eXBlb2YgZGVmaW5lKSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZSAgIC8vIHByZXNlbnQgd2l0aCBhbiBBTUQgbG9hZGVyXG4pO1xuIiwiLy8gQSBKYXZhc2NyaXB0IGltcGxlbWVudGFpb24gb2YgdGhlIFwieG9yc2hpZnQ3XCIgYWxnb3JpdGhtIGJ5XG4vLyBGcmFuw6dvaXMgUGFubmV0b24gYW5kIFBpZXJyZSBMJ2VjdXllcjpcbi8vIFwiT24gdGhlIFhvcmdzaGlmdCBSYW5kb20gTnVtYmVyIEdlbmVyYXRvcnNcIlxuLy8gaHR0cDovL3NhbHVjLmVuZ3IudWNvbm4uZWR1L3JlZnMvY3J5cHRvL3JuZy9wYW5uZXRvbjA1b250aGV4b3JzaGlmdC5wZGZcblxuKGZ1bmN0aW9uKGdsb2JhbCwgbW9kdWxlLCBkZWZpbmUpIHtcblxuZnVuY3Rpb24gWG9yR2VuKHNlZWQpIHtcbiAgdmFyIG1lID0gdGhpcztcblxuICAvLyBTZXQgdXAgZ2VuZXJhdG9yIGZ1bmN0aW9uLlxuICBtZS5uZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gVXBkYXRlIHhvciBnZW5lcmF0b3IuXG4gICAgdmFyIFggPSBtZS54LCBpID0gbWUuaSwgdCwgdiwgdztcbiAgICB0ID0gWFtpXTsgdCBePSAodCA+Pj4gNyk7IHYgPSB0IF4gKHQgPDwgMjQpO1xuICAgIHQgPSBYWyhpICsgMSkgJiA3XTsgdiBePSB0IF4gKHQgPj4+IDEwKTtcbiAgICB0ID0gWFsoaSArIDMpICYgN107IHYgXj0gdCBeICh0ID4+PiAzKTtcbiAgICB0ID0gWFsoaSArIDQpICYgN107IHYgXj0gdCBeICh0IDw8IDcpO1xuICAgIHQgPSBYWyhpICsgNykgJiA3XTsgdCA9IHQgXiAodCA8PCAxMyk7IHYgXj0gdCBeICh0IDw8IDkpO1xuICAgIFhbaV0gPSB2O1xuICAgIG1lLmkgPSAoaSArIDEpICYgNztcbiAgICByZXR1cm4gdjtcbiAgfTtcblxuICBmdW5jdGlvbiBpbml0KG1lLCBzZWVkKSB7XG4gICAgdmFyIGosIHcsIFggPSBbXTtcblxuICAgIGlmIChzZWVkID09PSAoc2VlZCB8IDApKSB7XG4gICAgICAvLyBTZWVkIHN0YXRlIGFycmF5IHVzaW5nIGEgMzItYml0IGludGVnZXIuXG4gICAgICB3ID0gWFswXSA9IHNlZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFNlZWQgc3RhdGUgdXNpbmcgYSBzdHJpbmcuXG4gICAgICBzZWVkID0gJycgKyBzZWVkO1xuICAgICAgZm9yIChqID0gMDsgaiA8IHNlZWQubGVuZ3RoOyArK2opIHtcbiAgICAgICAgWFtqICYgN10gPSAoWFtqICYgN10gPDwgMTUpIF5cbiAgICAgICAgICAgIChzZWVkLmNoYXJDb2RlQXQoaikgKyBYWyhqICsgMSkgJiA3XSA8PCAxMyk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIEVuZm9yY2UgYW4gYXJyYXkgbGVuZ3RoIG9mIDgsIG5vdCBhbGwgemVyb2VzLlxuICAgIHdoaWxlIChYLmxlbmd0aCA8IDgpIFgucHVzaCgwKTtcbiAgICBmb3IgKGogPSAwOyBqIDwgOCAmJiBYW2pdID09PSAwOyArK2opO1xuICAgIGlmIChqID09IDgpIHcgPSBYWzddID0gLTE7IGVsc2UgdyA9IFhbal07XG5cbiAgICBtZS54ID0gWDtcbiAgICBtZS5pID0gMDtcblxuICAgIC8vIERpc2NhcmQgYW4gaW5pdGlhbCAyNTYgdmFsdWVzLlxuICAgIGZvciAoaiA9IDI1NjsgaiA+IDA7IC0taikge1xuICAgICAgbWUubmV4dCgpO1xuICAgIH1cbiAgfVxuXG4gIGluaXQobWUsIHNlZWQpO1xufVxuXG5mdW5jdGlvbiBjb3B5KGYsIHQpIHtcbiAgdC54ID0gZi54LnNsaWNlKCk7XG4gIHQuaSA9IGYuaTtcbiAgcmV0dXJuIHQ7XG59XG5cbmZ1bmN0aW9uIGltcGwoc2VlZCwgb3B0cykge1xuICBpZiAoc2VlZCA9PSBudWxsKSBzZWVkID0gKyhuZXcgRGF0ZSk7XG4gIHZhciB4ZyA9IG5ldyBYb3JHZW4oc2VlZCksXG4gICAgICBzdGF0ZSA9IG9wdHMgJiYgb3B0cy5zdGF0ZSxcbiAgICAgIHBybmcgPSBmdW5jdGlvbigpIHsgcmV0dXJuICh4Zy5uZXh0KCkgPj4+IDApIC8gMHgxMDAwMDAwMDA7IH07XG4gIHBybmcuZG91YmxlID0gZnVuY3Rpb24oKSB7XG4gICAgZG8ge1xuICAgICAgdmFyIHRvcCA9IHhnLm5leHQoKSA+Pj4gMTEsXG4gICAgICAgICAgYm90ID0gKHhnLm5leHQoKSA+Pj4gMCkgLyAweDEwMDAwMDAwMCxcbiAgICAgICAgICByZXN1bHQgPSAodG9wICsgYm90KSAvICgxIDw8IDIxKTtcbiAgICB9IHdoaWxlIChyZXN1bHQgPT09IDApO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIHBybmcuaW50MzIgPSB4Zy5uZXh0O1xuICBwcm5nLnF1aWNrID0gcHJuZztcbiAgaWYgKHN0YXRlKSB7XG4gICAgaWYgKHN0YXRlLngpIGNvcHkoc3RhdGUsIHhnKTtcbiAgICBwcm5nLnN0YXRlID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb3B5KHhnLCB7fSk7IH1cbiAgfVxuICByZXR1cm4gcHJuZztcbn1cblxuaWYgKG1vZHVsZSAmJiBtb2R1bGUuZXhwb3J0cykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGltcGw7XG59IGVsc2UgaWYgKGRlZmluZSAmJiBkZWZpbmUuYW1kKSB7XG4gIGRlZmluZShmdW5jdGlvbigpIHsgcmV0dXJuIGltcGw7IH0pO1xufSBlbHNlIHtcbiAgdGhpcy54b3JzaGlmdDcgPSBpbXBsO1xufVxuXG59KShcbiAgdGhpcyxcbiAgKHR5cGVvZiBtb2R1bGUpID09ICdvYmplY3QnICYmIG1vZHVsZSwgICAgLy8gcHJlc2VudCBpbiBub2RlLmpzXG4gICh0eXBlb2YgZGVmaW5lKSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZSAgIC8vIHByZXNlbnQgd2l0aCBhbiBBTUQgbG9hZGVyXG4pO1xuXG4iLCIvLyBBIEphdmFzY3JpcHQgaW1wbGVtZW50YWlvbiBvZiB0aGUgXCJ4b3J3b3dcIiBwcm5nIGFsZ29yaXRobSBieVxuLy8gR2VvcmdlIE1hcnNhZ2xpYS4gIFNlZSBodHRwOi8vd3d3LmpzdGF0c29mdC5vcmcvdjA4L2kxNC9wYXBlclxuXG4oZnVuY3Rpb24oZ2xvYmFsLCBtb2R1bGUsIGRlZmluZSkge1xuXG5mdW5jdGlvbiBYb3JHZW4oc2VlZCkge1xuICB2YXIgbWUgPSB0aGlzLCBzdHJzZWVkID0gJyc7XG5cbiAgLy8gU2V0IHVwIGdlbmVyYXRvciBmdW5jdGlvbi5cbiAgbWUubmV4dCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB0ID0gKG1lLnggXiAobWUueCA+Pj4gMikpO1xuICAgIG1lLnggPSBtZS55OyBtZS55ID0gbWUuejsgbWUueiA9IG1lLnc7IG1lLncgPSBtZS52O1xuICAgIHJldHVybiAobWUuZCA9IChtZS5kICsgMzYyNDM3IHwgMCkpICtcbiAgICAgICAobWUudiA9IChtZS52IF4gKG1lLnYgPDwgNCkpIF4gKHQgXiAodCA8PCAxKSkpIHwgMDtcbiAgfTtcblxuICBtZS54ID0gMDtcbiAgbWUueSA9IDA7XG4gIG1lLnogPSAwO1xuICBtZS53ID0gMDtcbiAgbWUudiA9IDA7XG5cbiAgaWYgKHNlZWQgPT09IChzZWVkIHwgMCkpIHtcbiAgICAvLyBJbnRlZ2VyIHNlZWQuXG4gICAgbWUueCA9IHNlZWQ7XG4gIH0gZWxzZSB7XG4gICAgLy8gU3RyaW5nIHNlZWQuXG4gICAgc3Ryc2VlZCArPSBzZWVkO1xuICB9XG5cbiAgLy8gTWl4IGluIHN0cmluZyBzZWVkLCB0aGVuIGRpc2NhcmQgYW4gaW5pdGlhbCBiYXRjaCBvZiA2NCB2YWx1ZXMuXG4gIGZvciAodmFyIGsgPSAwOyBrIDwgc3Ryc2VlZC5sZW5ndGggKyA2NDsgaysrKSB7XG4gICAgbWUueCBePSBzdHJzZWVkLmNoYXJDb2RlQXQoaykgfCAwO1xuICAgIGlmIChrID09IHN0cnNlZWQubGVuZ3RoKSB7XG4gICAgICBtZS5kID0gbWUueCA8PCAxMCBeIG1lLnggPj4+IDQ7XG4gICAgfVxuICAgIG1lLm5leHQoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb3B5KGYsIHQpIHtcbiAgdC54ID0gZi54O1xuICB0LnkgPSBmLnk7XG4gIHQueiA9IGYuejtcbiAgdC53ID0gZi53O1xuICB0LnYgPSBmLnY7XG4gIHQuZCA9IGYuZDtcbiAgcmV0dXJuIHQ7XG59XG5cbmZ1bmN0aW9uIGltcGwoc2VlZCwgb3B0cykge1xuICB2YXIgeGcgPSBuZXcgWG9yR2VuKHNlZWQpLFxuICAgICAgc3RhdGUgPSBvcHRzICYmIG9wdHMuc3RhdGUsXG4gICAgICBwcm5nID0gZnVuY3Rpb24oKSB7IHJldHVybiAoeGcubmV4dCgpID4+PiAwKSAvIDB4MTAwMDAwMDAwOyB9O1xuICBwcm5nLmRvdWJsZSA9IGZ1bmN0aW9uKCkge1xuICAgIGRvIHtcbiAgICAgIHZhciB0b3AgPSB4Zy5uZXh0KCkgPj4+IDExLFxuICAgICAgICAgIGJvdCA9ICh4Zy5uZXh0KCkgPj4+IDApIC8gMHgxMDAwMDAwMDAsXG4gICAgICAgICAgcmVzdWx0ID0gKHRvcCArIGJvdCkgLyAoMSA8PCAyMSk7XG4gICAgfSB3aGlsZSAocmVzdWx0ID09PSAwKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICBwcm5nLmludDMyID0geGcubmV4dDtcbiAgcHJuZy5xdWljayA9IHBybmc7XG4gIGlmIChzdGF0ZSkge1xuICAgIGlmICh0eXBlb2Yoc3RhdGUpID09ICdvYmplY3QnKSBjb3B5KHN0YXRlLCB4Zyk7XG4gICAgcHJuZy5zdGF0ZSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29weSh4Zywge30pOyB9XG4gIH1cbiAgcmV0dXJuIHBybmc7XG59XG5cbmlmIChtb2R1bGUgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBpbXBsO1xufSBlbHNlIGlmIChkZWZpbmUgJiYgZGVmaW5lLmFtZCkge1xuICBkZWZpbmUoZnVuY3Rpb24oKSB7IHJldHVybiBpbXBsOyB9KTtcbn0gZWxzZSB7XG4gIHRoaXMueG9yd293ID0gaW1wbDtcbn1cblxufSkoXG4gIHRoaXMsXG4gICh0eXBlb2YgbW9kdWxlKSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUsICAgIC8vIHByZXNlbnQgaW4gbm9kZS5qc1xuICAodHlwZW9mIGRlZmluZSkgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUgICAvLyBwcmVzZW50IHdpdGggYW4gQU1EIGxvYWRlclxuKTtcblxuXG4iLCIvKlxuQ29weXJpZ2h0IDIwMTkgRGF2aWQgQmF1LlxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmdcbmEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG53aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG5kaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG9cbnBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0b1xudGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZVxuaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG5FWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbk1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC5cbklOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZXG5DTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULFxuVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEVcblNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4qL1xuXG4oZnVuY3Rpb24gKGdsb2JhbCwgcG9vbCwgbWF0aCkge1xuLy9cbi8vIFRoZSBmb2xsb3dpbmcgY29uc3RhbnRzIGFyZSByZWxhdGVkIHRvIElFRUUgNzU0IGxpbWl0cy5cbi8vXG5cbnZhciB3aWR0aCA9IDI1NiwgICAgICAgIC8vIGVhY2ggUkM0IG91dHB1dCBpcyAwIDw9IHggPCAyNTZcbiAgICBjaHVua3MgPSA2LCAgICAgICAgIC8vIGF0IGxlYXN0IHNpeCBSQzQgb3V0cHV0cyBmb3IgZWFjaCBkb3VibGVcbiAgICBkaWdpdHMgPSA1MiwgICAgICAgIC8vIHRoZXJlIGFyZSA1MiBzaWduaWZpY2FudCBkaWdpdHMgaW4gYSBkb3VibGVcbiAgICBybmduYW1lID0gJ3JhbmRvbScsIC8vIHJuZ25hbWU6IG5hbWUgZm9yIE1hdGgucmFuZG9tIGFuZCBNYXRoLnNlZWRyYW5kb21cbiAgICBzdGFydGRlbm9tID0gbWF0aC5wb3cod2lkdGgsIGNodW5rcyksXG4gICAgc2lnbmlmaWNhbmNlID0gbWF0aC5wb3coMiwgZGlnaXRzKSxcbiAgICBvdmVyZmxvdyA9IHNpZ25pZmljYW5jZSAqIDIsXG4gICAgbWFzayA9IHdpZHRoIC0gMSxcbiAgICBub2RlY3J5cHRvOyAgICAgICAgIC8vIG5vZGUuanMgY3J5cHRvIG1vZHVsZSwgaW5pdGlhbGl6ZWQgYXQgdGhlIGJvdHRvbS5cblxuLy9cbi8vIHNlZWRyYW5kb20oKVxuLy8gVGhpcyBpcyB0aGUgc2VlZHJhbmRvbSBmdW5jdGlvbiBkZXNjcmliZWQgYWJvdmUuXG4vL1xuZnVuY3Rpb24gc2VlZHJhbmRvbShzZWVkLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICB2YXIga2V5ID0gW107XG4gIG9wdGlvbnMgPSAob3B0aW9ucyA9PSB0cnVlKSA/IHsgZW50cm9weTogdHJ1ZSB9IDogKG9wdGlvbnMgfHwge30pO1xuXG4gIC8vIEZsYXR0ZW4gdGhlIHNlZWQgc3RyaW5nIG9yIGJ1aWxkIG9uZSBmcm9tIGxvY2FsIGVudHJvcHkgaWYgbmVlZGVkLlxuICB2YXIgc2hvcnRzZWVkID0gbWl4a2V5KGZsYXR0ZW4oXG4gICAgb3B0aW9ucy5lbnRyb3B5ID8gW3NlZWQsIHRvc3RyaW5nKHBvb2wpXSA6XG4gICAgKHNlZWQgPT0gbnVsbCkgPyBhdXRvc2VlZCgpIDogc2VlZCwgMyksIGtleSk7XG5cbiAgLy8gVXNlIHRoZSBzZWVkIHRvIGluaXRpYWxpemUgYW4gQVJDNCBnZW5lcmF0b3IuXG4gIHZhciBhcmM0ID0gbmV3IEFSQzQoa2V5KTtcblxuICAvLyBUaGlzIGZ1bmN0aW9uIHJldHVybnMgYSByYW5kb20gZG91YmxlIGluIFswLCAxKSB0aGF0IGNvbnRhaW5zXG4gIC8vIHJhbmRvbW5lc3MgaW4gZXZlcnkgYml0IG9mIHRoZSBtYW50aXNzYSBvZiB0aGUgSUVFRSA3NTQgdmFsdWUuXG4gIHZhciBwcm5nID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIG4gPSBhcmM0LmcoY2h1bmtzKSwgICAgICAgICAgICAgLy8gU3RhcnQgd2l0aCBhIG51bWVyYXRvciBuIDwgMiBeIDQ4XG4gICAgICAgIGQgPSBzdGFydGRlbm9tLCAgICAgICAgICAgICAgICAgLy8gICBhbmQgZGVub21pbmF0b3IgZCA9IDIgXiA0OC5cbiAgICAgICAgeCA9IDA7ICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIGFuZCBubyAnZXh0cmEgbGFzdCBieXRlJy5cbiAgICB3aGlsZSAobiA8IHNpZ25pZmljYW5jZSkgeyAgICAgICAgICAvLyBGaWxsIHVwIGFsbCBzaWduaWZpY2FudCBkaWdpdHMgYnlcbiAgICAgIG4gPSAobiArIHgpICogd2lkdGg7ICAgICAgICAgICAgICAvLyAgIHNoaWZ0aW5nIG51bWVyYXRvciBhbmRcbiAgICAgIGQgKj0gd2lkdGg7ICAgICAgICAgICAgICAgICAgICAgICAvLyAgIGRlbm9taW5hdG9yIGFuZCBnZW5lcmF0aW5nIGFcbiAgICAgIHggPSBhcmM0LmcoMSk7ICAgICAgICAgICAgICAgICAgICAvLyAgIG5ldyBsZWFzdC1zaWduaWZpY2FudC1ieXRlLlxuICAgIH1cbiAgICB3aGlsZSAobiA+PSBvdmVyZmxvdykgeyAgICAgICAgICAgICAvLyBUbyBhdm9pZCByb3VuZGluZyB1cCwgYmVmb3JlIGFkZGluZ1xuICAgICAgbiAvPSAyOyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgbGFzdCBieXRlLCBzaGlmdCBldmVyeXRoaW5nXG4gICAgICBkIC89IDI7ICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICByaWdodCB1c2luZyBpbnRlZ2VyIG1hdGggdW50aWxcbiAgICAgIHggPj4+PSAxOyAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIHdlIGhhdmUgZXhhY3RseSB0aGUgZGVzaXJlZCBiaXRzLlxuICAgIH1cbiAgICByZXR1cm4gKG4gKyB4KSAvIGQ7ICAgICAgICAgICAgICAgICAvLyBGb3JtIHRoZSBudW1iZXIgd2l0aGluIFswLCAxKS5cbiAgfTtcblxuICBwcm5nLmludDMyID0gZnVuY3Rpb24oKSB7IHJldHVybiBhcmM0LmcoNCkgfCAwOyB9XG4gIHBybmcucXVpY2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGFyYzQuZyg0KSAvIDB4MTAwMDAwMDAwOyB9XG4gIHBybmcuZG91YmxlID0gcHJuZztcblxuICAvLyBNaXggdGhlIHJhbmRvbW5lc3MgaW50byBhY2N1bXVsYXRlZCBlbnRyb3B5LlxuICBtaXhrZXkodG9zdHJpbmcoYXJjNC5TKSwgcG9vbCk7XG5cbiAgLy8gQ2FsbGluZyBjb252ZW50aW9uOiB3aGF0IHRvIHJldHVybiBhcyBhIGZ1bmN0aW9uIG9mIHBybmcsIHNlZWQsIGlzX21hdGguXG4gIHJldHVybiAob3B0aW9ucy5wYXNzIHx8IGNhbGxiYWNrIHx8XG4gICAgICBmdW5jdGlvbihwcm5nLCBzZWVkLCBpc19tYXRoX2NhbGwsIHN0YXRlKSB7XG4gICAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICAgIC8vIExvYWQgdGhlIGFyYzQgc3RhdGUgZnJvbSB0aGUgZ2l2ZW4gc3RhdGUgaWYgaXQgaGFzIGFuIFMgYXJyYXkuXG4gICAgICAgICAgaWYgKHN0YXRlLlMpIHsgY29weShzdGF0ZSwgYXJjNCk7IH1cbiAgICAgICAgICAvLyBPbmx5IHByb3ZpZGUgdGhlIC5zdGF0ZSBtZXRob2QgaWYgcmVxdWVzdGVkIHZpYSBvcHRpb25zLnN0YXRlLlxuICAgICAgICAgIHBybmcuc3RhdGUgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvcHkoYXJjNCwge30pOyB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBjYWxsZWQgYXMgYSBtZXRob2Qgb2YgTWF0aCAoTWF0aC5zZWVkcmFuZG9tKCkpLCBtdXRhdGVcbiAgICAgICAgLy8gTWF0aC5yYW5kb20gYmVjYXVzZSB0aGF0IGlzIGhvdyBzZWVkcmFuZG9tLmpzIGhhcyB3b3JrZWQgc2luY2UgdjEuMC5cbiAgICAgICAgaWYgKGlzX21hdGhfY2FsbCkgeyBtYXRoW3JuZ25hbWVdID0gcHJuZzsgcmV0dXJuIHNlZWQ7IH1cblxuICAgICAgICAvLyBPdGhlcndpc2UsIGl0IGlzIGEgbmV3ZXIgY2FsbGluZyBjb252ZW50aW9uLCBzbyByZXR1cm4gdGhlXG4gICAgICAgIC8vIHBybmcgZGlyZWN0bHkuXG4gICAgICAgIGVsc2UgcmV0dXJuIHBybmc7XG4gICAgICB9KShcbiAgcHJuZyxcbiAgc2hvcnRzZWVkLFxuICAnZ2xvYmFsJyBpbiBvcHRpb25zID8gb3B0aW9ucy5nbG9iYWwgOiAodGhpcyA9PSBtYXRoKSxcbiAgb3B0aW9ucy5zdGF0ZSk7XG59XG5cbi8vXG4vLyBBUkM0XG4vL1xuLy8gQW4gQVJDNCBpbXBsZW1lbnRhdGlvbi4gIFRoZSBjb25zdHJ1Y3RvciB0YWtlcyBhIGtleSBpbiB0aGUgZm9ybSBvZlxuLy8gYW4gYXJyYXkgb2YgYXQgbW9zdCAod2lkdGgpIGludGVnZXJzIHRoYXQgc2hvdWxkIGJlIDAgPD0geCA8ICh3aWR0aCkuXG4vL1xuLy8gVGhlIGcoY291bnQpIG1ldGhvZCByZXR1cm5zIGEgcHNldWRvcmFuZG9tIGludGVnZXIgdGhhdCBjb25jYXRlbmF0ZXNcbi8vIHRoZSBuZXh0IChjb3VudCkgb3V0cHV0cyBmcm9tIEFSQzQuICBJdHMgcmV0dXJuIHZhbHVlIGlzIGEgbnVtYmVyIHhcbi8vIHRoYXQgaXMgaW4gdGhlIHJhbmdlIDAgPD0geCA8ICh3aWR0aCBeIGNvdW50KS5cbi8vXG5mdW5jdGlvbiBBUkM0KGtleSkge1xuICB2YXIgdCwga2V5bGVuID0ga2V5Lmxlbmd0aCxcbiAgICAgIG1lID0gdGhpcywgaSA9IDAsIGogPSBtZS5pID0gbWUuaiA9IDAsIHMgPSBtZS5TID0gW107XG5cbiAgLy8gVGhlIGVtcHR5IGtleSBbXSBpcyB0cmVhdGVkIGFzIFswXS5cbiAgaWYgKCFrZXlsZW4pIHsga2V5ID0gW2tleWxlbisrXTsgfVxuXG4gIC8vIFNldCB1cCBTIHVzaW5nIHRoZSBzdGFuZGFyZCBrZXkgc2NoZWR1bGluZyBhbGdvcml0aG0uXG4gIHdoaWxlIChpIDwgd2lkdGgpIHtcbiAgICBzW2ldID0gaSsrO1xuICB9XG4gIGZvciAoaSA9IDA7IGkgPCB3aWR0aDsgaSsrKSB7XG4gICAgc1tpXSA9IHNbaiA9IG1hc2sgJiAoaiArIGtleVtpICUga2V5bGVuXSArICh0ID0gc1tpXSkpXTtcbiAgICBzW2pdID0gdDtcbiAgfVxuXG4gIC8vIFRoZSBcImdcIiBtZXRob2QgcmV0dXJucyB0aGUgbmV4dCAoY291bnQpIG91dHB1dHMgYXMgb25lIG51bWJlci5cbiAgKG1lLmcgPSBmdW5jdGlvbihjb3VudCkge1xuICAgIC8vIFVzaW5nIGluc3RhbmNlIG1lbWJlcnMgaW5zdGVhZCBvZiBjbG9zdXJlIHN0YXRlIG5lYXJseSBkb3VibGVzIHNwZWVkLlxuICAgIHZhciB0LCByID0gMCxcbiAgICAgICAgaSA9IG1lLmksIGogPSBtZS5qLCBzID0gbWUuUztcbiAgICB3aGlsZSAoY291bnQtLSkge1xuICAgICAgdCA9IHNbaSA9IG1hc2sgJiAoaSArIDEpXTtcbiAgICAgIHIgPSByICogd2lkdGggKyBzW21hc2sgJiAoKHNbaV0gPSBzW2ogPSBtYXNrICYgKGogKyB0KV0pICsgKHNbal0gPSB0KSldO1xuICAgIH1cbiAgICBtZS5pID0gaTsgbWUuaiA9IGo7XG4gICAgcmV0dXJuIHI7XG4gICAgLy8gRm9yIHJvYnVzdCB1bnByZWRpY3RhYmlsaXR5LCB0aGUgZnVuY3Rpb24gY2FsbCBiZWxvdyBhdXRvbWF0aWNhbGx5XG4gICAgLy8gZGlzY2FyZHMgYW4gaW5pdGlhbCBiYXRjaCBvZiB2YWx1ZXMuICBUaGlzIGlzIGNhbGxlZCBSQzQtZHJvcFsyNTZdLlxuICAgIC8vIFNlZSBodHRwOi8vZ29vZ2xlLmNvbS9zZWFyY2g/cT1yc2ErZmx1aHJlcityZXNwb25zZSZidG5JXG4gIH0pKHdpZHRoKTtcbn1cblxuLy9cbi8vIGNvcHkoKVxuLy8gQ29waWVzIGludGVybmFsIHN0YXRlIG9mIEFSQzQgdG8gb3IgZnJvbSBhIHBsYWluIG9iamVjdC5cbi8vXG5mdW5jdGlvbiBjb3B5KGYsIHQpIHtcbiAgdC5pID0gZi5pO1xuICB0LmogPSBmLmo7XG4gIHQuUyA9IGYuUy5zbGljZSgpO1xuICByZXR1cm4gdDtcbn07XG5cbi8vXG4vLyBmbGF0dGVuKClcbi8vIENvbnZlcnRzIGFuIG9iamVjdCB0cmVlIHRvIG5lc3RlZCBhcnJheXMgb2Ygc3RyaW5ncy5cbi8vXG5mdW5jdGlvbiBmbGF0dGVuKG9iaiwgZGVwdGgpIHtcbiAgdmFyIHJlc3VsdCA9IFtdLCB0eXAgPSAodHlwZW9mIG9iaiksIHByb3A7XG4gIGlmIChkZXB0aCAmJiB0eXAgPT0gJ29iamVjdCcpIHtcbiAgICBmb3IgKHByb3AgaW4gb2JqKSB7XG4gICAgICB0cnkgeyByZXN1bHQucHVzaChmbGF0dGVuKG9ialtwcm9wXSwgZGVwdGggLSAxKSk7IH0gY2F0Y2ggKGUpIHt9XG4gICAgfVxuICB9XG4gIHJldHVybiAocmVzdWx0Lmxlbmd0aCA/IHJlc3VsdCA6IHR5cCA9PSAnc3RyaW5nJyA/IG9iaiA6IG9iaiArICdcXDAnKTtcbn1cblxuLy9cbi8vIG1peGtleSgpXG4vLyBNaXhlcyBhIHN0cmluZyBzZWVkIGludG8gYSBrZXkgdGhhdCBpcyBhbiBhcnJheSBvZiBpbnRlZ2VycywgYW5kXG4vLyByZXR1cm5zIGEgc2hvcnRlbmVkIHN0cmluZyBzZWVkIHRoYXQgaXMgZXF1aXZhbGVudCB0byB0aGUgcmVzdWx0IGtleS5cbi8vXG5mdW5jdGlvbiBtaXhrZXkoc2VlZCwga2V5KSB7XG4gIHZhciBzdHJpbmdzZWVkID0gc2VlZCArICcnLCBzbWVhciwgaiA9IDA7XG4gIHdoaWxlIChqIDwgc3RyaW5nc2VlZC5sZW5ndGgpIHtcbiAgICBrZXlbbWFzayAmIGpdID1cbiAgICAgIG1hc2sgJiAoKHNtZWFyIF49IGtleVttYXNrICYgal0gKiAxOSkgKyBzdHJpbmdzZWVkLmNoYXJDb2RlQXQoaisrKSk7XG4gIH1cbiAgcmV0dXJuIHRvc3RyaW5nKGtleSk7XG59XG5cbi8vXG4vLyBhdXRvc2VlZCgpXG4vLyBSZXR1cm5zIGFuIG9iamVjdCBmb3IgYXV0b3NlZWRpbmcsIHVzaW5nIHdpbmRvdy5jcnlwdG8gYW5kIE5vZGUgY3J5cHRvXG4vLyBtb2R1bGUgaWYgYXZhaWxhYmxlLlxuLy9cbmZ1bmN0aW9uIGF1dG9zZWVkKCkge1xuICB0cnkge1xuICAgIHZhciBvdXQ7XG4gICAgaWYgKG5vZGVjcnlwdG8gJiYgKG91dCA9IG5vZGVjcnlwdG8ucmFuZG9tQnl0ZXMpKSB7XG4gICAgICAvLyBUaGUgdXNlIG9mICdvdXQnIHRvIHJlbWVtYmVyIHJhbmRvbUJ5dGVzIG1ha2VzIHRpZ2h0IG1pbmlmaWVkIGNvZGUuXG4gICAgICBvdXQgPSBvdXQod2lkdGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdXQgPSBuZXcgVWludDhBcnJheSh3aWR0aCk7XG4gICAgICAoZ2xvYmFsLmNyeXB0byB8fCBnbG9iYWwubXNDcnlwdG8pLmdldFJhbmRvbVZhbHVlcyhvdXQpO1xuICAgIH1cbiAgICByZXR1cm4gdG9zdHJpbmcob3V0KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHZhciBicm93c2VyID0gZ2xvYmFsLm5hdmlnYXRvcixcbiAgICAgICAgcGx1Z2lucyA9IGJyb3dzZXIgJiYgYnJvd3Nlci5wbHVnaW5zO1xuICAgIHJldHVybiBbK25ldyBEYXRlLCBnbG9iYWwsIHBsdWdpbnMsIGdsb2JhbC5zY3JlZW4sIHRvc3RyaW5nKHBvb2wpXTtcbiAgfVxufVxuXG4vL1xuLy8gdG9zdHJpbmcoKVxuLy8gQ29udmVydHMgYW4gYXJyYXkgb2YgY2hhcmNvZGVzIHRvIGEgc3RyaW5nXG4vL1xuZnVuY3Rpb24gdG9zdHJpbmcoYSkge1xuICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseSgwLCBhKTtcbn1cblxuLy9cbi8vIFdoZW4gc2VlZHJhbmRvbS5qcyBpcyBsb2FkZWQsIHdlIGltbWVkaWF0ZWx5IG1peCBhIGZldyBiaXRzXG4vLyBmcm9tIHRoZSBidWlsdC1pbiBSTkcgaW50byB0aGUgZW50cm9weSBwb29sLiAgQmVjYXVzZSB3ZSBkb1xuLy8gbm90IHdhbnQgdG8gaW50ZXJmZXJlIHdpdGggZGV0ZXJtaW5pc3RpYyBQUk5HIHN0YXRlIGxhdGVyLFxuLy8gc2VlZHJhbmRvbSB3aWxsIG5vdCBjYWxsIG1hdGgucmFuZG9tIG9uIGl0cyBvd24gYWdhaW4gYWZ0ZXJcbi8vIGluaXRpYWxpemF0aW9uLlxuLy9cbm1peGtleShtYXRoLnJhbmRvbSgpLCBwb29sKTtcblxuLy9cbi8vIE5vZGVqcyBhbmQgQU1EIHN1cHBvcnQ6IGV4cG9ydCB0aGUgaW1wbGVtZW50YXRpb24gYXMgYSBtb2R1bGUgdXNpbmdcbi8vIGVpdGhlciBjb252ZW50aW9uLlxuLy9cbmlmICgodHlwZW9mIG1vZHVsZSkgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBzZWVkcmFuZG9tO1xuICAvLyBXaGVuIGluIG5vZGUuanMsIHRyeSB1c2luZyBjcnlwdG8gcGFja2FnZSBmb3IgYXV0b3NlZWRpbmcuXG4gIHRyeSB7XG4gICAgbm9kZWNyeXB0byA9IHJlcXVpcmUoJ2NyeXB0bycpO1xuICB9IGNhdGNoIChleCkge31cbn0gZWxzZSBpZiAoKHR5cGVvZiBkZWZpbmUpID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICBkZWZpbmUoZnVuY3Rpb24oKSB7IHJldHVybiBzZWVkcmFuZG9tOyB9KTtcbn0gZWxzZSB7XG4gIC8vIFdoZW4gaW5jbHVkZWQgYXMgYSBwbGFpbiBzY3JpcHQsIHNldCB1cCBNYXRoLnNlZWRyYW5kb20gZ2xvYmFsLlxuICBtYXRoWydzZWVkJyArIHJuZ25hbWVdID0gc2VlZHJhbmRvbTtcbn1cblxuXG4vLyBFbmQgYW5vbnltb3VzIHNjb3BlLCBhbmQgcGFzcyBpbml0aWFsIHZhbHVlcy5cbn0pKFxuICAvLyBnbG9iYWw6IGBzZWxmYCBpbiBicm93c2VycyAoaW5jbHVkaW5nIHN0cmljdCBtb2RlIGFuZCB3ZWIgd29ya2VycyksXG4gIC8vIG90aGVyd2lzZSBgdGhpc2AgaW4gTm9kZSBhbmQgb3RoZXIgZW52aXJvbm1lbnRzXG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpID8gc2VsZiA6IHRoaXMsXG4gIFtdLCAgICAgLy8gcG9vbDogZW50cm9weSBwb29sIHN0YXJ0cyBlbXB0eVxuICBNYXRoICAgIC8vIG1hdGg6IHBhY2thZ2UgY29udGFpbmluZyByYW5kb20sIHBvdywgYW5kIHNlZWRyYW5kb21cbik7XG4iLCJjb25zdCBNQVRFUklBTF9BSVIgPSAwO1xuXG5jb25zdCBjZWxsUHJvY0ZhY2VNYXNrID0gW1swLCA0LCAwXSwgWzEsIDUsIDBdLCBbMiwgNiwgMF0sIFszLCA3LCAwXSwgWzAsIDIsIDFdLCBbNCwgNiwgMV0sIFsxLCAzLCAxXSwgWzUsIDcsIDFdLCBbMCwgMSwgMl0sIFsyLCAzLCAyXSwgWzQsIDUsIDJdLCBbNiwgNywgMl1dO1xuY29uc3QgY2VsbFByb2NFZGdlTWFzayA9IFtbMCwgMSwgMiwgMywgMF0sIFs0LCA1LCA2LCA3LCAwXSwgWzAsIDQsIDEsIDUsIDFdLCBbMiwgNiwgMywgNywgMV0sIFswLCAyLCA0LCA2LCAyXSwgWzEsIDMsIDUsIDcsIDJdXTtcblxuY29uc3QgZmFjZVByb2NGYWNlTWFzayA9IFtcbiAgW1s0LCAwLCAwXSwgWzUsIDEsIDBdLCBbNiwgMiwgMF0sIFs3LCAzLCAwXV0sXG4gIFtbMiwgMCwgMV0sIFs2LCA0LCAxXSwgWzMsIDEsIDFdLCBbNywgNSwgMV1dLFxuICBbWzEsIDAsIDJdLCBbMywgMiwgMl0sIFs1LCA0LCAyXSwgWzcsIDYsIDJdXVxuXTtcblxuY29uc3QgZmFjZVByb2NFZGdlTWFzayA9IFtcbiAgW1sxLCA0LCAwLCA1LCAxLCAxXSwgWzEsIDYsIDIsIDcsIDMsIDFdLCBbMCwgNCwgNiwgMCwgMiwgMl0sIFswLCA1LCA3LCAxLCAzLCAyXV0sXG4gIFtbMCwgMiwgMywgMCwgMSwgMF0sIFswLCA2LCA3LCA0LCA1LCAwXSwgWzEsIDIsIDAsIDYsIDQsIDJdLCBbMSwgMywgMSwgNywgNSwgMl1dLFxuICBbWzEsIDEsIDAsIDMsIDIsIDBdLCBbMSwgNSwgNCwgNywgNiwgMF0sIFswLCAxLCA1LCAwLCA0LCAxXSwgWzAsIDMsIDcsIDIsIDYsIDFdXVxuXTtcblxuY29uc3QgZWRnZVByb2NFZGdlTWFzayA9IFtcbiAgW1szLCAyLCAxLCAwLCAwXSwgWzcsIDYsIDUsIDQsIDBdXSxcbiAgW1s1LCAxLCA0LCAwLCAxXSwgWzcsIDMsIDYsIDIsIDFdXSxcbiAgW1s2LCA0LCAyLCAwLCAyXSwgWzcsIDUsIDMsIDEsIDJdXSxcbl07XG5cbmNvbnN0IHByb2Nlc3NFZGdlTWFzayA9IFtbMywgMiwgMSwgMF0sIFs3LCA1LCA2LCA0XSwgWzExLCAxMCwgOSwgOF1dO1xuXG5jb25zdCBlZGdldm1hcCA9IFtcbiAgWzAsIDRdLCBbMSwgNV0sIFsyLCA2XSwgWzMsIDddLFx0Ly8geC1heGlzIFxuICBbMCwgMl0sIFsxLCAzXSwgWzQsIDZdLCBbNSwgN10sXHQvLyB5LWF4aXNcbiAgWzAsIDFdLCBbMiwgM10sIFs0LCA1XSwgWzYsIDddXHRcdC8vIHotYXhpc1xuXTtcblxuY29uc3QgQ29udG91clByb2Nlc3NFZGdlID0gKG5vZGU6IGFueSwgZGlyOiBudW1iZXIsIGluZGljZXM6IG51bWJlcltdKSA9PiB7XG4gIGxldCBtaW5TaXplID0gMTAwMDAwMDtcdFx0Ly8gYXJiaXRyYXJ5IGJpZyBudW1iZXJcbiAgbGV0IG1pbkluZGV4ID0gMDtcbiAgbGV0IGluZGV4ZXMgPSBbLTEsIC0xLCAtMSwgLTFdO1xuICBsZXQgZmxpcCA9IGZhbHNlO1xuICBsZXQgc2lnbkNoYW5nZSA9IFtmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZV07XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICBsZXQgZWRnZSA9IHByb2Nlc3NFZGdlTWFza1tkaXJdW2ldO1xuICAgIGxldCBjMSA9IGVkZ2V2bWFwW2VkZ2VdWzBdO1xuICAgIGxldCBjMiA9IGVkZ2V2bWFwW2VkZ2VdWzFdO1xuXG4gICAgbGV0IG0xID0gKG5vZGVbaV0uZHJhd0luZm8uY29ybmVycyA+PiBjMSkgJiAxO1xuICAgIGxldCBtMiA9IChub2RlW2ldLmRyYXdJbmZvLmNvcm5lcnMgPj4gYzIpICYgMTtcblxuICAgIGlmIChub2RlW2ldLnNpemUgPCBtaW5TaXplKSB7XG4gICAgICBtaW5TaXplID0gbm9kZVtpXS5zaXplO1xuICAgICAgbWluSW5kZXggPSBpO1xuICAgICAgZmxpcCA9IG0xICE9PSBNQVRFUklBTF9BSVI7XG4gICAgfVxuXG4gICAgaW5kZXhlc1tpXSA9IG5vZGVbaV0uZHJhd0luZm8uaW5kZXg7XG5cbiAgICBzaWduQ2hhbmdlW2ldID1cbiAgICAgIChtMSA9PT0gTUFURVJJQUxfQUlSICYmIG0yICE9PSBNQVRFUklBTF9BSVIpIHx8XG4gICAgICAobTEgIT09IE1BVEVSSUFMX0FJUiAmJiBtMiA9PT0gTUFURVJJQUxfQUlSKTtcblxuXG4gIH1cblxuICBpZiAoc2lnbkNoYW5nZVttaW5JbmRleF0pIHtcblxuICAgIGlmICghZmxpcCkge1xuXG4gICAgICBpbmRpY2VzLnB1c2goaW5kZXhlc1swXSk7XG4gICAgICBpbmRpY2VzLnB1c2goaW5kZXhlc1sxXSk7XG4gICAgICBpbmRpY2VzLnB1c2goaW5kZXhlc1szXSk7XG5cbiAgICAgIGluZGljZXMucHVzaChpbmRleGVzWzBdKTtcbiAgICAgIGluZGljZXMucHVzaChpbmRleGVzWzNdKTtcbiAgICAgIGluZGljZXMucHVzaChpbmRleGVzWzJdKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpbmRpY2VzLnB1c2goaW5kZXhlc1swXSk7XG4gICAgICBpbmRpY2VzLnB1c2goaW5kZXhlc1szXSk7XG4gICAgICBpbmRpY2VzLnB1c2goaW5kZXhlc1sxXSk7XG5cbiAgICAgIGluZGljZXMucHVzaChpbmRleGVzWzBdKTtcbiAgICAgIGluZGljZXMucHVzaChpbmRleGVzWzJdKTtcbiAgICAgIGluZGljZXMucHVzaChpbmRleGVzWzNdKTtcblxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBDb250b3VyRWRnZVByb2MgPSAobm9kZTogYW55LCBkaXI6IG51bWJlciwgaW5kaWNlczogbnVtYmVyW10pID0+IHtcbiAgaWYgKG5vZGVbMF0gPT0gbnVsbCB8fCBub2RlWzFdID09IG51bGwgfHwgbm9kZVsyXSA9PSBudWxsIHx8IG5vZGVbM10gPT0gbnVsbClcbiAgICByZXR1cm47XG5cbiAgaWYgKG5vZGVbMF0udHlwZSAhPT0gJ2ludGVybmFsJyAmJlxuICAgIG5vZGVbMV0udHlwZSAhPT0gJ2ludGVybmFsJyAmJlxuICAgIG5vZGVbMl0udHlwZSAhPT0gJ2ludGVybmFsJyAmJlxuICAgIG5vZGVbM10udHlwZSAhPT0gJ2ludGVybmFsJykge1xuICAgIENvbnRvdXJQcm9jZXNzRWRnZShub2RlLCBkaXIsIGluZGljZXMpO1xuICB9XG4gIGVsc2Uge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICBsZXQgZWRnZU5vZGVzID0gW107XG4gICAgICBsZXQgYyA9IFtcbiAgICAgICAgZWRnZVByb2NFZGdlTWFza1tkaXJdW2ldWzBdLFxuICAgICAgICBlZGdlUHJvY0VkZ2VNYXNrW2Rpcl1baV1bMV0sXG4gICAgICAgIGVkZ2VQcm9jRWRnZU1hc2tbZGlyXVtpXVsyXSxcbiAgICAgICAgZWRnZVByb2NFZGdlTWFza1tkaXJdW2ldWzNdXG4gICAgICBdO1xuXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDQ7IGorKykge1xuICAgICAgICBpZiAobm9kZVtqXS50eXBlID09PSAnbGVhZicgfHwgbm9kZVtqXS50eXBlID09PSAncHNldWRvJykge1xuICAgICAgICAgIGVkZ2VOb2Rlc1tqXSA9IG5vZGVbal07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZWRnZU5vZGVzW2pdID0gbm9kZVtqXS5jaGlsZHJlbltjW2pdXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBDb250b3VyRWRnZVByb2MoZWRnZU5vZGVzLCBlZGdlUHJvY0VkZ2VNYXNrW2Rpcl1baV1bNF0sIGluZGljZXMpO1xuICAgIH1cbiAgfVxufVxuXG5jb25zdCBDb250b3VyRmFjZVByb2MgPSAobm9kZTogYW55LCBkaXI6IG51bWJlciwgaW5kaWNlczogbnVtYmVyW10pID0+IHtcbiAgaWYgKG5vZGVbMF0gPT0gbnVsbCB8fCBub2RlWzFdID09IG51bGwpXG4gICAgcmV0dXJuO1xuXG4gIGlmIChub2RlWzBdLnR5cGUgPT09ICdpbnRlcm5hbCcgfHxcbiAgICBub2RlWzFdLnR5cGUgPT09ICdpbnRlcm5hbCcpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgbGV0IGZhY2VOb2RlcyA9IFtdO1xuXG4gICAgICBsZXQgYyA9IFtcbiAgICAgICAgZmFjZVByb2NGYWNlTWFza1tkaXJdW2ldWzBdLFxuICAgICAgICBmYWNlUHJvY0ZhY2VNYXNrW2Rpcl1baV1bMV1cbiAgICAgIF07XG5cbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMjsgaisrKSB7XG4gICAgICAgIGlmIChub2RlW2pdLnR5cGUgIT09ICdpbnRlcm5hbCcpIHtcbiAgICAgICAgICBmYWNlTm9kZXNbal0gPSBub2RlW2pdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGZhY2VOb2Rlc1tqXSA9IG5vZGVbal0uY2hpbGRyZW5bY1tqXV07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgQ29udG91ckZhY2VQcm9jKGZhY2VOb2RlcywgZmFjZVByb2NGYWNlTWFza1tkaXJdW2ldWzJdLCBpbmRpY2VzKTtcbiAgICB9XG5cbiAgICBsZXQgb3JkZXJzID0gW1xuICAgICAgWzAsIDAsIDEsIDFdLFxuICAgICAgWzAsIDEsIDAsIDFdXG4gICAgXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICBsZXQgZWRnZU5vZGVzID0gW107XG4gICAgICBsZXQgYyA9IFtcbiAgICAgICAgZmFjZVByb2NFZGdlTWFza1tkaXJdW2ldWzFdLFxuICAgICAgICBmYWNlUHJvY0VkZ2VNYXNrW2Rpcl1baV1bMl0sXG4gICAgICAgIGZhY2VQcm9jRWRnZU1hc2tbZGlyXVtpXVszXSxcbiAgICAgICAgZmFjZVByb2NFZGdlTWFza1tkaXJdW2ldWzRdXG4gICAgICBdO1xuXG4gICAgICBsZXQgb3JkZXIgPSBbXG4gICAgICAgIG9yZGVyc1tmYWNlUHJvY0VkZ2VNYXNrW2Rpcl1baV1bMF1dWzBdLFxuICAgICAgICBvcmRlcnNbZmFjZVByb2NFZGdlTWFza1tkaXJdW2ldWzBdXVsxXSxcbiAgICAgICAgb3JkZXJzW2ZhY2VQcm9jRWRnZU1hc2tbZGlyXVtpXVswXV1bMl0sXG4gICAgICAgIG9yZGVyc1tmYWNlUHJvY0VkZ2VNYXNrW2Rpcl1baV1bMF1dWzNdXG4gICAgICBdO1xuXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDQ7IGorKykge1xuICAgICAgICBpZiAobm9kZVtvcmRlcltqXV0udHlwZSA9PT0gJ2xlYWYnIHx8XG4gICAgICAgICAgbm9kZVtvcmRlcltqXV0udHlwZSA9PT0gJ3BzZXVkbycpIHtcbiAgICAgICAgICBlZGdlTm9kZXNbal0gPSBub2RlW29yZGVyW2pdXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBlZGdlTm9kZXNbal0gPSBub2RlW29yZGVyW2pdXS5jaGlsZHJlbltjW2pdXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBDb250b3VyRWRnZVByb2MoZWRnZU5vZGVzLCBmYWNlUHJvY0VkZ2VNYXNrW2Rpcl1baV1bNV0sIGluZGljZXMpO1xuICAgIH1cbiAgfVxufVxuXG5jb25zdCBDb250b3VyQ2VsbFByb2MgPSAobm9kZTogYW55LCBpbmRpY2VzOiBudW1iZXJbXSkgPT4ge1xuICBpZiAobm9kZSA9PSBudWxsKVxuICAgIHJldHVybjtcblxuICBpZiAobm9kZS50eXBlID09PSAnaW50ZXJuYWwnKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICAgIENvbnRvdXJDZWxsUHJvYyhub2RlLmNoaWxkcmVuW2ldLCBpbmRpY2VzKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEyOyBpKyspIHtcbiAgICAgIGxldCBmYWNlTm9kZXMgPSBbXTtcbiAgICAgIGxldCBjID0gW2NlbGxQcm9jRmFjZU1hc2tbaV1bMF0sIGNlbGxQcm9jRmFjZU1hc2tbaV1bMV1dO1xuXG4gICAgICBmYWNlTm9kZXNbMF0gPSBub2RlLmNoaWxkcmVuW2NbMF1dO1xuICAgICAgZmFjZU5vZGVzWzFdID0gbm9kZS5jaGlsZHJlbltjWzFdXTtcblxuICAgICAgQ29udG91ckZhY2VQcm9jKGZhY2VOb2RlcywgY2VsbFByb2NGYWNlTWFza1tpXVsyXSwgaW5kaWNlcyk7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgIGxldCBlZGdlTm9kZXMgPSBbXTtcbiAgICAgIGxldCBjID0gW1xuICAgICAgICBjZWxsUHJvY0VkZ2VNYXNrW2ldWzBdLFxuICAgICAgICBjZWxsUHJvY0VkZ2VNYXNrW2ldWzFdLFxuICAgICAgICBjZWxsUHJvY0VkZ2VNYXNrW2ldWzJdLFxuICAgICAgICBjZWxsUHJvY0VkZ2VNYXNrW2ldWzNdXG4gICAgICBdO1xuXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDQ7IGorKykge1xuICAgICAgICBlZGdlTm9kZXNbal0gPSBub2RlLmNoaWxkcmVuW2Nbal1dO1xuICAgICAgfVxuXG4gICAgICBDb250b3VyRWRnZVByb2MoZWRnZU5vZGVzLCBjZWxsUHJvY0VkZ2VNYXNrW2ldWzRdLCBpbmRpY2VzKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udG91ckNlbGxQcm9jOyIsImltcG9ydCB7dmVjM30gZnJvbSAnZ2wtbWF0cml4JztcbmltcG9ydCBWb3hlbCBmcm9tICcuL3ZveGVsJztcbmltcG9ydCB7UXVldWVJdGVtfSBmcm9tIFwiLi9xdWV1ZUl0ZW1cIjtcbmltcG9ydCBXb3JsZEdlbmVyYXRvciAgZnJvbSBcIi4vd29ybGQtZ2VuZXJhdG9yXCI7XG5cbmNvbnN0IGN0eDogV29ya2VyID0gc2VsZiBhcyBhbnk7XG5cbihhc3luYyBmdW5jdGlvbigpIHtcbiAgY29uc3QgYWRhcHRlciA9IGF3YWl0IG5hdmlnYXRvci5ncHUucmVxdWVzdEFkYXB0ZXIoKTtcbiAgY29uc3QgZGV2aWNlID0gYXdhaXQgYWRhcHRlci5yZXF1ZXN0RGV2aWNlKCk7XG5cbiAgY29uc3Qgdm94ZWwgPSBuZXcgVm94ZWwoKTtcbiAgYXdhaXQgdm94ZWwuaW5pdChkZXZpY2UpO1xuXG4gIGNvbnNvbGUubG9nKCdWb3hlbCBlbmdpbmUgaW5pdCBjb21wbGV0ZScpO1xuICBwb3N0TWVzc2FnZSh7IHR5cGU6ICdpbml0X2NvbXBsZXRlJyB9KTtcblxuICBjb25zdCBxdWV1ZSA9IChpdGVtOiBRdWV1ZUl0ZW0pID0+IHtcbiAgICBkZXZpY2UucXVldWUub25TdWJtaXR0ZWRXb3JrRG9uZSgpLnRoZW4oXyA9PiB7XG4gICAgICBpdGVtLmNhbGxiYWNrKCk7XG4gICAgfSlcbiAgICBcbiAgICBkZXZpY2UucXVldWUuc3VibWl0KGl0ZW0uaXRlbXMpO1xuICB9O1xuXG5cbiAgbGV0IGdlbmVyYXRpbmcgPSBmYWxzZTtcbiAgb25tZXNzYWdlID0gYXN5bmMgZnVuY3Rpb24oZSkge1xuICAgIGlmIChnZW5lcmF0aW5nKSB7XG4gICAgICBjb25zb2xlLmxvZygnU3RpbGwgZ2VuZXJhdGluZycpXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZ2VuZXJhdGluZyA9IHRydWU7XG4gICAgY29uc3QgeyBwb3NpdGlvbiwgZGV0YWlsIH0gPSBlLmRhdGE7XG5cbiAgICBpZiAoZGV0YWlsKSB7XG5cbiAgICAgIGNvbnN0IHt4LCB5LCB6LCBzfSA9IGRldGFpbDtcbiAgICAgIGNvbnN0IHsgdmVydGljZXMsIG5vcm1hbHMsIGluZGljZXMgfSA9IGF3YWl0IHZveGVsLmdlbmVyYXRlKGRldmljZSwgcXVldWUsIHZlYzMuZnJvbVZhbHVlcyh4LSgzMSpzKjAuNSksIHktKDMxKnMqMC41KSwgei0oMzEqcyowLjUpKSwgcyk7XG4gICAgICBpZiAodmVydGljZXMubGVuZ3RoID4gMCkge1xuICAgICAgfVxuICAgICAgY3R4LnBvc3RNZXNzYWdlKCh7IHR5cGU6ICd1cGRhdGUnLCBpOiBgJHt4fToke3l9OiR7en1gLCBpeDogeCwgaXk6IHksIGl6OiB6LCB4OiAwLCB5OiAwLCB6OiAwLCB2ZXJ0aWNlczogdmVydGljZXMuYnVmZmVyLCBub3JtYWxzOiBub3JtYWxzLmJ1ZmZlciwgaW5kaWNlczogaW5kaWNlcy5idWZmZXIsIHN0cmlkZTogcyB9KSwgW3ZlcnRpY2VzLmJ1ZmZlciwgbm9ybWFscy5idWZmZXIsIGluZGljZXMuYnVmZmVyXSlcbiAgICAgIGdlbmVyYXRpbmcgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzdHJpZGUgPSAzMjtcbiAgICBjb25zdCBzaXplID0gMTI4O1xuICAgIGNvbnNvbGUubG9nKGBXb3JsZCBTaXplOiAke3NpemV9ICgke3NpemUgKiAzMn0pYCk7XG4gICAgY29uc3QgY2h1bmtTaXplID0gMzE7XG4gICAgY29uc3Qgd29ybGRTaXplID0gIE1hdGguY2VpbChzaXplIC8gc3RyaWRlKTtcblxuICAgIGNvbnNvbGUubG9nKGBTdGFydGluZyBnZW5lcmF0aW9uLiBTdHJpZGU6ICR7c3RyaWRlfSAoJHt3b3JsZFNpemV9KWApO1xuICAgIGNvbnN0IHQwID0gcGVyZm9ybWFuY2Uubm93KCk7XG5cbiAgICBjb25zdCB3b3JsZEdlbmVyYXRvciA9IG5ldyBXb3JsZEdlbmVyYXRvcihzdHJpZGUpO1xuICAgIGxldCBpbmZvID0gd29ybGRHZW5lcmF0b3IuaW5pdCgocG9zaXRpb25bMF0gLyBjaHVua1NpemUpLCAocG9zaXRpb25bMV0gLyBjaHVua1NpemUpLCAocG9zaXRpb25bMl0gLyBjaHVua1NpemUpKTtcblxuICAgIGNvbnNvbGUubG9nKGBJbml0IHdvcmxkIGF0ICR7aW5mby54fToke2luZm8ueX06JHtpbmZvLnp9IGZvciBzdHJpZGUgJHtzdHJpZGV9YClcblxuICAgIGRvIHtcbiAgICAgIGNvbnN0IHIgPSB3b3JsZEdlbmVyYXRvci5uZXh0KGluZm8pO1xuICAgICAgY29uc3QgcmVzdWx0ID0gclswXTtcbiAgICAgIGluZm8gPSByWzFdO1xuXG4gICAgICBjb25zdCB7eCwgeSwgen0gPSByZXN1bHQ7XG4gICAgICBjb25zdCBoYWxmQ2h1bmsgPSByZXN1bHQuc3RyaWRlICogY2h1bmtTaXplICogMC41O1xuXG4gICAgICBjb25zdCB7IHZlcnRpY2VzLCBub3JtYWxzLCBpbmRpY2VzLCBjb3JuZXJzIH0gPSBhd2FpdCB2b3hlbC5nZW5lcmF0ZShkZXZpY2UsIHF1ZXVlLCB2ZWMzLmZyb21WYWx1ZXMoeCAqIGNodW5rU2l6ZSAtaGFsZkNodW5rLCB5ICogY2h1bmtTaXplIC1oYWxmQ2h1bmssIHogKiBjaHVua1NpemUgLWhhbGZDaHVuayksIHJlc3VsdC5zdHJpZGUpO1xuICAgICAgLy8gaWYgKHZlcnRpY2VzLmxlbmd0aCA+IDApIHtcbiAgICAgIC8vICAgY29uc29sZS5sb2coYEdlbmVyYXRpbmcgJHt4fToke3l9OiR7en0gKCR7eCAqIGNodW5rU2l6ZSAtaGFsZkNodW5rfToke3kgKiBjaHVua1NpemUgLWhhbGZDaHVua306JHt6ICogY2h1bmtTaXplIC1oYWxmQ2h1bmt9KSAoJHtyZXN1bHQuc3RyaWRlfSAvICR7aGFsZkNodW5rfSAvICR7aW5mby5wcmV2aW91c09mZnNldH0pYClcbiAgICAgIC8vIH1cbiAgICAgIGN0eC5wb3N0TWVzc2FnZSgoeyB0eXBlOiAndXBkYXRlJywgaTogYCR7eH06JHt5fToke3p9YCwgaXg6IHgsIGl5OiB5LCBpejogeiwgeDogMCwgeTogMCwgejogMCwgdmVydGljZXM6IHZlcnRpY2VzLmJ1ZmZlciwgbm9ybWFsczogbm9ybWFscy5idWZmZXIsIGluZGljZXM6IGluZGljZXMuYnVmZmVyLCBjb3JuZXJzOiBjb3JuZXJzLmJ1ZmZlciwgc3RyaWRlOiByZXN1bHQuc3RyaWRlIH0pLCBbdmVydGljZXMuYnVmZmVyLCBub3JtYWxzLmJ1ZmZlciwgaW5kaWNlcy5idWZmZXIsIGNvcm5lcnMuYnVmZmVyXSlcblxuICAgIH0gd2hpbGUgKGluZm8uc3RyaWRlIDw9IDMyNzY4KTtcblxuICAgIGdlbmVyYXRpbmcgPSBmYWxzZTtcblxuICAgIGNvbnNvbGUubG9nKGBHZW5lcmF0aW9uIGNvbXBsZXRlIGluICR7cGVyZm9ybWFuY2Uubm93KCkgLSB0MH0gbWlsbGlzZWNvbmRzYCk7XG4gIH1cbn0pKCk7XG4iLCJpbXBvcnQgeyB2ZWMzIH0gZnJvbSAnZ2wtbWF0cml4JztcblxuY29uc3QgQ0hJTERfTUlOX09GRlNFVFMgPSBbXG4gIHZlYzMuZnJvbVZhbHVlcygwLCAwLCAwKSxcbiAgdmVjMy5mcm9tVmFsdWVzKDAsIDAsIDEpLFxuICB2ZWMzLmZyb21WYWx1ZXMoMCwgMSwgMCksXG4gIHZlYzMuZnJvbVZhbHVlcygwLCAxLCAxKSxcbiAgdmVjMy5mcm9tVmFsdWVzKDEsIDAsIDApLFxuICB2ZWMzLmZyb21WYWx1ZXMoMSwgMCwgMSksXG4gIHZlYzMuZnJvbVZhbHVlcygxLCAxLCAwKSxcbiAgdmVjMy5mcm9tVmFsdWVzKDEsIDEsIDEpXG5dO1xuXG5jb25zdCBjb25zdHJ1Y3RQYXJlbnRzID0gKGNoaWxkcmVuLCBwb3NpdGlvbiwgcGFyZW50U2l6ZSkgPT4ge1xuICBsZXQgcGFyZW50c0hhc2ggPSB7fTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgIGxldCBub2RlID0gY2hpbGRyZW5baV07XG4gICAgbGV0IHBhcmVudFBvcyA9IHZlYzMuc3ViKHZlYzMuY3JlYXRlKCksIG5vZGUubWluLCB2ZWMzLmZyb21WYWx1ZXMoKG5vZGUubWluWzBdIC0gcG9zaXRpb25bMF0pICUgcGFyZW50U2l6ZSxcbiAgICAgIChub2RlLm1pblsxXSAtIHBvc2l0aW9uWzFdKSAlIHBhcmVudFNpemUsXG4gICAgICAobm9kZS5taW5bMl0gLSBwb3NpdGlvblsyXSkgJSBwYXJlbnRTaXplKSk7XG5cbiAgICBsZXQgcGFyZW50ID0gcGFyZW50c0hhc2hbKDxhbnk+cGFyZW50UG9zKV07XG4gICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgIHBhcmVudCA9IHtcbiAgICAgICAgbWluOiBwYXJlbnRQb3MsXG4gICAgICAgIHNpemU6IHBhcmVudFNpemUsXG4gICAgICAgIHR5cGU6ICdpbnRlcm5hbCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXVxuICAgICAgfTtcbiAgICAgIHBhcmVudHNIYXNoW3BhcmVudC5taW5dID0gcGFyZW50O1xuICAgIH1cblxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgODsgaisrKSB7XG4gICAgICBsZXQgY2hpbGRNaW4gPSB2ZWMzLmFkZCh2ZWMzLmNyZWF0ZSgpLCBwYXJlbnRQb3MsIHZlYzMuZnJvbVZhbHVlcyhDSElMRF9NSU5fT0ZGU0VUU1tqXVswXSAqIG5vZGUuc2l6ZSwgQ0hJTERfTUlOX09GRlNFVFNbal1bMV0gKiBub2RlLnNpemUsIENISUxEX01JTl9PRkZTRVRTW2pdWzJdICogbm9kZS5zaXplKSk7XG5cbiAgICAgIGlmICh2ZWMzLmVxdWFscyhjaGlsZE1pbiwgbm9kZS5taW4pKSB7XG4gICAgICAgIHBhcmVudC5jaGlsZHJlbltqXSA9IG5vZGU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNoaWxkcmVuLmxlbmd0aCA9IDA7XG5cbiAgcmV0dXJuIE9iamVjdC52YWx1ZXMocGFyZW50c0hhc2gpO1xufVxuXG5cbmNvbnN0IGNvbnN0cnVjdFRyZWVVcHdhcmRzID0gKG5vZGVzLCByb290TWluLCByb290Tm9kZVNpemUpID0+IHtcbiAgaWYgKG5vZGVzLmxlbmd0aCA9PSAwKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBub2Rlcy5zb3J0KChsaHMsIHJocykgPT4gbGhzLnNpemUgLSByaHMuc2l6ZSk7XG5cbiAgLy8gdGhlIGlucHV0IG5vZGVzIG1heSBiZSBkaWZmZXJlbnQgc2l6ZXMgaWYgYSBzZWFtIG9jdHJlZSBpcyBiZWluZyBjb25zdHJ1Y3RlZFxuICAvLyBpbiB0aGF0IGNhc2Ugd2UgbmVlZCB0byBwcm9jZXNzIHRoZSBpbnB1dCBub2RlcyBpbiBzdGFnZXMgYWxvbmcgd2l0aCB0aGUgbmV3bHlcbiAgLy8gY29uc3RydWN0ZWQgcGFyZW50IG5vZGVzIHVudGlsIGFsbCB0aGUgbm9kZXMgaGF2ZSB0aGUgc2FtZSBzaXplXG4gIHdoaWxlIChub2Rlc1swXS5zaXplICE9IG5vZGVzW25vZGVzLmxlbmd0aCAtIDFdLnNpemUpIHtcbiAgICAvLyBmaW5kIHRoZSBlbmQgb2YgdGhpcyBydW5cbiAgICBsZXQgaXRlciA9IDA7XG4gICAgbGV0IHNpemUgPSBub2Rlc1tpdGVyXS5zaXplO1xuICAgIGRvIHtcbiAgICAgICsraXRlcjtcbiAgICB9IHdoaWxlIChub2Rlc1tpdGVyXS5zaXplID09IHNpemUpO1xuXG4gICAgLy8gY29uc3RydWN0IHRoZSBuZXcgcGFyZW50IG5vZGVzIGZvciB0aGlzIHJ1blxuICAgIGxldCBuZXdOb2RlcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlcjsgaSsrKVxuICAgICAgbmV3Tm9kZXMucHVzaChub2Rlc1tpXSk7XG4gICAgbmV3Tm9kZXMgPSBjb25zdHJ1Y3RQYXJlbnRzKG5ld05vZGVzLCByb290TWluLCBzaXplICogMik7XG5cbiAgICAvLyBzZXQgdXAgZm9yIHRoZSBuZXh0IGl0ZXJhdGlvbjogdGhlIHBhcmVudHMgcHJvZHVjZWQgcGx1cyBhbnkgcmVtYWluaW5nIGlucHV0IG5vZGVzXG4gICAgZm9yIChsZXQgaSA9IGl0ZXI7IGkgPCBub2Rlcy5Db3VudDsgaSsrKVxuICAgICAgbmV3Tm9kZXMucHVzaChub2Rlc1tpXSk7XG5cbiAgICBub2Rlcy5sZW5ndGggPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmV3Tm9kZXMubGVuZ3RoOyBpKyspXG4gICAgICBub2Rlcy5wdXNoKG5ld05vZGVzW2ldKTtcbiAgfVxuXG4gIGxldCBwYXJlbnRTaXplID0gbm9kZXNbMF0uc2l6ZSAqIDI7XG4gIHdoaWxlIChwYXJlbnRTaXplIDw9IHJvb3ROb2RlU2l6ZSkge1xuICAgIG5vZGVzID0gY29uc3RydWN0UGFyZW50cyhub2Rlcywgcm9vdE1pbiwgcGFyZW50U2l6ZSk7XG4gICAgcGFyZW50U2l6ZSAqPSAyO1xuICB9XG5cbiAgaWYgKG5vZGVzLmxlbmd0aCAhPSAxKSB7XG4gICAgY29uc29sZS5sb2cobm9kZXMpO1xuICAgIGNvbnNvbGUuZXJyb3IoXCJUaGVyZSBjYW4gb25seSBiZSBvbmUgcm9vdCBub2RlIVwiKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBub2Rlc1swXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29uc3RydWN0VHJlZVVwd2FyZHM7IiwiaW1wb3J0IHt2ZWMzLCB2ZWM0fSBmcm9tICdnbC1tYXRyaXgnO1xuaW1wb3J0IENvbXB1dGVDb3JuZXJzIGZyb20gJyEhcmF3LWxvYWRlciEuL2NvbXB1dGUtY29ybmVycy53Z3NsJztcbmltcG9ydCBDb21wdXRlUG9zaXRpb25zIGZyb20gJyEhcmF3LWxvYWRlciEuL2NvbXB1dGUtcG9zaXRpb25zLndnc2wnO1xuaW1wb3J0IENvbXB1dGVWb3hlbHMgZnJvbSAnISFyYXctbG9hZGVyIS4vY29tcHV0ZS12b3hlbHMud2dzbCc7XG5pbXBvcnQgRGVuc2l0eSBmcm9tICchIXJhdy1sb2FkZXIhLi9kZW5zaXR5Lndnc2wnO1xuXG5pbXBvcnQgUmFuZG9tIGZyb20gJ3NlZWRyYW5kb20nO1xuaW1wb3J0IENvbnRvdXJDZWxscyBmcm9tICcuL2NvbnRvdXJpbmcnO1xuaW1wb3J0IENvbnN0cnVjdE9jdHJlZSBmcm9tICcuL29jdHJlZSc7XG5cbmNvbnN0IGdlbmVyYXRlVmVydGV4SW5kaWNlcyA9IChub2RlLCB2ZXJ0aWNlcywgbm9ybWFscywgbm9kZVNpemUpID0+IHtcbiAgaWYgKG5vZGUgPT0gbnVsbClcbiAgICByZXR1cm47XG5cbiAgaWYgKG5vZGUuc2l6ZSA+IG5vZGVTaXplKSB7XG4gICAgaWYgKG5vZGUudHlwZSAhPT0gJ2xlYWYnKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgICAgICBnZW5lcmF0ZVZlcnRleEluZGljZXMobm9kZS5jaGlsZHJlbltpXSwgdmVydGljZXMsIG5vcm1hbHMsIG5vZGVTaXplKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAobm9kZS50eXBlICE9PSAnaW50ZXJuYWwnKSB7XG4gICAgY29uc3QgZCA9IG5vZGUuZHJhd0luZm87XG4gICAgaWYgKGQgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgXCJFcnJvciEgQ291bGQgbm90IGFkZCB2ZXJ0ZXghXCI7XG4gICAgfVxuXG4gICAgZC5pbmRleCA9IHZlcnRpY2VzLmxlbmd0aCAvIDM7XG4gICAgdmVydGljZXMucHVzaChkLnBvc2l0aW9uWzBdLCBkLnBvc2l0aW9uWzFdLCBkLnBvc2l0aW9uWzJdKTtcbiAgICBub3JtYWxzLnB1c2goZC5hdmVyYWdlTm9ybWFsWzBdLCBkLmF2ZXJhZ2VOb3JtYWxbMV0sIGQuYXZlcmFnZU5vcm1hbFsyXSk7XG4gIH1cbn1cblxuY29uc3QgY29tcHV0ZVZveGVscyA9IChwb3NpdGlvbiwgc3RyaWRlLCB2b3hlbENvdW50LCBjb21wdXRlZFZveGVsc0RhdGEpID0+IHtcbiAgY29uc3QgY29tcHV0ZWRWb3hlbHMgPSBbXTtcblxuICBpZiAodm94ZWxDb3VudCA9PT0gMCkge1xuICAgIHJldHVybiB7IHZlcnRpY2VzOiBbXSwgbm9ybWFsczogW10sIGluZGljZXM6IFtdIH07XG4gIH1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHZveGVsQ291bnQgKiAxMjsgaSArPSAxMikge1xuICAgIGlmIChjb21wdXRlZFZveGVsc0RhdGFbaSArIDExXSAhPT0gMCkge1xuICAgICAgY29uc3QgbGVhZiA9IHtcbiAgICAgICAgdHlwZTogJ2xlYWYnLFxuICAgICAgICBzaXplOiBzdHJpZGUsXG4gICAgICAgIG1pbjogdmVjMy5mcm9tVmFsdWVzKGNvbXB1dGVkVm94ZWxzRGF0YVtpXSwgY29tcHV0ZWRWb3hlbHNEYXRhW2kgKyAxXSwgY29tcHV0ZWRWb3hlbHNEYXRhW2kgKyAyXSksXG4gICAgICAgIGRyYXdJbmZvOiB7XG4gICAgICAgICAgcG9zaXRpb246IHZlYzMuZnJvbVZhbHVlcyhjb21wdXRlZFZveGVsc0RhdGFbaSArIDRdLCBjb21wdXRlZFZveGVsc0RhdGFbaSArIDVdLCBjb21wdXRlZFZveGVsc0RhdGFbaSArIDZdKSxcbiAgICAgICAgICBhdmVyYWdlTm9ybWFsOiB2ZWMzLmZyb21WYWx1ZXMoY29tcHV0ZWRWb3hlbHNEYXRhW2kgKyA4XSwgY29tcHV0ZWRWb3hlbHNEYXRhW2kgKyA5XSwgY29tcHV0ZWRWb3hlbHNEYXRhW2kgKyAxMF0pLFxuICAgICAgICAgIGNvcm5lcnM6IGNvbXB1dGVkVm94ZWxzRGF0YVtpICsgM11cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGNvbXB1dGVkVm94ZWxzLnB1c2gobGVhZik7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgdHJlZSA9IENvbnN0cnVjdE9jdHJlZShjb21wdXRlZFZveGVscywgcG9zaXRpb24sIDMyICogc3RyaWRlKTtcblxuXG4gIGNvbnN0IHZlcnRpY2VzID0gW107XG4gIGNvbnN0IG5vcm1hbHMgPSBbXTtcblxuICBnZW5lcmF0ZVZlcnRleEluZGljZXModHJlZSwgdmVydGljZXMsIG5vcm1hbHMsIDEpO1xuXG4gIGNvbnN0IGluZGljZXMgPSBbXTtcbiAgQ29udG91ckNlbGxzKHRyZWUsIGluZGljZXMpO1xuXG4gIHJldHVybiB7XG4gICAgdmVydGljZXM6IG5ldyBGbG9hdDMyQXJyYXkodmVydGljZXMpLFxuICAgIG5vcm1hbHM6IG5ldyBGbG9hdDMyQXJyYXkobm9ybWFscyksXG4gICAgaW5kaWNlczogbmV3IFVpbnQxNkFycmF5KGluZGljZXMpXG4gIH07XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVm94ZWwge1xuICBwcml2YXRlIGNvbXB1dGVQaXBlbGluZTogR1BVQ29tcHV0ZVBpcGVsaW5lO1xuICBwcml2YXRlIGNvbXB1dGVDb3JuZXJzUGlwZWxpbmU6IEdQVUNvbXB1dGVQaXBlbGluZTtcbiAgcHJpdmF0ZSB1bmlmb3JtQnVmZmVyOiBHUFVCdWZmZXI7XG4gIHByaXZhdGUgY29ybmVyTWF0ZXJpYWxzOiBHUFVCdWZmZXI7XG4gIHByaXZhdGUgY29ybmVyTWF0ZXJpYWxzUmVhZDogR1BVQnVmZmVyO1xuICBwcml2YXRlIHZveGVsTWF0ZXJpYWxzQnVmZmVyOiBHUFVCdWZmZXI7XG4gIHByaXZhdGUgdm94ZWxNYXRlcmlhbHNCdWZmZXJSZWFkOiBHUFVCdWZmZXI7XG4gIHByaXZhdGUgY29ybmVySW5kZXhCdWZmZXI6IEdQVUJ1ZmZlcjtcbiAgcHJpdmF0ZSBncHVSZWFkQnVmZmVyOiBHUFVCdWZmZXI7XG4gIHByaXZhdGUgcGVybXV0YXRpb25zQnVmZmVyOiBHUFVCdWZmZXI7XG4gIHByaXZhdGUgdm94ZWxzQnVmZmVyOiBHUFVCdWZmZXI7XG4gIHByaXZhdGUgYWN0b3JzQnVmZmVyOiBHUFVCdWZmZXI7XG4gIHByaXZhdGUgY29tcHV0ZUJpbmRHcm91cDogR1BVQmluZEdyb3VwO1xuICBwcml2YXRlIGNvbXB1dGVDb3JuZXJzQmluZEdyb3VwOiBHUFVCaW5kR3JvdXA7XG4gIHByaXZhdGUgY29tcHV0ZVBvc2l0aW9uc1BpcGVsaW5lOiBHUFVDb21wdXRlUGlwZWxpbmU7XG4gIHByaXZhdGUgY29tcHV0ZVBvc2l0aW9uc0JpbmRHcm91cDogR1BVQmluZEdyb3VwO1xuICBwcml2YXRlIGNvbXB1dGVWb3hlbHNQaXBlbGluZTogR1BVQ29tcHV0ZVBpcGVsaW5lO1xuICBwcml2YXRlIGNvbXB1dGVWb3hlbHNCaW5kR3JvdXA6IEdQVUJpbmRHcm91cDtcbiAgcHJpdmF0ZSB2b3hlbFJlYWRCdWZmZXI6IEdQVUJ1ZmZlcjtcblxuICBhc3luYyBpbml0KGRldmljZTogR1BVRGV2aWNlKSB7XG4gICAgY29uc3QgY29tcHV0ZVZveGVsc0NvZGUgPSBDb21wdXRlVm94ZWxzLnJlcGxhY2UoXCIjaW1wb3J0IGRlbnNpdHlcIiwgRGVuc2l0eSk7XG4gICAgY29uc3Qgc3RhcnQgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICBjb25zb2xlLmxvZygnU3RhcnQgbG9hZGluZyB2b3hlbCBlbmdpbmUnLCBwZXJmb3JtYW5jZS5ub3coKSAtIHN0YXJ0KTtcblxuICAgIGNvbnN0IG1vZHVsZSA9IGRldmljZS5jcmVhdGVTaGFkZXJNb2R1bGUoe1xuICAgICAgY29kZTogY29tcHV0ZVZveGVsc0NvZGUsXG4gICAgfSk7XG5cbiAgICB0aGlzLmNvbXB1dGVQaXBlbGluZSA9IGF3YWl0IGRldmljZS5jcmVhdGVDb21wdXRlUGlwZWxpbmVBc3luYyh7XG4gICAgICBsYXlvdXQ6ICdhdXRvJyxcbiAgICAgIGNvbXB1dGU6IHtcbiAgICAgICAgbW9kdWxlLFxuICAgICAgICBlbnRyeVBvaW50OiAnY29tcHV0ZU1hdGVyaWFscycsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgLy9jb25zb2xlLmxvZygnMTAnLCBwZXJmb3JtYW5jZS5ub3coKSAtIHN0YXJ0KTtcblxuICAgIHRoaXMuY29tcHV0ZUNvcm5lcnNQaXBlbGluZSA9IGF3YWl0IGRldmljZS5jcmVhdGVDb21wdXRlUGlwZWxpbmVBc3luYyh7XG4gICAgICBsYXlvdXQ6ICdhdXRvJyxcbiAgICAgIGNvbXB1dGU6IHtcbiAgICAgICAgbW9kdWxlOiBkZXZpY2UuY3JlYXRlU2hhZGVyTW9kdWxlKHtcbiAgICAgICAgICBjb2RlOiBDb21wdXRlQ29ybmVyc1xuICAgICAgICB9KSxcbiAgICAgICAgZW50cnlQb2ludDogJ21haW4nLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHVuaWZvcm1CdWZmZXJTaXplID0gNCAqIDU7XG4gICAgdGhpcy51bmlmb3JtQnVmZmVyID0gZGV2aWNlLmNyZWF0ZUJ1ZmZlcih7XG4gICAgICBzaXplOiB1bmlmb3JtQnVmZmVyU2l6ZSxcbiAgICAgIHVzYWdlOiBHUFVCdWZmZXJVc2FnZS5VTklGT1JNIHwgR1BVQnVmZmVyVXNhZ2UuQ09QWV9EU1QsXG4gICAgfSk7XG5cbiAgICB0aGlzLmNvcm5lck1hdGVyaWFscyA9IGRldmljZS5jcmVhdGVCdWZmZXIoe1xuICAgICAgc2l6ZTogVWludDMyQXJyYXkuQllURVNfUEVSX0VMRU1FTlQgKiAzMyAqIDMzICogMzMsXG4gICAgICB1c2FnZTogR1BVQnVmZmVyVXNhZ2UuU1RPUkFHRSB8IEdQVUJ1ZmZlclVzYWdlLkNPUFlfU1JDLFxuICAgICAgbWFwcGVkQXRDcmVhdGlvbjogZmFsc2UsXG4gICAgfSk7XG5cblxuXG4gICAgdGhpcy5jb3JuZXJNYXRlcmlhbHNSZWFkID0gZGV2aWNlLmNyZWF0ZUJ1ZmZlcih7XG4gICAgICBzaXplOiBVaW50MzJBcnJheS5CWVRFU19QRVJfRUxFTUVOVCAqIDMzICogMzMgKiAzMyxcbiAgICAgIHVzYWdlOiBHUFVCdWZmZXJVc2FnZS5DT1BZX0RTVCB8IEdQVUJ1ZmZlclVzYWdlLk1BUF9SRUFELFxuICAgIH0pO1xuXG4gICAgdGhpcy52b3hlbE1hdGVyaWFsc0J1ZmZlciA9IGRldmljZS5jcmVhdGVCdWZmZXIoe1xuICAgICAgc2l6ZTogVWludDMyQXJyYXkuQllURVNfUEVSX0VMRU1FTlQgKiAzMiAqIDMyICogMzIsXG4gICAgICB1c2FnZTogR1BVQnVmZmVyVXNhZ2UuU1RPUkFHRSB8IEdQVUJ1ZmZlclVzYWdlLkNPUFlfU1JDLFxuICAgICAgbWFwcGVkQXRDcmVhdGlvbjogZmFsc2UsXG4gICAgfSk7XG5cblxuXG4gICAgdGhpcy52b3hlbE1hdGVyaWFsc0J1ZmZlclJlYWQgPSBkZXZpY2UuY3JlYXRlQnVmZmVyKHtcbiAgICAgIHNpemU6IFVpbnQzMkFycmF5LkJZVEVTX1BFUl9FTEVNRU5UICogMzIgKiAzMiAqIDMyLFxuICAgICAgdXNhZ2U6IEdQVUJ1ZmZlclVzYWdlLkNPUFlfRFNUIHwgR1BVQnVmZmVyVXNhZ2UuTUFQX1JFQUQsXG4gICAgfSk7XG5cbiAgICB0aGlzLmNvcm5lckluZGV4QnVmZmVyID0gZGV2aWNlLmNyZWF0ZUJ1ZmZlcih7XG4gICAgICBzaXplOiBVaW50MzJBcnJheS5CWVRFU19QRVJfRUxFTUVOVCArIFVpbnQzMkFycmF5LkJZVEVTX1BFUl9FTEVNRU5UICogMzIgKiAzMiAqIDMyLFxuICAgICAgdXNhZ2U6IEdQVUJ1ZmZlclVzYWdlLlNUT1JBR0UgfCBHUFVCdWZmZXJVc2FnZS5DT1BZX1NSQyxcbiAgICAgIG1hcHBlZEF0Q3JlYXRpb246IGZhbHNlLFxuICAgIH0pO1xuXG4gICAgdGhpcy5ncHVSZWFkQnVmZmVyID0gZGV2aWNlLmNyZWF0ZUJ1ZmZlcih7XG4gICAgICBzaXplOiBVaW50MzJBcnJheS5CWVRFU19QRVJfRUxFTUVOVCxcbiAgICAgIHVzYWdlOiBHUFVCdWZmZXJVc2FnZS5DT1BZX0RTVCB8IEdQVUJ1ZmZlclVzYWdlLk1BUF9SRUFEXG4gICAgfSk7XG5cbiAgICBjb25zdCBwZXJtdXRhdGlvbnMgPSBuZXcgSW50MzJBcnJheSg1MTIpO1xuXG4gICAgY29uc3QgcmFuZG9tID0gbmV3IFJhbmRvbSg2NDUyKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI1NjsgaSsrKVxuICAgICAgcGVybXV0YXRpb25zW2ldID0gKDI1NiAqIChyYW5kb20oKSkpO1xuXG4gICAgZm9yIChsZXQgaSA9IDI1NjsgaSA8IDUxMjsgaSsrKVxuICAgICAgcGVybXV0YXRpb25zW2ldID0gcGVybXV0YXRpb25zW2kgLSAyNTZdO1xuXG4gICAgdGhpcy5wZXJtdXRhdGlvbnNCdWZmZXIgPSBkZXZpY2UuY3JlYXRlQnVmZmVyKHtcbiAgICAgIHNpemU6IHBlcm11dGF0aW9ucy5ieXRlTGVuZ3RoLFxuICAgICAgdXNhZ2U6IEdQVUJ1ZmZlclVzYWdlLlNUT1JBR0UgfCBHUFVCdWZmZXJVc2FnZS5DT1BZX0RTVCxcbiAgICAgIG1hcHBlZEF0Q3JlYXRpb246IHRydWUsXG4gICAgfSk7XG5cbiAgICBuZXcgSW50MzJBcnJheSh0aGlzLnBlcm11dGF0aW9uc0J1ZmZlci5nZXRNYXBwZWRSYW5nZSgpKS5zZXQoXG4gICAgICBwZXJtdXRhdGlvbnNcbiAgICApO1xuICAgIHRoaXMucGVybXV0YXRpb25zQnVmZmVyLnVubWFwKCk7XG5cblxuXG4gICAgdGhpcy52b3hlbHNCdWZmZXIgPSBkZXZpY2UuY3JlYXRlQnVmZmVyKHtcbiAgICAgIHNpemU6IEZsb2F0MzJBcnJheS5CWVRFU19QRVJfRUxFTUVOVCAqIDEyICogMzIgKiAzMiAqIDMyLFxuICAgICAgdXNhZ2U6IEdQVUJ1ZmZlclVzYWdlLlNUT1JBR0UgfCBHUFVCdWZmZXJVc2FnZS5DT1BZX1NSQyxcbiAgICAgIG1hcHBlZEF0Q3JlYXRpb246IGZhbHNlLFxuICAgIH0pO1xuXG5cbiAgICB0aGlzLmFjdG9yc0J1ZmZlciA9IGRldmljZS5jcmVhdGVCdWZmZXIoe1xuICAgICAgc2l6ZTogRmxvYXQzMkFycmF5LkJZVEVTX1BFUl9FTEVNRU5UICogOCxcbiAgICAgIHVzYWdlOiBHUFVCdWZmZXJVc2FnZS5TVE9SQUdFIHwgR1BVQnVmZmVyVXNhZ2UuQ09QWV9TUkMsXG4gICAgICBtYXBwZWRBdENyZWF0aW9uOiBmYWxzZSxcbiAgICB9KTtcblxuICAgIC8vY29uc29sZS5sb2coJzIwJywgcGVyZm9ybWFuY2Uubm93KCkgLSBzdGFydCk7XG5cbiAgICB0aGlzLmNvbXB1dGVCaW5kR3JvdXAgPSBkZXZpY2UuY3JlYXRlQmluZEdyb3VwKHtcbiAgICAgIGxheW91dDogdGhpcy5jb21wdXRlUGlwZWxpbmUuZ2V0QmluZEdyb3VwTGF5b3V0KDApLFxuICAgICAgZW50cmllczogW1xuICAgICAgICB7XG4gICAgICAgICAgYmluZGluZzogMSxcbiAgICAgICAgICByZXNvdXJjZToge1xuICAgICAgICAgICAgYnVmZmVyOiB0aGlzLmNvcm5lck1hdGVyaWFsc1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG5cbiAgICAgICAge1xuICAgICAgICAgIGJpbmRpbmc6IDUsXG4gICAgICAgICAgcmVzb3VyY2U6IHtcbiAgICAgICAgICAgIGJ1ZmZlcjogdGhpcy51bmlmb3JtQnVmZmVyXG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0pO1xuXG4gICAgLy9jb25zb2xlLmxvZygnMjEnLCBwZXJmb3JtYW5jZS5ub3coKSAtIHN0YXJ0KTtcblxuICAgIHRoaXMuY29tcHV0ZUNvcm5lcnNCaW5kR3JvdXAgPSBkZXZpY2UuY3JlYXRlQmluZEdyb3VwKHtcbiAgICAgIGxheW91dDogdGhpcy5jb21wdXRlQ29ybmVyc1BpcGVsaW5lLmdldEJpbmRHcm91cExheW91dCgwKSxcbiAgICAgIGVudHJpZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGJpbmRpbmc6IDEsXG4gICAgICAgICAgcmVzb3VyY2U6IHtcbiAgICAgICAgICAgIGJ1ZmZlcjogdGhpcy5jb3JuZXJNYXRlcmlhbHNcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYmluZGluZzogMixcbiAgICAgICAgICByZXNvdXJjZToge1xuICAgICAgICAgICAgYnVmZmVyOiB0aGlzLnZveGVsTWF0ZXJpYWxzQnVmZmVyXG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0pO1xuXG4gICAgdGhpcy5jb21wdXRlUG9zaXRpb25zUGlwZWxpbmUgPSBhd2FpdCBkZXZpY2UuY3JlYXRlQ29tcHV0ZVBpcGVsaW5lQXN5bmMoe1xuICAgICAgbGF5b3V0OiAnYXV0bycsXG4gICAgICBjb21wdXRlOiB7XG4gICAgICAgIG1vZHVsZTogZGV2aWNlLmNyZWF0ZVNoYWRlck1vZHVsZSh7XG4gICAgICAgICAgY29kZTogQ29tcHV0ZVBvc2l0aW9ucyxcbiAgICAgICAgfSksXG4gICAgICAgIGVudHJ5UG9pbnQ6ICdtYWluJyxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICAvL2NvbnNvbGUubG9nKCczMCcsIHBlcmZvcm1hbmNlLm5vdygpIC0gc3RhcnQpO1xuXG5cbiAgICB0aGlzLmNvbXB1dGVQb3NpdGlvbnNCaW5kR3JvdXAgPSBkZXZpY2UuY3JlYXRlQmluZEdyb3VwKHtcbiAgICAgIGxheW91dDogdGhpcy5jb21wdXRlUG9zaXRpb25zUGlwZWxpbmUuZ2V0QmluZEdyb3VwTGF5b3V0KDApLFxuICAgICAgZW50cmllczogW1xuICAgICAgICB7XG4gICAgICAgICAgYmluZGluZzogMixcbiAgICAgICAgICByZXNvdXJjZToge1xuICAgICAgICAgICAgYnVmZmVyOiB0aGlzLnZveGVsTWF0ZXJpYWxzQnVmZmVyXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGJpbmRpbmc6IDMsXG4gICAgICAgICAgcmVzb3VyY2U6IHtcbiAgICAgICAgICAgIGJ1ZmZlcjogdGhpcy5jb3JuZXJJbmRleEJ1ZmZlclxuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9KTtcblxuICAgIC8vY29uc29sZS5sb2coJzMxJywgcGVyZm9ybWFuY2Uubm93KCkgLSBzdGFydCk7XG5cbiAgICAvL2NvbnNvbGUubG9nKCczMS41JywgcGVyZm9ybWFuY2Uubm93KCkgLSBzdGFydCk7XG4gICAgdGhpcy5jb21wdXRlVm94ZWxzUGlwZWxpbmUgPSBhd2FpdCBkZXZpY2UuY3JlYXRlQ29tcHV0ZVBpcGVsaW5lQXN5bmMoe1xuICAgICAgbGF5b3V0OiAnYXV0bycsXG4gICAgICBjb21wdXRlOiB7XG4gICAgICAgIG1vZHVsZSxcbiAgICAgICAgZW50cnlQb2ludDogJ21haW4nLFxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy9jb25zb2xlLmxvZygnMzInLCBwZXJmb3JtYW5jZS5ub3coKSAtIHN0YXJ0KTtcblxuXG4gICAgdGhpcy5jb21wdXRlVm94ZWxzQmluZEdyb3VwID0gZGV2aWNlLmNyZWF0ZUJpbmRHcm91cCh7XG4gICAgICBsYXlvdXQ6IHRoaXMuY29tcHV0ZVZveGVsc1BpcGVsaW5lLmdldEJpbmRHcm91cExheW91dCgwKSxcbiAgICAgIGVudHJpZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGJpbmRpbmc6IDIsXG4gICAgICAgICAgcmVzb3VyY2U6IHtcbiAgICAgICAgICAgIGJ1ZmZlcjogdGhpcy52b3hlbE1hdGVyaWFsc0J1ZmZlclxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBiaW5kaW5nOiAzLFxuICAgICAgICAgIHJlc291cmNlOiB7XG4gICAgICAgICAgICBidWZmZXI6IHRoaXMuY29ybmVySW5kZXhCdWZmZXJcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYmluZGluZzogNCxcbiAgICAgICAgICByZXNvdXJjZToge1xuICAgICAgICAgICAgYnVmZmVyOiB0aGlzLnZveGVsc0J1ZmZlclxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBiaW5kaW5nOiA1LFxuICAgICAgICAgIHJlc291cmNlOiB7XG4gICAgICAgICAgICBidWZmZXI6IHRoaXMudW5pZm9ybUJ1ZmZlclxuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9KTtcblxuICAgIC8vY29uc29sZS5sb2coJzQwJywgcGVyZm9ybWFuY2Uubm93KCkgLSBzdGFydCk7XG5cblxuICAgIHRoaXMudm94ZWxSZWFkQnVmZmVyID0gZGV2aWNlLmNyZWF0ZUJ1ZmZlcih7XG4gICAgICBzaXplOiBGbG9hdDMyQXJyYXkuQllURVNfUEVSX0VMRU1FTlQgKiAxMiAqIDMyICogMzIgKiAzMixcbiAgICAgIHVzYWdlOiBHUFVCdWZmZXJVc2FnZS5DT1BZX0RTVCB8IEdQVUJ1ZmZlclVzYWdlLk1BUF9SRUFEXG4gICAgfSk7XG5cbiAgICBjb25zb2xlLmxvZygnRG9uZScsIHBlcmZvcm1hbmNlLm5vdygpIC0gc3RhcnQpO1xuICB9XG5cbiAgZ2VuZXJhdGUoZGV2aWNlLCBxdWV1ZSwgcG9zaXRpb24sIHN0cmlkZSkgOiBQcm9taXNlPGFueT4ge1xuICAgIGlmICghc3RyaWRlKSBzdHJpZGUgPSAxO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCBfKSA9PiB7XG5cbiAgICAgIGNvbnN0IHBlcm11dGF0aW9ucyA9IG5ldyBJbnQzMkFycmF5KDUxMik7XG5cbiAgICAgIGNvbnN0IHJhbmRvbSA9IG5ldyBSYW5kb20oJ0phbWVzJyk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI1NjsgaSsrKVxuICAgICAgICBwZXJtdXRhdGlvbnNbaV0gPSAoMjU2ICogKHJhbmRvbSgpKSk7XG5cbiAgICAgIGZvciAobGV0IGkgPSAyNTY7IGkgPCA1MTI7IGkrKylcbiAgICAgICAgcGVybXV0YXRpb25zW2ldID0gcGVybXV0YXRpb25zW2kgLSAyNTZdO1xuXG4gICAgICBkZXZpY2UucXVldWUud3JpdGVCdWZmZXIoXG4gICAgICAgICAgdGhpcy5wZXJtdXRhdGlvbnNCdWZmZXIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICBwZXJtdXRhdGlvbnMuYnVmZmVyLFxuICAgICAgICAgIHBlcm11dGF0aW9ucy5ieXRlT2Zmc2V0LFxuICAgICAgICAgIHBlcm11dGF0aW9ucy5ieXRlTGVuZ3RoXG4gICAgICApO1xuXG4gICAgICB2YXIgYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKDQgKiA1KTtcbiAgICAgIGNvbnN0IHVuaWZvcm0gPSBuZXcgRmxvYXQzMkFycmF5KGJ1ZmZlciwgMCwgNCk7XG4gICAgICB1bmlmb3JtLnNldChwb3NpdGlvbiwgMCk7XG4gICAgICB1bmlmb3JtWzNdID0gc3RyaWRlO1xuXG4gICAgICBuZXcgVWludDMyQXJyYXkoYnVmZmVyLCAxNiwgMSlbMF0gPSAzMztcblxuICAgICAgZGV2aWNlLnF1ZXVlLndyaXRlQnVmZmVyKFxuICAgICAgICAgIHRoaXMudW5pZm9ybUJ1ZmZlcixcbiAgICAgICAgICAwLFxuICAgICAgICAgIGJ1ZmZlcixcbiAgICAgICAgICAwLFxuICAgICAgICAgIGJ1ZmZlci5ieXRlTGVuZ3RoXG4gICAgICApO1xuXG4gICAgICBjb25zdCBjb21wdXRlRW5jb2RlciA9IGRldmljZS5jcmVhdGVDb21tYW5kRW5jb2RlcigpO1xuICAgICAgY29uc3Qgb2N0cmVlU2l6ZSA9IDMyO1xuICAgICAgY29uc3QgY29tcHV0ZVBhc3NFbmNvZGVyID0gY29tcHV0ZUVuY29kZXIuYmVnaW5Db21wdXRlUGFzcygpO1xuICAgICAgY29tcHV0ZVBhc3NFbmNvZGVyLnNldFBpcGVsaW5lKHRoaXMuY29tcHV0ZVBpcGVsaW5lKTtcbiAgICAgIGNvbXB1dGVQYXNzRW5jb2Rlci5zZXRCaW5kR3JvdXAoMCwgdGhpcy5jb21wdXRlQmluZEdyb3VwKTtcbiAgICAgIGNvbXB1dGVQYXNzRW5jb2Rlci5kaXNwYXRjaFdvcmtncm91cHMob2N0cmVlU2l6ZSArIDEsIG9jdHJlZVNpemUgKyAxLCBvY3RyZWVTaXplICsgMSk7XG4gICAgICBjb21wdXRlUGFzc0VuY29kZXIuZW5kKCk7XG5cbiAgICAgIGNvbnN0IGNvbXB1dGVDb3JuZXJzUGFzcyA9IGNvbXB1dGVFbmNvZGVyLmJlZ2luQ29tcHV0ZVBhc3MoKTtcbiAgICAgIGNvbXB1dGVDb3JuZXJzUGFzcy5zZXRQaXBlbGluZSh0aGlzLmNvbXB1dGVDb3JuZXJzUGlwZWxpbmUpO1xuICAgICAgY29tcHV0ZUNvcm5lcnNQYXNzLnNldEJpbmRHcm91cCgwLCB0aGlzLmNvbXB1dGVDb3JuZXJzQmluZEdyb3VwKTtcbiAgICAgIGNvbXB1dGVDb3JuZXJzUGFzcy5kaXNwYXRjaFdvcmtncm91cHMob2N0cmVlU2l6ZSwgb2N0cmVlU2l6ZSwgb2N0cmVlU2l6ZSk7XG4gICAgICBjb21wdXRlQ29ybmVyc1Bhc3MuZW5kKCk7XG5cbiAgICAgIGNvbnN0IGNvbXB1dGVQb3NpdGlvbnNQYXNzID0gY29tcHV0ZUVuY29kZXIuYmVnaW5Db21wdXRlUGFzcygpO1xuICAgICAgY29tcHV0ZVBvc2l0aW9uc1Bhc3Muc2V0UGlwZWxpbmUodGhpcy5jb21wdXRlUG9zaXRpb25zUGlwZWxpbmUpO1xuICAgICAgY29tcHV0ZVBvc2l0aW9uc1Bhc3Muc2V0QmluZEdyb3VwKDAsIHRoaXMuY29tcHV0ZVBvc2l0aW9uc0JpbmRHcm91cCk7XG4gICAgICBjb21wdXRlUG9zaXRpb25zUGFzcy5kaXNwYXRjaFdvcmtncm91cHMoMSk7XG4gICAgICBjb21wdXRlUG9zaXRpb25zUGFzcy5lbmQoKTtcblxuICAgICAgY29uc3QgY29weUVuY29kZXIgPSBkZXZpY2UuY3JlYXRlQ29tbWFuZEVuY29kZXIoKTtcbiAgICAgIGNvcHlFbmNvZGVyLmNvcHlCdWZmZXJUb0J1ZmZlcihcbiAgICAgICAgICB0aGlzLmNvcm5lckluZGV4QnVmZmVyLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgdGhpcy5ncHVSZWFkQnVmZmVyLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgVWludDMyQXJyYXkuQllURVNfUEVSX0VMRU1FTlRcbiAgICAgICk7XG5cbiAgICAgIGNvcHlFbmNvZGVyLmNvcHlCdWZmZXJUb0J1ZmZlcihcbiAgICAgICAgICB0aGlzLmNvcm5lck1hdGVyaWFscyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIHRoaXMuY29ybmVyTWF0ZXJpYWxzUmVhZCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIFVpbnQzMkFycmF5LkJZVEVTX1BFUl9FTEVNRU5UICogMzMgKiAzMyAqIDMzXG4gICAgICApO1xuXG4gICAgICBjb3B5RW5jb2Rlci5jb3B5QnVmZmVyVG9CdWZmZXIoXG4gICAgICAgICAgdGhpcy52b3hlbE1hdGVyaWFsc0J1ZmZlcixcbiAgICAgICAgICAwLFxuICAgICAgICAgIHRoaXMudm94ZWxNYXRlcmlhbHNCdWZmZXJSZWFkLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgVWludDMyQXJyYXkuQllURVNfUEVSX0VMRU1FTlQgKiAzMiAqIDMyICogMzJcbiAgICAgICk7XG5cbiAgICAgIHF1ZXVlKHtcbiAgICAgICAgaXRlbXM6IFtjb21wdXRlRW5jb2Rlci5maW5pc2goKSwgY29weUVuY29kZXIuZmluaXNoKCldLFxuICAgICAgICBjYWxsYmFjazogYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGF3YWl0IHRoaXMuY29ybmVyTWF0ZXJpYWxzUmVhZC5tYXBBc3luYyhHUFVNYXBNb2RlLlJFQUQpO1xuICAgICAgICAgIGNvbnN0IGNvcm5lcnMgPSBuZXcgVWludDMyQXJyYXkodGhpcy5jb3JuZXJNYXRlcmlhbHNSZWFkLmdldE1hcHBlZFJhbmdlKCkpLnNsaWNlKCk7XG4gICAgICAgICAgdGhpcy5jb3JuZXJNYXRlcmlhbHNSZWFkLnVubWFwKCk7XG5cbiAgICAgICAgICB0aGlzLmdwdVJlYWRCdWZmZXIubWFwQXN5bmMoR1BVTWFwTW9kZS5SRUFEKS50aGVuKCgpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgYXJyYXlCdWZmZXIgPSB0aGlzLmdwdVJlYWRCdWZmZXIuZ2V0TWFwcGVkUmFuZ2UoKTtcbiAgICAgICAgICAgIGNvbnN0IHZveGVsQ291bnQgPSBuZXcgVWludDMyQXJyYXkoYXJyYXlCdWZmZXIpWzBdO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnVm94ZWwgY291bnQnLCB2b3hlbENvdW50KTtcbiAgICAgICAgICAgIHRoaXMuZ3B1UmVhZEJ1ZmZlci51bm1hcCgpO1xuXG4gICAgICAgICAgICBpZiAodm94ZWxDb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICByZXNvbHZlKHt2ZXJ0aWNlczogbmV3IEZsb2F0MzJBcnJheSgpLCBub3JtYWxzOiBuZXcgRmxvYXQzMkFycmF5KCksIGluZGljZXM6IG5ldyBVaW50MTZBcnJheSgpLCBjb3JuZXJzOiBuZXcgVWludDMyQXJyYXkoKX0pO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGRpc3BhdGNoQ291bnQgPSBNYXRoLmNlaWwodm94ZWxDb3VudCAvIDEyOCk7XG4gICAgICAgICAgICBjb25zdCBjb21wdXRlRW5jb2RlciA9IGRldmljZS5jcmVhdGVDb21tYW5kRW5jb2RlcigpO1xuICAgICAgICAgICAgY29uc3QgY29tcHV0ZVBhc3NFbmNvZGVyID0gY29tcHV0ZUVuY29kZXIuYmVnaW5Db21wdXRlUGFzcygpO1xuICAgICAgICAgICAgY29tcHV0ZVBhc3NFbmNvZGVyLnNldFBpcGVsaW5lKHRoaXMuY29tcHV0ZVZveGVsc1BpcGVsaW5lKTtcbiAgICAgICAgICAgIGNvbXB1dGVQYXNzRW5jb2Rlci5zZXRCaW5kR3JvdXAoMCwgdGhpcy5jb21wdXRlVm94ZWxzQmluZEdyb3VwKTtcbiAgICAgICAgICAgIGNvbXB1dGVQYXNzRW5jb2Rlci5kaXNwYXRjaFdvcmtncm91cHMoZGlzcGF0Y2hDb3VudCk7XG4gICAgICAgICAgICBjb21wdXRlUGFzc0VuY29kZXIuZW5kKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNvcHlFbmNvZGVyID0gZGV2aWNlLmNyZWF0ZUNvbW1hbmRFbmNvZGVyKCk7XG4gICAgICAgICAgICBjb3B5RW5jb2Rlci5jb3B5QnVmZmVyVG9CdWZmZXIoXG4gICAgICAgICAgICAgICAgdGhpcy52b3hlbHNCdWZmZXIsXG4gICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICB0aGlzLnZveGVsUmVhZEJ1ZmZlcixcbiAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgIEZsb2F0MzJBcnJheS5CWVRFU19QRVJfRUxFTUVOVCAqIHZveGVsQ291bnQgKiAxMlxuICAgICAgICAgICAgKTtcblxuXG4gICAgICAgICAgICBxdWV1ZSh7XG4gICAgICAgICAgICAgIGl0ZW1zOiBbY29tcHV0ZUVuY29kZXIuZmluaXNoKCksIGNvcHlFbmNvZGVyLmZpbmlzaCgpXSxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHtcblxuICAgICAgICAgICAgICAgIHRoaXMudm94ZWxSZWFkQnVmZmVyLm1hcEFzeW5jKEdQVU1hcE1vZGUuUkVBRCkudGhlbigoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgIGNvbnN0IGFycmF5QnVmZmVyID0gdGhpcy52b3hlbFJlYWRCdWZmZXIuZ2V0TWFwcGVkUmFuZ2UoKTtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXB1dGVkVm94ZWxzRGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkoYXJyYXlCdWZmZXIpO1xuICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gY29tcHV0ZVZveGVscyhwb3NpdGlvbiwgc3RyaWRlLCB2b3hlbENvdW50LCBjb21wdXRlZFZveGVsc0RhdGEpO1xuXG4gICAgICAgICAgICAgICAgICB0aGlzLnZveGVsUmVhZEJ1ZmZlci51bm1hcCgpO1xuXG4gICAgICAgICAgICAgICAgICByZXNvbHZlKHsuLi5yZXN1bHQsIGNvcm5lcnN9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59IiwiZXhwb3J0IGludGVyZmFjZSBXb3JsZEdlbmVyYXRvckluZm8ge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgejogbnVtYmVyO1xuICBzdHJpZGU6IG51bWJlcjtcbiAgaXRlcmF0aW9uOiBudW1iZXI7XG4gIGxheWVyOiBudW1iZXI7XG4gIHByZXZpb3VzT2Zmc2V0OiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBXb3JsZFBvc2l0aW9uIHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHo6IG51bWJlcjtcbiAgc3RyaWRlOiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBQb2ludCB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICB6OiBudW1iZXI7XG59XG5cbmZ1bmN0aW9uIGZpeFBvaW50KGk6IG51bWJlcik6IG51bWJlciB7XG4gIGlmIChpID49IDApIHJldHVybiBpICsgMTtcbiAgcmV0dXJuIGk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVBvaW50cyhyYWRpdXM6IG51bWJlcik6IFBvaW50W10ge1xuICBsZXQgcG9pbnRzOiBQb2ludFtdID0gW107XG5cbiAgbGV0IGRpYW1ldGVyID0gcmFkaXVzICogMjtcblxuICBmb3IgKGxldCB4ID0gMDsgeCA8IGRpYW1ldGVyOyB4KyspXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBkaWFtZXRlcjsgeSsrKVxuICAgICAgZm9yIChsZXQgeiA9IDA7IHogPCBkaWFtZXRlcjsgeisrKSB7XG4gICAgICAgIGlmICghKHggPT09IDAgfHwgeCA9PT0gZGlhbWV0ZXIgLSAxIHx8IHkgPT09IDAgfHwgeSA9PT0gZGlhbWV0ZXIgLSAxIHx8IHogPT09IDAgfHwgeiA9PT0gZGlhbWV0ZXIgLSAxKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBwb2ludCA9IHtcbiAgICAgICAgICB4OiBmaXhQb2ludCh4IC0gcmFkaXVzKSxcbiAgICAgICAgICB5OiBmaXhQb2ludCh5IC0gcmFkaXVzKSxcbiAgICAgICAgICB6OiBmaXhQb2ludCh6IC0gcmFkaXVzKVxuICAgICAgICB9O1xuXG4gICAgICAgIHBvaW50cy5wdXNoKHBvaW50KTtcbiAgICAgIH1cblxuICByZXR1cm4gcG9pbnRzO1xufVxuXG5jb25zdCBwb2ludHMgPSBbXTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPD0gNjsgaSsrKSB7XG4gIHBvaW50c1tpXSA9IGdlbmVyYXRlUG9pbnRzKGkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXb3JsZEdlbmVyYXRvciB7XG4gIHByaXZhdGUgcmVhZG9ubHkgbWluU3RyaWRlOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IobWluU3RyaWRlOiBudW1iZXIpIHtcbiAgICB0aGlzLm1pblN0cmlkZSA9IG1pblN0cmlkZTtcbiAgfVxuXG4gIGluaXQoeDogbnVtYmVyLCB5OiBudW1iZXIsIHo6IG51bWJlcik6IFdvcmxkR2VuZXJhdG9ySW5mbyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IE1hdGgucm91bmQoeCAvIHRoaXMubWluU3RyaWRlKSAqIHRoaXMubWluU3RyaWRlLFxuICAgICAgeTogTWF0aC5yb3VuZCh5IC8gdGhpcy5taW5TdHJpZGUpICogdGhpcy5taW5TdHJpZGUsXG4gICAgICB6OiBNYXRoLnJvdW5kKHogLyB0aGlzLm1pblN0cmlkZSkgKiB0aGlzLm1pblN0cmlkZSxcbiAgICAgIHN0cmlkZTogdGhpcy5taW5TdHJpZGUsXG4gICAgICBpdGVyYXRpb246IDAsXG4gICAgICBsYXllcjogMSxcbiAgICAgIHByZXZpb3VzT2Zmc2V0OiAtMSAqIHRoaXMubWluU3RyaWRlIC8gMlxuICAgIH07XG4gIH1cblxuICBsYXllclJhZGl1cyhsYXllcjogbnVtYmVyLCBzdHJpZGU6IG51bWJlcikge1xuICAgIGlmIChzdHJpZGUgPT09IHRoaXMubWluU3RyaWRlKSB7XG4gICAgICByZXR1cm4gbGF5ZXI7XG4gICAgfVxuICAgIGlmIChzdHJpZGUgPT09IHRoaXMubWluU3RyaWRlICogMikge1xuICAgICAgcmV0dXJuIGxheWVyICsgMTtcbiAgICB9XG4gICAgcmV0dXJuIGxheWVyICsgMjtcbiAgfVxuXG4gIHJhZGl1cyhsYXllcjogbnVtYmVyLCBzdHJpZGU6IG51bWJlciwgcHJldmlvdXNPZmZzZXQ6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGguc2lnbihsYXllcikgKiAocHJldmlvdXNPZmZzZXQgKyAoTWF0aC5hYnMobGF5ZXIpICogc3RyaWRlKSk7XG4gIH1cblxuICBsYXllckNvdW50KHN0cmlkZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBpZiAoc3RyaWRlID09IHRoaXMubWluU3RyaWRlICogMilcbiAgICAgIHJldHVybiAzO1xuICAgIHJldHVybiAyO1xuICB9XG5cbiAgbmV4dChpbmZvOiBXb3JsZEdlbmVyYXRvckluZm8pOiBbV29ybGRQb3NpdGlvbiwgV29ybGRHZW5lcmF0b3JJbmZvXSB7XG4gICAgY29uc3Qgb2Zmc2V0cyA9IHBvaW50c1t0aGlzLmxheWVyUmFkaXVzKGluZm8ubGF5ZXIsIGluZm8uc3RyaWRlKV07XG5cbiAgICBjb25zdCBvZmZzZXQgPSBvZmZzZXRzW2luZm8uaXRlcmF0aW9uXTtcbiAgICBjb25zdCBoYWxmU3RyaWRlID0gaW5mby5zdHJpZGUgLyAyO1xuXG4gICAgbGV0IGl0ZXJhdGlvbiA9IGluZm8uaXRlcmF0aW9uICsgMTtcbiAgICBsZXQgbGF5ZXIgPSBpbmZvLmxheWVyO1xuICAgIGxldCBzdHJpZGUgPSBpbmZvLnN0cmlkZTtcbiAgICBsZXQgcHJldmlvdXNPZmZzZXQgPSBpbmZvLnByZXZpb3VzT2Zmc2V0O1xuXG4gICAgaWYgKGl0ZXJhdGlvbiA+PSBvZmZzZXRzLmxlbmd0aCkge1xuICAgICAgaXRlcmF0aW9uID0gMDtcbiAgICAgIGxheWVyKys7XG5cbiAgICAgIGNvbnN0IGxheWVyQ291bnQgPSB0aGlzLmxheWVyQ291bnQoaW5mby5zdHJpZGUpO1xuICAgICAgaWYgKGxheWVyID4gbGF5ZXJDb3VudCkge1xuICAgICAgICBsYXllciA9IDE7XG4gICAgICAgIHN0cmlkZSAqPSAyO1xuICAgICAgICBwcmV2aW91c09mZnNldCA9IHRoaXMucmFkaXVzKGluZm8ubGF5ZXIsIGluZm8uc3RyaWRlLCBpbmZvLnByZXZpb3VzT2Zmc2V0KSAtIGluZm8uc3RyaWRlIC8gMjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFtcbiAgICAgIHtcbiAgICAgICAgeDogaW5mby5zdHJpZGUgKiBvZmZzZXQueCArIGluZm8ueCAtIE1hdGguc2lnbihvZmZzZXQueCkgKiBoYWxmU3RyaWRlLFxuICAgICAgICB5OiBpbmZvLnN0cmlkZSAqIG9mZnNldC55ICsgaW5mby55IC0gTWF0aC5zaWduKG9mZnNldC55KSAqIGhhbGZTdHJpZGUsXG4gICAgICAgIHo6IGluZm8uc3RyaWRlICogb2Zmc2V0LnogKyBpbmZvLnogLSBNYXRoLnNpZ24ob2Zmc2V0LnopICogaGFsZlN0cmlkZSxcbiAgICAgICAgc3RyaWRlOiBpbmZvLnN0cmlkZVxuICAgICAgfSxcbiAgICAgIHsgLi4uaW5mbywgaXRlcmF0aW9uLCBsYXllciwgc3RyaWRlLCBwcmV2aW91c09mZnNldCB9XG4gICAgXTtcbiAgfVxufSIsIi8qIChpZ25vcmVkKSAqLyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmFtZEQgPSBmdW5jdGlvbiAoKSB7XG5cdHRocm93IG5ldyBFcnJvcignZGVmaW5lIGNhbm5vdCBiZSB1c2VkIGluZGlyZWN0Jyk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uYW1kTyA9IHt9OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubm1kID0gKG1vZHVsZSkgPT4ge1xuXHRtb2R1bGUucGF0aHMgPSBbXTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcyEuL3NyYy9jb250b3VyaW5nLndvcmtlci50c1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=