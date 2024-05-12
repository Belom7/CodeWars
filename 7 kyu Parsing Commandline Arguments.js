function args(cmd) {
    return cmd.replace(/[&;>|].*$/,'').trim().split(' ');
}