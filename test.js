function test0() { let i = 0; while(i < 100) { i++; }} 

function test1() { let i = 0; while(i < 1000) { i++; }} 

function test2() { let i = 0; while(i < 10000) { i++; }} 

function test3() { let i = 0; while(i < 100000) { i++; }} 

function test4() { test3(); } 

function test5() { test4(); test2();} 

function test6() { test5(); } 

test0();

test1();

test2();

test2();

test3();

test4();

test5();