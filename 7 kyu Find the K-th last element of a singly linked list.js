function getKthLastElement(head, k) {
    for (var tail=head,r=[];tail!=null;tail=tail.next) r.unshift(tail)
    return r[k]
}