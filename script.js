const patterns = {
  name: /^[A-Za-z\s]{3,50}$/,
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 
  mobile: /^[6-9]\d{9}$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
};

const form = document.getElementById("registrationForm"); 

function setFieldStatus(groupId, isValid) {
  const group = document.getElementById(groupId);
  if (isValid) { 
    group.classList.remove("error");
  } else { 
    group.classList.add("error");
  }
  return isValid;
}

if (form) {
  form.addEventListener("submit", function (event) { 
    event.preventDefault();

    const nameVal = document.getElementById("fullName").value.trim(); 
    const emailVal = document.getElementById("email").value.trim(); 
    const mobileVal = document.getElementById("mobile").value.trim(); 
    const passwordVal = document.getElementById("password").value; 
    const confirmPasswordVal = document.getElementById("confirmPassword").value;
    const courseVal = document.getElementById("course").value; 
    const yearVal = document.getElementById("year").value; 
    const genderVal = document.querySelector('input[name="gender"]:checked');
    const termsChecked = document.getElementById("terms").checked;

    const isNameValid = setFieldStatus("group-name", patterns.name.test(nameVal));
    const isEmailValid = setFieldStatus("group-email", patterns.email.test(emailVal));
    const isMobileValid = setFieldStatus("group-mobile", patterns.mobile.test(mobileVal));
    const isPasswordValid = setFieldStatus("group-password", patterns.password.test(passwordVal)); 
    const isConfirmPasswordValid = setFieldStatus("group-confirmPassword", confirmPasswordVal !== "" && confirmPasswordVal === passwordVal); 
    const isCourseValid = setFieldStatus("group-course", courseVal !== ""); 
    const isYearValid = setFieldStatus("group-year", yearVal !== ""); 
    const isGenderValid = setFieldStatus("group-gender", genderVal !== null); 
    const isTermsValid = setFieldStatus("group-terms", termsChecked);

    const isFormValid = isNameValid && isEmailValid && isMobileValid && isPasswordValid && isConfirmPasswordValid && isCourseValid && isYearValid && isGenderValid && isTermsValid; 

    if (isFormValid) { 
      alert("Registration Successful!"); 
      form.reset(); 
      form.querySelectorAll(".form-group").forEach((group) => group.classList.remove("error"));
    }
  });
}
