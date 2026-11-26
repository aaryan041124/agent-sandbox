def add(a: float, b: float) -> float:
    return a + b


def subtract(a: float, b: float) -> float:
    return a - b


def multiply(a: float, b: float) -> float:
    return a * b


def divide(a: float, b: float) -> float:
    return a / b


def power(a: float, b: float) -> float:
    """Return a raised to the power b; raise ValueError if b is negative."""
    if b < 0:
        raise ValueError("exponent must be non-negative")
    return a ** b
