# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

# create a method called even_odd that takes in a number as a variable
def even_odd(num)
    if num % 2 == 0
        "#{num} is even"
    else num % 2 != 0
        "#{num} is odd"
    # create a conditional statement that if num % 2 = 0 it will return the number as even. Use a bang operator in the else statement for odd numbers.
    end
end

p even_odd(7)
p even_odd(42)
p even_odd(221)


# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# define a method called no_vowels that takes in a string
def no_vowels(string)
    string.delete"aeiouAEIOU"
# use the .delete accessor and include uppercase and lower case characters to be deleted
end

p no_vowels(album1)
p no_vowels(album2)
p no_vowels(album3)

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forwards or backwards. Use the test variables provided.

is_palindrome1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
is_palindrome2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
is_palindrome3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

# create a method called pal_test that takes in a string as a parameter
def pal_test(string)
# Create conditional statement if string == string.reverse.capitalize, the accessors will reverse the string and then capitalize the new first index
# Included an || to the if conditional statement because I didn't account for the capitalization initially and the method can now be used for lowercase words as well
    if string == string.reverse.capitalize || string == string.reverse
        "#{string} is a palindrome"
# Use string interpolation to give the output statement
    else string != string.reverse
        "#{string} is not a palindrome"
    end
# Use a bang operator to return the opposite statement for when the string is not a palindrome
end

p pal_test(is_palindrome1)
p pal_test(is_palindrome2)
p pal_test(is_palindrome3)