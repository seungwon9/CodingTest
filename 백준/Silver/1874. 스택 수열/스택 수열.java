import java.io.IOException;
import java.util.Arrays;
import java.util.Scanner;
import java.util.Stack;
public class Main {

	public static void main(String[] args) throws IOException{
		// TODO Auto-generated method stub
		Scanner sc=new Scanner(System.in);
		
		int N=sc.nextInt();
		int a[]=new int[N];
		StringBuffer sb=new StringBuffer();
		boolean result=true;
		Stack<Integer> stack=new Stack<>();
		for(int i=0;i<N;i++) {
			a[i]=sc.nextInt();
		}
		int top=1;
		for(int i=0;i<N;i++) {
			if(a[i]>=top) {
				while(a[i]>=top) {
					stack.push(top++);
					sb.append("+\n");
				}
				stack.pop();
				sb.append("-\n");
				
			}
			else {
				int n=stack.pop();
				if(n>a[i]) {
					System.out.println("NO");
					result=false;
					break;
				}
				else {
					sb.append("-\n");
				}
			}
		}
		if(result)
			System.out.println(sb.toString());		
	}
}