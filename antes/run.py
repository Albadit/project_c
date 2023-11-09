import subprocess
import os

# Define the npm commands
script_directory = os.path.dirname(os.path.realpath(__file__))
install_commands = [
  "npm install next@latest react@latest react-dom@latest",
  # "npm install next@13.5.4 react@18 react-dom@18",
  "npm install tailwindcss@latest",
  "npm install @tailwindcss/typography",
  "npm install @tailwindcss/forms",
  "npm install @tailwindcss/aspect-ratio",
  "npm install @tailwindcss/container-queries",
]

os.chdir(script_directory)
if not (os.path.exists(f'{script_directory}/node_modules') and os.path.isdir(f'{script_directory}/node_modules')):
  try:
    # Install the latest versions of Next.js, React, and React DOM
    for command in install_commands:
      install_process = subprocess.Popen(command, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
      install_output, install_error = install_process.communicate()

      if install_process.returncode == 0:
        print("Installation successful:", command)
      else:
        print("Installation failed for command:", command)
        print("Error:")
        print(install_error.decode('utf-8'))

  except Exception as e:
    print("An error occurred:", str(e))