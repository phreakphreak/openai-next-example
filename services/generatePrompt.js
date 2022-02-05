const strArr = [
  "Suggest three names for an animal that is a superhero.",
  "Animal: Cat",
  "Names: Captain Sharpclaw, Agent Fluffball, The Incredible Feline",
  "Animal: Dog",
  "Names: Ruff the Protector, Wonder Canine, Sir Barks-a-Lot",
];

export default function generatePrompt(animal) {
  const capitalizedAnimal =
    animal[0].toUpperCase() + animal.slice(1).toLowerCase();
  return [...strArr, `Animal: ${capitalizedAnimal}`, "Names:"].join("\n");
}
