#!/usr/bin/env node

dirs=("data/*/");

for dir in $dirs; do
    folder=$(basename $dir);
    node index.js $folder;
done;

python3 -m venv venv
source venv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt
python convert_to_csv.py
python group_plot.py
deactivate
rm -rf venv