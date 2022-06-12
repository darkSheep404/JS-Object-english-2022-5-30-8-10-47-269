
// Question 1
var user = {};
user.name = 'John';
user.surname = 'Mike';
user.name = 'Peter';
delete user.name;

// Question 2
var sum = 0;
var fruit = {
    apple: 20,
    pear: 20,
    peach: 10
};

for (var key in fruit) {
    sum+=fruit[key]
}
console.log(sum)