import type { Command } from "@stores/useCommandStore";

// TODO: respect an order
export const gameflow = (add: (commands: Command[]) => void, element: string) => {
  switch (element) {
    case "phare":
      add([
        { type: "dialog", args: ["Answer the next question."] },
        {
          type: "question",
          args: [
            "What is the Python code to check if a number is even ?",
            ["1) is_even = num % 2 == 1", "2) is_even = num % 2 == 0"],
          ],
        },
        { type: "dialog", args: ["Good job ! Now go to the church for your next question !"] },
      ]);
      break;
    case "big_island_eglise":
      add([
        { type: "dialog", args: ["I hope you're ready !"] },
        {
          type: "coding",
          args: ["What is the Python code to check if a number is even ?", "is_even = num % 2 == 0"],
        },
        { type: "dialog", args: ["Wow ! You've earned it ! Here is your badge !"] },
      ]);
      break;
    default:
      break;
  }
};
