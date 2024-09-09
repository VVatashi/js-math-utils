import { MathUtils } from '../src';

it.each([
    [[0.5, 0, 1], 0.5],
    [[-0.5, 0, 1], 0],
    [[1.5, 0, 1], 1],
    [[0.5, -1, 0], 0],
    [[-0.5, -1, 0], -0.5],
    [[50, 0, 100], 50],
    [[200, 0, 100], 100],
    [[0, 50, 100], 50],
    [[50, 50, 100], 50],
    [[75, 50, 100], 75],
    [[100, 50, 100], 100],
    [[150, 50, 100], 100],
])('expect clamp%p to be %p', (args, result) => {
    // Act
    const value = MathUtils.clamp(...args);

    // Assert
    expect(value).toBe(result);
});

it.each([
    [[0, 1, 0], 0],
    [[0, 1, 0.25], 0.25],
    [[0, 1, 0.5], 0.5],
    [[0, 1, 0.75], 0.75],
    [[0, 1, 1], 1],
    [[0, 2, 0], 0],
    [[0, 2, 0.25], 0.5],
    [[0, 2, 0.5], 1],
    [[0, 2, 0.75], 1.5],
    [[0, 2, 1], 2],
    [[0, 1, 2], 2],
    [[0, 1, -2], -2],
    [[-1, 1, 0.25], -0.5],
    [[-1, 1, 0.5], 0],
    [[-1, 1, 0.75], 0.5],
    [[0, 100, 0.25], 25],
    [[0, 100, 0.5], 50],
    [[-100, 0, 0.25], -75],
    [[0, 50, 2], 100],
    [[0, 50, -2], -100],
])('expect mix%p to be %p', (args, result) => {
    // Act
    const value = MathUtils.mix(...args);

    // Assert
    expect(value).toBe(result);
});

it.each([
    [[0, -1], 0],
    [[0, 0], 1],
    [[0, 1], 1],
    [[0.5, 0], 0],
    [[0.5, 0.5], 1],
    [[0.5, 1], 1],
    [[50, 25], 0],
    [[50, 50], 1],
    [[50, 75], 1],
])('expect step%p to be %p', (args, result) => {
    // Act
    const value = MathUtils.step(...args);

    // Assert
    expect(value).toBe(result);
});

it.each([
    [[0, 1, 0], 0],
    [[0, 1, 0.5], 0.5],
    [[0, 1, 1], 1],
    [[0, 2, 0], 0],
    [[0, 2, 1], 0.5],
    [[0, 2, 2], 1],
    [[-1, 1, -1], 0],
    [[-1, 1, 0], 0.5],
    [[-1, 1, 1], 1],
])('expect smoothstep%p to be %p', (args, result) => {
    // Act
    const value = MathUtils.smoothstep(...args);

    // Assert
    expect(value).toBe(result);
});

it.each([
    [[0, 1, 0], 0],
    [[0, 1, 0.5], 0.5],
    [[0, 1, 1], 1],
    [[0, 2, 0], 0],
    [[0, 2, 1], 0.5],
    [[0, 2, 2], 1],
    [[-1, 1, -1], 0],
    [[-1, 1, 0], 0.5],
    [[-1, 1, 1], 1],
])('expect smootherstep%p to be %p', (args, result) => {
    // Act
    const value = MathUtils.smootherstep(...args);

    // Assert
    expect(value).toBe(result);
});
