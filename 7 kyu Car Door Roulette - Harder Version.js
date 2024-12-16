function carD([l,r], x){
    if([...l].some((c,i)=>'/\\'.includes(c)&&'/\\'.includes(r[i]))) return 'Super Smash!';
    if(l.includes('[')) return 'Free Lambo on Left!';
    if(r.includes(']')) return 'Free Lambo on Right!';
    if(l[x]=='\\'||l[x+1]=='\\'||l[x+2]=='\\') return 'Crash, Bang, Ouch!';
    if(l[x]=='/'||l[x+1]=='/') return 'Knocked Off, Dust Yourself Down.';
    if(r[x]=='\\'||r[x+1]=='\\'||r[x+2]=='\\') return 'Right Smash!';
    if(r[x]=='/'||r[x+1]=='/') return 'Dammit!';
    return 'Plain Sailing!';
}