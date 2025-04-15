use rust::divide;

#[test]
fn test_divide_success() {
    assert_eq!(divide::divide(10, 2).unwrap(), 5);
}

#[test]
fn test_divide_by_zero() {
    assert_eq!(divide::divide(10, 0).unwrap_err(), "Division by zero is not allowed");
}
