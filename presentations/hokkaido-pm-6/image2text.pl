#!/usr/bin/env perl
use strict;
use warnings;

use Getopt::Compact;
use Imager;

my $gc = Getopt::Compact->new(
    struct => [
        [['image', 'i'] => 'image', '=s'],
        [['width', 'w'] => 'width', ':i'],
    ],
);
my $opts = $gc->opts;
die $gc->usage unless $opts->{image};

my $img = Imager->new(file => $opts->{image})
    or die Imager->errstr;

my $newimg = $img->scaleY(
    scalefactor => 0.5,
)->scale(
    scalefactor => ($opts->{width} || 80) / $img->getwidth,
);

for my $y (0 .. $newimg->getheight - 1) {
    my @colors = $newimg->getscanline(y => $y);
    for my $color (@colors) {
        # threshold
        print +($color->rgba)[1] > 128 ? '#' : ' ';
    }
    print "\n";
}
