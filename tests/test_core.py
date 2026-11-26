import pytest

from calc import add, divide, multiply, power, subtract


def test_add():
    assert add(2, 3) == 5


def test_subtract():
    assert subtract(5, 3) == 2


def test_multiply():
    assert multiply(4, 2.5) == 10


def test_divide():
    assert divide(9, 3) == 3


def test_power():
    assert power(2, 10) == 1024
    assert power(9, 0.5) == 3
    assert power(5, 0) == 1


def test_power_negative_exponent_raises():
    with pytest.raises(ValueError):
        power(2, -1)
