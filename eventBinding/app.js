const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: ""
    };
  },
  watch: {
    // Whenever name changes, watcher fires 
    // name() {
    //   this.fullname = value + " " + "lastName"
    // }

    //however when using more variables conflicts arise, therefore we should use it for management only on of values (resets etc.)
  },
  computed: {
    fullName() {
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "lastname";
    }
  }, 
  methods: {
    add(num) {
      this.counter += num;
    },
    remove(num) {
      this.counter -= num;
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm(event) {
      alert("submitted!");
    },
    outputFullname() {
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "lastname";
    },
    setName(event, lastName) {
      this.name = event.target.value
    },
    resetInput() {
      this.name = "";
    }
  }
});

app.mount('#events');
