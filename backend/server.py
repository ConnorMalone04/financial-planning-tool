# Filename - server.py

# Import flask and datetime module for showing date and time
from flask import Flask, request, jsonify, send_from_directory
import os
import yfinance
import datetime

x = datetime.datetime.now()

# Initializing flask app
app = Flask(__name__, static_folder="../frontend/public", static_url_path="")

@app.route("/run-method", methods=["POST"])
def run_method():
    """Handles API request from React frontend"""
    data = request.json  # Get data from frontend
    try:
        invested = int(data.get("invested", 0))
        years = int(data.get("years", 0))
    except ValueError:
        return jsonify({"error": "Invalid input, please send integers only"}), 400

    result = invested * (1 + 0.05) ** years  # Assuming 5% growth per year

    return jsonify({"message": "Executed successfully.", "result": result}), 200

# Running app
if __name__ == '__main__':
    app.run(debug=True)