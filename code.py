import qrcode

# Create a function to generate a QR code
def generate_qr_code(data, file_name="qr_code.png"):
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=4,
    )
    qr.add_data(data)
    qr.make(fit=True)
    img = qr.make_image(fill="black", back_color="white")
    img.save(file_name)
    print(f"QR code saved as {file_name}")

# Example usage
generate_qr_code("https://www.valueform.io/", "example_qr.png")
 # type: ignore