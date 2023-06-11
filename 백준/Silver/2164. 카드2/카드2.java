import java.util.*;
import java.io.*;
public class Main {

	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int N=Integer.parseInt(br.readLine());
		Queue<Integer> myQueue=new LinkedList<>();
		for(int i=1;i<=N;i++) {
			myQueue.add(i);
		}
		for(int i=0;i<N-1;i++) {
			myQueue.poll();
			myQueue.add(myQueue.poll());
		}
		System.out.println(myQueue.poll());
	}
}
