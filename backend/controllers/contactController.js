// In-memory store for contact form submissions
const contactMessages = [];

/**
 * Handle new contact message submissions
 */
export const submitContactMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields (name, email, message) are required.',
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.',
      });
    }

    // New submission record
    const newSubmission = {
      id: contactMessages.length + 1,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
      createdAt: new Date().toISOString(),
    };

    contactMessages.push(newSubmission);

    console.log(`[Contact Form] New message received from ${newSubmission.name} <${newSubmission.email}>:`);
    console.log(`"${newSubmission.message}"`);

    return res.status(200).json({
      success: true,
      message: 'Your message has been received successfully! Thank you for reaching out.',
      data: {
        id: newSubmission.id,
        name: newSubmission.name,
        createdAt: newSubmission.createdAt,
      },
    });
  } catch (error) {
    console.error('[Contact Form Error]:', error);
    return res.status(500).json({
      success: false,
      message: 'Server encountered an error processing your message.',
    });
  }
};

/**
 * Retrieve messages (for admin or testing)
 */
export const getAllContactMessages = (req, res) => {
  res.status(200).json({
    success: true,
    count: contactMessages.length,
    data: contactMessages,
  });
};
