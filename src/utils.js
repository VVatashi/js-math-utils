/**
 * @param {number} value
 * @param {number} min
 * @param {number} max
 */
export /*@__INLINE__*/ function clamp(value, min, max) {
    return /*@__PURE__*/ Math.fround(Math.min(Math.max(value, min), max));
}

/**
 * @param {number} a Start of the range
 * @param {number} b End of the range
 * @param {number} t Weight
 */
export /*@__INLINE__*/ function mix(a, b, t) {
    return /*@__PURE__*/ Math.fround(a * (1 - t) + b * t);
}

/**
 * @param {number} edge
 * @param {number} t
 */
export /*@__INLINE__*/ function step(edge, t) {
    return t >= edge | 0;
}

/**
 * @param {number} a
 * @param {number} b
 * @param {number} t
 */
export /*@__INLINE__*/ function smoothstep(a, b, t) {
    t = /*@__PURE__*/ clamp((t - a) / (b - a), 0, 1);
    return /*@__PURE__*/ Math.fround(t * t * (3 - 2 * t));
}

/**
 * @param {number} a
 * @param {number} b
 * @param {number} t
 */
export /*@__INLINE__*/ function smootherstep(a, b, t) {
    t = /*@__PURE__*/ clamp((t - a) / (b - a), 0, 1);
    return /*@__PURE__*/ Math.fround(t * t * t * (t * (6 * t - 15) + 10));
}

export class MathUtils {
    static clamp = clamp;
    static mix = mix;
    static step = step;
    static smoothstep = smoothstep;
    static smootherstep = smootherstep;
}

export default MathUtils;
