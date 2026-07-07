#!/usr/bin/env bash

dirs=("data/*/");

for dir in $dirs; do
    folder=$(basename $dir);
    node index.js $folder;
done;

python3 -m venv venv
source venv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt
python scripts/convert_to_csv.py
python scripts/group_plot.py
deactivate
rm -rf venv
