import numpy as np
from flask import Flask, request, jsonify, render_template
import pickle
import pandas as pd

app = Flask(__name__)

model = pickle.load(open('prophet.pkl','rb'))

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/help')
def help():
    return '<canvas class="my-chart"></canvas>'

@app.route('/stats')
def stats():
    return render_template('stats.html')

@app.route('/predict_test',methods=['POST'])
def predict_test():
    from_date  = request.values.get('from_date')
    to_date  = request.values.get('to_date')

    data = pd.read_csv('forcasted.csv')
    forcast = data[(data.ds >= from_date) & (data.ds <= to_date) ]

    dates = forcast.ds.to_list()
    prediction = forcast.yhat.to_list()
    lower = forcast.yhat_lower.to_list()
    upper = forcast.yhat_upper.to_list()

    prediction = [ round(elem, 2) for elem in prediction ]
    lower = [ round(elem, 2) for elem in lower ]
    upper = [ round(elem, 2) for elem in upper ]

        

    final = {
        "dates": dates,
        "lower": lower,
        "prediction": prediction,
        "upper": upper,
    }
    

    return final

@app.route('/predict',methods=['POST'])
def predict():
    '''
    For rendering results on HTML GUI
    '''
    int_features = [x for x in request.form.values()]
    # final_features = [np.array(int_features)]
    # prediction = model.predict(final_features)

    # output = round(prediction[0], 2)

    return render_template('index.html', prediction_text='request values are  {}'.format(int_features))


if __name__ == "__main__":
    app.run(debug=True)