import subprocess

def run_docker_compose():
  try:
    # Define the command as a list of strings
    cmd = ['docker-compose', 'up', '-d']

    # Run the command using subprocess
    subprocess.run(cmd, check=True)

  except subprocess.CalledProcessError as e:
    print(f'Error: {e}')
  except FileNotFoundError:
    print('Error: Docker Compose is not installed or not in your system\'s PATH.')

if __name__ == '__main__':
  run_docker_compose()
