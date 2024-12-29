const unsplashIds = [
  '1523050854058-8df90110c9f1', // Graduation
  '1523240795612-9a054b0db644', // Campus
  '1562774053-701939374585', // Library
  '1541339907198-e08756dedf3f', // University Building
  '1498243691581-b145c3f54a5a', // Student Life
  '1527269534026-c86f4009eace', // Study Group
  '1509062522246-3755977927d7', // Modern Campus
  '1606761568283-4c6f9d8c1c3b', // College Life
  '1544531585-d9fb9ca5dd99',  // University Hall
  '1517486808906-6ca8c49d2f06', // Campus Life
];

export const getRandomUnsplashId = (seed) => {
  // Use the name as a seed to get consistent images for the same university
  const index = seed.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % unsplashIds.length;
  return unsplashIds[index];
}; 