#include <iostream>

int main() {

  std::cout << "Help Harry Potter get to Hogwarts!\n";
  std::cout << "He's been trapped in his rooms by the Dursleys...\n";
  std::cout << "Dudley bullies Harry outside his room, should he...\n";

  int choice1;
  for (int i = 0; i < 2 && choice1 != 1 && choice1 != 2; i++) {
    std::cout << "Enter 1 if Harry should fight back\n";
    std::cout << "Enter 2 if Harry should keep quiet\n";
    std::cin >> choice1;
  }

  switch (choice1) {
    case 1:
      std::cout << "Dudley calls his parents over\n";
      std::cout << "Harry is stuck in his room forever\n";
      std::cout << "THE END\n";
      return 0;
    
    case 2:
      std::cout << "Dudley gets bored...\n";
      std::cout << "Harry finds a pin in his room and picks the lock at night. He escapes!\n";
      break;

    default:
      std::cout << "Sorry, you didn't enter a valid choice.\n";
      std::cout << "Goodbye.\n";
      return 0;
  }

  std::cout << "Where should Harry go now?\n";

  int choice2;
  for (int i = 0; i < 2 && choice2 != 1 && choice2 != 2 && choice2 != 3; i++) {
    std::cout << "Enter 1 if Harry should go to The Burrow.\n";
    std::cout << "Enter 2 if Harry should go to Malfoy Manner.\n";
    std::cout << "Enter 3 if Harry should go to King's Cross Station.\n";
    std::cin >> choice2;
  }

  switch (choice2) {
    case 1:
      std::cout << "Harry made it safely to The Burrow! He stays with Ron and his family until the school year begins.\n";
      break;

    case 2:
      std::cout << "Harry gets found by Voldermort...\n";
      std::cout << "THE END\n";
      return 0;

    case 3:
      std::cout << "Harry made it onto the Hogwarts Express! He made it to Hogwarts!\n";
      break;

    default:
      std::cout << "Sorry, you didn't enter a valid choice.\n";
      std::cout << "Goodbye.\n";
      return 0;
  }

  std::cout << "Hooray! Harry escaped the Dursleys to Hogwarts!\n";
  return 0;
}