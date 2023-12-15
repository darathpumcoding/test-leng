export function validatePhone(phone?: string): string | undefined {
    if (!phone) return "Phone is required";
    if (phone.length < 8) return "Phone must be at least 8 characters";
  }
  
  export function validatePassword(password?: string): string | undefined {
    if (!password) return "Password is required";
    if (password.length <3) return "Password must more then 3 characters";
  }
  
  export function validateEmail(email?: string): string | undefined {
    if (!email) return "Email is required";
    if (!/^[\w.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) return "Email is invalid";
  }

  export function validFirstName(first_name: string): string | undefined {
    if (!first_name) return "First name is required"

  }
  export function validLastName(last_name: string): string | undefined{
    if (!last_name) return "Last name is required"
  }

  export function validateFile(file?: File): string | undefined {
    if (!file) return "File is required";
    const allowedExtensions = [".csv"];
    const fileExtension = file.name.split(".").pop()?.toLowerCase();
    if (!fileExtension || !allowedExtensions.includes(fileExtension)) {
      return "Invalid file type. Only CSV files are allowed.";
    }
    // You can add more validations here if needed, such as file size or file content.
  
    return undefined; // File is valid
  }

  export function validateImage(file?: File): string | undefined {
    if (!file) return "File is required";
    const allowedExtensions = [".jpg", ".jpeg"];
    const fileExtension = file.name.split(".").pop()?.toLowerCase();
    if (!fileExtension || !allowedExtensions.includes(fileExtension)) {
      return "Invalid file type. Only JPEG files are allowed.";
    }
    // You can add more validations here if needed, such as file size or file content.
  
    return undefined; // File is valid
  }
