import os
import subprocess
import json

def execute_script(period):

    resultName = "results.json"

    wd = os.getcwd()
#     subprocess.call(["php", "t2_json_out.php", period])
    if (os.path.exists(resultName)):
        with open(resultName, 'r') as result_file:
            result_data = json.load(result_file)
            os.chdir(wd)
            return result_data
    os.chdir(wd)
    return 0