new Vue({
    el: "#app",
    vuetify: new Vuetify(),
    data: () => ({
      allCandidates: ["Carl", "Candice", "Frank", "Plusone", "Stacy", "Timmy"],
      selectedCandidates: [
        "Carl",
        "Candice",
        "Frank",
        "Plusone",
        "Stacy",
        "Timmy"
      ],
      reviewerCountList: [1, 2, 3, 4, 5, 6],
      numOfReviewers: 2,
      isFinalReviewersShown: false,
      finalReviewers: []
    }),
    methods: {
      getRandomReviewers: function () {
        if (this.$refs.form.validate()) {
          //Make a copy of candidates
          let arrCandidates = [...this.selectedCandidates];
          let arrFinalReviewers = [];
  
          //Randomly pick one reviewer at a time and remove from the developer list
          for (var i = 0; i < this.numOfReviewers; i++) {
            let randomIndex = Math.floor(Math.random() * arrCandidates.length);
            let removedDeveloper = arrCandidates[randomIndex];
            //Add the chosen reviewer to final reviewers list
            arrFinalReviewers.push(removedDeveloper);
            //Remove the chosen reviewer from reviewers list
            arrCandidates.splice(randomIndex, 1);
          }
          //Show Final Reviewers
          this.isFinalReviewersShown = true;
          this.finalReviewers = arrFinalReviewers.join(", ");
        }
      }
    }
  });
  