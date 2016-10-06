def word_to_yes(text):
    out = ''
    magic = 'yes'
    magic_pos = 0
    for letter in text:
        if letter.isspace() or not letter.isalpha():
            out += letter
        else:
            out += magic[magic_pos]
            magic_pos += 1
            if magic_pos >= len(magic):
                magic_pos = 0
    return out
import sys
print word_to_yes(sys.stdin.read())
