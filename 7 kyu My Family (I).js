Person.prototype.hasRelationsTo = function (person) {
    return this.hasParents(person)||this.hasChildren(person)
}
Person.prototype.hasParents = function (person) {
    return this.parents.some(x=>x.name==person.name||x.hasParents(person))
}
Person.prototype.hasChildren = function (person) {
    return this.children.some(x=>x.name==person.name||x.hasChildren(person))
}