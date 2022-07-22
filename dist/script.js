const app = Vue.createApp({
  data() {
    return {
      name: "",
      email: "",
      job: "",
      users: [{ id: 0, name: "John", email: "john@example.com", job: "developer" }],
      errorHandler: "",
      error: false,
      updateId: null,
    };
  },
  methods: {
    addUser() {
      console.log(this.users);

      let newUser;
      let findById;
      if (this.updateId !== null) {
        findById = this.users.find((user) => user.id === this.updateId);
        console.log(findById);
        findById.name = this.name;
        findById.email = this.email;
        findById.job = this.job;
        this.updateId = null;

        this.name = "";
        this.email = "";
        this.job = "";
      } else if (this.name && this.email && this.job) {
        newUser = {
          id: this.users ? this.users[this.users.length - 1].id + 1 : 0,
          name: this.name,
          email: this.email,
          job: this.job,
        };

        this.error = false;
        this.users.push(newUser);

        this.name = "";
        this.email = "";
        this.job = "";
      } else {
        this.error = true;
        this.errorHandler = "Kiruvchi ma'lumot topilmadi";
      }
    },
    prev(e) {
      e.preventDefault();
    },
    updateUser(id) {
      const findById = this.users.find((user) => user.id === id);
      this.name = findById.name;
      this.email = findById.email;
      this.job = findById.job;
      this.updateId = id;
    },
    deleteUser(id) {
      this.users.splice(id, 1);
    },
  },
  computed: {
    reverseUsers() {
      return this.users.reverse();
    },
  },
});
app.mount("#main");
