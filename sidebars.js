module.exports = {
  packages: [
    {
      type: "category",
      label: "Базова задача",
      items: [
        "getting-started",
        "methods",
        "help",

        {
          type: "category",
          label: "Общи операци",
          items: [
            "components/open",
            "components/create",
            "components/save",
            "components/exit",
          ],
        },
        "about",
      ],
    },
    {
      type: "category",
      label: "Допълнения",
      items: ["modal/list", "modal/print", "modal/empty", "modal/transitions"],
    },
  ],
};
