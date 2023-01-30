const False = a => b => a
const True = a => b => b
const iff = f => a => b => f(b)(a)