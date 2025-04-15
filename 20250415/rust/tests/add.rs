use rust::add;

#[test]
fn test_add() {
    assert_eq!(add::add(3, 5), 8);
}
