package com;

public class Iterator<E extends Object> {
    private E[] t = null;
    private int size;
    private int count;
    public Iterator(int size) {
        this.size = size;
        this.t = (E[]) new Object[size];
    }
    public void add(E value) {
        t[count++] = value;
    }
    public InnerIterator getInstance() {
        return new InnerIterator(t);
    }
    public class InnerIterator {
        E[] t1;
        private int index = 0;
        public InnerIterator(E[] t1) {
            this.t1 = t1;
        }
        public boolean hasNext() {
            return index < size;
        }
        public E next() {
            return t1[index++];
        }
    }

}
