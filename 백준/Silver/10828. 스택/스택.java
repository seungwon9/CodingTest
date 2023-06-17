import java.util.Scanner;

public class Main {
	
	static int[] stack;
	static int size=0;
	
	public static void push(int x) {
		stack[size]=x;
		size++;
	}
	
	public static int pop() {
		if(size>0) {
			int p=stack[size-1];
			stack[size-1]=0;
			size--;
			return p;
		}
		else
			return -1;
	}
	
	public static int size() {
		return size;
	}
	
	public static int empty() {
		if(size>0)
			return 0;
		else
			return 1;
	}
	
	public static int top() {
		if(size>0) {
			return stack[size-1];
		}
		else
			return -1;
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner in = new Scanner(System.in);
		StringBuilder sb=new StringBuilder();

		int n=in.nextInt();
		stack=new int[n];
		
		for(int i=0;i<n;i++) {
			String s=in.next();
			switch(s) {
			case "push":
				int a=in.nextInt();
				push(a);
				continue;
			case "pop":
				sb.append(pop()).append('\n');
				break;
			case "size":
				sb.append(size()).append('\n');
				break;
			case "empty":
				sb.append(empty()).append('\n');
				break;
			case "top":
				sb.append(top()).append('\n');
				break;
			}
			
		}
		System.out.println(sb);
			
	}
}