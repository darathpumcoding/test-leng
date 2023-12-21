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
    
    const fileExtension = file.name.split(".").pop()?.toLowerCase();
    
    if (!fileExtension || fileExtension !== "csv") {
      return "Invalid file type. Only CSV files are allowed";
    }
    
  
  }
  
  export function validateImage(image?: File): string | undefined {
    if (!image) return "File is required";
  
    const fileExtension = image.name.split(".").pop()?.toLowerCase();
    if (!fileExtension || (fileExtension !== "jpg" && fileExtension !== "jpeg")) {
      return "Invalid file type. Only JPEG files (.jpg or .jpeg) are allowed.";
    }
  }

  export function validateCampaignName(campaign_name?:String): string | undefined {
    if (!campaign_name) return "Campaign name is required"
  }

  export function validateDate(date?: string): string | undefined {
    if (!date) return "Date is required";
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;
    if (!datePattern.test(date)) return "Invalid date format. Please use the format YYYY-MM-DD";
    return; 
  }
  export function validateRole (role: string): string | undefined{
    if (!role) return "Role is required"
  }