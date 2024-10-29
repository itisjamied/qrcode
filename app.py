from flask import Flask, render_template, request, send_file, url_for
import qrcode
import io
import base64

app = Flask(__name__)

# Function to generate a QR code and return it as a base64 image string
def generate_qr_code(data):
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=4,
    )
    qr.add_data(data)
    qr.make(fit=True)
    img = qr.make_image(fill="black", back_color="white")

    # Save the image to a BytesIO object and encode it in base64
    img_io = io.BytesIO()
    img.save(img_io, 'PNG')
    img_io.seek(0)
    img_base64 = base64.b64encode(img_io.getvalue()).decode('utf-8')
    return img_base64, img_io

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/generate', methods=['POST'])
def generate():
    url = request.form['url']
    qr_img_base64, qr_img_io = generate_qr_code(url)
    
    # Render the QR code on the page by passing the base64 string
    return render_template('index.html', qr_img_base64=qr_img_base64, url=url)

@app.route('/download')
def download():
    # Re-generate the QR code for downloading
    url = request.args.get('url')
    _, qr_img_io = generate_qr_code(url)
    return send_file(qr_img_io, mimetype='image/png', as_attachment=True, download_name='qr_code.png')

if __name__ == '__main__':
    app.run(debug=True)
