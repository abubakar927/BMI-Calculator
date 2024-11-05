document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector ('.nav-links').classList.toggle('active');
});

document.getElementById('bmi-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get input values
    const height = parseFloat(document.getElementById('height').value) / 100;
    const weight = parseFloat(document.getElementById('weight').value);

    // Calculate BMI
    const bmi = weight / (height * height);
    const bmiResult = bmi.toFixed(2); // Round to 2 decimal places

    // Display the result
    document.getElementById('bmi-result').textContent = bmiResult;

    // Determine BMI category and corresponding class
    let bmiCategory = '';
    let categoryClass= '';
    if (bmi < 18.5){
        bmiCategory = 'Underweight';
        categoryClass='underweight';

    } else if (bmi >= 18.5 && bmi < 24.9) {
        bmiCategory = 'Normal weight';
        categoryClass='normalweight'

    } else if (bmi >= 25 && bmi < 29.9) {
        bmiCategory = 'Overweight';
        categoryClass='overweight'

    } else {
        bmiCategory = 'Obesity';
        categoryClass='obesity'
    }
    
    // Display the BMI category
    document.getElementById('bmi-category').textContent = bmi;


     // Display and apply color to the BMI category
     let bmiCategoryElement = document.getElementById('bmi-category');
     bmiCategoryElement.textContent = bmiCategory;
     bmiCategoryElement.className = categoryClass; // Apply the appropriate CSS class
});
