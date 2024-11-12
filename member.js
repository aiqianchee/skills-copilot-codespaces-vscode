function skillsMember() {
    var member = {
        name: 'John',
        age: 26,
        skills: ['JavaScript', 'React', 'Node'],
        greet: function() {
            console.log(`Hello, I'm ${this.name} and I'm ${this.age}`);
        },
        listSkills: function() {
            this.skills.forEach(skill => console.log(skill));
        }
    };

    return member;
}