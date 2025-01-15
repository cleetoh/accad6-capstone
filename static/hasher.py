import hashlib
def to_hash(input_str: str)-> str: 
    '''Returns the has value of a string'''
    
    hasher = hashlib.new('SHA256')
    input_str = bytes(input_str)
    hasher.update(input_str)
    return hasher.hexdigest()