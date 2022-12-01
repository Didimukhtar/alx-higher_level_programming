# Learning python with ALX

[0-run](https://github.com/Didimukhtar/alx-higher_level_programming/blob/10a48fb16aa0d3737a8d4b90e52504b7ae0ead9e/0x00-python-hello_world/0-run) : A Shell script that runs a Python script.
- The Python file name will be saved in the environment variable $PYFILE.

---

[1-run_inline](https://github.com/Didimukhtar/alx-higher_level_programming/blob/10a48fb16aa0d3737a8d4b90e52504b7ae0ead9e/0x00-python-hello_world/1-run_inline) : A Shell script that runs Python code.
- The Python code will be saved in the environment variable $PYCODE.

---

[2-print.py](https://github.com/Didimukhtar/alx-higher_level_programming/blob/10a48fb16aa0d3737a8d4b90e52504b7ae0ead9e/0x00-python-hello_world/2-print.py) : A  Python script that prints exactly "Programming is like building a multilingual puzzle, followed by a new line.
- Use the function print.

---

[3-print_number.py](https://github.com/Didimukhtar/alx-higher_level_programming/blob/10a48fb16aa0d3737a8d4b90e52504b7ae0ead9e/0x00-python-hello_world/3-print_number.py) : Complete the source code in order to print the integer stored in the variable number, followed by Battery street, followed by a new line.
```
#!/usr/bin/python3
number = 98
# YOUR CODE GOES HERE. PLEASE REMOVE THIS LINE
```
- The output of the script should be:
    - the number, followed by Battery street,
    - followed by a new line
- You are not allowed to cast the variable number into a string
- Your code must be 3 lines long
- You have to use f-strings tips.

---

[4-print_float.py](https://github.com/Didimukhtar/alx-higher_level_programming/blob/10a48fb16aa0d3737a8d4b90e52504b7ae0ead9e/0x00-python-hello_world/4-print_float.py) : Complete the source code in order to print the float stored in the variable number with a precision of 2 digits.
```
#!/usr/bin/python3
number = 3.14159
# YOUR CODE GOES HERE. PLEASE REMOVE THIS LINE
```
- The output of the program should be:
    - Float:, followed by the float with only 2 digits
    - followed by a new line
- You are not allowed to cast number to string
- You have to use f-strings.

---

[5-print_string.py](https://github.com/Didimukhtar/alx-higher_level_programming/blob/10a48fb16aa0d3737a8d4b90e52504b7ae0ead9e/0x00-python-hello_world/5-print_string.py) : Complete the source code in order to print 3 times a string stored in the variable str, followed by its first 9 characters.
```
#!/usr/bin/python3
str = "Holberton School"
# YOUR CODE GOES HERE. PLEASE REMOVE THIS LINE
```
- The output of the program should be:
    - 3 times the value of str
    - followed by a new line
    - followed by the 9 first characters of str
    - followed by a new line
- You are not allowed to use any loops or conditional statement
- Your program should be maximum 5 lines long.

---

[6-concat.py](https://github.com/Didimukhtar/alx-higher_level_programming/blob/10a48fb16aa0d3737a8d4b90e52504b7ae0ead9e/0x00-python-hello_world/6-concat.py) :  Complete the source code to print Welcome to Holberton School!
```
#!/usr/bin/python3
str1 = "Holberton"
str2 = "School"
# YOUR CODE GOES HERE. PLEASE REMOVE THIS LINE
print(f"Welcome to {str1}!")
```
- You are not allowed to use any loops or conditional statements.
- You have to use the variables str1 and str2 in your new line of code
- Your program should be exactly 5 lines long.

---

[7-edges.py](https://github.com/Didimukhtar/alx-higher_level_programming/blob/10a48fb16aa0d3737a8d4b90e52504b7ae0ead9e/0x00-python-hello_world/7-edges.py) : Complete this source code
```
#!/usr/bin/python3
word = "Holberton"
# YOUR CODE GOES HERE. PLEASE REMOVE THIS LINE
print(f"First 3 letters: {word_first_3}")
print(f"Last 2 letters: {word_last_2}")
print(f"Middle word: {middle_word}")
```
- You are not allowed to use any loops or conditional statements
- Your program should be exactly 8 lines long
- word_first_3 should contain the first 3 letters of the variable word
- word_last_2 should contain the last 2 letters of the variable word
- middle_word should contain the value of the variable word without the first and last letters.

---

[8-concat_edges.py](https://github.com/Didimukhtar/alx-higher_level_programming/blob/10a48fb16aa0d3737a8d4b90e52504b7ae0ead9e/0x00-python-hello_world/8-concat_edges.py) : Complete the source code to print object-oriented programming with Python, followed by a new line.
```
#!/usr/bin/python3
str = "Python is an interpreted, interactive, object-oriented programming\
 language that combines remarkable power with very clear syntax"
# YOUR CODE GOES HERE. PLEASE REMOVE THIS LINE
print(str)
```
- You are not allowed to use any loops or conditional statements
- Your program should be exactly 5 lines long
- You are not allowed to create new variables
- You are not allowed to use string literals.

---

[9-easter_egg.py](https://github.com/Didimukhtar/alx-higher_level_programming/blob/10a48fb16aa0d3737a8d4b90e52504b7ae0ead9e/0x00-python-hello_world/9-easter_egg.py) : Write a Python script that prints “The Zen of Python”, by TimPeters, followed by a new line.

Your script should be maximum 98 characters long (please check with wc -m 9-easter_egg.py)

---

[10-check_cycle.c](https://github.com/Didimukhtar/alx-higher_level_programming/blob/10a48fb16aa0d3737a8d4b90e52504b7ae0ead9e/0x00-python-hello_world/10-check_cycle.c) : Write a function in C that checks if a singly linked list has a cycle in it.

- Prototype: int check_cycle(listint_t *list);
Return: 0 if there is no cycle, 1 if there is a cycle
Requirements:

- Only these functions are allowed: write, printf, putchar, puts, malloc, free

---

[100-write.py](https://github.com/Didimukhtar/alx-higher_level_programming/blob/10a48fb16aa0d3737a8d4b90e52504b7ae0ead9e/0x00-python-hello_world/100-write.py) : Write a Python script that prints exactly and that piece of art is useful - Dora Korpar, 2015-10-19, followed by a new line.
- Use the function write from the sys module
- You are not allowed to use print
- Your script should print to stderr
- Your script should exit with the status code 1

---

[101-compile](https://github.com/Didimukhtar/alx-higher_level_programming/blob/10a48fb16aa0d3737a8d4b90e52504b7ae0ead9e/0x00-python-hello_world/101-compile) : Write a script that compiles a Python script file.
- The Python file name will be stored in the environment variable $PYFILE
- The output filename has to be $PYFILEc (ex: export PYFILE=my_main.py => output filename: my_main.pyc) 

---

[102-magic_calculation.py](https://github.com/Didimukhtar/alx-higher_level_programming/blob/10a48fb16aa0d3737a8d4b90e52504b7ae0ead9e/0x00-python-hello_world/102-magic_calculation.py) : Write the Python function def magic_calculation(a, b): that does exactly the same as the following Python bytecode:
```
  3           0 LOAD_CONST               1 (98)
              3 LOAD_FAST                0 (a)
              6 LOAD_FAST                1 (b)
              9 BINARY_POWER
             10 BINARY_ADD
             11 RETURN_VALUE
```
- Tip: Python bytecode.

---
