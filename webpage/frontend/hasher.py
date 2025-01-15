import hashlib
def to_hash(input_str: str)-> str: 
    '''Returns the has value of a string'''
    
    hasher = hashlib.new('SHA256')
    hasher.update(input_str)