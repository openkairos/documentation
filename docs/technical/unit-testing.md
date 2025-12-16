# Unit testing

We follow specific guidelines for writing and organizing unit tests in all the projects of Open Kairos. Adhering to
these guidelines ensures consistency, maintainability, and reliability across our codebase.

## Naming the test cases

> [!IMPORTANT]
> Your test name is a documentation, and it should save time for the reader.

The pattern we prefer is PLAIN ENGLISH. This means that the test case names should be descriptive and save the reader
from having to read the implementation to understand what is being tested. It should also act as documentation for the
code, the features or the corner cases being tested.

The details you add to the name should be relevant to the context of the test case. For example when testing a system
feature, you should write the name from the perspective of the user or the system, rather than the implementation
details.

## Test case structure

All the test cases should follow the Arrange-Act-Assert (AAA) pattern. The order doesn't have to be strictly followed
because it depends on the context and the framework being used, but the three parts should be clearly distinguishable
and not mixed or repeated within the same test case.

**❌ Don't**

```typescript
it('should return the correct user data or not found', async () => {
  const userData = {name: 'John Doe', age: 30}; // Arrange
  const userId = await seedUserAndGetId(userData); // Arrange
  const profile = await getUserProfile(userId); // Act
  expect(profile.name).toBe('John Doe'); // Assert
  expect(profile.age).toBe(30); // Assert

  // delete user
  await deleteUser(userId); // Arrange (again)
  const deletedProfile = await getUserProfile(userId); // Act (again)
  expect(deletedProfile).toBeNull(); // Assert (again)
});
```

**✅ Do**

```typescript
it('should return the correct user data when the user exists', async () => {
  // Arrange
  const userData = {name: 'John Doe', age: 30};
  const userId = await seedUserAndGetId(userData);

  // Act
  const profile = await getUserProfile(userId);

  // Assert
  expect(profile.name).toBe('John Doe');
  expect(profile.age).toBe(30);
});

it('should return null when the user does not exist', async () => {
  // Arrange
  const nonExistentUserId = 'non-existent-id';

  // Act
  const profile = await getUserProfile(nonExistentUserId);

  // Assert
  expect(profile).toBeNull();
});
```

## Only a single Act per test case

Each test case should have only one Act step, if multiple actions are needed, either split the test case into multiple
ones or this is a sign that the unit under test doesn't have a single entry point and should be refactored.

## No comments

Don't write comments in your test cases, even `Arrange`, `Act` and `Assert`. They are added here just for clarity, but
in real test cases they should be omitted, and each section should be clearly distinguishable by itself. This could be
achieved by adding empty lines between sections, a single empty line after each section is usually enough.

```typescript
it('should return null when the user does not exist', async () => {
  const nonExistentUserId = 'non-existent-id';

  const profile = await getUserProfile(nonExistentUserId);

  expect(profile).toBeNull();
});
```
